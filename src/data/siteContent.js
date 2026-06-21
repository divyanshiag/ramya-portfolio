/** @typedef {{ id: string; title: string; date: string; body: string; icon: string }} Milestone */
/** @typedef {{ id: string; src: string; alt: string; caption: string }} GalleryItem */
/** @typedef {{ id: string; label: string; icon: string }} LoveItem */
/** @typedef {{ id: string; label: string; value: string; hint?: string }} GrowthStat */

/**
 * Photos live in `public/photos/`. Use paths **without** a leading slash (e.g. `photos/x.png`);
 * components resolve them with `publicUrl()` so GitHub Pages `base` works.
 * @type {{
 *   babyName: string
 *   babyFullName: string
 *   tagline: string
 *   birthDate: string
 *   birthTime: string
 *   heroImage: { src: string; alt: string }
 *   aboutPortrait: { src: string; alt: string }
 *   aboutParagraphs: string[]
 *   milestones: Milestone[]
 *   gallery: GalleryItem[]
 *   loves: LoveItem[]
 *   growthStats: GrowthStat[]
 *   growthDisclaimer: string
 *   parentMessage: { quote: string; attribution: string }
 *   footer: { year: number; note: string }
 * }}
 */
export const siteContent = {
  babyName: 'Ramya',
  babyFullName: 'Ramya Jain',
  tagline: 'Our little light — daughter of Porush and Divyanshi, born in the heart of summer 2025.',
  birthDate: '2025-08-19',
  birthTime: '3:15 PM',
  heroImage: {
    src: '${import.meta.env.BASE_URL}photos/ramya-hero.png',
    alt: 'Ramya Jain in a soft blue knit sweater, sweet close-up portrait',
  },
  aboutPortrait: {
    src: '${import.meta.env.BASE_URL}photos/ramya-formal.png',
    alt: 'Professional portrait of Ramya Jain in an elegant black dress with rose detail',
  },
  aboutParagraphs: [
    'Ramya Jain was born on 19 August 2025 at 3:15 PM and changed everything in the gentlest, happiest way. Her parents, Porush Jain and Divyanshi Agarwal, are soaking up every coo, stretch, and sleepy smile.',
    'This little page is her story so far — milestones from her first months, favorite tiny joys, and notes we never want to fade.',
  ],
  milestones: [
    {
      id: 'm1',
      title: 'First hello',
      date: 'Aug 19, 2025',
      body: 'Ramya arrived, and the world felt instantly softer and brighter.',
      icon: 'Sparkles',
    },
    {
      id: 'm2',
      title: 'First smile',
      date: 'Sep 2025',
      body: 'That first real smile — we replay it in our hearts every day.',
      icon: 'Smile',
    },
    {
      id: 'm3',
      title: 'Rolled over',
      date: 'Nov 2025',
      body: 'Tiny tummy time wins and a big milestone for our little explorer.',
      icon: 'RotateCcw',
    },
    {
      id: 'm4',
      title: 'First giggles',
      date: 'Dec 2025',
      body: 'The sweetest sound — pure joy wrapped in a little laugh.',
      icon: 'Laugh',
    },
  ],
  gallery: [
    {
      id: 'g1',
      src: '${import.meta.env.BASE_URL}photos/ramya-playground.png',
      alt: 'Ramya sitting on a small chair in a bright play space with colorful foam blocks',
      caption: 'Playground sparkle',
    },
    {
      id: 'g2',
      src: '${import.meta.env.BASE_URL}photos/ramya-one-month.png',
      alt: 'Ramya in a pink fuzzy outfit celebrating one month on a navy blanket',
      caption: 'One month milestone',
    },
    {
      id: 'g3',
      src: '${import.meta.env.BASE_URL}photos/ramya-cake.png',
      alt: 'Welcome cake for Ramya with name and date 19 August 2025',
      caption: 'Sweet welcome, 19 Aug 2025',
    },
    {
      id: 'g4',
      src: '${import.meta.env.BASE_URL}photos/ramya-stairs.png',
      alt: 'Ramya in a cream cardigan and beanie sitting on granite steps',
      caption: 'Little fashion moment',
    },
  ],
  loves: [
    { id: 'l1', label: 'Bubble baths', icon: 'Bath' },
    { id: 'l2', label: 'Lullabies', icon: 'Music' },
    { id: 'l3', label: 'Stroller rides', icon: 'Baby' },
    { id: 'l4', label: 'Soft books', icon: 'BookOpen' },
    { id: 'l5', label: 'Morning light', icon: 'Sun' },
    { id: 'l6', label: 'Tickles', icon: 'HandHeart' },
  ],
  growthStats: [
    { id: 'gr1', label: 'Weight', value: '15 lb', hint: 'example — update after checkups' },
    { id: 'gr2', label: 'Height', value: '25 in', hint: 'example — update after checkups' },
    { id: 'gr3', label: 'Head', value: '16.5 in', hint: 'for fun tracking' },
  ],
  growthDisclaimer:
    'Numbers are placeholders you can refresh after visits — not medical advice, just our scrapbook notes for 2025.',
  parentMessage: {
    quote:
      'Ramya, we hope you always feel how loved you are — by us, by your family, and by this big, beautiful world you joined in August 2025. Keep shining, little one.',
    attribution: '— Porush Jain & Divyanshi Agarwal',
  },
  footer: {
    year: 2025,
    note: 'Made with love by Porush and Divyanshi for family and friends.',
  },
}
