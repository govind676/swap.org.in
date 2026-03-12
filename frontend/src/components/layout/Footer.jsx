import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { contactEmail, contactNumbers, socialHandles } from "@/data/marketplaceData";

const navLinks = [
  { label: "Dogs", href: "/marketplace/dogs", testId: "footer-link-dogs" },
  { label: "Cats", href: "/marketplace/cats", testId: "footer-link-cats" },
  { label: "Pet Services", href: "/services", testId: "footer-link-services" },
  { label: "Blogs", href: "/blogs", testId: "footer-link-blogs" },
];

const socials = [
  { icon: Instagram, href: socialHandles.instagram, label: "Instagram", testId: "footer-social-instagram" },
  { icon: Facebook, href: socialHandles.facebook, label: "Facebook", testId: "footer-social-facebook" },
  { icon: Youtube, href: socialHandles.youtube, label: "YouTube", testId: "footer-social-youtube" },
  { icon: Twitter, href: socialHandles.x, label: "X", testId: "footer-social-x" },
  { icon: Linkedin, href: socialHandles.linkedin, label: "LinkedIn", testId: "footer-social-linkedin" },
];

export default function Footer({ logoUrl }) {
  return (
    <footer className="swap-footer" data-testid="footer-shell">
      <div className="swap-container swap-footer-grid">
        <div className="swap-footer-brand" data-testid="footer-brand-block">
          <img src={logoUrl} alt="SWAP logo" className="swap-footer-logo" loading="lazy" data-testid="footer-logo-image" />
          <p className="swap-footer-brand-title" data-testid="footer-brand-title">
            SWAP Marketplace
          </p>
          <p className="swap-footer-brand-subtitle" data-testid="footer-brand-subtitle">
            Premium digital marketplace for pets and pet services.
          </p>
        </div>

        <div className="swap-footer-column" data-testid="footer-navigation-column">
          <p className="swap-footer-heading" data-testid="footer-navigation-heading">
            Explore
          </p>
          {navLinks.map((item) => (
            <Link key={item.href} to={item.href} className="swap-footer-link" data-testid={item.testId}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="swap-footer-column" data-testid="footer-contact-column">
          <p className="swap-footer-heading" data-testid="footer-contact-heading">
            Contact
          </p>
          {contactNumbers.map((number) => (
            <a
              key={number}
              href={`tel:${number}`}
              className="swap-footer-link swap-footer-phone"
              data-testid={`footer-contact-phone-${number}`}
            >
              <Phone size={14} />
              <span data-testid={`footer-contact-phone-value-${number}`}>{number}</span>
            </a>
          ))}
          <a href={`mailto:${contactEmail}`} className="swap-footer-link swap-footer-phone" data-testid="footer-contact-email-link">
            <Mail size={14} />
            <span data-testid="footer-contact-email-value">{contactEmail}</span>
          </a>
        </div>

        <div className="swap-footer-column" data-testid="footer-social-column">
          <p className="swap-footer-heading" data-testid="footer-social-heading">
            Social
          </p>
          <div className="swap-footer-social-row" data-testid="footer-social-links-row">
            {socials.map(({ icon: Icon, href, label, testId }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="swap-social-icon"
                aria-label={label}
                data-testid={testId}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
