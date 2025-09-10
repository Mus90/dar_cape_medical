import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPost from '@/components/blog/BlogPost';
import RelatedPosts from '@/components/blog/RelatedPosts';

// This would typically come from a CMS or database
const getBlogPost = async (id: string, locale: string) => {
  const t = await getTranslations({ locale, namespace: 'blog' });

  const postMap: { [key: string]: string } = {
    '1': 'destinations',
    '2': 'photography',
    '3': 'wine',
    '4': 'culture',
    '5': 'adventure',
    '6': 'tips'
  };

  const postKey = postMap[id];
  if (!postKey) return null;

  const posts = [
    {
      id: '1',
      title: t('posts.destinations.title'),
      excerpt: t('posts.destinations.excerpt'),
      content: t('posts.destinations.content'),
      author: 'Ahmed Ali',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'destinations',
      categoryName: t('categories.destinations'),
      image: 'https://unsplash.com/photos/aerial-view-of-city-near-mountain-during-daytime-kpdWINVf3JI',
      tags: ['Cape Town', 'Kruger', 'Garden Route', 'Travel Tips']
    },
    {
      id: '2',
      title: t('posts.photography.title'),
      excerpt: t('posts.photography.excerpt'),
      content: t('posts.photography.content'),
      author: 'Mujahid',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'photography',
      categoryName: t('categories.photography'),
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Safari', 'Photography', 'Wildlife', 'Big 5']
    },
    {
      id: '3',
      title: t('posts.wine.title'),
      excerpt: t('posts.wine.excerpt'),
      content: t('posts.wine.content'),
      author: 'Mustafa Ali',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'wine',
      categoryName: t('categories.wine'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Wine', 'Stellenbosch', 'Franschhoek', 'Food']
    },
    {
      id: '4',
      title: t('posts.culture.title'),
      excerpt: t('posts.culture.excerpt'),
      content: t('posts.culture.content'),
      author: 'Mujahid Mohamed',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'culture',
      categoryName: t('categories.culture'),
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Culture', 'Heritage', 'History', 'Local Life']
    },
    {
      id: '5',
      title: t('posts.adventure.title'),
      excerpt: t('posts.adventure.excerpt'),
      content: t('posts.adventure.content'),
      author: 'Ahmed Ali',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'adventure',
      categoryName: t('categories.adventure'),
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Adventure', 'Cape Town', 'Extreme Sports', 'Activities']
    },
    {
      id: '6',
      title: t('posts.tips.title'),
      excerpt: t('posts.tips.excerpt'),
      content: t('posts.tips.content'),
      author: 'Mustafa Ali',
      date: '2024-01-03',
      readTime: '4 min read',
      category: 'tips',
      categoryName: t('categories.tips'),
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Travel Tips', 'Weather', 'Planning', 'Seasons']
    }
  ];

  return posts.find(post => post.id === id);
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}

export async function generateMetadata({
  params: { id, locale }
}: {
  params: { id: string; locale: string };
}): Promise<Metadata> {
  const post = await getBlogPost(id, locale);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params: { id, locale }
}: {
  params: { id: string; locale: string };
}) {
  const post = await getBlogPost(id, locale);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogPost post={post} />
      <RelatedPosts currentPostId={id} category={post.category} />
    </div>
  );
}
