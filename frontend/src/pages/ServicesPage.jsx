import SeoManager from "@/components/SeoManager";
import { ServiceCard } from "@/components/common/MarketplaceCards";
import { services, siteKeywords } from "@/data/marketplaceData";

export default function ServicesPage() {
  return (
    <>
      <SeoManager
        title="SWAP | Pet Services"
        description="Book comprehensive pet services including grooming, vaccination, diagnostics, emergency care, and pharmacy support."
        image="https://images.unsplash.com/photo-1770836037275-38b44e4b101f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwdmV0ZXJpbmFyeSUyMGNsaW5pYyUyMGdyb29taW5nJTIwc2VydmljZXxlbnwwfHx8fDE3NzMzNDMzNjJ8MA&ixlib=rb-4.1.0&q=85"
        keywords={siteKeywords}
      />

      <section className="listing-hero" data-testid="services-page-hero">
        <div className="swap-container" data-reveal="true">
          <h1 className="listing-title" data-testid="services-page-title">
            Pet Services
          </h1>
          <p className="listing-description" data-testid="services-page-description">
            Every tile includes service photo, expert description, and practical care coverage.
          </p>
        </div>
      </section>

      <section className="section-wrap" data-testid="services-page-grid-section">
        <div className="swap-container">
          <div className="services-grid" data-testid="services-page-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
