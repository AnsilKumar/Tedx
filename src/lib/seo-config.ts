// SEO Configuration for TEDx AIET
export const seoConfig = {
  siteName: 'TEDx AIET',
  siteUrl: 'https://tedxaiet.com',
  defaultTitle: 'TEDx AIET 2025 - Ideas Worth Spreading | Official Event',
  defaultDescription: 'Join TEDx AIET 2025 featuring inspiring speakers including Lt Gen A Arun, Suyog Shetty, and more. Experience transformative ideas, innovation, and networking at Alva\'s Institute of Engineering and Technology.',
  defaultKeywords: [
    'TEDx AIET',
    'TEDx AIET 2025', 
    'TED talks',
    'Alva\'s Institute',
    'Engineering Technology',
    'Innovation',
    'Ideas Worth Spreading',
    'Speakers',
    'Conference',
    'Event',
    'Moodbidri',
    'Karnataka',
    'India'
  ],
  social: {
    x: 'https://twitter.com/tedxaiet27260',
    instagram: 'https://www.instagram.com/tedxaiet/',
    linkedin: 'https://www.linkedin.com/in/tedxaiet/',
  },
  contact: {
    email: 'tedxaiet@gmail.com',
    phone: '+91 6360544717',
  },
  event: {
    name: 'TEDx AIET 2025',
    date: '2025-02-15',
    startTime: '09:30:00+05:30',
    endTime: '16:30:00+05:30',
    location: {
      name: 'Alva\'s Institute of Engineering and Technology',
      address: 'Shobhavana Campus, Mijar, Moodbidri, Karnataka 574225, India',
      coordinates: {
        latitude: 13.017311,
        longitude:  74.956667,
      }
    }
  },
  speakers: [
    {
      name: 'Lt Gen A Arun, PVSM,YSM,SM,VSM',
      description: 'A soldier, storyteller, and leader',
      image: '/speaker/arun.png'
    },
    {
      name: 'Suyog Shetty',
      description: 'Co-founder and CEO of Niveus Solutions',
      image: '/speaker/suyog_shetty.jpg'
    },
    {
      name: 'Patla Sathish Shetty',
      description: 'Celebrated Yakshagana Bhagavatha',
      image: '/speaker/satish_patla.jpg'
    },
    {
      name: 'Abhishek Mishra',
      description: 'Creator of \'In Other Words\'',
      image: '/speaker/abhishek-mishras.jpeg'
    },
    {
      name: 'Janaki Anand',
      description: 'India\'s youngest skateboarding prodigy',
      image: '/speaker/janki.png'
    },
    {
      name: 'Dr. Achyuthan Eswar',
      description: 'Plant-based nutrition advocate',
      image: '/speaker/achutank.jpeg'
    },
    {
      name: 'Sufiyan Alam',
      description: 'Physics content creator and actor',
      image: '/speaker/sufiyan_alam2.jpeg'
    }
  ]
};

export const generatePageMetadata = (
  title: string,
  description: string,
  path: string,
  keywords?: string[],
  image?: string
) => ({
  title,
  description,
  keywords: keywords || seoConfig.defaultKeywords,
  openGraph: {
    title,
    description,
    url: `${seoConfig.siteUrl}${path}`,
    siteName: seoConfig.siteName,
    images: [
      {
        url: image || '/logo-white-tedxaiet.png',
        width: 1200,
        height: 630,
        alt: title,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  x: {
    card: 'summary_large_image',
    title,
    description,
    images: [image || '/logo-white-tedxaiet.png'],
    creator: seoConfig.social.x,
    site: seoConfig.social.x,
  },
  
  alternates: {
    canonical: path,
  },
});