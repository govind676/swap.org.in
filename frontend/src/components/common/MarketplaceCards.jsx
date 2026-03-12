import { Link } from "react-router-dom";
import {
  HeartPulse,
  Microscope,
  Pill,
  ScanLine,
  Scissors,
  ShieldCheck,
  Siren,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const iconMap = {
  Scissors,
  Stethoscope,
  ShieldCheck,
  Microscope,
  Siren,
  ScanLine,
  Pill,
  HeartPulse,
};

export function CategoryTile({ category }) {
  return (
    <Link
      to={category.href}
      className="category-tile"
      style={{ backgroundImage: `url(${category.image})` }}
      data-testid={category.testId}
      data-reveal="true"
    >
      <div className="category-tile-overlay" data-testid={`${category.testId}-overlay`}>
        <h3 className="category-tile-title" data-testid={`${category.testId}-title`}>
          {category.title}
        </h3>
        <p className="category-tile-description" data-testid={`${category.testId}-description`}>
          {category.description}
        </p>
      </div>
    </Link>
  );
}

export function PetCard({ pet, petType }) {
  return (
    <Card className="premium-card" data-testid={`${petType}-card-${pet.slug}`} data-reveal="true">
      <div className="pet-card-image-wrap" data-testid={`${petType}-card-image-wrap-${pet.slug}`}>
        <img
          src={pet.image}
          alt={`${pet.breed} ${petType === "dogs" ? "dog" : "cat"}`}
          className="pet-card-image"
          loading="lazy"
          data-testid={`${petType}-card-image-${pet.slug}`}
        />
      </div>
      <CardContent className="pet-card-content">
        <h3 className="pet-card-title" data-testid={`${petType}-card-title-${pet.slug}`}>
          {pet.breed}
        </h3>
        <p className="pet-card-description" data-testid={`${petType}-card-description-${pet.slug}`}>
          {pet.description}
        </p>
        <Button asChild className="glow-button" data-testid={`${petType}-card-action-${pet.slug}`}>
          <Link to={`/${petType === "dogs" ? "dogs" : "cats"}/${pet.slug}`}>Make it Yours</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] ?? HeartPulse;

  return (
    <Card className="service-card" data-testid={`service-card-${service.slug}`} data-reveal="true">
      <CardContent className="service-card-content">
        <div className="service-icon-wrap" data-testid={`service-icon-wrap-${service.slug}`}>
          <Icon size={20} data-testid={`service-icon-${service.slug}`} />
        </div>
        <h3 className="service-card-title" data-testid={`service-title-${service.slug}`}>
          {service.title}
        </h3>
        <p className="service-card-description" data-testid={`service-description-${service.slug}`}>
          {service.description}
        </p>
      </CardContent>
    </Card>
  );
}

export function BlogCard({ blog }) {
  return (
    <Card className="premium-card" data-testid={`blog-card-${blog.slug}`} data-reveal="true">
      <div className="blog-card-image-wrap" data-testid={`blog-image-wrap-${blog.slug}`}>
        <img src={blog.image} alt={blog.title} className="blog-card-image" loading="lazy" data-testid={`blog-image-${blog.slug}`} />
      </div>
      <CardContent className="pet-card-content">
        <h3 className="pet-card-title" data-testid={`blog-title-${blog.slug}`}>
          {blog.title}
        </h3>
        <p className="pet-card-description" data-testid={`blog-description-${blog.slug}`}>
          {blog.description}
        </p>
        <Button asChild variant="outline" className="read-more-button" data-testid={`blog-read-more-${blog.slug}`}>
          <Link to={`/blogs/${blog.slug}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
