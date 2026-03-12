import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import PetsListingPage from "@/pages/PetsListingPage";
import PetProfilePage from "@/pages/PetProfilePage";
import ServicesPage from "@/pages/ServicesPage";
import BlogsPage from "@/pages/BlogsPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import NotFoundPage from "@/pages/NotFoundPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogs, catBreeds, dogBreeds, logoUrl } from "@/data/marketplaceData";

const AppLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const revealItems = Array.from(document.querySelectorAll("[data-reveal='true']"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="swap-site" data-testid="swap-site-shell">
      <Navbar logoUrl={logoUrl} />
      <main className="swap-main" data-testid="swap-main-content">
        <Outlet />
      </main>
      <Footer logoUrl={logoUrl} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/marketplace/dogs"
            element={
              <PetsListingPage
                pageTitle="Dogs Marketplace"
                pageDescription="Discover premium dog breeds with transparent health details and loving companion traits."
                pets={dogBreeds}
                petType="dogs"
              />
            }
          />
          <Route
            path="/marketplace/cats"
            element={
              <PetsListingPage
                pageTitle="Cats Marketplace"
                pageDescription="Browse 10 beautiful cat breeds selected for personality, comfort, and premium care compatibility."
                pets={catBreeds}
                petType="cats"
              />
            }
          />
          <Route path="/dogs/:petSlug" element={<PetProfilePage petType="dogs" />} />
          <Route path="/cats/:petSlug" element={<PetProfilePage petType="cats" />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:blogSlug" element={<BlogDetailPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
