// Complete Destinations Database - 30 Destinations
// Cover images remain as original, Carousel images are new (3 per destination)

const destinationsDB = [
  // ==================== KERALA (6 Destinations) ====================
  {
    id: 1,
    name: "Alleppey Backwaters",
    state: "Kerala",
    desc: "Houseboat Paradise",
    category: "beach",
    img: "assets/images/kerala-backwaters.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/ALLEPEY1.jpg", "assets/images/ALLEPEY 2.jpg", "assets/images/ALLEPEY 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "The most iconic backwater destination in Kerala. Cruise through palm-fringed canals in traditional houseboats.",
    highlights: ["🏠 Overnight houseboat stay", "🌿 Village walks", "🦜 Bird watching", "🌅 Sunset cruise"],
    nearby: [
      { name: "Kumarakom Bird Sanctuary", distance: "25 km", time: "45 mins", description: "Famous migratory bird sanctuary" },
      { name: "Kuttanad", distance: "15 km", time: "30 mins", description: "Rice bowl of Kerala" },
      { name: "Marari Beach", distance: "12 km", time: "20 mins", description: "Serene beach with fishing village" },
      { name: "Pathiramanal Island", distance: "10 km", time: "30 mins boat", description: "Beautiful small island" },
      { name: "Ambalapuzha Temple", distance: "8 km", time: "15 mins", description: "Famous Sri Krishna Temple" }
    ],
    transport: { airport: "Cochin International (85 km)", railway: "Alleppey Station", bus: "Alleppey KSRTC" },
    hotel: "Houseboats: ₹8,000-25,000 | Resorts: ₹3,500-12,000",
    rating: 4.8, lat: 9.4981, lng: 76.3388
  },
  {
    id: 2,
    name: "Munnar",
    state: "Kerala",
    desc: "Tea Gardens Paradise",
    category: "hill",
    img: "assets/images/munnar.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/MUNNAR 1.jpg", "assets/images/MUNNAR 2.jpg", "assets/images/MUNNAR 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Beautiful hill station covered with endless tea plantations and misty mountains.",
    highlights: ["🍃 Tea estate tours", "🗻 Echo Point", "🏞️ Mattupetty Dam", "🐐 Eravikulam National Park"],
    nearby: [
      { name: "Echo Point", distance: "15 km", time: "30 mins", description: "Natural echo phenomenon" },
      { name: "Top Station", distance: "32 km", time: "1 hour", description: "Highest point" },
      { name: "Devikulam", distance: "8 km", time: "15 mins", description: "Scenic hill station" },
      { name: "Chinnar Wildlife", distance: "60 km", time: "2 hours", description: "Dry deciduous forest" },
      { name: "Anamudi Peak", distance: "25 km", time: "1 hour", description: "Highest peak in South India" }
    ],
    transport: { airport: "Cochin International (130 km)", railway: "Aluva (110 km)", bus: "Munnar Bus Station" },
    hotel: "₹2,000 - ₹15,000 per night",
    rating: 4.7, lat: 10.0889, lng: 77.0595
  },
  {
    id: 3,
    name: "Kovalam Beach",
    state: "Kerala",
    desc: "Golden Beach",
    category: "beach",
    img: "assets/images/kovalam.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/KOVALAM 1.jpg", "assets/images/KOVALAM 2.jpg", "assets/images/KOVALAM 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "World-famous crescent-shaped beach with lighthouse and Ayurvedic centers.",
    highlights: ["🗼 Lighthouse visit", "🧘 Beach yoga", "💆 Ayurvedic massage"],
    nearby: [
      { name: "Varkala", distance: "45 km", time: "1 hour", description: "Cliff beach" },
      { name: "Poovar", distance: "20 km", time: "40 mins", description: "Backwater island" },
      { name: "Trivandrum Zoo", distance: "16 km", time: "30 mins", description: "Oldest zoo in India" },
      { name: "Padmanabhaswamy Temple", distance: "15 km", time: "30 mins", description: "Famous temple" },
      { name: "Shanghumukham Beach", distance: "12 km", time: "20 mins", description: "Sunset viewing" }
    ],
    transport: { airport: "Trivandrum (15 km)", railway: "Trivandrum Central", bus: "Kovalam" },
    hotel: "₹1,800 - ₹20,000 per night",
    rating: 4.5, lat: 8.4204, lng: 76.9784
  },
  {
    id: 4,
    name: "Varkala",
    state: "Kerala",
    desc: "Cliff Beach",
    category: "beach",
    img: "assets/images/varkala.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/VARAKALA 1.jpg", "assets/images/VARAKALA 2.jpg", "assets/images/VARAKALA 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Unique cliff-side beach known for mineral springs and spiritual vibe.",
    highlights: ["🏄 Surfing", "🕉️ Janardhana Temple", "🌊 Cliff walks", "💧 Natural springs"],
    nearby: [
      { name: "Kappil Beach", distance: "6 km", time: "15 mins", description: "Secluded beach" },
      { name: "Sivagiri Mutt", distance: "3 km", time: "10 mins", description: "Spiritual center" },
      { name: "Ponnumthuruthu Island", distance: "10 km", time: "30 mins boat", description: "Private island" },
      { name: "Anjengo Fort", distance: "12 km", time: "25 mins", description: "Historic Dutch fort" }
    ],
    transport: { airport: "Trivandrum (45 km)", railway: "Varkala Sivagiri", bus: "Varkala" },
    hotel: "₹2,000 - ₹12,000/night",
    rating: 4.6, lat: 8.7379, lng: 76.7223
  },
  {
    id: 5,
    name: "Thekkady",
    state: "Kerala",
    desc: "Wildlife Sanctuary",
    category: "wildlife",
    img: "assets/images/thekkady.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/THEKKADY 1.jpg", "assets/images/THEKKADY 2.webp", "assets/images/THEKKADY 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Periyar Wildlife Sanctuary famous for elephant and tiger safaris.",
    highlights: ["🛶 Boat safari", "🌿 Jungle trek", "🌶️ Spice plantation tour"],
    nearby: [
      { name: "Periyar Lake", distance: "2 km", time: "10 mins", description: "Scenic lake" },
      { name: "Murikkady", distance: "5 km", time: "15 mins", description: "Spice plantations" },
      { name: "Chellarkovil", distance: "15 km", time: "30 mins", description: "Waterfall view" },
      { name: "Mangala Devi Temple", distance: "15 km", time: "40 mins", description: "Ancient temple" },
      { name: "Gavi", distance: "40 km", time: "1.5 hours", description: "Eco-tourism spot" }
    ],
    transport: { airport: "Madurai / Cochin", railway: "Kottayam", bus: "Thekkady" },
    hotel: "₹2,500 - ₹14,000 per night",
    rating: 4.7, lat: 9.5998, lng: 77.1643
  },
  {
    id: 6,
    name: "Wayanad",
    state: "Kerala",
    desc: "Forests & Waterfalls",
    category: "hill",
    img: "assets/images/wayanad.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/WAYANAD 1.jpg", "assets/images/WAYANAD 2.jpg", "assets/images/WAYANAD 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Lush green hills, wildlife and breathtaking waterfalls.",
    highlights: ["🏔️ Edakkal Caves", "🏞️ Chembra Peak", "🌊 Pookode Lake"],
    nearby: [
      { name: "Edakkal Caves", distance: "10 km", time: "20 mins", description: "Prehistoric caves" },
      { name: "Banasura Sagar Dam", distance: "20 km", time: "40 mins", description: "Largest earth dam" },
      { name: "Soochipara Falls", distance: "18 km", time: "35 mins", description: "Three-tiered waterfall" },
      { name: "Kuruva Island", distance: "40 km", time: "1.5 hours", description: "River island" },
      { name: "Lakkidi Viewpoint", distance: "25 km", time: "50 mins", description: "Scenic view" }
    ],
    transport: { airport: "Calicut (90 km)", railway: "Kozhikode", bus: "Kalpetta" },
    hotel: "₹2,000 - ₹10,000 per night",
    rating: 4.6, lat: 11.6854, lng: 76.1320
  },

  // ==================== TAMIL NADU (6 Destinations) ====================
  {
    id: 7,
    name: "Meenakshi Temple",
    state: "Tamil Nadu",
    desc: "Architectural Wonder",
    category: "temple",
    img: "assets/images/meenakshi.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/MEENAKSHI 1.jpg", "assets/images/MEENAKSHI 2.avif", "assets/images/MEENAKSHI 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "One of the most magnificent temples in India with colorful gopurams.",
    highlights: ["🛕 Temple tour", "🌅 Evening Aarti", "🏛️ Thousand Pillar Hall"],
    nearby: [
      { name: "Thirumalai Palace", distance: "2 km", time: "10 mins", description: "Historic palace" },
      { name: "Gandhi Museum", distance: "3 km", time: "15 mins", description: "Freedom struggle museum" },
      { name: "Vandiyur Mariamman Tank", distance: "4 km", time: "15 mins", description: "Ancient stepwell" },
      { name: "Alagar Kovil", distance: "21 km", time: "45 mins", description: "Hill temple" },
      { name: "Kazimar Big Mosque", distance: "1 km", time: "5 mins", description: "Historic mosque" }
    ],
    transport: { airport: "Madurai Airport", railway: "Madurai Junction", bus: "Madurai Central" },
    hotel: "₹1,500 - ₹8,000 per night",
    rating: 4.9, lat: 9.9195, lng: 78.1193
  },
  {
    id: 8,
    name: "Ooty",
    state: "Tamil Nadu",
    desc: "Queen of Hills",
    category: "hill",
    img: "assets/images/ooty.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/OOTY 1.jpg", "assets/images/OOTY 2.jpg", "assets/images/OOTY 3.webp"], // NEW CAROUSEL IMAGES
    overview: "Colonial hill station with botanical gardens and toy train.",
    highlights: ["🚂 Toy train ride", "🌿 Botanical Gardens", "🏞️ Doddabetta Peak"],
    nearby: [
      { name: "Coonoor", distance: "18 km", time: "40 mins", description: "Scenic hill station" },
      { name: "Avalanche Lake", distance: "28 km", time: "1 hour", description: "Boating spot" },
      { name: "Pykara Falls", distance: "20 km", time: "45 mins", description: "Waterfall" },
      { name: "Emerald Lake", distance: "25 km", time: "50 mins", description: "Lake view" },
      { name: "Wax Museum", distance: "2 km", time: "10 mins", description: "Wax figures" }
    ],
    transport: { airport: "Coimbatore (88 km)", railway: "Mettupalayam", bus: "Ooty" },
    hotel: "₹2,500 - ₹12,000 per night",
    rating: 4.6, lat: 11.4102, lng: 76.6950
  },
  {
    id: 9,
    name: "Marina Beach",
    state: "Tamil Nadu",
    desc: "Longest Beach",
    category: "beach",
    img: "assets/images/marina.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/MARINA 1.webp", "assets/images/MARINA 2.avif", "assets/images/MARINA 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Second longest urban beach in the world, perfect for evening walks.",
    highlights: ["🚶 Beach walk", "🌅 Sunrise/Sunset", "🍿 Local snacks"],
    nearby: [
      { name: "Kapaleeshwarar Temple", distance: "6 km", time: "20 mins", description: "Famous temple" },
      { name: "Santhome Cathedral", distance: "3 km", time: "10 mins", description: "Historic church" },
      { name: "Elliot's Beach", distance: "8 km", time: "25 mins", description: "Quiet beach" },
      { name: "MGR Memorial", distance: "2 km", time: "10 mins", description: "Memorial" },
      { name: "Anna Memorial", distance: "1 km", time: "5 mins", description: "Memorial" }
    ],
    transport: { airport: "Chennai International", railway: "Chennai Egmore", bus: "Chennai" },
    hotel: "₹1,800 - ₹15,000 per night",
    rating: 4.4, lat: 13.0500, lng: 80.2824
  },
  {
    id: 10,
    name: "Kodaikanal",
    state: "Tamil Nadu",
    desc: "Princess of Hills",
    category: "hill",
    img: "assets/images/kodaikanal.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/KODAIKANAL 1.webp", "assets/images/KODAIKANAL 2.avif", "assets/images/KODAIKANAL 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Princess of Hill Stations with star-shaped lake and pine forests.",
    highlights: ["🗻 Pillar Rocks", "🚶 Coaker's Walk", "🌸 Bryant Park"],
    nearby: [
      { name: "Silver Cascade Falls", distance: "8 km", time: "20 mins", description: "Waterfall" },
      { name: "Berijam Lake", distance: "21 km", time: "45 mins", description: "Reservoir lake" },
      { name: "Dolphin's Nose", distance: "8 km", time: "25 mins", description: "Viewpoint" },
      { name: "Green Valley View", distance: "5 km", time: "15 mins", description: "Valley view" },
      { name: "Pine Forest", distance: "6 km", time: "15 mins", description: "Forest walk" }
    ],
    transport: { airport: "Madurai (120 km)", railway: "Kodaikanal Road", bus: "Kodaikanal" },
    hotel: "₹2,000 - ₹10,000 per night",
    rating: 4.6, lat: 10.2380, lng: 77.4895
  },
  {
    id: 11,
    name: "Rameshwaram",
    state: "Tamil Nadu",
    desc: "Holy Island",
    category: "temple",
    img: "assets/images/rameshwaram.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/RAMESHWARAM 1.webp", "assets/images/RAMESHWARAM 2.cms", "assets/images/RAMESHWARAM 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Important Hindu pilgrimage site - one of Char Dham.",
    highlights: ["🛕 Ramanathaswamy Temple", "🏖️ Dhanushkodi", "🌊 Agni Theertham"],
    nearby: [
      { name: "Pamban Bridge", distance: "2 km", time: "10 mins", description: "Sea bridge" },
      { name: "Adam's Bridge", distance: "30 km", time: "1 hour", description: "Mythical bridge" },
      { name: "Gandhamadhana Parvatham", distance: "3 km", time: "10 mins", description: "Viewpoint" },
      { name: "Kothandaramaswamy Temple", distance: "5 km", time: "15 mins", description: "Temple" },
      { name: "Villoondi Theertham", distance: "7 km", time: "20 mins", description: "Sacred well" }
    ],
    transport: { airport: "Madurai (174 km)", railway: "Rameshwaram", bus: "Rameshwaram" },
    hotel: "₹1,200 - ₹7,000 per night",
    rating: 4.7, lat: 9.2877, lng: 79.3129
  },
  {
    id: 12,
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    desc: "Rock Cut Temples",
    category: "temple",
    img: "assets/images/mahabalipuram.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/MAHABALIPURAM 1.webp", "assets/images/MAHABALIPURAM 2.jpg", "assets/images/MAHABALIPURAM 3.avif"], // NEW CAROUSEL IMAGES
    overview: "UNESCO World Heritage site with ancient rock carvings.",
    highlights: ["🏛️ Shore Temple", "🐘 Pancha Rathas", "🎨 Arjuna's Penance"],
    nearby: [
      { name: "Crocodile Bank", distance: "15 km", time: "30 mins", description: "Crocodile sanctuary" },
      { name: "DakshinaChitra", distance: "20 km", time: "40 mins", description: "Heritage museum" },
      { name: "Tiger Caves", distance: "5 km", time: "15 mins", description: "Rock-cut caves" },
      { name: "Muttukadu Lake", distance: "10 km", time: "20 mins", description: "Boating" },
      { name: "Covelong Beach", distance: "12 km", time: "25 mins", description: "Beach" }
    ],
    transport: { airport: "Chennai (60 km)", railway: "Chengalpattu", bus: "Mahabalipuram" },
    hotel: "₹2,000 - ₹9,000 per night",
    rating: 4.5, lat: 12.6185, lng: 80.1944
  },

  // ==================== KARNATAKA (6 Destinations) ====================
  {
    id: 13,
    name: "Hampi",
    state: "Karnataka",
    desc: "UNESCO Ruins",
    category: "temple",
    img: "assets/images/hampi.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/HAMPI 1.jpg", "assets/images/HAMPI 2.jpg", "assets/images/HAMPI 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Magnificent ruins of the Vijayanagara Empire.",
    highlights: ["🏛️ Vittala Temple", "🛕 Virupaksha Temple", "🏵️ Lotus Mahal"],
    nearby: [
      { name: "Hospet", distance: "13 km", time: "25 mins", description: "Nearest town" },
      { name: "Tungabhadra Dam", distance: "15 km", time: "30 mins", description: "Dam site" },
      { name: "Anegundi", distance: "10 km", time: "20 mins", description: "Ancient village" },
      { name: "Sanapur Lake", distance: "8 km", time: "20 mins", description: "Lake view" },
      { name: "Matanga Hill", distance: "1 km", time: "10 mins walk", description: "Sunset point" }
    ],
    transport: { airport: "Hubli (143 km)", railway: "Hospet Junction", bus: "Hampi" },
    hotel: "₹1,500 - ₹8,000 per night",
    rating: 4.8, lat: 15.3350, lng: 76.4600
  },
  {
    id: 14,
    name: "Coorg",
    state: "Karnataka",
    desc: "Coffee Plantations",
    category: "hill",
    img: "assets/images/coorg.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/COORG 1.jpg", "assets/images/COORG 2.jpg", "assets/images/COORG 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Scotland of India - lush coffee estates and hills.",
    highlights: ["💦 Abbey Falls", "👑 Raja Seat", "☕ Coffee plantation tour"],
    nearby: [
      { name: "Talakaveri", distance: "48 km", time: "1.5 hours", description: "River origin" },
      { name: "Bhagamandala", distance: "36 km", time: "1 hour", description: "Triveni sangam" },
      { name: "Dubare Elephant Camp", distance: "28 km", time: "50 mins", description: "Elephant interaction" },
      { name: "Mandalpatti", distance: "15 km", time: "40 mins", description: "Viewpoint" },
      { name: "Iruppu Falls", distance: "90 km", time: "2.5 hours", description: "Waterfall" }
    ],
    transport: { airport: "Mangalore (160 km)", railway: "Mysore (120 km)", bus: "Madikeri" },
    hotel: "₹2,500 - ₹12,000 per night",
    rating: 4.7, lat: 12.4244, lng: 75.7382
  },
  {
    id: 15,
    name: "Mysore Palace",
    state: "Karnataka",
    desc: "Royal Palace",
    category: "temple",
    img: "assets/images/mysore.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/MYSORE PALACE 1.jpg", "assets/images/MYSORE PALACE 2.jpg", "assets/images/MYSORE PALACE 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "One of the most beautiful royal palaces in India.",
    highlights: ["🏰 Palace tour", "✨ Light show", "🏔️ Chamundi Hills"],
    nearby: [
      { name: "Chamundi Hills", distance: "13 km", time: "30 mins", description: "Hill temple" },
      { name: "Brindavan Gardens", distance: "19 km", time: "40 mins", description: "Musical fountain" },
      { name: "St. Philomena's Church", distance: "3 km", time: "10 mins", description: "Historic church" },
      { name: "Mysore Zoo", distance: "2 km", time: "10 mins", description: "Zoo" },
      { name: "Karanji Lake", distance: "3 km", time: "10 mins", description: "Lake park" }
    ],
    transport: { airport: "Mysore Airport", railway: "Mysore Junction", bus: "Mysore" },
    hotel: "₹2,000 - ₹10,000 per night",
    rating: 4.8, lat: 12.3051, lng: 76.6552
  },
  {
    id: 16,
    name: "Bandipur",
    state: "Karnataka",
    desc: "Wildlife Park",
    category: "wildlife",
    img: "assets/images/bandipur.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/BANDIPUR.jpeg", "assets/images/BANDIPUR 2.jpg", "assets/images/BANDIPUR 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "One of the best tiger reserves in India.",
    highlights: ["🚙 Jeep safari", "🐅 Wildlife spotting", "🦜 Bird watching"],
    nearby: [
      { name: "Nagarhole", distance: "40 km", time: "1 hour", description: "Tiger reserve" },
      { name: "Mudumalai", distance: "15 km", time: "30 mins", description: "Wildlife sanctuary" },
      { name: "Moyar River", distance: "10 km", time: "20 mins", description: "River view" },
      { name: "Gopalaswamy Hills", distance: "25 km", time: "50 mins", description: "Hill temple" },
      { name: "Himavad Gopalaswamy", distance: "25 km", time: "50 mins", description: "Temple" }
    ],
    transport: { airport: "Mysore (80 km)", railway: "Mysore", bus: "Bandipur" },
    hotel: "₹2,500 - ₹12,000 per night",
    rating: 4.5, lat: 11.6625, lng: 76.6275
  },
  {
    id: 17,
    name: "Badami Caves",
    state: "Karnataka",
    desc: "Ancient Temples",
    category: "temple",
    img: "assets/images/badami.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/BADAMI CAVES 1.jpg", "assets/images/BADAMI CAVES 2.jpg", "assets/images/BADAMI CAVES 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Famous rock-cut cave temples from 6th century.",
    highlights: ["🕋 Cave temples", "🏛️ Bhutanatha Temple", "📜 Archaeological Museum"],
    nearby: [
      { name: "Pattadakal", distance: "22 km", time: "40 mins", description: "UNESCO site" },
      { name: "Aihole", distance: "34 km", time: "1 hour", description: "Temple complex" },
      { name: "Agastya Lake", distance: "1 km", time: "5 mins", description: "Lake view" },
      { name: "Mallikarjuna Temple", distance: "22 km", time: "40 mins", description: "Temple" },
      { name: "Banashankari Temple", distance: "5 km", time: "15 mins", description: "Temple" }
    ],
    transport: { airport: "Hubli (105 km)", railway: "Badami", bus: "Badami" },
    hotel: "₹1,500 - ₹6,000 per night",
    rating: 4.4, lat: 15.9184, lng: 75.6850
  },
  {
    id: 18,
    name: "Gokarna",
    state: "Karnataka",
    desc: "Spiritual Beach",
    category: "beach",
    img: "assets/images/gokarna.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/GOKARNA 1.jpg", "assets/images/GOKARNA 2.jpg", "assets/images/GOKARNA 3.webp"], // NEW CAROUSEL IMAGES
    overview: "Spiritual beach town with pristine beaches.",
    highlights: ["🏖️ Om Beach", "🛕 Mahabaleshwar Temple", "🏝️ Half Moon Beach"],
    nearby: [
      { name: "Kudle Beach", distance: "2 km", time: "10 mins", description: "Beach" },
      { name: "Paradise Beach", distance: "5 km", time: "20 mins boat", description: "Secluded beach" },
      { name: "Mahabaleshwar Temple", distance: "1 km", time: "10 mins", description: "Ancient temple" },
      { name: "Yana Caves", distance: "45 km", time: "1.5 hours", description: "Rock formations" },
      { name: "Vibhooti Falls", distance: "12 km", time: "30 mins", description: "Waterfall" }
    ],
    transport: { airport: "Goa (140 km)", railway: "Gokarna Road", bus: "Gokarna" },
    hotel: "₹1,800 - ₹8,000 per night",
    rating: 4.6, lat: 14.5500, lng: 74.3167
  },

  // ==================== TELANGANA (6 Destinations) ====================
  {
    id: 19,
    name: "Charminar",
    state: "Telangana",
    desc: "Icon of Hyderabad",
    category: "temple",
    img: "assets/images/charminar.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/CHARMINAR 1.jpg", "assets/images/CHARMINAR 2.jpg", "assets/images/CHARMINAR 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "The global icon of Hyderabad with four minarets.",
    highlights: ["🛍️ Laad Bazaar shopping", "🕌 Mecca Masjid", "🌙 Night illumination"],
    nearby: [
      { name: "Laad Bazaar", distance: "0.1 km", time: "2 mins", description: "Shopping" },
      { name: "Makkah Masjid", distance: "0.2 km", time: "5 mins", description: "Historic mosque" },
      { name: "Chowmahalla Palace", distance: "1 km", time: "10 mins", description: "Palace" },
      { name: "Nizam's Museum", distance: "2 km", time: "15 mins", description: "Museum" },
      { name: "Salar Jung Museum", distance: "2 km", time: "15 mins", description: "Museum" }
    ],
    transport: { airport: "RGIA Hyderabad", railway: "Hyderabad Deccan", bus: "Hyderabad" },
    hotel: "₹1,500 - ₹9,000 per night",
    rating: 4.5, lat: 17.3616, lng: 78.4747
  },
  {
    id: 20,
    name: "Golconda Fort",
    state: "Telangana",
    desc: "Historic Fort",
    category: "temple",
    img: "assets/images/golconda.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/GOLCONDA 1.jpg", "assets/images/GOLCONDA 2.jpg", "assets/images/GOLCONDA 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Famous historic fort known for its acoustics.",
    highlights: ["🎭 Light & Sound show", "🏰 Royal palaces", "🔊 Acoustics demo"],
    nearby: [
      { name: "Qutb Shahi Tombs", distance: "1 km", time: "10 mins", description: "Tombs" },
      { name: "Taramati Baradari", distance: "2 km", time: "15 mins", description: "Historic pavilion" },
      { name: "Ramoji Film City", distance: "25 km", time: "45 mins", description: "Film city" },
      { name: "Hussain Sagar", distance: "10 km", time: "20 mins", description: "Lake" },
      { name: "Charminar", distance: "8 km", time: "20 mins", description: "Monument" }
    ],
    transport: { airport: "Hyderabad", railway: "Hyderabad", bus: "Golconda" },
    hotel: "₹1,800 - ₹9,000 per night",
    rating: 4.6, lat: 17.3822, lng: 78.4000
  },
  {
    id: 21,
    name: "Ramoji Film City",
    state: "Telangana",
    desc: "Film Studio",
    category: "beach",
    img: "assets/images/ramoji.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/RAMOJI 1.jpg", "assets/images/RAMOJI 2.jpeg", "assets/images/RAMOJI 3.avif"], // NEW CAROUSEL IMAGES
    overview: "World's largest film studio complex.",
    highlights: ["🎬 Studio tour", "🎭 Live shows", "🎡 Theme parks"],
    nearby: [
      { name: "Hyderabad city", distance: "25 km", time: "45 mins", description: "City" },
      { name: "Sagar Mahal", distance: "15 km", time: "30 mins", description: "Palace" },
      { name: "Hayathnagar", distance: "10 km", time: "20 mins", description: "Town" },
      { name: "Moula Ali", distance: "20 km", time: "35 mins", description: "Dargah" },
      { name: "Uppal", distance: "20 km", time: "35 mins", description: "Suburb" }
    ],
    transport: { airport: "RGIA Hyderabad", railway: "Hyderabad", bus: "Ramoji" },
    hotel: "₹2,500 - ₹10,000 per night",
    rating: 4.6, lat: 17.2617, lng: 78.6806
  },
  {
    id: 22,
    name: "Birla Mandir",
    state: "Telangana",
    desc: "Marble Temple",
    category: "temple",
    img: "assets/images/birla-mandir.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/BIRLA MANDIR 1.png", "assets/images/BIRLA MANDIR 2.jpg", "assets/images/BIRLA MANDIR 3.webp"], // NEW CAROUSEL IMAGES
    overview: "Stunning marble temple on a hill with panoramic view.",
    highlights: ["🛕 Temple visit", "🌆 City view", "🕯️ Evening aarti"],
    nearby: [
      { name: "Hussain Sagar", distance: "1 km", time: "10 mins", description: "Lake" },
      { name: "Lumbini Park", distance: "1 km", time: "10 mins", description: "Park" },
      { name: "Tank Bund", distance: "1 km", time: "10 mins", description: "Road with statues" },
      { name: "Necklace Road", distance: "2 km", time: "15 mins", description: "Scenic road" },
      { name: "Sanjeevaiah Park", distance: "3 km", time: "15 mins", description: "Park" }
    ],
    transport: { airport: "Hyderabad", railway: "Hyderabad", bus: "Hyderabad" },
    hotel: "₹1,800 - ₹8,000 per night",
    rating: 4.5, lat: 17.4167, lng: 78.4667
  },
  {
    id: 23,
    name: "Hussain Sagar",
    state: "Telangana",
    desc: "Lake & Buddha",
    category: "beach",
    img: "assets/images/hussain.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/HUSSIAN SAGAR 1.jpg", "assets/images/HUSSIAN SAGAR 2.webp", "assets/images/HUSSIAN SAGAR 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Picturesque lake with giant Buddha statue.",
    highlights: ["🛥️ Boat ride", "🚶 Tank Bund walk", "💡 Laser show"],
    nearby: [
      { name: "Birla Mandir", distance: "1 km", time: "10 mins", description: "Temple" },
      { name: "Lumbini Park", distance: "0.5 km", time: "5 mins", description: "Park" },
      { name: "Necklace Road", distance: "2 km", time: "15 mins", description: "Scenic road" },
      { name: "Sanjeevaiah Park", distance: "2 km", time: "15 mins", description: "Park" },
      { name: "NTR Gardens", distance: "1 km", time: "10 mins", description: "Garden" }
    ],
    transport: { airport: "Hyderabad", railway: "Hyderabad", bus: "Hyderabad" },
    hotel: "₹2,000 - ₹10,000 per night",
    rating: 4.4, lat: 17.4125, lng: 78.4739
  },
  {
    id: 24,
    name: "Ramappa Temple",
    state: "Telangana",
    desc: "UNESCO Temple",
    category: "temple",
    img: "assets/images/ramappa.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/RAMAPPA 1.jpg", "assets/images/RAMAPPA 2.webp", "assets/images/RAMAPPA 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "UNESCO World Heritage temple known for floating bricks.",
    highlights: ["🛕 Temple architecture", "🏞️ Ramappa Lake", "🏺 Kakatiya heritage"],
    nearby: [
      { name: "Warangal Fort", distance: "70 km", time: "1.5 hours", description: "Fort" },
      { name: "Thousand Pillar Temple", distance: "70 km", time: "1.5 hours", description: "Temple" },
      { name: "Bhadrakali Temple", distance: "75 km", time: "1.5 hours", description: "Temple" },
      { name: "Pakhal Lake", distance: "50 km", time: "1 hour", description: "Lake" },
      { name: "Kolanupaka Temple", distance: "90 km", time: "2 hours", description: "Jain temple" }
    ],
    transport: { airport: "Hyderabad (200 km)", railway: "Warangal", bus: "Mulugu" },
    hotel: "₹2,000 - ₹7,000 per night",
    rating: 4.7, lat: 18.2595, lng: 79.9436
  },

  // ==================== ANDHRA PRADESH (6 Destinations) ====================
  {
    id: 25,
    name: "Tirupati",
    state: "Andhra Pradesh",
    desc: "Spiritual Center",
    category: "temple",
    img: "assets/images/tirupati.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/TIRUPATI 1.jpg", "assets/images/TIRUPATI 2.jpeg", "assets/images/TIRUPATI 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "One of the world's richest pilgrimage centers.",
    highlights: ["🛕 Temple darshan", "🏔️ Tirumala hills", "🍪 Laddu prasadam"],
    nearby: [
      { name: "Tirumala Hills", distance: "20 km", time: "45 mins", description: "Hill temple" },
      { name: "Sri Padmavathi Temple", distance: "5 km", time: "15 mins", description: "Temple" },
      { name: "Sri Venkateswara Sanctuary", distance: "15 km", time: "30 mins", description: "Wildlife" },
      { name: "Kapila Theertham", distance: "3 km", time: "10 mins", description: "Waterfall temple" },
      { name: "ISKCON Temple", distance: "4 km", time: "15 mins", description: "Temple" }
    ],
    transport: { airport: "Tirupati Airport", railway: "Tirupati Main", bus: "Tirupati" },
    hotel: "₹1,500 - ₹8,000 per night",
    rating: 4.9, lat: 13.6288, lng: 79.4192
  },
  {
    id: 26,
    name: "Visakhapatnam Beach",
    state: "Andhra Pradesh",
    desc: "Coastal Beauty",
    category: "beach",
    img: "assets/images/vizag.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/VIZag 1.avif", "assets/images/VIZag 2.jpg", "assets/images/VIZag 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Beautiful coastal city with clean beaches.",
    highlights: ["🏖️ RK Beach", "🚢 Submarine Museum", "🏔️ Kailasagiri Park"],
    nearby: [
      { name: "Araku Valley", distance: "120 km", time: "3 hours", description: "Hill station" },
      { name: "Borra Caves", distance: "90 km", time: "2.5 hours", description: "Caves" },
      { name: "Dolphin's Nose", distance: "8 km", time: "20 mins", description: "Viewpoint" },
      { name: "Kailasagiri", distance: "5 km", time: "15 mins", description: "Hill park" },
      { name: "Rushikonda Beach", distance: "8 km", time: "20 mins", description: "Beach" }
    ],
    transport: { airport: "Visakhapatnam", railway: "Visakhapatnam", bus: "Vizag" },
    hotel: "₹2,000 - ₹10,000 per night",
    rating: 4.5, lat: 17.7041, lng: 83.2977
  },
  {
    id: 27,
    name: "Araku Valley",
    state: "Andhra Pradesh",
    desc: "Hill Station",
    category: "hill",
    img: "assets/images/araku.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/ARAKU 1.avif", "assets/images/ARAKU 2.jpeg", "assets/images/ARAKU 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Lush green hill station known for coffee plantations.",
    highlights: ["🕯️ Borra Caves", "☕ Coffee plantations", "🏺 Tribal Museum"],
    nearby: [
      { name: "Borra Caves", distance: "29 km", time: "45 mins", description: "Caves" },
      { name: "Padmapuram Gardens", distance: "2 km", time: "10 mins", description: "Gardens" },
      { name: "Katiki Waterfalls", distance: "15 km", time: "30 mins", description: "Waterfall" },
      { name: "Tyda Park", distance: "25 km", time: "40 mins", description: "Eco-tourism" },
      { name: "Chaprai", distance: "20 km", time: "35 mins", description: "Waterfalls" }
    ],
    transport: { airport: "Visakhapatnam (120 km)", railway: "Araku", bus: "Araku" },
    hotel: "₹2,000 - ₹7,000 per night",
    rating: 4.6, lat: 18.3289, lng: 82.8756
  },
  {
    id: 28,
    name: "Srisailam",
    state: "Andhra Pradesh",
    desc: "Jyotirlinga Temple",
    category: "temple",
    img: "assets/images/srisailam.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/SRISAILAM 1.jpg", "assets/images/SRISAILAM 2.webp", "assets/images/SRISAILAM 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "One of the 12 Jyotirlinga temples.",
    highlights: ["🛕 Mallikarjuna Swamy Temple", "🌊 Srisailam Dam", "🐅 Tiger Reserve"],
    nearby: [
      { name: "Srisailam Dam", distance: "2 km", time: "10 mins", description: "Dam" },
      { name: "Pathala Ganga", distance: "5 km", time: "15 mins", description: "River" },
      { name: "Sakshi Ganapati Temple", distance: "1 km", time: "5 mins", description: "Temple" },
      { name: "Phaladhara-Pushkara", distance: "2 km", time: "10 mins", description: "Scenic point" },
      { name: "Mallela Theertham", distance: "45 km", time: "1.5 hours", description: "Waterfall" }
    ],
    transport: { airport: "Hyderabad (213 km)", railway: "Markapuram", bus: "Srisailam" },
    hotel: "₹1,800 - ₹6,000 per night",
    rating: 4.7, lat: 16.0733, lng: 78.8687
  },
  {
    id: 29,
    name: "Lepakshi",
    state: "Andhra Pradesh",
    desc: "Hanging Pillar",
    category: "temple",
    img: "assets/images/lepakshi.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/LEPAKSHI 1.jpg", "assets/images/LEPAKSHI 2.cms", "assets/images/LEPAKSHI 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Famous for the hanging pillar and beautiful murals.",
    highlights: ["🗿 Hanging Pillar", "🐂 Nandi Bull", "🎨 Veerabhadra Temple"],
    nearby: [
      { name: "Penukonda Fort", distance: "30 km", time: "45 mins", description: "Fort" },
      { name: "Puttaparthi", distance: "40 km", time: "1 hour", description: "Spiritual town" },
      { name: "Hindupur", distance: "25 km", time: "40 mins", description: "Town" },
      { name: "Dharmavaram", distance: "50 km", time: "1.5 hours", description: "Silk city" },
      { name: "Kadiri", distance: "35 km", time: "1 hour", description: "Temple town" }
    ],
    transport: { airport: "Bengaluru (100 km)", railway: "Hindupur", bus: "Lepakshi" },
    hotel: "₹1,500 - ₹5,000 per night",
    rating: 4.5, lat: 13.7997, lng: 77.6101
  },
  {
    id: 30,
    name: "Gandikota",
    state: "Andhra Pradesh",
    desc: "Grand Canyon",
    category: "hill",
    img: "assets/images/gandikota.jpg",  // ORIGINAL COVER IMAGE (KEEP)
    images: ["assets/images/GANDIKOTA 1.jpg", "assets/images/GANDIKOTA 2.jpg", "assets/images/GANDIKOTA 3.jpg"], // NEW CAROUSEL IMAGES
    overview: "Known as the Grand Canyon of India with stunning gorge views.",
    highlights: ["🏰 Gandikota Fort", "🌊 River gorge", "🛕 Ranganatha Swamy Temple"],
    nearby: [
      { name: "Belum Caves", distance: "60 km", time: "1.5 hours", description: "Caves" },
      { name: "Tadipatri", distance: "40 km", time: "1 hour", description: "Temple town" },
      { name: "Mylavaram Dam", distance: "50 km", time: "1.5 hours", description: "Dam" },
      { name: "Jammalamadugu", distance: "35 km", time: "50 mins", description: "Town" },
      { name: "Proddatur", distance: "45 km", time: "1 hour", description: "Town" }
    ],
    transport: { airport: "Hyderabad (300 km)", railway: "Kadapa", bus: "Gandikota" },
    hotel: "₹1,800 - ₹6,000 per night",
    rating: 4.6, lat: 14.8128, lng: 78.2854
  }
];

