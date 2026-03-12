import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const getFallbackPath = (pathname) => {
  if (pathname.startsWith("/dogs/")) return "/marketplace/dogs";
  if (pathname.startsWith("/cats/")) return "/marketplace/cats";
  if (pathname.startsWith("/blogs/")) return "/blogs";
  if (pathname === "/explore") return "/";
  return "/explore";
};

export default function BackNavButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate(getFallbackPath(location.pathname));
  };

  return (
    <Button
      type="button"
      onClick={handleBack}
      className="back-nav-button"
      aria-label="Go back to previous page"
      data-testid="global-back-navigation-button"
    >
      <ArrowLeft size={16} data-testid="global-back-navigation-icon" />
      <span data-testid="global-back-navigation-text">Back</span>
    </Button>
  );
}
