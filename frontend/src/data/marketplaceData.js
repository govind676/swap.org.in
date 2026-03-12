export const logoUrl = "https://customer-assets.emergentagent.com/job_swap-companion/artifacts/mfwjym5p_swap%20logo.png";

export const contactNumbers = ["7818832419", "6299805595"];

export const siteKeywords =
  "buy dogs online, buy cats online, pet marketplace, pet adoption marketplace, pet services near me, dog grooming services";

export const categoryTiles = [
  {
    title: "Dogs",
    description: "Premium breeds with transparent profiles.",
    image:
      "https://customer-assets.emergentagent.com/job_swap-companion/artifacts/lhocv8qu_Beagle.webp",
    href: "/marketplace/dogs",
    testId: "category-tile-dogs",
  },
  {
    title: "Cats",
    description: "Elegant companions for modern homes.",
    image:
      "https://customer-assets.emergentagent.com/job_4e491af4-7e2f-4eab-8639-15f96baa9510/artifacts/80utdacf_bengal.webp",
    href: "/marketplace/cats",
    testId: "category-tile-cats",
  },
  {
    title: "Pet Services",
    description: "Professional wellness and grooming services.",
    image:
      "https://images.unsplash.com/photo-1770836037275-38b44e4b101f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwdmV0ZXJpbmFyeSUyMGNsaW5pYyUyMGdyb29taW5nJTIwc2VydmljZXxlbnwwfHx8fDE3NzMzNDMzNjJ8MA&ixlib=rb-4.1.0&q=85",
    href: "/services",
    testId: "category-tile-services",
  },
  {
    title: "Blogs",
    description: "Expert tips for healthy and happy pets.",
    image:
      "https://images.unsplash.com/photo-1718885433034-908d5bca08cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxwZXQlMjBjYXJlJTIwYmxvZyUyMGRvZyUyMGNhdCUyMGxpZmVzdHlsZXxlbnwwfHx8fDE3NzMzNDMzNjF8MA&ixlib=rb-4.1.0&q=85",
    href: "/blogs",
    testId: "category-tile-blogs",
  },
];

const defaultHighlights = {
  vaccinationStatus: "Core vaccinations completed and records available.",
  groomingNeeds: "Weekly brushing and monthly deep care recommended.",
  idealHomeEnvironment: "Best in a calm, loving family environment.",
  personalityTraits: "Affectionate, intelligent, and emotionally responsive.",
};

export const dogBreeds = [
  {
    slug: "beagle",
    breed: "Beagle",
    description: "A curious and cheerful companion perfect for active families.",
    image: "https://customer-assets.emergentagent.com/job_swap-companion/artifacts/lhocv8qu_Beagle.webp",
    temperament: "Friendly, curious, and playful.",
    age: "8 months",
    energyLevel: "High",
    breedOverview:
      "Beagles are compact scent hounds known for loyalty, trainability, and adaptability in apartments and family homes.",
  },
  {
    slug: "boxer",
    breed: "Boxer",
    description: "Athletic, protective, and deeply devoted to their people.",
    image: "https://customer-assets.emergentagent.com/job_swap-companion/artifacts/4wlfgtzl_boxer.webp",
    temperament: "Confident, energetic, and loving.",
    age: "1 year",
    energyLevel: "High",
    breedOverview:
      "Boxers are spirited guardians with expressive personalities. They thrive with structure, outdoor time, and close companionship.",
  },
  {
    slug: "chihuahua",
    breed: "Chihuahua",
    description: "Compact, bold, and ideal for city-style premium living.",
    image: "https://customer-assets.emergentagent.com/job_swap-companion/artifacts/0sb8b5pu_Chihuahua.webp",
    temperament: "Alert, loyal, and lively.",
    age: "10 months",
    energyLevel: "Moderate",
    breedOverview:
      "Chihuahuas are tiny companions with huge personalities. They form deep bonds and are excellent for small-space homes.",
  },
].map((dog) => ({ ...dog, ...defaultHighlights }));

