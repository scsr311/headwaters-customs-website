# Headwaters Customs Website - TODO

## Phase 1: Core Platform & AI Features

### Design & Branding
- [x] Choose color palette and typography that reflects "alpha yet confident" brand voice
- [x] Design asymmetric hero layout with high-impact vehicle imagery
- [x] Implement mobile-responsive design optimized for all devices
- [x] Configure global theming in index.css

### Core Pages
- [x] Homepage with hero section and clear CTAs
- [x] Services page outlining all offerings (sandblasting, powder coating, LS swaps, frame-off restorations, custom fabrication)
- [x] About page with Headwaters Customs story and team introductions
- [x] Contact page with form, location map, phone, and business hours

### AI Dream Build Feature
- [x] Create database schema for dream build requests and generated images
- [x] Build frontend UI for text prompt input with example prompts
- [x] Implement OpenAI DALL-E integration on backend
- [x] Add rate limiting (6-8 free renders per session, IP-based throttling)
- [x] Implement email capture gateway for additional renders
- [x] Create image gallery display for generated renders
- [x] Add "Make It Real: Get a Quote" CTA on generated images
- [x] Set up cost controls and billing alerts

### AI-Assisted Quote Request
- [x] Create database schema for quote requests
- [x] Build frontend UI for photo upload (5-10 images)
- [x] Create modification checklist UI
- [x] Implement AI image analysis using OpenAI Vision API
- [x] Generate structured summary report (no pricing)
- [ ] Set up email delivery to customer and shop
- [x] Add form validation and error handling

### Finished Project Gallery
- [ ] Create database schema for projects (title, description, modifications, images)
- [ ] Build gallery grid view with filtering
- [ ] Create individual project detail pages
- [ ] Implement image upload and management
- [ ] Add admin interface for adding/editing projects

### Technical Infrastructure
- [x] Set up OpenAI API integration and secrets management
- [ ] Implement S3 storage for uploaded images and generated renders
- [x] Configure rate limiting middleware
- [ ] Set up email service integration
- [ ] Implement SEO optimization (meta tags, structured data, sitemap)
- [ ] Add Google Maps integration for contact page
- [x] Write comprehensive vitest tests for all features

### Deployment & Polish
- [ ] Final testing across all devices and browsers
- [ ] Performance optimization
- [ ] Create initial checkpoint for deployment
