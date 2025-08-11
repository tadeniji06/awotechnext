import BlogPostClient from "./BlogPostClient";
import { getBlogPost, urlFor } from "@/utils/sanity";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Awo Tech Mall Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  const title = post.seoTitle || post.title;
  const description = post.metaDescription || post.excerpt || `Read about ${post.title} on Awo Tech Mall blog`;
  const keywords = post.keywords || [];
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : '/default-og-image.jpg';
  const canonicalUrl = `https://awotechmall.com/blog/${post.slug.current}`;

  return {
    title: `${title} | Awo Tech Mall Blog`,
    description,
    keywords: [
      ...keywords,
      'Awo Tech Mall',
      'Real Estate',
      'Technology',
      'Property',
      'Blog',
      ...(post.categories?.map(cat => cat.title) || [])
    ],
    authors: post.author ? [{ name: post.author.name }] : undefined,
    // publishedTime: post.publishedAt,
    category: post.categories?.[0]?.title,
    
    // Open Graph
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: 'Awo Tech Mall',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      section: post.categories?.[0]?.title,
      tags: keywords,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
      creator: '@awotechmall', // Replace with your Twitter handle
    },

    // Additional SEO
    alternates: {
      canonical: canonicalUrl,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    other: {
      'article:author': post.author?.name || 'Awo Tech Mall',
      'article:section': post.categories?.[0]?.title || 'General',
      'article:published_time': post.publishedAt,
      'article:tag': keywords.join(', '),
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: params.slug, // This will be replaced with actual post title in the client
            author: {
              '@type': 'Person',
              name: 'Awo Tech Mall Team',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Awo Tech Mall',
              logo: {
                '@type': 'ImageObject',
                url: 'https://awotechmall.com/logo.png',
              },
            },
            datePublished: new Date().toISOString(),
            dateModified: new Date().toISOString(),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://awotechmall.com/blog/${params.slug}`,
            },
          }),
        }}
      />
      <BlogPostClient slug={params.slug} />
    </>
  );
}