export const catBreeds = [
  {
    slug: "bengal",
    breed: "Bengal",
    description: "A striking, athletic cat with wild beauty and playful intelligence.",
    image:
      "https://customer-assets.emergentagent.com/job_4e491af4-7e2f-4eab-8639-15f96baa9510/artifacts/80utdacf_bengal.webp",
    temperament: "Alert, playful, and social.",
    age: "9 months",
    energyLevel: "High",
    breedOverview:
      "Bengals combine luxury looks with active curiosity. They love stimulation, climbing spaces, and interactive routines.",
  },
  {
    slug: "maine-coon",
    breed: "Maine Coon",
    description: "Gentle giant with luxurious fur and affectionate nature.",
    image:
      "https://customer-assets.emergentagent.com/job_4e491af4-7e2f-4eab-8639-15f96baa9510/artifacts/p39ae63q_manie%20moon.webp",
    temperament: "Calm, affectionate, and patient.",
    age: "1 year",
    energyLevel: "Moderate",
    breedOverview:
      "Maine Coons are among the most family-friendly cats, known for intelligence, size, and sweet companionship.",
  },
  {
    slug: "persian",
    breed: "Persian",
    description: "Elegant and serene companion for peaceful home environments.",
    image:
      "https://customer-assets.emergentagent.com/job_4e491af4-7e2f-4eab-8639-15f96baa9510/artifacts/ga2uxkc8_persian.webp",
    temperament: "Quiet, composed, and gentle.",
    age: "11 months",
    energyLevel: "Low",
    breedOverview:
      "Persian cats are iconic for their plush coat and calm nature, ideal for premium indoor lifestyles.",
  },
  {
    slug: "siamese",
    breed: "Siamese",
    description: "Talkative and affectionate breed with graceful body lines.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/4e491af4-7e2f-4eab-8639-15f96baa9510/images/6709443e908c899eeff0fa094ac05c6f5b51978d649b4cd5e906831d4a9252aa.png",
    temperament: "Vocal, loyal, and outgoing.",
    age: "8 months",
    energyLevel: "High",
    breedOverview:
      "Siamese cats thrive on interaction and form strong human bonds, making them ideal for attentive households.",
  },
  {
    slug: "ragdoll",
    breed: "Ragdoll",
    description: "Plush, affectionate, and perfect for gentle family companionship.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/4e491af4-7e2f-4eab-8639-15f96baa9510/images/5daa59c146eaf29fd1c56c1db0a232aa5d8d13f1cbef168fbd20aa5c99444d7b.png",
    temperament: "Docile, affectionate, and trusting.",
    age: "1 year",
    energyLevel: "Moderate",
    breedOverview:
      "Ragdolls are known for calm behavior and emotional warmth, making them a favorite for family-centric homes.",
  },
  {
    slug: "scottish-fold",
    breed: "Scottish Fold",
    description: "Unique folded ears with a sweet and observant personality.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/4e491af4-7e2f-4eab-8639-15f96baa9510/images/d0e0c7a9760fbd3683b85695993719c4dd196dc7e020fe9cae42fd927b5eeadc.png",
    temperament: "Gentle, curious, and adaptable.",
    age: "9 months",
    energyLevel: "Moderate",
    breedOverview:
      "Scottish Folds are famous for expressive faces and relaxed companionship, ideal for modern apartments.",
  },
  {
    slug: "british-shorthair",
    breed: "British Shorthair",
    description: "Calm and plush-coated with a dignified, easy-going attitude.",
    image:
      "https://images.unsplash.com/photo-1730680469680-0486f1f61f98?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxwdXJlYnJlZCUyMGNhdCUyMHBvcnRyYWl0JTIwc3R1ZGlvfGVufDB8fHx8MTc3MzM0MzM2MHww&ixlib=rb-4.1.0&q=85",
    temperament: "Independent, loyal, and calm.",
    age: "1 year",
    energyLevel: "Low",
    breedOverview:
      "British Shorthairs are balanced companions with soft charm, ideal for owners seeking low-maintenance affection.",
  },
  {
    slug: "sphynx",
    breed: "Sphynx",
    description: "Distinctive and energetic breed that craves close human interaction.",
    image:
      "https://images.unsplash.com/photo-1681137617949-5b0078e67cce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxwdXJlYnJlZCUyMGNhdCUyMHBvcnRyYWl0JTIwc3R1ZGlvfGVufDB8fHx8MTc3MzM0MzM2MHww&ixlib=rb-4.1.0&q=85",
    temperament: "Extroverted, warm, and mischievous.",
    age: "7 months",
    energyLevel: "High",
    breedOverview:
      "Sphynx cats are social, intelligent, and playful, thriving in engaged indoor environments.",
  },
  {
    slug: "norwegian-forest",
    breed: "Norwegian Forest",
    description: "Fluffy and adventurous with a gentle family-friendly temperament.",
    image:
      "https://images.unsplash.com/photo-1681137617814-4048d770fe1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxwdXJlYnJlZCUyMGNhdCUyMHBvcnRyYWl0JTIwc3R1ZGlvfGVufDB8fHx8MTc3MzM0MzM2MHww&ixlib=rb-4.1.0&q=85",
    temperament: "Independent, affectionate, and sturdy.",
    age: "1 year 2 months",
    energyLevel: "Moderate",
    breedOverview:
      "Norwegian Forest cats blend rugged beauty with affectionate behavior, fitting both family and solo households.",
  },
  {
    slug: "russian-blue",
    breed: "Russian Blue",
    description: "Elegant and intelligent companion with calm, affectionate energy.",
    image:
      "https://images.unsplash.com/photo-1675191855420-c6735aa50c8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxwdXJlYnJlZCUyMGNhdCUyMHBvcnRyYWl0JTIwc3R1ZGlvfGVufDB8fHx8MTc3MzM0MzM2MHww&ixlib=rb-4.1.0&q=85",
    temperament: "Reserved, intelligent, and sweet.",
    age: "10 months",
    energyLevel: "Moderate",
    breedOverview:
      "Russian Blue cats are graceful and perceptive, often bonding deeply with their closest humans.",
  },
].map((cat) => ({ ...cat, ...defaultHighlights }));

