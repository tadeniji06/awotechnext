import type { MetadataRoute } from "next";
// import { getBlogPost } from "@/utils/sanity";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://awotechmall.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1.0,
		},
		{
			url: "https://awotechmall.com/spaces",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://awotechmall.com/features",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://awotechmall.com/events",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://awotechmall.com/about",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.7,
		},
		{
			url: "https://awotechmall.com/contact",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: "https://awotechmall.com/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		// {
		// 	// url: `https://awotechmall.com/blog/${slug}`,
		// 	lastModified: new Date(),
		// 	changeFrequency: "weekly",
		// 	priority: 0.8,
		// },
	];
}
