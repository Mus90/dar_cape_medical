import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const current = locale ?? 'ar';
  return {
    locale: current,
    messages: (await import(`../messages/${current}.json`)).default
  };
});
