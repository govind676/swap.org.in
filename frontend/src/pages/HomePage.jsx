import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoManager from "@/components/SeoManager";
import { BlogCard, CategoryTile, PetCard, ServiceCard } from "@/components/common/MarketplaceCards";
import { blogs, catBreeds, categoryTiles, dogBreeds, logoUrl, services, siteKeywords } from "@/data/marketplaceData";

export default function HomePage() {
  const handleStartJourney = () => {
    document.getElementById("marketplace-categories")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SWAP",
    url: window.location.origin,
    description: "Premium marketplace to buy dogs online, buy cats online, and book trusted pet services.",
  };

  return (
    <>
      <SeoManager
        title="SWAP | Premium Pet Marketplace"
        description="SWAP is a premium pet marketplace to buy dogs online, buy cats online, book pet services, and read expert pet care blogs."
        image={logoUrl}
        keywords={siteKeywords}
        schema={schema}
      />

      <section className="hero-section" data-testid="home-hero-section">
        <div className="hero-noise" aria-hidden="true" />
        <div className="swap-container hero-content" data-testid="home-hero-content" data-reveal="true">
          <img src={logoUrl} alt="SWAP brand logo" className="hero-logo" loading="eager" data-testid="hero-logo-image" />
          <h1 className="hero-title" data-testid="hero-main-title">
            SWAP
          </h1>
          <p className="hero-subtitle" data-testid="hero-subtitle-text">
            A premium digital marketplace for companion pets and trusted pet services.
          </p>
          <Button className="hero-cta-button" onClick={handleStartJourney} data-testid="hero-start-journey-button">
            Start Your Journey
          </Button>
        </div>
      </section>

      <section className="section-wrap" id="marketplace-categories" data-testid="home-categories-section">
        <div className="swap-container">
          <h2 className="section-title" data-testid="categories-section-title" data-reveal="true">
            Marketplace Categories
          </h2>
          <p className="section-subtitle" data-testid="categories-section-subtitle" data-reveal="true">
            Curated experiences across breeds, services, and expert content.
          </p>
          <div className="categories-grid" data-testid="categories-grid-wrapper">
            {categoryTiles.map((category) => (
              <CategoryTile key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap" data-testid="home-dogs-preview-section">
        <div className="swap-container">
          <div className="section-header-row" data-testid="home-dogs-header-row" data-reveal="true">
            <h2 className="section-title" data-testid="home-dogs-title">
              Dogs Marketplace
            </h2>
            <Link to="/marketplace/dogs" className="section-link" data-testid="home-dogs-view-all-link">
              View full listing
            </Link>
          </div>
          <div className="pet-grid" data-testid="home-dogs-preview-grid">
            {dogBreeds.map((dog) => (
              <PetCard key={dog.slug} pet={dog} petType="dogs" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap" data-testid="home-cats-preview-section">
        <div className="swap-container">
          <div className="section-header-row" data-testid="home-cats-header-row" data-reveal="true">
            <h2 className="section-title" data-testid="home-cats-title">
              Cats Marketplace
            </h2>
            <Link to="/marketplace/cats" className="section-link" data-testid="home-cats-view-all-link">
              Explore all 10 cats
            </Link>
          </div>
          <div className="pet-grid" data-testid="home-cats-preview-grid">
            {catBreeds.slice(0, 4).map((cat) => (
              <PetCard key={cat.slug} pet={cat} petType="cats" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap" data-testid="home-services-section">
        <div className="swap-container">
          <div className="section-header-row" data-testid="home-services-header-row" data-reveal="true">
            <h2 className="section-title" data-testid="home-services-title">
              Pet Services
            </h2>
            <Link to="/services" className="section-link" data-testid="home-services-view-all-link">
              View all services
            </Link>
          </div>
          <div className="services-grid" data-testid="home-services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap" data-testid="home-blogs-section">
        <div className="swap-container">
          <div className="section-header-row" data-testid="home-blogs-header-row" data-reveal="true">
            <h2 className="section-title" data-testid="home-blogs-title">
              Pet Care Blogs
            </h2>
            <Link to="/blogs" className="section-link" data-testid="home-blogs-view-all-link">
              Read all blogs
            </Link>
          </div>
          <div className="pet-grid" data-testid="home-blogs-grid">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
