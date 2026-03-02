# Headwaters Customs Website - TODO

## COMPLETE REDESIGN - High-End Authentic Aesthetic

### Critical Design Changes
- [ ] Remove all fake/placeholder stats (200+ builds, 15+ years, etc.) - use only real information
- [ ] Replace amateur layout with clean, professional high-end design
- [ ] Implement Montana landscape hero image (Madison Valley/River with mountains)
- [ ] Extract and use actual Headwaters Customs logo from reference image
- [ ] Change color scheme to white primary text with golden/yellow accents
- [ ] Replace generic fonts with bold, impactful typography
- [ ] Center logo with company name and slogan: "Artistry forged through steel, built to outlast the ordinary"

### Navigation Structure
- [ ] Rebuild top navigation with clean dropdown menus
- [ ] About
- [ ] Services (dropdown: Services Offered, Our Process)
- [ ] AI Tools (dropdown: Dream Build, Cost Calculator)
- [ ] Gallery
- [ ] Customer Portal
- [ ] Classic Car Marketplace
- [ ] Store
- [ ] Follow Our Builds
- [ ] Contact
- [ ] Partners/Affiliates

### Homepage Redesign
- [ ] Full-screen Montana landscape hero with centered logo and slogan
- [ ] Clean white navigation bar that stands out against landscape
- [ ] Remove all fake statistics and placeholder content
- [ ] Authentic, confident copy that reflects actual business
- [ ] High-end aesthetic throughout

### All Pages Redesign
- [ ] Apply new white/golden color scheme across all pages
- [ ] Update typography to bold, professional fonts
- [ ] Maintain consistent high-end aesthetic
- [ ] Remove any generic template elements
- [ ] Ensure authentic, truthful content only

### AI Features (Keep Functionality, Update Design)
- [ ] Redesign AI Dream Build page with new aesthetic
- [ ] Redesign Quote Request page with new aesthetic
- [ ] Maintain all backend functionality

### Assets Needed
- [ ] Montana landscape hero image (Madison Valley/River)
- [ ] Extract logo from reference image
- [ ] Find/create high-quality project photos for gallery

### Bug Fixes
- [ ] Fix nested anchor tags in navigation (Link wrapping <a> tags)

## Hero Image Implementation
- [ ] Copy car lot sunset image to public directory (homepage)
- [ ] Copy illustrated truck image to public directory (gallery)
- [ ] Copy golden hour valley shot to public directory (about)
- [ ] Copy river with mountains to public directory (services)
- [ ] Copy dramatic sunset to public directory (dream build)
- [ ] Copy clean daytime river to public directory (quote request)
- [ ] Update Homepage with car lot sunset hero
- [ ] Update Gallery page with illustrated truck hero
- [ ] Update About page with golden hour valley hero
- [ ] Update Services page with river/mountains hero
- [ ] Update Dream Build page with dramatic sunset hero
- [ ] Update Quote Request page with daytime river hero

## Design Improvements - Phase 2

### Typography Enhancement
- [x] Replace generic system fonts with premium custom fonts (Google Fonts)
- [x] Choose bold, impactful font for headings (Rajdhani)
- [x] Select clean, professional font for body text (Barlow)
- [x] Update global CSS with new font families
- [x] Add special Bruno Ace SC font for hero titles

### Logo Redesign & Placement
- [x] Design new Headwaters Customs logo with golden styling
- [x] Create logo with proper automotive/custom shop aesthetic
- [x] Implement logo in navigation (better placement and sizing)
- [x] Add company slogan integration with logo
- [x] Ensure logo works on both light and dark backgrounds

### Navigation Menu Restructure
- [x] Build dropdown menu system for organized navigation
- [x] Services dropdown (Services Offered, Our Process)
- [x] AI Tools dropdown (Dream Build, Cost Calculator/Quote Request)
- [x] Implement proper menu styling with hover states
- [x] Create reusable Navigation component
- [x] Add smooth transitions and animations

### Additional Hero Backgrounds
- [x] Add hero background to Contact page
- [x] Verify all pages have hero backgrounds
- [x] Ensure all hero images are optimized for web
- [x] Verify consistent hero styling across all pages
- [x] Apply Navigation component to all pages for consistency

## Brand Correction - Phase 3

- [x] Upload real HC badge logo to CDN
- [x] Replace AI-generated logo with real HC badge across all pages
- [x] Update Navigation component to use real HC badge
- [x] Update homepage hero to use real HC badge
- [x] Match dark/gold dramatic aesthetic from brand reference images
- [x] Update color scheme to deep dark backgrounds with gold accents
- [x] Align typography with brand style (bold condensed headers, elegant script taglines)
- [x] Add mobile hamburger menu for full navigation on small screens
- [x] Switch ThemeProvider to dark mode to match brand

## Real Vehicle Integration - Phase 4

- [x] Upload '79 K10 blue-on-blue (IMG_1038.jpg) to CDN
- [x] Upload '61 Scout red (IMG_2828.jpg) to CDN
- [x] Upload '72 C20 green (IMG_3058.jpg) to CDN
- [x] Upload '75 K20 blue flatbed (IMG_0045.jpg) to CDN
- [x] Upload 2015 F450 blacked-out (IMG_1749.jpg) to CDN
- [x] Replace homepage hero background with '79 K10
- [x] Build 'The Founding Fleet' showcase section on homepage
- [x] Update Gallery page with all 5 real vehicle photos and captions
- [x] Add K10 full spec callout (chassis, engine, HP) - other 4 pending owner write-ups
- [ ] Add full specs for Scout, C20, K20, F450 when owner provides write-ups

