// JSON-LD for the doctor + both clinic locations.
//
// Geo coordinates below are *approximate* (neighborhood-level) — they will get
// you a valid LocalBusiness in Google's eyes but the marker on Maps may be
// ~500m off the actual clinic door. Replace with exact lat/long from Google
// Maps after you confirm in Google Business Profile.

const SITE_URL = "https://www.drdubay.in"
const PHONE = "+91-8955373205"
const EMAIL = "connect@drdubay.in"
const HERO_IMAGE = `${SITE_URL}/assets/images/hero.png`

const SOCIAL_LINKS = [
  "https://www.facebook.com/drdheerajdubay/",
  "https://www.instagram.com/dheerajdubay1/",
  "https://www.youtube.com/@dr.dheerajdubay6664",
  "https://www.linkedin.com/in/dr-dheeraj-dubay-36399599/",
]

// Cities the practice actively serves through OPD camps + travelling patients.
// Keep in sync with lib/city-pages.ts.
const AREA_SERVED = [
  "Jaipur", "Bikaner", "Kota", "Udaipur", "Ajmer", "Sikar", "Alwar",
  "Jodhpur", "Bharatpur", "Jhunjhunu", "Churu", "Sawai Madhopur", "Tonk",
  "Dausa", "Nagaur", "Hanumangarh", "Pali", "Dholpur", "Bundi",
  "Agra", "Mathura",
]

const PROCEDURES_OFFERED = [
  "Robotic Knee Replacement",
  "Zero-Technique Knee Replacement",
  "Total Knee Replacement",
  "Partial Knee Replacement",
  "Bilateral Knee Replacement",
  "Revision Knee Replacement",
  "Hip Replacement Surgery",
  "Computer Navigation Surgery",
  "Minimally Invasive Joint Surgery",
]

export const PhysicianJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    "name": "Dr. Dheeraj Dubay",
    "alternateName": "डॉ. धीरज दुबे",
    "honorificPrefix": "Dr.",
    "description":
      "Director, Robotic Joint Replacement Surgery at Shalby Hospital Jaipur. " +
      "23+ years experience, 35,000+ successful surgeries, Forbes World Record holder.",
    "url": SITE_URL,
    "telephone": PHONE,
    "email": EMAIL,
    "image": HERO_IMAGE,
    "priceRange": "₹₹₹",
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "MBBS" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "MS (Orthopedic)" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "FJRS (Germany)" },
    ],
    "medicalSpecialty": "Orthopedic Surgery",
    "knowsAbout": PROCEDURES_OFFERED,
    "areaServed": AREA_SERVED.map((name) => ({ "@type": "City", name })),
    "worksFor": {
      "@type": "Hospital",
      "name": "Shalby Hospital Jaipur",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "200 Feet Bypass Road, Vaishali Nagar",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302021",
        "addressCountry": "IN",
      },
    },
    "award": [
      "Forbes World Record - Highest Joint Replacement Surgeries in a Single Day",
      "ET Inspiring Leaders Award 2025",
      "UK Honour Recognition 2024",
      "Most Trusted Joint Replacement Surgeon of North India",
    ],
    "sameAs": SOCIAL_LINKS,
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const MedicalBusinessJsonLd = () => {
  // @graph with two clinic locations — gives Google both addresses for the
  // local pack, and ties them back to the same Physician entity via @id.
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": `${SITE_URL}/#clinic-shalby`,
        "name": "Dr. Dheeraj Dubay — Shalby Hospital Jaipur",
        "url": `${SITE_URL}/locations`,
        "telephone": PHONE,
        "email": EMAIL,
        "image": HERO_IMAGE,
        "priceRange": "₹₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, UPI, Insurance",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shalby Hospital, 200 Feet Bypass Road, Vaishali Nagar",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302021",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.9100",
          "longitude": "75.7280",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "17:00",
          },
        ],
        "medicalSpecialty": "Orthopedic Surgery",
        "availableService": PROCEDURES_OFFERED.map((name) => ({
          "@type": "MedicalProcedure",
          "name": name,
        })),
        "areaServed": AREA_SERVED.map((name) => ({ "@type": "City", name })),
        "physician": { "@id": `${SITE_URL}/#physician` },
        "sameAs": SOCIAL_LINKS,
      },
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": `${SITE_URL}/#clinic-vidhyadhar-nagar`,
        "name": "Dr. Dubay Hip & Knee Clinic — Vidhyadhar Nagar",
        "url": `${SITE_URL}/locations`,
        "telephone": PHONE,
        "email": EMAIL,
        "image": HERO_IMAGE,
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, UPI",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "297, Gali Number 6, Kusum Vihar, Vidhyadhar Nagar",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302017",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.9633",
          "longitude": "75.7693",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "18:00",
            "closes": "20:00",
          },
        ],
        "medicalSpecialty": "Orthopedic Surgery",
        "physician": { "@id": `${SITE_URL}/#physician` },
        "sameAs": SOCIAL_LINKS,
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
