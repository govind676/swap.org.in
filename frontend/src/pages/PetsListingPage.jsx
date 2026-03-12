import SeoManager from "@/components/SeoManager";
import { PetCard } from "@/components/common/MarketplaceCards";
import { siteKeywords } from "@/data/marketplaceData";

export default function PetsListingPage({ pageTitle, pageDescription, pets, petType }) {
  const expectedSpecies = petType === "dogs" ? "dog" : "cat";
  const listingPets = pets.filter((pet) => !pet.species || pet.species === expectedSpecies);

  return (
    <>
      <SeoManager
        title={`SWAP | ${pageTitle}`}
        description={pageDescription}
        keywords={siteKeywords}
        image={listingPets?.[0]?.image}
      />
      <section className="listing-hero" data-testid={`${petType}-listing-hero`}>
        <div className="swap-container" data-reveal="true">
          <h1 className="listing-title" data-testid={`${petType}-listing-title`}>
            {pageTitle}
          </h1>
          <p className="listing-description" data-testid={`${petType}-listing-description`}>
            {pageDescription}
          </p>
        </div>
      </section>

      <section className="section-wrap" data-testid={`${petType}-listing-section`}>
        <div className="swap-container">
          <div className="pet-grid" data-testid={`${petType}-listing-grid`}>
            {listingPets.map((pet) => (
              <PetCard key={pet.slug} pet={pet} petType={petType} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
