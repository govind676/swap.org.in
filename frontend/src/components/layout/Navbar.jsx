import { Link } from "react-router-dom";

export default function Navbar({ logoUrl }) {
  return (
    <header className="swap-navbar" data-testid="navbar-shell">
      <div className="swap-container swap-nav-inner">
        <Link className="swap-brand" to="/" data-testid="navbar-brand-link">
          <img src={logoUrl} alt="SWAP logo" className="swap-brand-logo" loading="eager" data-testid="navbar-brand-logo" />
          <span className="swap-brand-text" data-testid="navbar-brand-text">
            swap
          </span>
        </Link>

        <p className="swap-nav-tagline" data-testid="navbar-tagline-text">
          Premium Pet Marketplace
        </p>
      </div>
    </header>
  );
}
