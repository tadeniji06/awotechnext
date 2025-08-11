"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogPost, getRelatedPosts, urlFor } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import type { BlogPost } from "@/utils/sanity";

export default function BlogPostClient({ slug }: { slug: string }) {
	const [post, setPost] = useState<BlogPost | null>(null);
	const [related, setRelated] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchPost() {
			setLoading(true);
			const data = await getBlogPost(slug);
			if (data) {
				setPost(data);
				const relatedData = await getRelatedPosts(
					data.categories || [],
					data._id
				);
				setRelated(relatedData);
			}
			setLoading(false);
		}
		fetchPost();
	}, [slug]);

	if (loading)
		return (
			<div className='text-center py-20 text-gray-500'>
				Loading post...
			</div>
		);
	if (!post)
		return (
			<div className='text-center py-20 text-gray-500'>
				Post not found
			</div>
		);

	return (
		<article className='max-w-4xl mx-auto px-4 py-12'>
			{post.mainImage && (
				<div className='mb-8'>
					<Image
						src={urlFor(post.mainImage).url()}
						alt={post.title}
						width={1200}
						height={600}
						className='w-full h-80 object-cover rounded-lg'
						priority
					/>
				</div>
			)}

			<header className='mb-8'>
				<h1 className='text-4xl font-bold mb-4'>{post.title}</h1>

				{/* Author and Meta Info */}
				<div className='flex items-center gap-4 text-gray-600 mb-4'>
					{post.author && (
						<div className='flex items-center gap-2'>
							{post.author.image && (
								<Image
									src={urlFor(post.author.image).url()}
									alt={post.author.name}
									width={32}
									height={32}
									className='rounded-full'
								/>
							)}
							<span className='font-medium'>{post.author.name}</span>
						</div>
					)}
					<span>•</span>
					<time dateTime={post.publishedAt}>
						{new Date(post.publishedAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</time>
					<span>•</span>
					<span>{post.estimatedReadingTime} min read</span>
				</div>

				{/* Categories */}
				{post.categories && post.categories.length > 0 && (
					<div className='flex flex-wrap gap-2 mb-6'>
						{post.categories.map((category) => (
							<span
								key={category._id}
								className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'
							>
								{category.title}
							</span>
						))}
					</div>
				)}
			</header>

			{/* Post Content */}
			<div className='prose prose-lg max-w-none mb-12'>
				<PortableText value={post.body} />
			</div>

			{/* Author Bio */}
			{post.author && post.author.bio && (
				<div className='bg-gray-50 p-6 rounded-lg mb-12'>
					<div className='flex items-start gap-4'>
						{post.author.image && (
							<Image
								src={urlFor(post.author.image).url()}
								alt={post.author.name}
								width={64}
								height={64}
								className='rounded-full'
							/>
						)}
						<div>
							<h3 className='font-semibold text-lg mb-2'>
								About {post.author.name}
							</h3>
							<p className='text-gray-600'>{post.author.bio}</p>
						</div>
					</div>
				</div>
			)}

			{/* Related Posts */}
			{related.length > 0 && (
				<section className='mt-16'>
					<h2 className='text-2xl font-semibold mb-6'>
						Related Posts
					</h2>
					<div className='grid md:grid-cols-3 gap-6'>
						{related.map((item) => (
							<Link
								key={item._id}
								href={`/blog/${item.slug.current}`}
								className='block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow'
							>
								{item.mainImage && (
									<div className='relative h-40'>
										<Image
											src={urlFor(item.mainImage).url()}
											alt={item.title}
											fill
											className='object-cover'
										/>
									</div>
								)}
								<div className='p-4'>
									<h3 className='text-lg font-semibold mb-2 line-clamp-2'>
										{item.title}
									</h3>
									{item.excerpt && (
										<p className='text-sm text-gray-600 mb-2 line-clamp-2'>
											{item.excerpt}
										</p>
									)}
									<p className='text-sm text-gray-500'>
										{new Date(item.publishedAt).toLocaleDateString()}{" "}
										• {item.estimatedReadingTime} min read
									</p>
								</div>
							</Link>
						))}
					</div>
				</section>
			)}
		</article>
	);
}
