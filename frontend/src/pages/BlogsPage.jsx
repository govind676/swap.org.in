import SeoManager from "@/components/SeoManager";
import { BlogCard } from "@/components/common/MarketplaceCards";
import { blogs, siteKeywords } from "@/data/marketplaceData";

export default function BlogsPage() {
  return (
    <>
      <SeoManager
        title="SWAP | Pet Care Blogs"
        description="Read SEO-focused pet care blogs on grooming, nutrition, vaccines, and family-friendly pet care in India."
        image={blogs[0].image}
        keywords={siteKeywords}
      />

      <section className="listing-hero" data-testid="blogs-page-hero">
        <div className="swap-container" data-reveal="true">
          <h1 className="listing-title" data-testid="blogs-page-title">
            Pet Care Blogs
          </h1>
          <p className="listing-description" data-testid="blogs-page-description">
            SEO-ready articles. Update content anytime from the blog data file.
          </p>
        </div>
      </section>

      <section className="section-wrap" data-testid="blogs-page-grid-section">
        <div className="swap-container">
          <div className="pet-grid" data-testid="blogs-page-grid">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
