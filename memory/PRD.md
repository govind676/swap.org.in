# PRD — SWAP Premium Pet Marketplace

## Original Problem Statement
Design and generate a highly aesthetic, modern, minimalistic, responsive, SEO-optimized marketplace website for **SWAP** where users can explore and buy dogs, explore and buy cats, book pet services, and read pet care blogs. Must feel premium (Apple/Airbnb/Stripe quality), include smooth interactions, dark luxury palette, strong image storytelling, and profile enquiry flow with `tel:` contact options.

## User Choices Captured
- Build scope: **Premium frontend first (static/demo data)**
- Branding: User shared **SWAP logo** (uploaded asset)
- Cats: Use uploaded cat images + extra images
- Dogs: User uploaded Beagle/Boxer/Chihuahua images
- Routing: **Separate listing pages + profile/detail pages**
- Follow-up choices implemented:
  - Catalog size: **20 dogs + 20 cats**
  - Home style: strict minimal hero (logo + CTA)
  - Social links: placeholder Facebook/YouTube links for later update
  - Remove age section from pet profiles
  - Detailed descriptions for breed/service/blog content

## Architecture Decisions
- Frontend-only implementation using React + React Router for route-based navigation
- Static data source in `src/data/marketplaceData.js` for dogs, cats, services, blogs
- Reusable shadcn-based card components for category, pet, service, and blog cards
- SEO layer via `SeoManager` component (dynamic title/meta/OG updates per route)
- Base SEO and Organization JSON-LD in `public/index.html`
- Responsive CSS system in `App.css` with premium dark theme, glow CTA, and scroll reveal

## User Personas
1. **Pet Buyer (Family/Individual):** wants trusted breed profiles and quick enquiry actions
2. **Service Seeker:** wants grooming/vet/diagnostics services in a clean trustworthy interface
3. **Pet Parent Reader:** wants practical care blogs and reliable pet health guidance

## Core Requirements (Static)
- Premium dark UI, modern typography, smooth interactions, card-based marketplace
- Homepage: minimal hero (logo + green 3D CTA)
- Separate pages: explore hub, dogs listing, cats listing, services, blogs, blog detail, pet profile pages
- Dog/Cat cards with “Make it Yours” CTA to profile pages
- Profile info blocks: overview, temperament, vaccination, grooming, energy, ideal home, personality
- Enquiry flow with phone options (`7818832419`, `6299805595`) using `tel:` links
- SEO requirements: title/meta/OG/schema/keywords and performance-conscious image usage

## What’s Implemented (with date)
### 2026-03-12
- Replaced starter app with full SWAP premium marketplace frontend
- Implemented full route structure:
  - `/`
  - `/marketplace/dogs`
  - `/marketplace/cats`
  - `/dogs/:petSlug`
  - `/cats/:petSlug`
  - `/services`
  - `/blogs`
  - `/blogs/:blogSlug`
- Added uploaded user assets (logo + dogs + 3 cats) and extended cats to 10 entries
- Built reusable components: Navbar, Footer, CategoryTile, PetCard, ServiceCard, BlogCard
- Added profile enquiry toggle and working phone dial links
- Added mobile menu + responsive layouts (desktop/tablet/mobile)
- Added dynamic SEO manager and upgraded static head metadata in `public/index.html`
- Added JSON-LD support (removed hardcoded environment domain risk)
- Ran build + frontend e2e validation via screenshot tool and testing agent (all requested flows passed)

### 2026-03-12 (Further Enhancement Pass)
- Added new transparent logo asset usage and refined top-left branding treatment
- Reworked home page into strict minimal layout (logo + 3D light-green Start Your Journey CTA)
- Added dedicated `/explore` page as section hub linking Dogs, Cats, Services, Blogs pages
- Removed top-right direct page buttons/navigation links and kept navigation discovery through CTA/category/footer flow
- Expanded catalog to **20 dog breeds + 20 cat breeds** with enriched profile descriptions
- Removed age section across profile content and updated profile SEO wording accordingly
- Upgraded Make it Yours buttons to match the same 3D green CTA style as home
- Expanded pet services to 16 service tiles with photo + detailed description in each card
- Added Facebook and YouTube social icons/links and contact email `care@swap.org.in` in footer
- Reworked blog dataset to SEO-focused, editable structure (`seoTitle`, `metaDescription`, `focusKeyword`, tags, body)
- Ran regression via screenshot testing + testing agent, then fixed all reported design/content gaps

## Prioritized Backlog
### P0 (Critical)
- None blocking for current static frontend scope

### P1 (Important)
- Connect static data to backend APIs (pets/services/blog CRUD)
- Add filtering/sorting/search across 20-dog and 20-cat marketplace pages
- Add lead capture form (name, phone, preferred breed) before enquiry call

### P2 (Enhancements)
- Add saved favorites/wishlist interactions
- Add richer blog detail layouts (TOC, related articles)
- Add testimonials and trust badges section

## Features Remaining by Priority
- **P0 Remaining:** none
- **P1 Remaining:** backend integration + marketplace utility features
- **P2 Remaining:** engagement and content expansion features

## Next Tasks List
1. Integrate FastAPI endpoints for pets/services/blogs and replace static data fetches
2. Add filter chips (temperament, energy, grooming intensity, home type) on listing pages
3. Add lightweight enquiry modal with validation + event tracking
4. Add image optimization pass (next-gen formats + consistent crop strategy)
