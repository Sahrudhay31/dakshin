// Smart Trip Planner - Complete Real World Itineraries

const tripPlannerData = {
    states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Telangana', 'Andhra Pradesh'],

    durations: [3, 4, 5, 6, 7],

    budgets: [
        { value: 'budget', label: 'Budget (₹10k-20k)', multiplier: 0.7 },
        { value: 'medium', label: 'Standard (₹20k-35k)', multiplier: 1 },
        { value: 'luxury', label: 'Luxury (₹35k-60k+)', multiplier: 1.8 }
    ],

    travelStyles: [
        { value: 'cultural', label: 'Cultural & Heritage', icon: 'landmark' },
        { value: 'nature', label: 'Nature & Wildlife', icon: 'tree' },
        { value: 'beach', label: 'Beach & Relaxation', icon: 'umbrella-beach' },
        { value: 'spiritual', label: 'Spiritual & Pilgrimage', icon: 'om' }
    ],

    // Real detailed itineraries for each state
    detailedItineraries: {
        'Kerala': {
            3: [
                { day: 1, title: "Arrival in Kochi - Fort Kochi Exploration", time: "9:00 AM - 6:00 PM", activities: ["Visit Chinese Fishing Nets", "Explore Fort Kochi Beach", "St. Francis Church", "Santa Cruz Basilica", "Dutch Palace", "Jew Town & Synagogue"], meals: "Kerala Sadya (Traditional Feast)", hotel: "Hotel Grand or Similar", tips: "Take a sunset walk along the beach" },
                { day: 2, title: "Munnar Day Trip - Tea Gardens", time: "7:00 AM - 8:00 PM", activities: ["Drive to Munnar (4 hours)", "Tea Museum Visit", "Mattupetty Dam", "Echo Point", "Kundala Lake", "Tea Plantation Walk"], meals: "Fresh Tea & Kerala Parotta", hotel: "Tea Valley Resort", tips: "Carry a light jacket - it's cold" },
                { day: 3, title: "Alleppey Backwaters - Houseboat Cruise", time: "8:00 AM - 6:00 PM", activities: ["Drive to Alleppey", "Check-in to Houseboat", "Backwater Cruise", "Village Visit", "Sunset Views", "Local Fishing Experience"], meals: "Fresh Seafood on Houseboat", hotel: "Deluxe Houseboat", tips: "Book houseboat in advance" }
            ],
            4: [
                { day: 1, title: "Kochi Arrival - Fort Kochi & Mattancherry", time: "9:00 AM - 7:00 PM", activities: ["Chinese Fishing Nets", "Fort Kochi Beach", "St. Francis Church", "Santa Cruz Basilica", "Dutch Palace", "Jewish Synagogue", "Kerala Kathakali Show"], meals: "Kerala Seafood Platter", hotel: "Hotel Grand", tips: "Watch Kathakali in the evening" },
                { day: 2, title: "Munnar - Tea Gardens & Waterfalls", time: "7:00 AM - 8:00 PM", activities: ["Scenic Drive to Munnar", "Tea Museum", "Mattupetty Dam", "Echo Point", "Kundala Lake", "Photo Point", "Tea Tasting Session"], meals: "Munnar Special Biryani", hotel: "Tea Valley Resort", tips: "Buy fresh tea from plantations" },
                { day: 3, title: "Thekkady - Wildlife & Spices", time: "8:00 AM - 6:00 PM", activities: ["Drive to Thekkady", "Periyar Wildlife Sanctuary", "Boat Safari", "Spice Plantation Tour", "Elephant Ride", "Ayurvedic Massage"], meals: "Kerala Spice Cuisine", hotel: "Spice Village Resort", tips: "Take morning boat safari" },
                { day: 4, title: "Alleppey Backwaters - Houseboat Experience", time: "9:00 AM - 6:00 PM", activities: ["Drive to Alleppey", "Houseboat Check-in", "Backwater Cruise", "Village Life Experience", "Canoe Ride", "Sunset Photography"], meals: "Fresh Catch Seafood", hotel: "Luxury Houseboat", tips: "Overnight stay on houseboat" }
            ],
            5: [
                { day: 1, title: "Kochi Arrival - Fort Kochi Heritage Walk", time: "10:00 AM - 8:00 PM", activities: ["Chinese Fishing Nets", "Fort Kochi Beach", "St. Francis Church", "Santa Cruz Basilica", "Dutch Cemetery", "Mattancherry Palace", "Jew Town", "Kathakali Performance"], meals: "Malabar Biryani", hotel: "Brunton Boatyard", tips: "Book Kathakali tickets in advance" },
                { day: 2, title: "Munnar - Tea Gardens & Hill Stations", time: "7:00 AM - 8:00 PM", activities: ["Drive to Munnar (4 hrs)", "Tea Museum", "Mattupetty Dam", "Echo Point", "Kundala Lake", "Top Station", "Tea Estate Walk", "Sunset at Photo Point"], meals: "Munnar Special Meals", hotel: "Tea Valley Resort", tips: "Wake up early for misty mornings" },
                { day: 3, title: "Thekkady - Periyar Wildlife & Spices", time: "8:00 AM - 7:00 PM", activities: ["Drive to Thekkady", "Periyar Lake Boat Safari", "Wildlife Spotting", "Spice Plantation", "Elephant Junction", "Bamboo Rafting", "Kalaripayattu Show"], meals: "Kerala Spice Platter", hotel: "Spice Village", tips: "Book boat safari early morning" },
                { day: 4, title: "Alleppey - Backwaters & Houseboat", time: "9:00 AM - Next Day", activities: ["Drive to Alleppey", "Houseboat Check-in", "Backwater Cruise", "Village Walk", "Coconut Lagoon", "Sunset Views", "Night Stay on Water"], meals: "Fresh Seafood Dinner", hotel: "Premium Houseboat", tips: "Request for traditional Kerala meals" },
                { day: 5, title: "Departure - Marari Beach Relaxation", time: "9:00 AM - 3:00 PM", activities: ["Disembark Houseboat", "Marari Beach Visit", "Beach Walk", "Local Lunch", "Transfer to Cochin Airport"], meals: "Kerala Sadya", hotel: "Departure", tips: "Keep 2 hours buffer for airport" }
            ],
            6: [
                { day: 1, title: "Kochi Arrival - Fort Kochi Exploration", time: "10:00 AM - 8:00 PM", activities: ["Chinese Fishing Nets", "Fort Kochi Beach", "St. Francis Church", "Santa Cruz Basilica", "Dutch Palace", "Jew Town", "Mattancherry Palace", "Kathakali Show"], meals: "Malabar Biryani", hotel: "Brunton Boatyard", tips: "Walk through Jew Town for antiques" },
                { day: 2, title: "Munnar - Tea Plantations & Valleys", time: "7:00 AM - 8:00 PM", activities: ["Scenic Drive to Munnar", "Tea Museum Visit", "Mattupetty Dam", "Echo Point", "Kundala Lake", "Top Station View", "Tea Estate Walk", "Sunset at Photo Point"], meals: "Munnar Special Chicken", hotel: "Tea Valley Resort", tips: "Visit the Tea Factory" },
                { day: 3, title: "Munnar - Eravikulam & Trekking", time: "8:00 AM - 6:00 PM", activities: ["Eravikulam National Park", "Nilgiri Tahr Spotting", "Lakkam Waterfalls", "Chinnar Wildlife", "Tea Tasting", "Local Market Visit"], meals: "Kerala Veg Meals", hotel: "Tea Valley Resort", tips: "Book national park tickets online" },
                { day: 4, title: "Thekkady - Periyar Tiger Reserve", time: "8:00 AM - 7:00 PM", activities: ["Drive to Thekkady", "Periyar Lake Boat Safari", "Tiger Spotting", "Spice Plantation Tour", "Elephant Safari", "Kalaripayattu Martial Arts", "Ayurvedic Massage"], meals: "Spice Garden Lunch", hotel: "Spice Village", tips: "Carry binoculars for wildlife" },
                { day: 5, title: "Alleppey - Houseboat Backwaters", time: "9:00 AM - Next Day", activities: ["Drive to Alleppey", "Houseboat Check-in", "Punnamada Lake Cruise", "Village Visit", "Coconut Lagoon", "Sunset Cruise", "Overnight on Houseboat"], meals: "Fresh Seafood Dinner", hotel: "Deluxe Houseboat", tips: "Request for toddy (local drink)" },
                { day: 6, title: "Departure - Varkala Beach", time: "9:00 AM - 4:00 PM", activities: ["Disembark Houseboat", "Drive to Varkala (2 hrs)", "Varkala Cliff Beach", "Papanasam Beach", "Sivagiri Mutt", "Transfer to Trivandrum Airport"], meals: "Beachside Seafood", hotel: "Departure", tips: "Take a dip in natural springs" }
            ],
            7: [
                { day: 1, title: "Arrival in Kochi - Fort Kochi Heritage Tour", time: "10:00 AM - 9:00 PM", activities: ["Chinese Fishing Nets", "Fort Kochi Beach Walk", "St. Francis Church", "Santa Cruz Basilica", "Dutch Cemetery", "Mattancherry Palace", "Jew Town", "Paradesi Synagogue", "Kathakali Performance", "Dinner at Fort Kochi"], meals: "Kerala Seafood Platter", hotel: "Brunton Boatyard", tips: "Try local toddy shop" },
                { day: 2, title: "Munnar - Tea Gardens & Scenic Valleys", time: "7:00 AM - 8:00 PM", activities: ["Scenic Drive to Munnar (4 hrs)", "Tea Museum Visit", "Tea Tasting Session", "Mattupetty Dam Boating", "Echo Point", "Kundala Lake", "Top Station View (Highest Point)", "Tea Plantation Walk", "Sunset at Photo Point"], meals: "Munnar Special Biryani", hotel: "Tea Valley Resort", tips: "Buy fresh tea from plantation" },
                { day: 3, title: "Munnar - Eravikulam & Waterfalls", time: "8:00 AM - 6:00 PM", activities: ["Eravikulam National Park", "Nilgiri Tahr Safari", "Lakkam Waterfalls", "Chinnar Wildlife Sanctuary", "Tea Estate Trek", "Local Market Shopping", "Ayurvedic Massage"], meals: "Kerala Sadya", hotel: "Tea Valley Resort", tips: "Early morning visit for wildlife" },
                { day: 4, title: "Thekkady - Periyar Wildlife & Spices", time: "8:00 AM - 8:00 PM", activities: ["Drive to Thekkady (3 hrs)", "Periyar Lake Boat Safari", "Elephant Spotting", "Spice Plantation Tour", "Cardamom, Pepper, Vanilla Farms", "Elephant Ride", "Kalaripayattu Show", "Ayurvedic Massage"], meals: "Spice Garden Lunch", hotel: "Spice Village Resort", tips: "Buy fresh spices directly" },
                { day: 5, title: "Thekkady to Alleppey - Backwaters", time: "8:00 AM - 6:00 PM", activities: ["Morning Nature Walk", "Drive to Alleppey (4 hrs)", "Punnamada Lake Cruise", "Village Life Experience", "Coconut Lagoon", "Kuttanad Rice Fields", "Sunset Photography"], meals: "Kerala Veg Meals", hotel: "Lake Palace Resort", tips: "Take a canoe ride through narrow canals" },
                { day: 6, title: "Alleppey Houseboat - Overnight Cruise", time: "12:00 PM - Next Day", activities: ["Houseboat Check-in", "Backwater Cruise", "Village Visits", "Bird Watching", "Local Fishing Experience", "Coconut Tree Climbing", "Sunset Views", "Traditional Kerala Dinner", "Night Stay on Water"], meals: "Fresh Seafood Dinner", hotel: "Premium Houseboat", tips: "Request for karimeen (pearl spot fish)" },
                { day: 7, title: "Departure - Varkala Beach & Cliff", time: "9:00 AM - 5:00 PM", activities: ["Disembark Houseboat", "Drive to Varkala (2.5 hrs)", "Varkala Cliff Beach", "Papanasam Beach", "Natural Springs Bath", "Sivagiri Mutt Visit", "Janardhana Swamy Temple", "Transfer to Trivandrum Airport"], meals: "Beachside Seafood", hotel: "Departure", tips: "Take a dip in natural springs" }
            ]
        },

        'Tamil Nadu': {
            7: [
                { day: 1, title: "Chennai Arrival - Marina Beach & Kapaleeshwarar Temple", time: "10:00 AM - 8:00 PM", activities: ["Arrive at Chennai Airport", "Check-in to Hotel", "Marina Beach Walk", "Kapaleeshwarar Temple", "Santhome Cathedral", "Elliot's Beach", "Dinner at Beach Road"], meals: "Chettinad Chicken", hotel: "The Park Chennai", tips: "Visit beach early morning or evening" },
                { day: 2, title: "Mahabalipuram - UNESCO Rock Temples", time: "8:00 AM - 7:00 PM", activities: ["Drive to Mahabalipuram (1 hr)", "Shore Temple", "Pancha Rathas", "Arjuna's Penance", "Krishna's Butter Ball", "Light House", "Crocodile Bank", "DakshinaChitra"], meals: "Seafood Platter", hotel: "Ideal Beach Resort", tips: "Visit early to avoid crowds" },
                { day: 3, title: "Pondicherry - French Quarter & Promenade", time: "8:00 AM - 8:00 PM", activities: ["Drive to Pondicherry (3 hrs)", "French Quarter Walk", "Promenade Beach", "Sri Aurobindo Ashram", "Matrimandir", "Auroville", "Church of Sacred Heart", "Dinner at French Cafe"], meals: "French-Indian Fusion", hotel: "Palais de Mahe", tips: "Rent a bicycle to explore" },
                { day: 4, title: "Thanjavur - Brihadeeswara Temple", time: "8:00 AM - 7:00 PM", activities: ["Drive to Thanjavur (4 hrs)", "Brihadeeswara Temple (UNESCO)", "Thanjavur Palace", "Art Gallery", "Saraswathi Mahal Library", "Swamimalai", "Darasuram Temple"], meals: "Tamil Nadu Meals", hotel: "Ideal River View", tips: "See the massive Nandi statue" },
                { day: 5, title: "Tiruchirappalli - Rock Fort Temple", time: "8:00 AM - 6:00 PM", activities: ["Drive to Trichy (1 hr)", "Rock Fort Temple", "Srirangam Temple", "Jambukeswarar Temple", "St. Joseph's Church", "Kallanai Dam", "Mukkombu"], meals: "Chettinad Special", hotel: "Sangam Hotel", tips: "Climb 437 steps to Rock Fort" },
                { day: 6, title: "Madurai - Meenakshi Temple & Palace", time: "8:00 AM - 9:00 PM", activities: ["Drive to Madurai (3 hrs)", "Meenakshi Amman Temple", "Thousand Pillar Hall", "Night Aarti Ceremony", "Tirumalai Nayakkar Palace", "Vandiyur Mariamman Tank", "Gandhi Museum", "Shopping at Puthu Mandapam"], meals: "Madurai Kari Dosa", hotel: "Heritage Madurai", tips: "Don't miss the night aarti" },
                { day: 7, title: "Departure - Kodaikanal Hill Station", time: "8:00 AM - 4:00 PM", activities: ["Drive to Kodaikanal (3 hrs)", "Kodaikanal Lake", "Coaker's Walk", "Pillar Rocks", "Bryant Park", "Silver Cascade Falls", "Transfer to Madurai Airport"], meals: "Hill Station Snacks", hotel: "Departure", tips: "Buy homemade chocolates" }
            ]
        },

        'Karnataka': {
            7: [
                { day: 1, title: "Bangalore Arrival - Garden City Tour", time: "10:00 AM - 8:00 PM", activities: ["Arrive at Bangalore Airport", "Lalbagh Botanical Garden", "Cubbon Park", "Vidhana Soudha", "Bannerghatta National Park", "UB City Mall", "Dinner at Indiranagar"], meals: "Bisi Bele Bath", hotel: "ITC Gardenia", tips: "Try local filter coffee" },
                { day: 2, title: "Mysore - Palace & Gardens", time: "8:00 AM - 8:00 PM", activities: ["Drive to Mysore (3 hrs)", "Mysore Palace", "Chamundi Hills", "St. Philomena's Church", "Brindavan Gardens", "Mysore Zoo", "Sand Museum", "Palace Illumination Show"], meals: "Mysore Pak Sweet", hotel: "Royal Orchid", tips: "Visit palace on Sunday for illumination" },
                { day: 3, title: "Coorg - Coffee Plantations & Waterfalls", time: "8:00 AM - 7:00 PM", activities: ["Drive to Coorg (3 hrs)", "Abbey Falls", "Raja's Seat", "Omkareshwara Temple", "Coffee Plantation Tour", "Dubare Elephant Camp", "Talakaveri", "Bhagamandala"], meals: "Coorg Pandi Curry", hotel: "Coorg Cliffs", tips: "Buy fresh coffee powder" },
                { day: 4, title: "Coorg to Wayanad - Wildlife & Caves", time: "8:00 AM - 6:00 PM", activities: ["Drive to Wayanad (3 hrs)", "Edakkal Caves", "Chembra Peak", "Pookode Lake", "Soochipara Falls", "Banasura Sagar Dam", "Wildlife Spotting"], meals: "Wayanad Special", hotel: "Wayanad Resort", tips: "Trek to Edakkal Caves" },
                { day: 5, title: "Bandipur - Tiger Reserve Safari", time: "7:00 AM - 6:00 PM", activities: ["Early Morning Safari", "Tiger Spotting", "Elephant Ride", "Bird Watching", "Nature Walk", "Visit Mudumalai", "Evening Jeep Safari"], meals: "Jungle Lunch", hotel: "Bandipur Safari Lodge", tips: "Book safari in advance" },
                { day: 6, title: "Hampi - Ruins & Boulders", time: "8:00 AM - 7:00 PM", activities: ["Drive to Hampi (4 hrs)", "Vittala Temple", "Stone Chariot", "Virupaksha Temple", "Lotus Mahal", "Elephant Stables", "Queen's Bath", "Sunset at Matanga Hill"], meals: "Hampi Bhelpuri", hotel: "Heritage Resort", tips: "Rent a bicycle to explore" },
                { day: 7, title: "Departure - Badami Caves", time: "8:00 AM - 4:00 PM", activities: ["Drive to Badami (2 hrs)", "Badami Cave Temples", "Bhutanatha Temple", "Agastya Lake", "Pattadakal", "Aihole", "Transfer to Hubli Airport"], meals: "North Karnataka Meals", hotel: "Departure", tips: "Visit all 4 caves" }
            ]
        },

        'Telangana': {
            7: [
                { day: 1, title: "Hyderabad Arrival - Charminar & Old City", time: "10:00 AM - 9:00 PM", activities: ["Arrive at Hyderabad Airport", "Charminar Visit", "Mecca Masjid", "Chowmahalla Palace", "Nizam's Museum", "Laad Bazaar Shopping", "Biryani Dinner at Paradise", "Night Walk at Charminar"], meals: "Hyderabadi Biryani", hotel: "Taj Falaknuma", tips: "Try Irani Chai at Nimrah Cafe" },
                { day: 2, title: "Golconda Fort & Sound & Light Show", time: "9:00 AM - 8:00 PM", activities: ["Golconda Fort Tour", "Qutb Shahi Tombs", "Taramati Baradari", "Sound & Light Show at Golconda", "Dinner at Jewel of Nizam"], meals: "Biryani & Haleem", hotel: "Park Hyatt", tips: "Watch the sound and light show" },
                { day: 3, title: "Ramoji Film City - Full Day Tour", time: "9:00 AM - 8:00 PM", activities: ["Drive to Ramoji Film City", "Studio Tour", "Live Shows", "Theme Parks", "Eureka", "Fundustan", "Movie Magic", "Evening Light Show"], meals: "Food Court Options", hotel: "Ramoji Resort", tips: "Wear comfortable shoes" },
                { day: 4, title: "Hussain Sagar & Birla Mandir", time: "9:00 AM - 7:00 PM", activities: ["Hussain Sagar Lake", "Buddha Statue", "Lumbini Park", "Tank Bund", "Birla Mandir", "Necklace Road", "Boat Ride", "Evening at Sanjeevaiah Park"], meals: "Andhra Meals", hotel: "ITC Kohenur", tips: "Take sunset boat ride" },
                { day: 5, title: "Warangal - Ramappa Temple & Fort", time: "8:00 AM - 8:00 PM", activities: ["Drive to Warangal (3 hrs)", "Ramappa Temple (UNESCO)", "Warangal Fort", "Thousand Pillar Temple", "Bhadrakali Temple", "Kakatiya Musical Garden", "Return to Hyderabad"], meals: "Telangana Special", hotel: "Park Hyatt", tips: "Visit Ramappa Lake nearby" },
                { day: 6, title: "Salar Jung Museum & Shopping", time: "10:00 AM - 8:00 PM", activities: ["Salar Jung Museum", "Veiled Rebecca", "Musical Clock", "State Museum", "Prasads IMAX", "Shopping at Koti", "Pearl Shopping", "Dinner at Ohri's"], meals: "Multi-cuisine", hotel: "Novotel", tips: "Buy Hyderabadi pearls" },
                { day: 7, title: "Departure - Qutb Shahi Tombs", time: "9:00 AM - 4:00 PM", activities: ["Qutb Shahi Tombs", "Toli Masjid", "Osman Sagar Lake", "Shopping for souvenirs", "Transfer to Hyderabad Airport"], meals: "Last Biryani", hotel: "Departure", tips: "Pack leftover biryani for journey" }
            ]
        },

        'Andhra Pradesh': {
            7: [
                { day: 1, title: "Visakhapatnam - RK Beach & Submarine Museum", time: "10:00 AM - 8:00 PM", activities: ["Arrive at Vizag Airport", "RK Beach Visit", "INS Kursura Submarine Museum", "Kailasagiri Park", "Dolphin's Nose", "Rushikonda Beach", "Dinner at Beach Road"], meals: "Andhra Spicy Meals", hotel: "The Park Vizag", tips: "Visit submarine museum early" },
                { day: 2, title: "Araku Valley - Coffee & Caves", time: "7:00 AM - 8:00 PM", activities: ["Scenic Train Journey to Araku", "Borra Caves", "Coffee Museum", "Tribal Museum", "Padmapuram Gardens", "Galikonda Viewpoint", "Return to Vizag"], meals: "Araku Coffee & Tribal Food", hotel: "The Park Vizag", tips: "Take the train for best views" },
                { day: 3, title: "Lambasingi - Kashmir of Andhra", time: "8:00 AM - 6:00 PM", activities: ["Drive to Lambasingi (3 hrs)", "Coffee Plantations", "Apple Orchards", "Foggy Hills", "Sunset Viewpoint", "Return to Vizag"], meals: "Local Andhra Meals", hotel: "The Park Vizag", tips: "Visit in winter for snowfall" },
                { day: 4, title: "Borra Caves & Ananthagiri Hills", time: "8:00 AM - 7:00 PM", activities: ["Drive to Borra Caves", "Cave Exploration", "Ananthagiri Hills", "Coffee Estates", "Waterfalls", "Tribal Dance Show"], meals: "Nature's Delight", hotel: "Araku Resort", tips: "Take a guide for caves" },
                { day: 5, title: "Vizag City Tour - Simhachalam Temple", time: "9:00 AM - 8:00 PM", activities: ["Simhachalam Temple", "Kondakarla Ava Lake", "Indira Gandhi Park", "Yarada Beach", "Shopping at Jagadamba", "Evening at RK Beach"], meals: "Pulihora", hotel: "Novotel", tips: "Visit Yarada Beach for sunset" },
                { day: 6, title: "Tirupati - Spiritual Journey", time: "8:00 AM - 9:00 PM", activities: ["Drive to Tirupati (8 hrs)", "Tirumala Hills", "Sri Venkateswara Temple", "Kapila Theertham", "Sri Padmavathi Temple", "Evening Aarti"], meals: "Temple Prasadam", hotel: "Tirupati Hotel", tips: "Book darshan online" },
                { day: 7, title: "Departure - Tirumala & Return", time: "8:00 AM - 4:00 PM", activities: ["Morning Darshan", "Silathoranam", "Srivari Padalu", "Shopping for Laddu", "Transfer to Tirupati Airport"], meals: "Laddu Prasadam", hotel: "Departure", tips: "Buy famous Tirupati laddus" }
            ]
        }
    },

    // Hotel recommendations
    hotels: {
        'Kerala': { budget: ['Zostel Kochi', 'Greenwood Homestay', 'Hosteller Munnar'], medium: ['Tea Valley Resort', 'Spice Village', 'The Leela Kovalam'], luxury: ['Kumarakom Lake Resort', 'Taj Malabar', 'Niraamaya Retreats'] },
        'Tamil Nadu': { budget: ['Zostel Ooty', 'Hosteller Madurai', 'Hotel Aakash'], medium: ['Heritage Madurai', 'Gateway Hotel Coonoor', 'Great Trails Kodaikanal'], luxury: ['Taj Fisherman\'s Cove', 'Leela Palace Chennai', 'Sterling Ooty'] },
        'Karnataka': { budget: ['Zostel Hampi', 'GoSTops Coorg', 'Hotel Mayura'], medium: ['Coorg Cliffs', 'Royal Orchid Mysore', 'Clarks Exotica'], luxury: ['Evolve Back Hampi', 'Taj West End', 'Amanvana Coorg'] },
        'Telangana': { budget: ['Backpacker Panda', 'Hotel Grand Plaza', 'Treebo Trend'], medium: ['Park Hyatt', 'ITC Kohenur', 'Novotel Hyderabad'], luxury: ['Taj Falaknuma Palace', 'JW Marriott', 'Trident Hyderabad'] },
        'Andhra Pradesh': { budget: ['Zostel Vizag', 'Hotel Daspalla', 'The Park'], medium: ['Novotel Vizag', 'The Gateway Hotel', 'Fortune Inn'], luxury: ['Taj Vizag', 'The Park Vizag', 'Radisson Blu'] }
    },

    // Food recommendations
    foods: {
        'Kerala': ['Kerala Sadya', 'Malabar Biryani', 'Karimeen Pollichathu', 'Puttu & Kadala', 'Appam with Stew', 'Toddy'],
        'Tamil Nadu': ['Chettinad Chicken', 'Dosa & Sambhar', 'Filter Coffee', 'Banana Leaf Meals', 'Madurai Kari Dosa', 'Kothu Parotta'],
        'Karnataka': ['Mysore Pak', 'Bisi Bele Bath', 'Coorg Pandi Curry', 'Neer Dosa', 'Ragi Mudde', 'Benne Masala Dosa'],
        'Telangana': ['Hyderabadi Biryani', 'Irani Chai', 'Haleem', 'Mirchi ka Salan', 'Double ka Meetha', 'Qubani ka Meetha'],
        'Andhra Pradesh': ['Gongura Chicken', 'Pulihora', 'Andhra Chilli Chicken', 'Bobbatlu', 'Pootharekulu', 'Natu Kodi Pulusu']
    }
};

