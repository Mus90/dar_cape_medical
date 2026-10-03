import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AssessmentForm from '../AssessmentForm';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, initial, animate, whileInView, transition, viewport, ...props }: any) => <div {...props}>{children}</div>
  }
}));

describe('Assessment form validation', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  it('focuses the first missing field and keeps other entered values', () => {
    const { container } = render(<AssessmentForm />);
    const email = screen.getByLabelText(/form.email.label/);
    fireEvent.change(email, { target: { value: 'doctor@hospital.org' } });
    fireEvent.submit(container.querySelector('form')!);
    expect(screen.getByLabelText(/form.fullName.label/)).toHaveFocus();
    expect(email).toHaveValue('doctor@hospital.org');
    expect(screen.getByRole('alert')).toHaveTextContent('validation.correctFields');
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('shows and clears an inline email error as the user corrects it', () => {
    render(<AssessmentForm />);
    const email = screen.getByLabelText(/form.email.label/);
    fireEvent.change(email, { target: { value: 'invalid' } });
    fireEvent.blur(email);
    expect(email).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('validation.email')).toBeInTheDocument();
    fireEvent.change(email, { target: { value: 'doctor@hospital.org' } });
    expect(email).toHaveAttribute('aria-invalid', 'false');
    expect(screen.queryByText('validation.email')).not.toBeInTheDocument();
  });

  it('rejects invalid phone numbers and CV files before sending', () => {
    render(<AssessmentForm />);
    const phone = screen.getByLabelText(/form.whatsapp.label/);
    fireEvent.change(phone, { target: { value: '++++++++++' } });
    fireEvent.blur(phone);
    expect(screen.getByText('validation.phone')).toBeInTheDocument();
    const cv = screen.getByLabelText(/form.cv.label/);
    fireEvent.change(cv, { target: { files: [new File(['text'], 'cv.exe', { type: 'application/octet-stream' })] } });
    expect(screen.getByText('validation.fileType')).toBeInTheDocument();
    const oversized = new File(['pdf'], 'cv.pdf', { type: 'application/pdf' });
    Object.defineProperty(oversized, 'size', { value: 6 * 1024 * 1024 });
    fireEvent.change(cv, { target: { files: [oversized] } });
    expect(screen.getByText('validation.fileSize')).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it.each([
    new TypeError('Failed to fetch'),
    new DOMException('The string did not match the expected pattern', 'SyntaxError')
  ])('shows friendly feedback and retains input after a browser failure (%s)', async (failure) => {
    const clock = jest.spyOn(Date, 'now').mockReturnValue(10000);
    const log = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(<AssessmentForm />);
    clock.mockReturnValue(20000);
    for (const input of Array.from(container.querySelectorAll<HTMLInputElement>('input[required]'))) {
      if (input.type === 'file') {
        fireEvent.change(input, { target: { files: [new File(['pdf'], 'cv.pdf', { type: 'application/pdf' })] } });
      } else {
        const value = input.name === 'email' ? 'doctor@hospital.org'
          : input.name === 'whatsapp' ? '+27 74 954 8756'
          : input.type === 'number' ? '2020' : 'Doctor';
        fireEvent.change(input, { target: { value } });
      }
    }
    for (const select of Array.from(container.querySelectorAll<HTMLSelectElement>('select[required]'))) {
      fireEvent.change(select, { target: { value: select.options[1].value } });
    }
    (global.fetch as jest.Mock).mockRejectedValue(failure);
    fireEvent.submit(container.querySelector('form')!);
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('validation.submitFailed'));
    expect(screen.getByLabelText(/form.email.label/)).toHaveValue('doctor@hospital.org');
    expect(screen.getByRole('button')).toBeEnabled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    clock.mockRestore();
    log.mockRestore();
  });
});
