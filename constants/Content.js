import {
  FaBed,
  FaCouch,
  FaUsers,
  FaSwimmingPool,
  GiMeal,
  FaMusic,
  LuCigaretteOff,
  FaWifi,
  FaTv,
  FaBlog,
  MdOutlineNoMeals,
  MdNoMeals,
  GiCigar,
  GiCigarette,
  FaDrumstickBite,
  FaFreeCodeCamp,
  FaBottleDroplet,
  FaPerson,
  FaBookReader,
  FaChessKing,
  FaFutbol,
  FaCocktail,
  FaBuffer,
  FaParking,
  FaBottleWater,
  FaUserLock,
  FaPhoneVolume,
  FaBuilding,
  FaPaw,
  FaRestroom,
  FaBan,
  FaBirthdayCake,
  FaUtensils,
  FaToiletPaper,
  FaPersonBooth,
  FaFirstAid,
  FaUserMd,
  FaCar,
  FaHandshake,
  FaHotel,
  FaRulerCombined,
  FaClock,
  FaPowerOff,
  FaVirus,
  FaUserTie,
  GiWashingMachine,
  FaGlassWaterDroplet,
} from "react-icons/fa";
import {
  Home,
  PersonStanding,
  CigaretteOff,
  User,
  WashingMachine,
  Droplets,
  Milk,
  Settings,
  Mail,
  Bell,
  Star,
  Check,
  AlertCircle,
  Calendar,
  Coffee,
  Music,
  Camera,
  Heart,
  Film,
  UtensilsCrossed,
} from "lucide-react";
import exp from "constants";

export const carouselContent = [
  [
    {
      id: 1,
      icon: FaBed,
      title: "6 Master Bedrooms",
      description: "Air conditioned with an attached balcony",
    },
    {
      id: 2,
      icon: FaCouch,
      title: "Spacious Living Room",
      description: "Sofa Set | Dining Area | Fully Air Conditioned",
    },
    {
      id: 3,
      icon: FaUsers,
      title: "25-30 guests",
      description: "Suitable for family, friends and corporate getaways",
    },
    {
      id: 4,
      icon: FaSwimmingPool,
      title: "Private Swimming Pool",
      description:
        "Full size | Waterfall | Patio loungers | Underwater LED Lighting",
    },
    {
      id: 5,
      icon: UtensilsCrossed,
      title: "Meals",
      description:
        "Vegetarian | Non-Vegetarian | Jain Meal Plan (Breakfast, Lunch, High Tea, Dinner) ",
    },
    {
      id: 6,
      icon: FaMusic,
      title: "Music System",
      description: "Bluetooth, USB & AUX connectivity | Karaoke",
    },
    {
      id: 7,
      icon: FaWifi,
      title: "High-Speed WiFi",
      description: "Speed upto 30 MBPS",
    },
    {
      id: 8,
      icon: FaTv,
      title: "Smart Television",
      description: "Full HD 50 inch LED",
    },
    {
      id: 9,
      icon: FaBlog,
      title: "Online Streaming",
      description: "Netflix | Disney + Hotstar | Amazon Prime",
    },
  ],
  [
    {
      id: 10,
      icon: FaDrumstickBite,
      title: "Barbeque 2",
      description: "Outdoor BBQ fun",
    },
    {
      id: 11,
      icon: CigaretteOff,
      title: "Sheesha ",
      description: "Relax with Sheesha",
    },
    {
      id: 12,
      icon: FaFreeCodeCamp,
      title: "Bonfire 2",
      description: "Enjoy a cozy bonfire",
    },
    {
      id: 13,
      icon: Milk,
      title: "Packaged Drinking Water 2",
      description: "Complimentary",
    },
    {
      id: 14,
      icon: PersonStanding,
      title: "Concierge and Housekeeping Staff 2",
      description: "Professional, highly trained & experienced",
    },
    {
      id: 15,
      icon: FaBookReader,
      title: "Mini-Library 2",
      description: "Fiction, Biography, Children, Fantasy",
    },
    {
      id: 16,
      icon: FaChessKing,
      title: "Indoor Activities 2",
      description: "Carrom, Chess, UNO, Jenga, Scrabble, Monopoly",
    },
    {
      id: 17,
      icon: FaFutbol,
      title: "Outdoor Sports 2",
      description: "Cricket Kit, Badminton Set, Football",
    },
    {
      id: 18,
      icon: FaCocktail,
      title: "Mocktails on arrival 2",
      description: "Piña Colada, Mojito, Blue Curaçao",
    },
  ],
  [
    {
      id: 19,
      icon: FaBuffer,
      title: "High Quality Mattresses,Towels and Linens",
      description: "Comfortable and cozy stay",
    },
    {
      id: 20,
      icon: FaParking,
      title: "Secure Car Park",
      description: "Under CCTV Surveillance",
    },
    {
      id: 21,
      icon: FaUserLock,
      title: "24X7 Security",
      description: "CCTV Cameras | Security Guard | Fire Extinguishers",
    },
    {
      id: 22,
      icon: FaPhoneVolume,
      title: "Intercom",
      description: "Room to Room | Room to Housekeeping",
    },
    {
      id: 23,
      icon: FaBuilding,
      title: "Terrace",
      description: "Large sit out area on Level 1",
    },
    {
      id: 24,
      icon: FaRestroom,
      title: "8 Washrooms",
      description: "Modern Fittings and Amenities",
    },
    {
      id: 25,
      icon: FaPaw,
      title: "Pet Friendly",
      description: "We love out Four-Legged friends",
    },
    {
      id: 26,
      icon: FaBan,
      title: "Swimming pool timings",
      description: "No restriction",
    },
    {
      id: 27,
      icon: FaBirthdayCake,
      title: "Events, Functions and Parties",
      description: "Planning | Organizing | Execution",
    },
  ],
  [
    {
      id: 28,
      icon: FaUtensils,
      title: "Fully stocked kitchen",
      description: "Refrigerator | Microwave | Cookware | Gas Stove & Cylinder",
    },
    {
      id: 29,
      icon: FaToiletPaper,
      title: "Toiletries",
      description: "Ignis Range by Five Elements",
    },
    {
      id: 30,
      icon: FaPersonBooth,
      title: "Wardrobes and garment hangers",
      description: "In all bedrooms",
    },
    {
      id: 31,
      icon: FaFirstAid,
      title: "First Aid Kit",
      description: "Emergency Supplies",
    },
    {
      id: 32,
      icon: FaBuffer,
      title: "Extra Mattresses",
      description: "For additional guests",
    },
    {
      id: 33,
      icon: FaUserMd,
      title: "Doctor on Call",
      description: "24X7",
    },
    {
      id: 34,
      icon: FaCar,
      title: "Airport Transfers4",
      description: "Pickup and drop off services",
    },
    {
      id: 35,
      icon: FaHandshake,
      title: "24X7 Guest Care",
      description: "+91 9667555554",
    },
    {
      id: 36,
      icon: FaHotel,
      title: "Driver's Quarters",
      description: "Accomodation | Meals",
    },
  ],
  [
    {
      id: 37,
      icon: FaRulerCombined,
      title: "Total area spread over",
      description: "8,000 sq feet",
    },
    {
      id: 38,
      icon: FaClock,
      title: "Check-In and Check-Out Timings",
      description: "Flexible",
    },
    {
      id: 39,
      icon: FaPowerOff,
      title: "Inverter",
      description: "Incase of electric cut-out",
    },
    {
      id: 40,
      icon: FaVirus,
      title: "COVID-19 Safety Practices",
      description: "WHO Recommended",
    },
    {
      id: 41,
      icon: FaUserTie,
      title: "In House Caretaker",
      description: "24 Hours",
    },
    {
      id: 42,
      icon: WashingMachine,
      title: "Laundry & Dry Cleaning Services",
      description: "Services Available",
    },
    {
      id: 43,
      icon: Droplets,
      title: "UV Water Purifier",
      description: "Clean & Safe drinking water",
    },
  ],
];