## K10 Build Specs (confirmed by owner)
- 1979 K10 body on full AWD Denali chassis
- 6.0 LS stroked to 408 cubic inches
- Turbocharged - estimated 1,200-1,300 hp
- This is the "hero build" / face of the business
- Must be featured prominently with full spec callout on homepage

## K20 Build Detail Page - Phase 5

- [x] Upload all 20 K20 photos to CDN
- [x] Update K20 card in founding fleet with real specs
- [x] Create dedicated /builds/k20 page with full photo gallery + lightbox
- [x] Add K20 specs: 5.3 LS, 400hp, 4L80E, custom distressed leather interior, full nut-and-bolt restoration
- [x] Register /builds/k20 route in App.tsx
- [x] Link K20 card in gallery/homepage to dedicated build page

## F450 Hell Bitch Build Page - Phase 6

- [x] Upload all 18 F450 photos to CDN
- [x] Update K20 nickname to "Project Tweety Bird" across homepage and gallery
- [x] Create dedicated /builds/f450 page with full photo gallery and specs
- [x] F450 specs: 2015 Ford F-450 Super Duty, rollover restoration, Move bumpers, Bradford flatbed (customized), remote adjustable airbags, KC HiLiTES, Vivid Satin Black wrap, Fuel 20" black wheels, Bulldog performance chip, EGR delete
- [x] Update F450 card in homepage founding fleet with real specs and link
- [x] Update F450 card in gallery with real specs and link
- [x] Register /builds/f450 route in App.tsx

## Scout 80 Build Page - Phase 7

- [x] Upload all 10 Scout photos to CDN
- [x] Scout confirmed as 1961 model year (assembly began Dec 1960) - one of first 500 ever built
- [x] Create dedicated /builds/scout page with full story and specs
- [x] Scout specs: 1961 IH Scout 80, one of first 500 produced, 5.3 LS 500hp, 4L60E, Dana 44 front / Dana 60 rear (cut to fit), half-cab conversion, built by Clay for wife Stephanie
- [x] Update Scout card in homepage founding fleet with real specs and link
- [x] Update Scout card in gallery with real specs and link
- [x] Register /builds/scout route in App.tsx

## C20 Cheyenne Build Page - Phase 8

- [x] Upload all 21 C20 photos to CDN (14 original + 7 new build-process shots)
- [x] Create dedicated /builds/c20 page with 28-day challenge story
- [x] C20 specs: 1972 C20 Cheyenne Custom Camper Special, in-house rebuilt 402/396 factory big block, Turbo 400 transmission, custom reverse hood scoops (in-house designed), wooden bed, Shamrock green on pearl white paint, frame-off restoration
- [x] 28-day challenge: Clay and Mike bet they could do frame-off start to finish in 30 days, unveiled July 4th 2025, finished in 28 days
- [x] Update C20 card in homepage founding fleet with real specs and link
- [x] Update C20 card in gallery with real specs and link
- [x] Register /builds/c20 route in App.tsx

## K10 Nickname Update

- [x] Update K10 nickname from "The Flagship" to "Project Bill's Banshee" on Homepage
- [x] Update K10 nickname from "The Flagship" to "Project Bill's Banshee" on Gallery page
- [x] Update K10 nickname on any dedicated K10 build page if it exists (no dedicated page yet)

## Bug Fix - Homepage Hero CTA Buttons

- [x] Fix "Get a Quote" button floating/misaligned below AI Dream Build button in hero section — root cause was nested <a> tags from Link wrapping Button; fixed with asChild pattern across all hero CTAs

## Bug Fix - Nested Anchor Tags Site-Wide

- [x] Fix nested <a> tag errors on About page
- [x] Audit and fix nested <a> tag errors on all remaining pages — fixed Services, Contact, DreamBuild, QuoteRequest, Gallery, BuildK20 (F450/Scout/C20 used span not Button so were not affected)

## Content Corrections - Phase 9

- [x] K10 (Project Bill's Banshee): changed color label from "Blue on Blue" to "Bill's Banshee" on Homepage and Gallery
- [x] Scout: fixed owner name spelling to "Steffanie's Scout" on Homepage, Gallery, and BuildScout page (specs + hero + body text)
- [x] Tweety Bird (K20): updated description to "Custom Interior with Distressed Leather Accents" on Homepage and Gallery
- [x] Hell Bitch: fixed paint brand spelling to "Vivvid" on Homepage, Gallery, and BuildF450 page (specs + body text)

## Hero Headline Update - Phase 10

- [x] Identified Teko Bold as closest Google Font match to building sign lettering (tall, uniform stroke, wide-spaced condensed)
- [x] Replaced "Born at the Headwaters" with "HEADWATERS / CUSTOMS" using sign-title class on hero
- [x] "Built to Outlast the Ordinary" tagline kept below in brand-script font
- [x] Put "HEADWATERS CUSTOMS" on one line in hero
- [x] Match font to building sign — Playfair Display 700, wide letter-spacing (user confirmed Option 1 closest match)

## Services Update - Phase 11

- [x] Renamed to "Sandblasting & Commercial Coatings" on Services page and Homepage
- [x] Updated coating bullets: commercial grade epoxy, urethane and polyurea coatings, Cerakoting, coming soon high temperature powder coating
- [x] Added 3D Printing & Modeling as a new service card on Services page
- [x] Updated homepage services blurb to include commercial coatings and 3D printing
- [x] Fixed Frame-Off Restorations bullet that still referenced powder coating

## Scout Color Correction

- [x] Changed Scout paint color from "Candy Red" to "Pull Me Over Red & White Two-Tone" on Homepage, Gallery, and BuildScout page (specs, photo captions, body text)

## Services - Restomod Builds Update

- [x] Added "Custom designed and fabricated frames and chassis" to Restomod Builds bullet list on Services page