export const services = [
  {
    slug: "pet-grooming",
    icon: "Scissors",
    title: "Pet Grooming",
    description: "Luxury coat care, de-shedding, and breed-specific styling.",
  },
  {
    slug: "veterinary-consultation",
    icon: "Stethoscope",
    title: "Veterinary Consultation",
    description: "Expert checkups for routine health and preventive care.",
  },
  {
    slug: "vaccination",
    icon: "ShieldCheck",
    title: "Vaccination",
    description: "Timely immunization plans customized by life stage.",
  },
  {
    slug: "diagnostics",
    icon: "Microscope",
    title: "Diagnostics",
    description: "Precision testing for early detection and confidence.",
  },
  {
    slug: "emergency-care",
    icon: "Siren",
    title: "Emergency Care",
    description: "Rapid support for urgent pet health concerns.",
  },
  {
    slug: "radiology",
    icon: "ScanLine",
    title: "Radiology",
    description: "Modern imaging for accurate and faster diagnosis.",
  },
  {
    slug: "pet-pharmacy",
    icon: "Pill",
    title: "Pet Pharmacy",
    description: "Reliable access to medicines and wellness essentials.",
  },
  {
    slug: "ecg",
    icon: "HeartPulse",
    title: "ECG",
    description: "Cardiac monitoring for heart-safe treatment planning.",
  },
];

