import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoManager from "@/components/SeoManager";
import { getBlogBySlug, siteKeywords } from "@/data/marketplaceData";

export default function BlogDetailPage() {
  const { blogSlug } = useParams();
  const blog = getBlogBySlug(blogSlug);

  if (!blog) {
    return (
      <section className="section-wrap" data-testid="blog-not-found-section">
        <div className="swap-container" data-reveal="true">
          <h1 className="listing-title" data-testid="blog-not-found-title">
            Blog not found
          </h1>
          <p className="listing-description" data-testid="blog-not-found-description">
            This article is unavailable right now.
          </p>
          <Button asChild className="green-cta-button" data-testid="blog-not-found-back-button">
            <Link to="/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <SeoManager
        title={blog.seoTitle ?? `SWAP Blog | ${blog.title}`}
        description={blog.metaDescription ?? blog.description}
        image={blog.image}
        keywords={siteKeywords}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.metaDescription ?? blog.description,
          image: blog.image,
          keywords: blog.focusKeyword,
          author: { "@type": "Organization", name: "SWAP" },
        }}
      />

      <article className="listing-hero" data-testid={`blog-detail-${blog.slug}`}>
        <div className="swap-container blog-detail-layout">
          <img src={blog.image} alt={blog.title} className="blog-detail-image" loading="eager" data-testid={`blog-detail-image-${blog.slug}`} />

          <div className="blog-detail-content" data-reveal="true">
            <h1 className="listing-title" data-testid={`blog-detail-title-${blog.slug}`}>
              {blog.title}
            </h1>
            <p className="listing-description" data-testid={`blog-detail-description-${blog.slug}`}>
              {blog.description}
            </p>
            {blog.body.map((paragraph, index) => (
              <p key={paragraph} className="blog-detail-paragraph" data-testid={`blog-detail-paragraph-${blog.slug}-${index}`}>
                {paragraph}
              </p>
            ))}

            <Button asChild className="green-cta-button" data-testid={`blog-detail-back-${blog.slug}`}>
              <Link to="/blogs">Back to Blogs</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