export const cardContent = [
  {
    id: 1,
    title: "Loyalty Programme:",
    description:
      "At Alpine Riverhill, we appreciate loyalty as much as you do. To acknowledge the same, we offer a discount of ₹2,000 on your next booking with us. No questions asked. ",
  },
  {
    id: 2,
    title: " Referral Programme:",
    description:
      "Loved your stay at Alpine Riverhill? Refer us to your family and friends and get a flat discount of ₹2,000 on your next booking with us.",
  },
  {
    id: 3,
    title: "Let us serve you longer:",
    description:
      "Book for a minimum of 3 nights and get a whooping 25% discount on your reservation.",
  },
];

export const gridContent = [
  {
    id: 1,
    title: "Teamwork",
    description:
      "We recognize that superlative performance is always the result of teamwork.",
  },
  {
    id: 2,
    title: "Ownership",
    description: "We always take responsibility for our actions.",
  },
  {
    id: 3,
    title: "Respect and Empathy",
    description:
      "We exhibit respect and concern for colleagues, guests and partners.",
  },
  {
    id: 4,
    title: "Integrity",
    description:
      "We always maintain the highest standards of fairness and transparency in all our dealings.",
  },
  {
    id: 5,
    title: "Spirited Fun",
    description:
      "We create an exciting and spirited work environment encouraging our colleagues to think freely.",
  },
  {
    id: 6,
    title: "Excellence",
    description: "We always drive excellence in what we do.",
  },
  {
    id: 7,
    title: "Honesty and Integrity ",
    description:
      "At Alpine Riverhill, we inspire fairness and trust in our day-to-day dealings with our stakeholders by saying what we mean and synchronizing our words and actions. We take full accountability for our actions.",
  },
  {
    id: 8,
    title: "Interactive yet responsible communication  ",
    description:
      "We maintain open communication with each other and consciously communicate in a pleasant manner in order to have a positive impact. Communication at Alpine Riverhill is about effectively choosing one’s words, stating one’s purpose and expected outcome, and being accountable and assuming responsibility for the impact and outcome of one’s communication.",
  },
  {
    id: 9,
    title: "Devotion to Duty",
    description:
      "At Alpine Riverhill, we commit ourselves wholeheartedly towards achieving a common goal reflecting in our actions. We have an objective of building a sense of pride and ownership amongst all the employees. This initiative is about alignment of goals at individual and organizational level, greater col-lg-10 culture.",
  },
  {
    id: 10,
    title: "Minimizing Waste",
    description:
      "At Alpine Riverhill, we constantly endeavour to adopt practices that reduce wastage by dispensing with non-value-added activities.",
  },
  {
    id: 11,
    title: "Respect for Individuals",
    description:
      "At Alpine Riverhill, we nurture a transparent and trusting culture by treating every employee with dignity. We also value our employees and endeavour to develop and reward performance. We believe every individual working with us possesses certain strengths and the organization should strive to leverage them.",
  },
];

