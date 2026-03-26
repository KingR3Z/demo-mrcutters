export const client = {
  // Business Details
  name: "MrCutters",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Brighton.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07377 421845",
  email: "",
  website: "",

  // Location
  address: "Brighton",
  city: "Brighton",
  county: "",
  postcode: "",
  basedIn: "Brighton",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Oliver Bennett", rating: 5, text: "We had MrCutters come out to completely transform our back garden and we couldn't be happier. They listened to exactly what we wanted and delivered beyond our expectations. The attention to detail was incredible — every edge, every plant placement...", date: "5 months ago" },
    { name: "Neil Brooks", rating: 5, text: "Hired MrCutters for a full garden redesign and the results speak for themselves. The team worked hard, kept us informed throughout, and left the site spotless each day. It's like having a brand new garden. Highly recommend to anyone in Brighton.", date: "3 months ago" },
    { name: "Sue Patel", rating: 5, text: "Top quality work from MrCutters. They redesigned our outdoor space and it's now our favourite part of the house. The whole family spends so much more time outside now. Couldn't be happier.", date: "3 years ago" },
    { name: "Anna W.", rating: 5, text: "MrCutters recently completed a major landscaping project for us and the quality is exceptional. The team worked through some challenging weather but still delivered on time. Genuinely thrilled with the outcome.", date: "6 months ago" },
    { name: "Matthew J.", rating: 5, text: "We found MrCutters online and after reading about their work, decided to give them a call. So glad we did — the garden has been completely transformed. Professional from start to finish.", date: "2 months ago" },
    { name: "Tracey Carter", rating: 5, text: "From start to finish, working with MrCutters was a pleasure. They arrived when they said they would, worked efficiently, and the end result is stunning. Several friends have commented on how good the garden looks now.", date: "3 years ago" },
    { name: "Gemma Rogers", rating: 5, text: "After getting several quotes, we went with MrCutters and it was the best decision. Not the cheapest, but the quality of work is in a different league. Professional, reliable, and the results are gorgeous.", date: "2 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "MrCutters | Landscaper in Brighton",
    description: "Professional landscaper in Brighton. 5.0-star rated on Google. Call for a free quote.",
  },
};
