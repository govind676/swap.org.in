import { Link } from "react-router-dom";

export default function Navbar({ logoUrl }) {
  return (
    <header className="swap-navbar" data-testid="navbar-shell">
      <div className="swap-container swap-nav-inner">
        <Link className="swap-brand" to="/" data-testid="navbar-brand-link">
          <img src={logoUrl} alt="SWAP logo" className="swap-brand-logo" loading="eager" data-testid="navbar-brand-logo" />
        </Link>
      </div>
    </header>
  );
}