export const blogs = [
  {
    slug: "dog-grooming-guide",
    title: "Dog Grooming Guide",
    description: "A practical grooming rhythm for healthy skin, coat, and confidence.",
    image:
      "https://images.unsplash.com/photo-1655306963086-a34411c0915b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxwZXQlMjBjYXJlJTIwYmxvZyUyMGRvZyUyMGNhdCUyMGxpZmVzdHlsZXxlbnwwfHx8fDE3NzMzNDMzNjF8MA&ixlib=rb-4.1.0&q=85",
    body: [
      "Consistent grooming improves comfort, hygiene, and emotional wellbeing for your dog.",
      "Build a routine around brushing, nail trimming, ear checks, and occasional deep cleansing.",
      "Choose breed-specific tools and keep sessions calm with rewards to create trust.",
    ],
  },
  {
    slug: "cat-nutrition-guide",
    title: "Cat Nutrition Guide",
    description: "How to choose balanced meals that support coat, immunity, and digestion.",
    image:
      "https://images.unsplash.com/photo-1608121173858-7fe89bf2c81f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHw0fHxwZXQlMjBjYXJlJTIwYmxvZyUyMGRvZyUyMGNhdCUyMGxpZmVzdHlsZXxlbnwwfHx8fDE3NzMzNDMzNjF8MA&ixlib=rb-4.1.0&q=85",
    body: [
      "Cats need protein-rich diets with balanced hydration support and quality ingredients.",
      "Age, activity level, and health conditions should guide meal portions and feeding frequency.",
      "Always transition new food gradually to avoid digestive stress.",
    ],
  },
  {
    slug: "pet-vaccination-schedule",
    title: "Pet Vaccination Schedule",
    description: "A simple timeline for core vaccines and yearly preventive boosters.",
    image:
      "https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwdmV0ZXJpbmFyeSUyMGNsaW5pYyUyMGdyb29taW5nJTIwc2VydmljZXxlbnwwfHx8fDE3NzMzNDMzNjJ8MA&ixlib=rb-4.1.0&q=85",
    body: [
      "Vaccinations protect pets from high-risk diseases and reduce emergency complications.",
      "Work with your veterinarian to personalize booster intervals based on age and environment.",
      "Track vaccination records digitally to avoid missed timelines.",
    ],
  },
  {
    slug: "best-pets-for-families",
    title: "Best Pets for Families",
    description: "Choosing between dogs and cats based on lifestyle, energy, and home size.",
    image:
      "https://images.unsplash.com/photo-1718885433034-908d5bca08cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxwZXQlMjBjYXJlJTIwYmxvZyUyMGRvZyUyMGNhdCUyMGxpZmVzdHlsZXxlbnwwfHx8fDE3NzMzNDMzNjF8MA&ixlib=rb-4.1.0&q=85",
    body: [
      "The best match depends on family schedule, available space, and desired companionship style.",
      "Energetic households often enjoy active breeds, while quieter homes prefer calm companions.",
      "Always include children in pet-care routines for healthy bonding.",
    ],
  },
  {
    slug: "pet-health-tips",
    title: "Pet Health Tips",
    description: "Daily habits that improve immunity, mood, and long-term wellness.",
    image:
      "https://images.unsplash.com/photo-1725419876939-f8f9987cf0d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdmV0ZXJpbmFyeSUyMGNsaW5pYyUyMGdyb29taW5nJTIwc2VydmljZXxlbnwwfHx8fDE3NzMzNDMzNjJ8MA&ixlib=rb-4.1.0&q=85",
    body: [
      "Daily exercise, hydration, and stress-free sleep spaces are key to pet vitality.",
      "Watch for behavior changes, appetite shifts, and coat quality as early warning signs.",
      "Preventive checkups are more cost-effective than late-stage treatments.",
    ],
  },
];

export const getPetByTypeAndSlug = (petType, petSlug) => {
  const source = petType === "dogs" ? dogBreeds : catBreeds;
  return source.find((pet) => pet.slug === petSlug);
};

export const getBlogBySlug = (blogSlug) => blogs.find((blog) => blog.slug === blogSlug);