let currentPreferences = { state: '', duration: 5, budget: 'medium', travelStyle: 'cultural', travelers: 2 };
let currentStep = 1;

function loadPlannerForm() {
    const content = document.getElementById('plannerContent');
    if (!content) return;

    if (currentStep === 1) {
        content.innerHTML = `
            <div class="text-center mb-4">
                <div class="rounded-circle bg-danger text-white d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                    <i class="fas fa-map-marked-alt fa-2x"></i>
                </div>
                <h4 class="mt-3">Step 1: Choose Your Destination</h4>
                <p class="text-muted">Select which South Indian state you want to explore</p>
            </div>
            <div class="row g-3">
                ${tripPlannerData.states.map(state => `
                    <div class="col-md-6">
                        <div class="p-4 border rounded-3 text-center cursor-pointer ${currentPreferences.state === state ? 'border-danger bg-danger bg-opacity-10' : ''}" style="cursor: pointer;" onclick="selectState('${state}')">
                            <i class="fas fa-${state === 'Kerala' ? 'water' : state === 'Tamil Nadu' ? 'landmark' : state === 'Karnataka' ? 'mountain' : state === 'Telangana' ? 'city' : 'umbrella-beach'} fa-3x text-danger mb-3"></i>
                            <h5>${state}</h5>
                            <p class="text-muted small">${state === 'Kerala' ? 'Backwaters & Ayurveda' : state === 'Tamil Nadu' ? 'Temples & Heritage' : state === 'Karnataka' ? 'Palaces & Nature' : state === 'Telangana' ? 'Biryani & History' : 'Beaches & Spirituality'}</p>
                            ${currentPreferences.state === state ? '<i class="fas fa-check-circle text-success mt-2"></i>' : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <button class="btn btn-primary w-100" onclick="nextStep()" ${!currentPreferences.state ? 'disabled' : ''}>Continue →</button>
                </div>
            </div>
        `;
    } else if (currentStep === 2) {
        content.innerHTML = `
            <div class="text-center mb-4">
                <div class="rounded-circle bg-danger text-white d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                    <i class="fas fa-sliders-h fa-2x"></i>
                </div>
                <h4 class="mt-3">Step 2: Customize Your Trip</h4>
                <p class="text-muted">Tell us your preferences for a personalized itinerary</p>
            </div>
            
            <div class="mb-4">
                <label class="form-label fw-bold">📅 Duration (Days)</label>
                <div class="d-flex gap-2 flex-wrap">
                    ${tripPlannerData.durations.map(d => `
                        <button class="btn ${currentPreferences.duration === d ? 'btn-danger' : 'btn-outline-secondary'}" onclick="setDuration(${d})">${d} Days</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="mb-4">
                <label class="form-label fw-bold">💰 Budget</label>
                ${tripPlannerData.budgets.map(b => `
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="budget" value="${b.value}" ${currentPreferences.budget === b.value ? 'checked' : ''} onchange="setBudget('${b.value}')">
                        <label class="form-check-label">${b.label}</label>
                    </div>
                `).join('')}
            </div>
            
            <div class="mb-4">
                <label class="form-label fw-bold">🎒 Travel Style</label>
                <div class="row g-2">
                    ${tripPlannerData.travelStyles.map(style => `
                        <div class="col-6">
                            <div class="p-3 text-center border rounded-3 ${currentPreferences.travelStyle === style.value ? 'border-danger bg-danger bg-opacity-10' : ''}" style="cursor: pointer;" onclick="setTravelStyle('${style.value}')">
                                <i class="fas fa-${style.icon} text-danger mb-2"></i>
                                <div>${style.label}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="mb-4">
                <label class="form-label fw-bold">👥 Number of Travelers</label>
                <div class="d-flex align-items-center gap-3">
                    <button class="btn btn-outline-secondary" onclick="updateTravelers(-1)">-</button>
                    <span class="fs-3 fw-bold" id="travelerCount">${currentPreferences.travelers}</span>
                    <button class="btn btn-outline-secondary" onclick="updateTravelers(1)">+</button>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-6">
                    <button class="btn btn-outline-secondary w-100" onclick="prevStep()">← Back</button>
                </div>
                <div class="col-6">
                    <button class="btn btn-primary w-100" onclick="generateAndShow()">Generate Itinerary →</button>
                </div>
            </div>
        `;
    }
}

function selectState(state) { currentPreferences.state = state; loadPlannerForm(); }
function setDuration(duration) { currentPreferences.duration = duration; loadPlannerForm(); }
function setBudget(budget) { currentPreferences.budget = budget; }
function setTravelStyle(style) { currentPreferences.travelStyle = style; loadPlannerForm(); }
function updateTravelers(delta) { currentPreferences.travelers = Math.max(1, Math.min(10, currentPreferences.travelers + delta)); document.getElementById('travelerCount').textContent = currentPreferences.travelers; }
function nextStep() { currentStep = 2; loadPlannerForm(); }
function prevStep() { currentStep = 1; loadPlannerForm(); }

function generateAndShow() {
    const { state, duration, budget, travelStyle, travelers } = currentPreferences;

    // Get itinerary for selected state and duration
    let itinerary = [];
    if (tripPlannerData.detailedItineraries[state] && tripPlannerData.detailedItineraries[state][duration]) {
        itinerary = tripPlannerData.detailedItineraries[state][duration];
    } else {
        // Fallback to 5-day or default
        itinerary = tripPlannerData.detailedItineraries[state][5] || tripPlannerData.detailedItineraries[state][3];
    }

    // Calculate estimated cost
    const baseCostPerDay = budget === 'luxury' ? 8000 : budget === 'medium' ? 5000 : 3000;
    const totalCost = baseCostPerDay * duration * travelers;
    const perPersonCost = totalCost / travelers;

    const hotels = tripPlannerData.hotels[state][budget];
    const foods = tripPlannerData.foods[state];

    let itineraryHtml = `
        <div class="text-center mb-4">
            <div class="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                <i class="fas fa-check fa-2x"></i>
            </div>
            <h4 class="mt-3">Your Personalized Itinerary</h4>
            <p class="text-muted">${state} • ${duration} Days • ${travelStyle} Travel</p>
        </div>
        
        <div class="alert alert-info">
            <h6><i class="fas fa-info-circle"></i> Trip Summary</h6>
            <div class="row">
                <div class="col-6"><strong>Destination:</strong> ${state}</div>
                <div class="col-6"><strong>Duration:</strong> ${duration} days / ${duration - 1} nights</div>
                <div class="col-6"><strong>Travelers:</strong> ${travelers}</div>
                <div class="col-6"><strong>Travel Style:</strong> ${travelStyle}</div>
                <div class="col-12 mt-2"><strong>Estimated Cost:</strong> <span class="text-danger fs-5 fw-bold">₹${totalCost.toLocaleString()}</span> <small class="text-muted">(₹${perPersonCost.toLocaleString()} per person)</small></div>
            </div>
        </div>
        
        <h5 class="mt-4 mb-3"><i class="fas fa-route text-danger"></i> Day-by-Day Itinerary</h5>
    `;

    itinerary.forEach(day => {
        itineraryHtml += `
            <div class="itinerary-day mb-3 p-3 bg-light rounded-3">
                <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                    <h5 class="mb-0"><span class="badge bg-danger me-2">Day ${day.day}</span> ${day.title}</h5>
                    <span class="badge bg-info">${day.time || 'Full Day'}</span>
                </div>
                <div class="mt-2">
                    <strong><i class="fas fa-check-circle text-success"></i> Activities:</strong>
                    <ul class="mb-2 mt-1">
                        ${day.activities.map(a => `<li>${a}</li>`).join('')}
                    </ul>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                        <small><i class="fas fa-utensils text-danger"></i> <strong>Recommended Meal:</strong> ${day.meals}</small>
                    </div>
                    <div class="col-md-6">
                        <small><i class="fas fa-hotel text-info"></i> <strong>Stay:</strong> ${day.hotel}</small>
                    </div>
                    ${day.tips ? `<div class="col-12 mt-2"><small><i class="fas fa-lightbulb text-warning"></i> <strong>Tip:</strong> ${day.tips}</small></div>` : ''}
                </div>
            </div>
        `;
    });

    itineraryHtml += `
        <div class="alert alert-success mt-4">
            <h6><i class="fas fa-hotel"></i> Recommended Hotels (${budget.charAt(0).toUpperCase() + budget.slice(1)} Category)</h6>
            <ul class="mb-0">
                ${hotels.map(h => `<li>🏨 ${h}</li>`).join('')}
            </ul>
        </div>
        
        <div class="alert alert-warning mt-3">
            <h6><i class="fas fa-utensils"></i> Must-Try Local Cuisine</h6>
            <ul class="mb-0">
                ${foods.map(f => `<li>🍽️ ${f}</li>`).join('')}
            </ul>
        </div>
        
        <div class="alert alert-secondary mt-3">
            <h6><i class="fas fa-lightbulb"></i> Travel Tips</h6>
            <ul class="mb-0">
                <li>🏨 Book hotels at least 2 weeks in advance for best rates</li>
                <li>🚂 Book train tickets 60-120 days before travel on IRCTC</li>
                <li>💳 Keep cash for local markets and small vendors</li>
                <li>📱 Download offline maps of your destinations</li>
                <li>🧥 Pack light cotton clothes; carry a jacket for hill stations</li>
            </ul>
        </div>
        
        <div class="row mt-4">
            <div class="col-6">
                <button class="btn btn-outline-secondary w-100" onclick="saveItinerary()">
                    <i class="fas fa-download"></i> Save Itinerary
                </button>
            </div>
            <div class="col-6">
                <button class="btn btn-primary w-100" onclick="bookFromPlanner()">
                    <i class="fas fa-shopping-cart"></i> Book This Trip
                </button>
            </div>
        </div>
    `;

    document.getElementById('plannerContent').innerHTML = itineraryHtml;
    window.generatedTrip = { preferences: currentPreferences, itinerary, totalCost };
}

function saveItinerary() {
    if (window.generatedTrip) {
        const { preferences, itinerary, totalCost } = window.generatedTrip;
        let text = `DAKSHIN TRAVEL ITINERARY\n`;
        text += `=========================\n\n`;
        text += `Destination: ${preferences.state}\n`;
        text += `Duration: ${preferences.duration} days\n`;
        text += `Travel Style: ${preferences.travelStyle}\n`;
        text += `Travelers: ${preferences.travelers}\n`;
        text += `Estimated Total Cost: ₹${totalCost.toLocaleString()}\n\n`;
        text += `DAY-BY-DAY ITINERARY\n`;
        text += `-------------------\n\n`;

        itinerary.forEach(day => {
            text += `Day ${day.day}: ${day.title}\n`;
            text += `Time: ${day.time || 'Full Day'}\n`;
            text += `Activities:\n`;
            day.activities.forEach(a => { text += `  - ${a}\n`; });
            text += `Recommended Meal: ${day.meals}\n`;
            text += `Accommodation: ${day.hotel}\n`;
            if (day.tips) text += `Tip: ${day.tips}\n`;
            text += `\n`;
        });

        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `dakshin_itinerary_${preferences.state}_${preferences.duration}days.txt`;
        link.click();
        alert('✅ Itinerary saved to your downloads folder!');
    }
}

function bookFromPlanner() {
    if (window.generatedTrip) {
        localStorage.setItem('selectedPackage', `Custom ${window.generatedTrip.preferences.state} Trip - ${window.generatedTrip.preferences.duration} Days`);
        window.location.href = 'payment.html';
    }
}

// Make functions global
window.loadPlannerForm = loadPlannerForm;
window.selectState = selectState;
window.setDuration = setDuration;
window.setBudget = setBudget;
window.setTravelStyle = setTravelStyle;
window.updateTravelers = updateTravelers;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.generateAndShow = generateAndShow;
window.saveItinerary = saveItinerary;
window.bookFromPlanner = bookFromPlanner;