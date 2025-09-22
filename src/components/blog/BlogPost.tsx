import React from 'react';

interface BlogPostProps {
  post: any;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="prose prose-slate max-w-none p-4 sm:p-6 md:p-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-gray-500 text-sm">
          <span>{post.date}</span>
          {post.readTime ? <span> • {post.readTime}</span> : null}
        </p>
      </header>
      {post.image ? (
        <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg mb-6" />
      ) : null}
      {post.content ? (
        <div
          className="article-content text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      ) : (
        <p className="text-gray-600">Content coming soon.</p>
      )}
    </article>
  );
}
