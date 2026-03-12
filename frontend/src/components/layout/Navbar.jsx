import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Dogs", href: "/marketplace/dogs", testId: "navbar-link-dogs" },
  { name: "Cats", href: "/marketplace/cats", testId: "navbar-link-cats" },
  { name: "Pet Services", href: "/services", testId: "navbar-link-services" },
  { name: "Blogs", href: "/blogs", testId: "navbar-link-blogs" },
];

const navLinkClass = ({ isActive }) =>
  `swap-nav-link ${isActive ? "swap-nav-link-active" : ""}`;

export default function Navbar({ logoUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="swap-navbar" data-testid="navbar-shell">
      <div className="swap-container swap-nav-inner">
        <Link className="swap-brand" to="/" data-testid="navbar-brand-link" onClick={() => setIsOpen(false)}>
          <img src={logoUrl} alt="SWAP logo" className="swap-brand-logo" loading="eager" data-testid="navbar-brand-logo" />
          <span className="swap-brand-text" data-testid="navbar-brand-text">
            SWAP
          </span>
        </Link>

        <nav className="swap-nav-desktop" data-testid="navbar-desktop-links">
          {links.map((item) => (
            <NavLink key={item.href} to={item.href} className={navLinkClass} data-testid={item.testId}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="swap-nav-mobile-button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          data-testid="navbar-mobile-menu-button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="swap-nav-mobile-menu swap-container" data-testid="navbar-mobile-menu">
          {links.map((item) => (
            <NavLink
              key={`mobile-${item.href}`}
              to={item.href}
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
              data-testid={`mobile-${item.testId}`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
