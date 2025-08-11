"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts, getCategories, urlFor } from "@/utils/sanity";
import type { Category, BlogPost } from "@/utils/sanity";

export default function BlogsClient() {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState<string | null>(
		null
	);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const postsPerPage = 9;

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const [postData, categoryData] = await Promise.all([
					getBlogPosts(postsPerPage, 0, activeCategory || undefined),
					getCategories(),
				]);
				setPosts(postData);
				setCategories(categoryData);
				setHasMore(postData.length === postsPerPage);
				setCurrentPage(1);
			} catch (error) {
				console.error("Error fetching blog data:", error);
			}
			setLoading(false);
		}
		fetchData();
	}, [activeCategory]);

	const loadMore = async () => {
		if (loading || !hasMore) return;

		setLoading(true);
		try {
			const offset = currentPage * postsPerPage;
			const newPosts = await getBlogPosts(
				postsPerPage,
				offset,
				activeCategory || undefined
			);
			setPosts((prev) => [...prev, ...newPosts]);
			setCurrentPage((prev) => prev + 1);
			setHasMore(newPosts.length === postsPerPage);
		} catch (error) {
			console.error("Error loading more posts:", error);
		}
		setLoading(false);
	};

	if (loading && posts.length === 0) {
		return (
			<div className='max-w-6xl mx-auto px-4 py-12'>
				<div className='animate-pulse'>
					<div className='h-8 bg-gray-200 rounded w-48 mb-6'></div>
					<div className='flex gap-3 mb-10'>
						{[...Array(5)].map((_, i) => (
							<div
								key={i}
								className='h-8 bg-gray-200 rounded w-20'
							></div>
						))}
					</div>
					<div className='grid gap-8 md:grid-cols-3 sm:grid-cols-2'>
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className='border rounded-lg overflow-hidden'
							>
								<div className='h-48 bg-gray-200'></div>
								<div className='p-4'>
									<div className='h-4 bg-gray-200 rounded mb-2'></div>
									<div className='h-3 bg-gray-200 rounded w-1/2 mb-2'></div>
									<div className='h-3 bg-gray-200 rounded'></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<section className='max-w-6xl mx-auto px-4 py-12'>
			{/* Header */}
			<header className='mb-12 text-center'>
				<h1 className='text-4xl font-bold mb-4'>Our Blog</h1>
				<p className='text-gray-600 text-lg max-w-2xl mx-auto'>
					Stay updated with the latest insights, trends, and news from
					Awo Tech Mall. Discover valuable content about real estate,
					technology, and industry developments.
				</p>
			</header>

			{/* Category Filter */}
			<div className='flex flex-wrap justify-center gap-3 mb-10'>
				<button
					className={`px-6 py-2 rounded-full border-2 transition-all duration-200 ${
						!activeCategory
							? "bg-blue text-white border-blue shadow-lg"
							: "bg-white text-gray-700 border-gray-200 hover:border-blue hover:text-blue"
					}`}
					onClick={() => setActiveCategory(null)}
				>
					All Posts
				</button>
				{categories.map((cat) => (
					<button
						key={cat._id}
						className={`px-6 py-2 rounded-full border-2 transition-all duration-200 ${
							activeCategory === cat.slug?.current
								? "bg-blue text-white border-blue shadow-lg"
								: "bg-white text-gray-700 border-gray-200 hover:border-blue hover:text-blue"
						}`}
						onClick={() =>
							setActiveCategory(cat.slug?.current || null)
						}
					>
						{cat.title}
					</button>
				))}
			</div>

			{/* No Posts Message */}
			{posts.length === 0 && !loading && (
				<div className='text-center py-16'>
					<div className='text-6xl mb-4'>📝</div>
					<h3 className='text-xl font-semibold mb-2'>
						No posts found
					</h3>
					<p className='text-gray-600'>
						{activeCategory
							? "No posts available in this category yet."
							: "No blog posts available at the moment."}
					</p>
				</div>
			)}

			{/* Blog Grid */}
			{posts.length > 0 && (
				<>
					<div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
						{posts.map((post, index) => (
							<article key={post._id} className='group'>
								<Link
									href={`/blog/${post.slug.current}`}
									className='block'
								>
									<div className='overflow-hidden rounded-xl border-2 border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-blue/20'>
										{/* Image */}
										{post.mainImage && (
											<div className='relative h-48 overflow-hidden'>
												<Image
													src={urlFor(post.mainImage)
														.width(600)
														.height(400)
														.url()}
													alt={post.title}
													fill
													className='object-cover group-hover:scale-105 transition-transform duration-500'
													sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
													priority={index < 3}
												/>
												{/* Category Badge */}
												{post.categories && post.categories[0] && (
													<div className='absolute top-4 left-4'>
														<span className='bg-blue text-white px-3 py-1 rounded-full text-xs font-medium'>
															{post.categories[0].title}
														</span>
													</div>
												)}
											</div>
										)}

										{/* Content */}
										<div className='p-6'>
											<h2 className='text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue transition-colors'>
												{post.title}
											</h2>

											{/* Excerpt */}
											{post.excerpt && (
												<p className='text-gray-600 line-clamp-3 mb-4 leading-relaxed'>
													{post.excerpt}
												</p>
											)}

											{/* Meta Info */}
											<div className='flex items-center justify-between text-sm text-gray-500'>
												<div className='flex items-center gap-3'>
													{post.author && (
														<div className='flex items-center gap-2'>
															{post.author.image && (
																<Image
																	src={urlFor(post.author.image)
																		.width(24)
																		.height(24)
																		.url()}
																	alt={post.author.name}
																	width={24}
																	height={24}
																	className='rounded-full'
																/>
															)}
															<span className='font-medium'>
																{post.author.name}
															</span>
														</div>
													)}
													<time dateTime={post.publishedAt}>
														{new Date(
															post.publishedAt
														).toLocaleDateString("en-US", {
															month: "short",
															day: "numeric",
															year: "numeric",
														})}
													</time>
												</div>
												<span className='font-medium'>
													{post.estimatedReadingTime} min read
												</span>
											</div>
										</div>
									</div>
								</Link>
							</article>
						))}
					</div>

					{/* Load More Button */}
					{hasMore && (
						<div className='text-center mt-12'>
							<button
								onClick={loadMore}
								disabled={loading}
								className='px-8 py-3 bg-blue text-white rounded-lg hover:bg-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium'
							>
								{loading ? "Loading..." : "Load More Posts"}
							</button>
						</div>
					)}
				</>
			)}
		</section>
	);
}
