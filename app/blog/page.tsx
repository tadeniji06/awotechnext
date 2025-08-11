import BlogsClient from "./BlogsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Awo Tech Mall - Real Estate Insights & Technology Updates",
  description: "Stay informed with Awo Tech Mall's blog featuring the latest insights on real estate, property investment, technology trends, market analysis, and industry news in Nigeria.",
  
  keywords: [
    "Awo Tech Mall Blog",
    "Real Estate Blog Nigeria",
    "Property Investment Tips",
    "Lagos Real Estate News", 
    "Technology in Real Estate",
    "Property Market Analysis",
    "Real Estate Insights",
    "Investment Properties Lagos",
    "Property Development Updates",
    "Nigerian Real Estate Trends",
    "Ikeja Properties",
    "Real Estate Technology",
    "Property Investment Guide",
    "Market Updates Nigeria",
    "Real Estate Education"
  ],

  // Open Graph
  openGraph: {
    title: "Blog | Awo Tech Mall - Real Estate Insights & Technology Updates",
    description: "Stay informed with Awo Tech Mall's blog featuring the latest insights on real estate, property investment, technology trends, market analysis, and industry news in Nigeria.",
    url: "https://awotechmall.com/blog",
    siteName: "Awo Tech Mall",
    type: "website",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "Awo Tech Mall Blog - Real Estate Insights",
      },
    ],
    locale: "en_NG",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Blog | Awo Tech Mall - Real Estate Insights & Technology Updates",
    description: "Stay informed with Awo Tech Mall's blog featuring the latest insights on real estate, property investment, technology trends, and market analysis.",
    images: ["/logo.png"],
    creator: "@awotechmall", 
    site: "@awotechmall",
  },

  // Additional SEO
  alternates: {
    canonical: "https://awotechmall.com/blog",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional meta tags
  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lagos, Nigeria",
    "geo.position": "6.5244;3.3792",
    "ICBM": "6.5244, 3.3792",
  },

  // Verification tags (add if needed)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   yahoo: 'your-yahoo-verification-code',
  // },
};

const BlogsPage = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://awotechmall.com/blog",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://awotechmall.com/blog",
            },
            "name": "Awo Tech Mall Blog",
            "description": "Stay informed with Awo Tech Mall's blog featuring the latest insights on real estate, property investment, technology trends, market analysis, and industry news in Nigeria.",
            "url": "https://awotechmall.com/blog",
            "image": {
              "@type": "ImageObject",
              "url": "https://awotechmall.com/logo.png",
              "width": 1200,
              "height": 630,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Awo Tech Mall",
              "url": "https://awotechmall.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://awotechmall.com/logo.png",
                "width": 300,
                "height": 100,
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ikeja",
                "addressLocality": "Lagos",
                "addressRegion": "Lagos State",
                "addressCountry": "NG",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+2348063335994",
                "contactType": "customer service",
              },
            },
            "inLanguage": "en-NG",
            "author": {
              "@type": "Organization",
              "name": "Awo Tech Mall",
            },
            "keywords": "real estate blog, property investment, Lagos real estate, technology in real estate, property market analysis, Nigerian real estate trends",
          }),
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://awotechmall.com",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://awotechmall.com/blog",
              },
            ],
          }),
        }}
      />
      
      <BlogsClient />
    </>
  );
};

export default BlogsPage;