export const testimonialsContent = [
  {
    id: 1,
    content:
      " A stay at Alpine Riverhill let's you experience Lonavala's natural beauty in an intimate environment. One of Lonavala's most sought-after villas, a stay at Alpine Riverhill promises all the comforts of home and the luxury of a hotel. Located amongst greenery, this grand space is replete with amenities. Here, you can spend your days enjoying the soothing mountain breeze as the on-site staff attend to your needs. As the sun sets, take a stroll by the pool, where you can enjoy mouth-watering grilled tandoori dishes.",
  },
  {
    id: 2,
    content:
      " For those seeking serenity, Alpine Riverhill offers a perfect location peacefully nestled in a cozy environment. The villa's natural beauty and five star amenities make it an unforgettable place to call your own. Each morning, enjoy the birds chirping while savoring your breakfast.",
  },
  {
    id: 3,
    content:
      "  It is almost too easy to fall in love with the warm and welcoming ambience, great food, hospitality and aminities. While you'll have no shortage of options, I recommend the tasty barbecue and sheesha by the poolside. Combine everything Alpine Riverhill has to offer and you will have the recipe for an ideal vacation for family and friends alike. ",
  },
  {
    id: 4,
    content:
      " You would never want to leave this tranquil getaway overlooking the mesmerizing tree cover. Alpine Riverhill, a luxury boutique villa, embodies peace and serenity. It's elegant design blends into the surrounding vistas and landscapes. Enjoy the contemporary comforts of this villa with hours spent relaxing on sun loungers and diving into the refreshing waters of your own private swimming pool. ",
  },
  {
    id: 5,
    content:
      "Whether it's your first time visiting or hundredth, Alpine Riverhill never fails to impress. From the library to the barbeque and bonfire, from hookah to the games and the music system, there's somethWhether it's your first time visiting or hundredth, Alpine Riverhill never fails to impress. From the library to the barbeque and bonfire, from hookah to the games and bonfire, there's something here for everyone.                    ",
  },
  {
    id: 6,
    content:
      "Alpine Riverhill is the ideal destination for your next family reunion. Tucked away behind lush greenery and trees, this villa offers the perfect balance of privacy and accessibility.                    ",
  },
  {
    id: 7,
    content:
      "Pool parties, barbeque, bonfire and sheesha - all of the above are on the menu at this luxe villa in Lonavla. A stay here is about decadent leisure. It's hard to imagine a better vacation without Alpine RiverHill.                    ",
  },
  {
    id: 8,
    content:
      " More than a vacation rental, Alpine Riverhill feels like a luxirious hotel. We enjoyed the resort-like amenities and hospitality complimented by the surrounding lush greenery.                    ",
  },
  {
    id: 9,
    content:
      "  Warning: you may never want to leave this jaw-dropping villa.Alpine Riverhill is the ideal retreat when in Lonavala. It will leave you spellbound. The space gives you a fresh modern vibe with loads of coziness that's sophisticated and welcoming. The 6 master bedroom villa comes complete with a housekeeper, private swimming pool and an exceptional chef, all waiting to make your stay a memorable one.                    ",
  },
  {
    id: 10,
    content:
      "Alpine Riverhill is the ideal retreat when in Lonavala. It will leave you spellbound. The space gives you a fresh modern vibe with loads of coziness that's sophisticated and welcoming. The 6 master bedroom villa comes complete with a housekeeper, private swimming pool and an exceptional chef, all waiting to make your stay a memorable one.                    ",
  },
  {
    id: 11,
    content:
      "Luxury at its peak. Went with friends to celebrate a birthday. Extremely courteous staff and management. The rooms area really clean and the food is just spectacular. We also did a barbecue there by the poolside and the food was so good. The pool was really clean and so was the bungalow. Definitely recommend going to this place!   ",
  },
];
