import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoManager from "@/components/SeoManager";
import { logoUrl, siteKeywords } from "@/data/marketplaceData";

export default function HomePage() {
  const navigate = useNavigate();

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
          <img src={logoUrl} alt="SWAP brand logo" className="hero-logo hero-logo-large" loading="eager" data-testid="hero-logo-image" />
          <p className="hero-subtitle" data-testid="hero-subtitle-text">
            Premium pet marketplace for India
          </p>
          <Button
            className="green-cta-button hero-cta-button"
            onClick={() => navigate("/explore")}
            data-testid="hero-start-journey-button"
          >
            Start Your Journey
          </Button>
        </div>
      </section>
    </>
  );
}
