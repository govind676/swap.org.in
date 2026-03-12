import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoManager from "@/components/SeoManager";
import { contactNumbers, getPetByTypeAndSlug, siteKeywords } from "@/data/marketplaceData";

export default function PetProfilePage({ petType }) {
  const { petSlug } = useParams();
  const [showEnquiryOptions, setShowEnquiryOptions] = useState(false);
  const pet = getPetByTypeAndSlug(petType, petSlug);

  if (!pet) {
    return (
      <section className="section-wrap" data-testid="pet-profile-not-found-section">
        <div className="swap-container" data-reveal="true">
          <h1 className="listing-title" data-testid="pet-profile-not-found-title">
            Profile not found
          </h1>
          <p className="listing-description" data-testid="pet-profile-not-found-description">
            This pet profile is currently unavailable.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <SeoManager
        title={`SWAP | ${pet.breed} ${petType === "dogs" ? "Dog" : "Cat"} Profile`}
        description={`${pet.breed} profile on SWAP: temperament, vaccination status, grooming needs, energy level, and enquiry contacts.`}
        image={pet.image}
        keywords={siteKeywords}
      />

      <section className="listing-hero" data-testid={`profile-hero-${pet.slug}`}>
        <div className="swap-container pet-profile-layout">
          <div className="pet-profile-image-wrap" data-testid={`profile-image-wrap-${pet.slug}`} data-reveal="true">
            <img
              src={pet.image}
              alt={`${pet.breed} profile`}
              className="pet-profile-image"
              loading="eager"
              data-testid={`profile-image-${pet.slug}`}
            />
          </div>

          <div className="pet-profile-content" data-testid={`profile-content-${pet.slug}`} data-reveal="true">
            <h1 className="listing-title" data-testid={`profile-title-${pet.slug}`}>
              {pet.breed}
            </h1>
            <p className="listing-description" data-testid={`profile-description-${pet.slug}`}>
              {pet.description}
            </p>

            <div className="profile-info-grid" data-testid={`profile-info-grid-${pet.slug}`}>
              <article className="profile-info-card" data-testid={`profile-overview-${pet.slug}`}>
                <h2 data-testid={`profile-overview-heading-${pet.slug}`}>Breed Overview</h2>
                <p data-testid={`profile-overview-text-${pet.slug}`}>{pet.breedOverview}</p>
              </article>
              <article className="profile-info-card" data-testid={`profile-temperament-${pet.slug}`}>
                <h2 data-testid={`profile-temperament-heading-${pet.slug}`}>Temperament</h2>
                <p data-testid={`profile-temperament-text-${pet.slug}`}>{pet.temperament}</p>
              </article>
              <article className="profile-info-card" data-testid={`profile-vaccination-${pet.slug}`}>
                <h2 data-testid={`profile-vaccination-heading-${pet.slug}`}>Vaccination Status</h2>
                <p data-testid={`profile-vaccination-text-${pet.slug}`}>{pet.vaccinationStatus}</p>
              </article>
              <article className="profile-info-card" data-testid={`profile-grooming-${pet.slug}`}>
                <h2 data-testid={`profile-grooming-heading-${pet.slug}`}>Grooming Needs</h2>
                <p data-testid={`profile-grooming-text-${pet.slug}`}>{pet.groomingNeeds}</p>
              </article>
              <article className="profile-info-card" data-testid={`profile-energy-${pet.slug}`}>
                <h2 data-testid={`profile-energy-heading-${pet.slug}`}>Energy Level</h2>
                <p data-testid={`profile-energy-text-${pet.slug}`}>{pet.energyLevel}</p>
              </article>
              <article className="profile-info-card" data-testid={`profile-home-${pet.slug}`}>
                <h2 data-testid={`profile-home-heading-${pet.slug}`}>Ideal Home Environment</h2>
                <p data-testid={`profile-home-text-${pet.slug}`}>{pet.idealHomeEnvironment}</p>
              </article>
              <article className="profile-info-card" data-testid={`profile-personality-${pet.slug}`}>
                <h2 data-testid={`profile-personality-heading-${pet.slug}`}>Personality Traits</h2>
                <p data-testid={`profile-personality-text-${pet.slug}`}>{pet.personalityTraits}</p>
              </article>
            </div>

            <div className="profile-actions" data-testid={`profile-actions-${pet.slug}`}>
              <Button
                className="green-cta-button"
                onClick={() => setShowEnquiryOptions((prev) => !prev)}
                data-testid={`profile-enquire-button-${pet.slug}`}
              >
                Enquire Now
              </Button>

              {showEnquiryOptions && (
                <div className="enquiry-list" data-testid={`profile-enquiry-options-${pet.slug}`}>
                  {contactNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="enquiry-phone-link"
                      data-testid={`profile-phone-link-${pet.slug}-${phone}`}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
