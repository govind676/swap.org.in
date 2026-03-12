import SeoManager from "@/components/SeoManager";
import { CategoryTile } from "@/components/common/MarketplaceCards";
import { categoryTiles, logoUrl, siteKeywords } from "@/data/marketplaceData";

export default function ExplorePage() {
  return (
    <>
      <SeoManager
        title="SWAP | Explore Marketplace"
        description="Explore dogs, cats, pet services, and pet care blogs across dedicated pages on SWAP."
        image={logoUrl}
        keywords={siteKeywords}
      />

      <section className="section-wrap" data-testid="explore-page-section">
        <div className="swap-container">
          <h1 className="section-title" data-testid="explore-page-title" data-reveal="true">
            Explore SWAP
          </h1>
          <p className="section-subtitle" data-testid="explore-page-subtitle" data-reveal="true">
            Every section has its own page. Choose your destination below.
          </p>

          <div className="categories-grid" data-testid="explore-page-categories-grid">
            {categoryTiles.map((category) => (
              <CategoryTile key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
