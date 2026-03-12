import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <section className="section-wrap" data-testid="not-found-section">
      <div className="swap-container" data-reveal="true">
        <h1 className="listing-title" data-testid="not-found-title">
          Page not found
        </h1>
        <p className="listing-description" data-testid="not-found-description">
          The page you are looking for does not exist.
        </p>
        <Button asChild className="green-cta-button" data-testid="not-found-home-button">
          <Link to="/">Go to Home</Link>
        </Button>
      </div>
    </section>
  );
}
