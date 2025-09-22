import React from 'react';

interface RelatedPostsProps {
  currentPostId: string;
  category: string;
}

export default function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
        <p className="text-gray-600">
          More articles in category: <span className="font-medium">{category}</span> (coming soon)
        </p>
      </div>
    </section>
  );
}