// Function to display destinations (using original cover images)
function displayDestinations(destinations) {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;

  if (destinations.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center py-5"><h4>No destinations found</h4></div>`;
    return;
  }

  let html = '';
  destinations.forEach(dest => {
    html += `
            <div class="col-md-6 col-lg-4">
                <div class="destination-card" onclick="showDestinationDetail(${dest.id})">
                    <img src="${dest.img}" class="card-img-top" alt="${dest.name}">
                    <div class="card-content">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">${dest.name}</h5>
                            <span class="text-warning">★ ${dest.rating}</span>
                        </div>
                        <p class="text-muted small">${dest.state} • ${dest.desc}</p>
                        <p class="small">${dest.overview.substring(0, 80)}...</p>
                        <div class="mt-2">
                            <span class="info-badge"><i class="fas fa-map-marker-alt"></i> ${dest.nearby[0]?.name || 'Nearby'}</span>
                            <span class="info-badge"><i class="fas fa-hotel"></i> Hotels available</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
  grid.innerHTML = html;
}

// Function to show destination detail with NEW CAROUSEL IMAGES (3 images)
function showDestinationDetail(id) {
  const dest = destinationsDB.find(d => d.id === id);
  if (!dest) return;

  // Build carousel HTML with 3 images (new carousel images)
  let carouselIndicators = '';
  let carouselItems = '';

  dest.images.forEach((img, index) => {
    carouselIndicators += `<button type="button" data-bs-target="#destCarousel" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''}></button>`;
    carouselItems += `<div class="carousel-item ${index === 0 ? 'active' : ''}"><img src="${img}" class="d-block w-100" alt="${dest.name}"></div>`;
  });

  // Build nearby places HTML
  let nearbyHtml = '<div class="row mt-3">';
  dest.nearby.forEach(place => {
    nearbyHtml += `
            <div class="col-md-6">
                <div class="nearby-place p-3 mb-2 bg-light rounded-3">
                    <div class="d-flex justify-content-between">
                        <strong><i class="fas fa-map-pin text-danger"></i> ${place.name}</strong>
                        <span class="badge bg-info">${place.distance}</span>
                    </div>
                    <p class="small mt-1 mb-0">${place.description}<br><span class="text-muted">⏱️ ${place.time}</span></p>
                </div>
            </div>
        `;
  });
  nearbyHtml += '</div>';

  const modalBody = `
        <div id="destCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
            <div class="carousel-indicators">${carouselIndicators}</div>
            <div class="carousel-inner">${carouselItems}</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#destCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#destCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
        
        <div class="row">
            <div class="col-md-8">
                <h3>${dest.name}</h3>
                <div class="mb-3">${'★'.repeat(Math.floor(dest.rating))} ${dest.rating} · ${dest.state}</div>
                <p>${dest.overview}</p>
                
                <h5><i class="fas fa-star text-warning"></i> Highlights</h5>
                <div class="d-flex flex-wrap gap-2 mb-3">
                    ${dest.highlights.map(h => `<span class="info-badge">${h}</span>`).join('')}
                </div>
                
                <h5><i class="fas fa-location-dot text-danger"></i> Nearby Places</h5>
                ${nearbyHtml}
            </div>
            <div class="col-md-4">
                <div class="bg-light p-3 rounded-4">
                    <h6><i class="fas fa-plane"></i> How to Reach</h6>
                    <p><strong>✈️ Airport:</strong> ${dest.transport.airport}<br>
                    <strong>🚂 Railway:</strong> ${dest.transport.railway}<br>
                    <strong>🚌 Bus:</strong> ${dest.transport.bus}</p>
                    
                    <h6 class="mt-3"><i class="fas fa-hotel"></i> Accommodation</h6>
                    <p>${dest.hotel}</p>
                    
                    <div class="mt-3">
                        <div class="ratio ratio-16x9 rounded-3 overflow-hidden">
                            <iframe src="https://www.google.com/maps?q=${dest.lat},${dest.lng}&z=13&output=embed" allowfullscreen></iframe>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary w-100 mt-3" onclick="bookFromModal('${dest.name}')">
                        <i class="fas fa-shopping-cart"></i> Book This Package
                    </button>
                </div>
            </div>
        </div>
    `;

  document.getElementById('modalTitle').textContent = dest.name;
  document.getElementById('modalBody').innerHTML = modalBody;
  window.currentDestination = dest;

  const modal = new bootstrap.Modal(document.getElementById('destinationModal'));
  modal.show();
}

function bookFromModal(destinationName) {
  const passengerModalHtml = `
        <div class="modal fade" id="passengerModal" tabindex="-1" data-bs-backdrop="static">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">📋 Booking Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-4">
                            <h6>${destinationName}</h6>
                            <p class="text-muted">Starting at ₹12,500 per person</p>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">👥 Number of Passengers</label>
                            <div class="d-flex align-items-center gap-3">
                                <button class="btn btn-outline-secondary" onclick="updatePassengerCount(-1)">-</button>
                                <span class="fs-2 fw-bold" id="passengerCount">2</span>
                                <button class="btn btn-outline-secondary" onclick="updatePassengerCount(1)">+</button>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">📅 Travel Date</label>
                            <input type="date" class="form-control" id="travelDate" value="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="alert alert-success mt-3">
                            <strong>💰 Total Amount:</strong>
                            <span class="fs-3 fw-bold text-danger" id="totalAmountDisplay">₹25,000</span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="confirmBooking('${destinationName}')">Proceed to Payment →</button>
                    </div>
                </div>
            </div>
        </div>
    `;

  const existing = document.getElementById('passengerModal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', passengerModalHtml);

  window.currentPassengers = 2;
  window.currentDestinationName = destinationName;
  window.currentPricePerPerson = 12500;
  updatePassengerTotal();

  const modal = new bootstrap.Modal(document.getElementById('passengerModal'));
  modal.show();
}

function updatePassengerCount(delta) {
  window.currentPassengers = Math.max(1, Math.min(20, window.currentPassengers + delta));
  document.getElementById('passengerCount').textContent = window.currentPassengers;
  updatePassengerTotal();
}

function updatePassengerTotal() {
  const total = window.currentPassengers * window.currentPricePerPerson;
  document.getElementById('totalAmountDisplay').innerHTML = `₹${total.toLocaleString()}`;
}

function confirmBooking(destinationName) {
  const bookingDetails = {
    packageName: destinationName,
    passengers: window.currentPassengers,
    pricePerPerson: window.currentPricePerPerson,
    totalAmount: window.currentPassengers * window.currentPricePerPerson,
    travelDate: document.getElementById('travelDate').value,
    bookingTime: new Date().toISOString()
  };

  localStorage.setItem('currentBooking', JSON.stringify(bookingDetails));
  localStorage.setItem('selectedPackage', destinationName);

  const passengerModal = bootstrap.Modal.getInstance(document.getElementById('passengerModal'));
  if (passengerModal) passengerModal.hide();

  const user = localStorage.getItem('dakshin_current_user');
  if (!user) {
    sessionStorage.setItem('redirectAfterLogin', 'payment.html');
    window.location.href = 'login.html';
  } else {
    window.location.href = 'payment.html';
  }
}

function filterDestinations() {
  const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const category = document.getElementById('categoryFilter')?.value || '';

  let filtered = [...destinationsDB];

  if (searchTerm) {
    filtered = filtered.filter(d => d.name.toLowerCase().includes(searchTerm) || d.state.toLowerCase().includes(searchTerm));
  }

  if (category) {
    filtered = filtered.filter(d => d.category === category);
  }

  displayDestinations(filtered);
}

// Make functions global
window.updatePassengerCount = updatePassengerCount;
window.confirmBooking = confirmBooking;
window.bookFromModal = bookFromModal;
window.filterDestinations = filterDestinations;
window.showDestinationDetail = showDestinationDetail;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const stateParam = urlParams.get('state');

  if (stateParam && document.getElementById('destinationsGrid')) {
    const filtered = destinationsDB.filter(d => d.state.toLowerCase() === stateParam.toLowerCase());
    displayDestinations(filtered);
    const titleEl = document.getElementById('stateTitle');
    if (titleEl) titleEl.textContent = `${stateParam.charAt(0).toUpperCase() + stateParam.slice(1)} Destinations`;
  } else if (document.getElementById('destinationsGrid')) {
    displayDestinations(destinationsDB);
  }
});


// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function () {

  // Add scroll-reveal class to elements
  const revealElements = document.querySelectorAll('.state-card, .destination-card, .package-card, .mission-card, .team-card, .stat-card, .faq-item');
  revealElements.forEach(el => {
    el.classList.add('scroll-reveal');
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });

  // Add hover animation to buttons
  const buttons = document.querySelectorAll('.btn-primary, .btn-outline-light, .btn-view, .btn-book, .btn-pay');
  buttons.forEach(btn => {
    btn.classList.add('btn-pulse');
  });

  // Add hover lift to cards
  const cards = document.querySelectorAll('.state-card, .destination-card, .package-card');
  cards.forEach(card => {
    card.classList.add('hover-lift');
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
      } else {
        navbar.style.padding = '1rem 0';
      }
    });
  }

  // Stagger children animation for grids
  const grids = document.querySelectorAll('.row, .grid, .footer-grid');
  grids.forEach(grid => {
    grid.classList.add('stagger-children');
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
  }

  // Animated counter for stats
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    if (!isNaN(target)) {
      let current = 0;
      const increment = target / 50;
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
        }
      };

      const observerCounter = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observerCounter.unobserve(entry.target);
          }
        });
      });
      observerCounter.observe(stat);
    }
  });
});