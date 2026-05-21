// Simple Trip Planner - Working Version

// Trip Planner Data
const tripData = {
    states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Telangana', 'Andhra Pradesh'],

    getItinerary: function (state, days, style) {
        const itineraries = {
            'Kerala': {
                3: {
                    title: "Quick Kerala Getaway",
                    places: ["Kochi - Fort Kochi & Chinese Fishing Nets", "Munnar - Tea Gardens & Mattupetty Dam", "Alleppey - Backwater Shikara Ride"],
                    meals: ["Kerala Sadya", "Malabar Biryani", "Karimeen Pollichathu"],
                    hotels: ["Zostel Kochi", "Tea Valley Resort Munnar", "Houseboat Alleppey"]
                },
                5: {
                    title: "Best of Kerala Tour",
                    places: ["Kochi - Fort Kochi & Kathakali", "Munnar - Tea Museum & Echo Point", "Thekkady - Periyar Wildlife Safari", "Alleppey - Houseboat Stay", "Kovalam - Lighthouse Beach"],
                    meals: ["Malabar Biryani", "Munnar Tea & Snacks", "Spice Garden Lunch", "Fresh Seafood on Houseboat", "Kerala Sadya"],
                    hotels: ["Brunton Boatyard", "Tea Valley Resort", "Spice Village", "Deluxe Houseboat", "The Leela Kovalam"]
                },
                7: {
                    title: "Complete Kerala Experience",
                    places: ["Kochi Heritage Tour", "Munnar Tea Gardens & Eravikulam", "Munnar to Thekkady", "Thekkady Wildlife & Spices", "Alleppey Backwaters Cruise", "Kovalam Beach Relaxation", "Varkala Cliff & Departure"],
                    meals: ["Seafood Platter", "Tea Factory Lunch", "Spice Garden", "Houseboat Dinner", "Beachside Cafe", "Kerala Sadya", "Farewell Dinner"],
                    hotels: ["Taj Malabar", "The Panoramic Getaway", "Spice Village", "Premium Houseboat", "Taj Green Cove", "Clafouti Beach Resort", "Departure"]
                }
            },
            'Tamil Nadu': {
                3: {
                    title: "Tamil Nadu Temple Trail",
                    places: ["Chennai - Kapaleeshwarar Temple & Marina Beach", "Mahabalipuram - Shore Temple & Pancha Rathas", "Kanchipuram - Temple City"],
                    meals: ["Chettinad Chicken", "Filter Coffee & Dosa", "South Indian Thali"],
                    hotels: ["The Park Chennai", "Ideal Beach Resort", "Heritage Madurai"]
                },
                5: {
                    title: "Tamil Nadu Heritage Tour",
                    places: ["Chennai City Tour", "Mahabalipuram UNESCO Site", "Pondicherry French Quarter", "Thanjavur Big Temple", "Madurai Meenakshi Temple"],
                    meals: ["Seafood", "French-Indian Fusion", "Banana Leaf Meals", "Chettinad Special", "Madurai Kari Dosa"],
                    hotels: ["Taj Coromandel", "Palais de Mahe", "Ideal River View", "Heritage Madurai", "Departure"]
                },
                7: {
                    title: "Complete Tamil Nadu Circuit",
                    places: ["Chennai - Marina Beach & Kapaleeshwarar", "Mahabalipuram - Shore Temple & Rathas", "Pondicherry - French Quarter & Auroville", "Thanjavur - Brihadeeswara Temple", "Tiruchirappalli - Rock Fort", "Madurai - Meenakshi Temple & Night Aarti", "Rameshwaram - Ramanathaswamy Temple & Departure"],
                    meals: ["Coastal Seafood", "Pondicherry Bakery", "Chettinad Chicken", "Temple Prasadam", "Madurai Street Food", "Biryani", "Rameshwaram Halwa"],
                    hotels: ["Taj Fisherman's Cove", "Palais de Mahe", "Ideal River View", "Heritage Madurai", "Hotel Danvin", "Taj Gateway", "Departure"]
                }
            },
            'Karnataka': {
                3: {
                    title: "Karnataka Royal Tour",
                    places: ["Bangalore - Lalbagh & Vidhana Soudha", "Mysore - Palace & Chamundi Hills", "Srirangapatna - Tipu Sultan's Fort"],
                    meals: ["Bisi Bele Bath", "Mysore Pak", "Local Meals"],
                    hotels: ["ITC Gardenia", "Royal Orchid Mysore", "Departure"]
                },
                5: {
                    title: "Karnataka Heritage Circuit",
                    places: ["Bangalore Garden City Tour", "Mysore Palace & Brindavan Gardens", "Coorg Coffee Plantation & Abbey Falls", "Bandipur Tiger Safari", "Hampi Ruins"],
                    meals: ["Filter Coffee", "Mysore Pak", "Coorg Pandi Curry", "Jungle Lunch", "Hampi Bhelpuri"],
                    hotels: ["Taj West End", "Royal Orchid Mysore", "Coorg Cliffs", "Bandipur Safari Lodge", "Heritage Resort Hampi"]
                },
                7: {
                    title: "Complete Karnataka Explorer",
                    places: ["Bangalore - Lalbagh & ISKCON", "Mysore - Palace & Chamundi Hills", "Coorg - Abbey Falls & Coffee Estate", "Coorg - Dubare Elephant Camp & Talakaveri", "Bandipur - Tiger Safari & Jeep Ride", "Hampi - Vittala Temple & Ruins", "Badami - Cave Temples & Departure"],
                    meals: ["Bangalore Street Food", "Mysore Special", "Coorg Pork Curry", "Plantation Lunch", "Jungle Safari Meal", "Hampi Cafe", "Badami Thali"],
                    hotels: ["ITC Gardenia", "Royal Orchid Mysore", "Coorg Cliffs", "Coorg Wilderness", "Bandipur Safari Lodge", "Evolve Back Hampi", "Clarks Inn Badami"]
                }
            },
            'Telangana': {
                3: {
                    title: "Hyderabad Highlights",
                    places: ["Hyderabad - Charminar & Laad Bazaar", "Golconda Fort & Sound & Light Show", "Hussain Sagar & Birla Mandir"],
                    meals: ["Hyderabadi Biryani", "Irani Chai & Osmania Biscuit", "Andhra Meals"],
                    hotels: ["Hotel Grand Plaza", "Park Hyatt", "Taj Falaknuma"]
                },
                5: {
                    title: "Telangana Heritage Tour",
                    places: ["Hyderabad - Charminar & Old City", "Golconda Fort & Qutb Shahi Tombs", "Ramoji Film City Full Day", "Warangal - Ramappa Temple & Fort", "Hyderabad - Salar Jung Museum & Shopping"],
                    meals: ["Biryani at Paradise", "Irani Chai", "Ramoji Food Court", "Telangana Special", "Double ka Meetha"],
                    hotels: ["Park Hyatt", "ITC Kohenur", "Ramoji Resort", "Hotel Grand Plaza", "Departure"]
                },
                7: {
                    title: "Complete Telangana Circuit",
                    places: ["Hyderabad - Charminar & Laad Bazaar", "Golconda Fort - History & Light Show", "Ramoji Film City - Full Day Tour", "Hyderabad - Birla Mandir & Hussain Sagar", "Warangal - Ramappa Temple & Fort", "Hyderabad - Salar Jung Museum & Shopping", "Qutb Shahi Tombs & Departure"],
                    meals: ["Paradise Biryani", "Irani Chai & Osmania", "Ramoji Buffet", "Hyderabad Haleem", "Warangal Special", "Bawarchi Biryani", "Farewell Dinner"],
                    hotels: ["Taj Falaknuma", "Park Hyatt", "Ramoji Resort", "ITC Kohenur", "Hotel Grand Plaza", "Novotel", "Departure"]
                }
            },
            'Andhra Pradesh': {
                3: {
                    title: "Andhra Coastal Tour",
                    places: ["Visakhapatnam - RK Beach & Submarine Museum", "Araku Valley - Borra Caves & Coffee", "Vizag - Kailasagiri & Simhachalam"],
                    meals: ["Andhra Spicy Meals", "Araku Coffee", "Pulihora"],
                    hotels: ["The Park Vizag", "Araku Valley Resort", "Novotel Vizag"]
                },
                5: {
                    title: "Andhra Pradesh Explorer",
                    places: ["Vizag - RK Beach & Submarine Museum", "Araku Valley - Scenic Train Journey", "Araku - Borra Caves & Coffee Museum", "Lambasingi - Kashmir of Andhra", "Vizag - Kailasagiri & Simhachalam"],
                    meals: ["Seafood Platter", "Araku Tribal Food", "Coffee & Snacks", "Andhra Chilli Chicken", "Pootharekulu Sweet"],
                    hotels: ["The Park Vizag", "Araku Valley Resort", "Araku Resort", "Lambasingi Cottages", "Departure"]
                },
                7: {
                    title: "Complete Andhra Pradesh Circuit",
                    places: ["Visakhapatnam - RK Beach & Submarine Museum", "Vizag - Kailasagiri & Dolphin's Nose", "Scenic Train to Araku Valley", "Araku - Borra Caves & Coffee Museum", "Araku - Padmapuram Gardens & Tribal Museum", "Lambasingi - Kashmir of Andhra", "Simhachalam Temple & Departure"],
                    meals: ["Vizag Seafood", "Local Andhra Meals", "Train Journey Snacks", "Araku Coffee", "Tribal Cuisine", "Lambasingi Special", "Farewell Meal"],
                    hotels: ["The Park Vizag", "Novotel Vizag", "Araku Valley Resort", "Araku Resort", "Lambasingi Cottages", "Radisson Blu Vizag", "Departure"]
                }
            }
        };

        if (itineraries[state] && itineraries[state][days]) {
            return itineraries[state][days];
        }
        return itineraries['Kerala'][3];
    },

    calculateCost: function (state, days, travelers, budgetType) {
        const rates = {
            'budget': 4000,
            'medium': 8000,
            'luxury': 15000
        };
        const stateMultiplier = {
            'Kerala': 1.1,
            'Tamil Nadu': 1.0,
            'Karnataka': 1.05,
            'Telangana': 0.95,
            'Andhra Pradesh': 0.95
        };
        const dailyRate = rates[budgetType] || 8000;
        const total = dailyRate * days * travelers * (stateMultiplier[state] || 1);
        return Math.round(total);
    }
};

// UI State
let currentPref = { state: '', days: 5, budget: 'medium', travelers: 2 };
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
                <h4 class="mt-3">Plan Your Trip</h4>
                <p class="text-muted">Choose your destination</p>
            </div>
            <div class="row g-3">
                ${tripData.states.map(state => `
                    <div class="col-md-6">
                        <div class="p-4 border rounded-3 text-center ${currentPref.state === state ? 'border-danger bg-danger bg-opacity-10' : ''}" style="cursor: pointer;" onclick="selectState('${state}')">
                            <i class="fas fa-${state === 'Kerala' ? 'water' : state === 'Tamil Nadu' ? 'landmark' : state === 'Karnataka' ? 'mountain' : state === 'Telangana' ? 'city' : 'umbrella-beach'} fa-3x text-danger mb-3"></i>
                            <h5>${state}</h5>
                            <p class="text-muted small">${getStateInfo(state)}</p>
                            ${currentPref.state === state ? '<i class="fas fa-check-circle text-success mt-2"></i>' : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <button class="btn btn-primary w-100" onclick="nextStep()" ${!currentPref.state ? 'disabled' : ''}>Continue →</button>
                </div>
            </div>
        `;
    } else {
        content.innerHTML = `
            <div class="text-center mb-4">
                <div class="rounded-circle bg-danger text-white d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                    <i class="fas fa-sliders-h fa-2x"></i>
                </div>
                <h4 class="mt-3">Customize Your Trip</h4>
                <p class="text-muted">Tell us your preferences</p>
            </div>
            
            <div class="mb-4">
                <label class="form-label fw-bold">📅 Duration (Days)</label>
                <div class="d-flex gap-2 flex-wrap">
                    ${[3, 4, 5, 6, 7].map(d => `
                        <button class="btn ${currentPref.days === d ? 'btn-danger' : 'btn-outline-secondary'}" onclick="setDays(${d})">${d} Days</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="mb-4">
                <label class="form-label fw-bold">💰 Budget</label>
                <div class="row g-2">
                    <div class="col-4"><div class="p-3 text-center border rounded-3 ${currentPref.budget === 'budget' ? 'border-danger bg-danger bg-opacity-10' : ''}" onclick="setBudget('budget')" style="cursor: pointer;"><i class="fas fa-rupee-sign"></i><br>Budget</div></div>
                    <div class="col-4"><div class="p-3 text-center border rounded-3 ${currentPref.budget === 'medium' ? 'border-danger bg-danger bg-opacity-10' : ''}" onclick="setBudget('medium')" style="cursor: pointer;"><i class="fas fa-chart-line"></i><br>Standard</div></div>
                    <div class="col-4"><div class="p-3 text-center border rounded-3 ${currentPref.budget === 'luxury' ? 'border-danger bg-danger bg-opacity-10' : ''}" onclick="setBudget('luxury')" style="cursor: pointer;"><i class="fas fa-gem"></i><br>Luxury</div></div>
                </div>
            </div>
            
            <div class="mb-4">
                <label class="form-label fw-bold">👥 Travelers</label>
                <div class="d-flex align-items-center gap-3">
                    <button class="btn btn-outline-secondary" onclick="updateTravelers(-1)">-</button>
                    <span class="fs-2 fw-bold" id="travelerCount">${currentPref.travelers}</span>
                    <button class="btn btn-outline-secondary" onclick="updateTravelers(1)">+</button>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-6"><button class="btn btn-outline-secondary w-100" onclick="prevStep()">← Back</button></div>
                <div class="col-6"><button class="btn btn-primary w-100" onclick="generatePlan()">Generate Plan →</button></div>
            </div>
        `;
    }
}

function getStateInfo(state) {
    const info = {
        'Kerala': 'Backwaters & Hill Stations',
        'Tamil Nadu': 'Temples & Heritage',
        'Karnataka': 'Palaces & Coffee',
        'Telangana': 'Biryani & History',
        'Andhra Pradesh': 'Beaches & Caves'
    };
    return info[state] || '';
}

function selectState(state) { currentPref.state = state; loadPlannerForm(); }
function setDays(days) { currentPref.days = days; loadPlannerForm(); }
function setBudget(budget) { currentPref.budget = budget; loadPlannerForm(); }
function updateTravelers(delta) { currentPref.travelers = Math.max(1, Math.min(10, currentPref.travelers + delta)); document.getElementById('travelerCount').textContent = currentPref.travelers; }
function nextStep() { currentStep = 2; loadPlannerForm(); }
function prevStep() { currentStep = 1; loadPlannerForm(); }

function generatePlan() {
    const { state, days, budget, travelers } = currentPref;
    const itinerary = tripData.getItinerary(state, days);
    const totalCost = tripData.calculateCost(state, days, travelers, budget);
    const perPerson = Math.round(totalCost / travelers);

    let html = `
        <div class="text-center mb-4">
            <div class="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                <i class="fas fa-check fa-2x"></i>
            </div>
            <h4 class="mt-3">Your ${state} Trip Plan</h4>
            <p class="text-muted">${days} Days • ${travelers} Travelers • ${budget.charAt(0).toUpperCase() + budget.slice(1)} Budget</p>
        </div>
        
        <div class="alert alert-info">
            <strong>💰 Total Estimated Cost:</strong> ₹${totalCost.toLocaleString()} <small class="text-muted">(₹${perPerson.toLocaleString()} per person)</small>
        </div>
        
        <h5 class="mt-3"><i class="fas fa-route text-danger"></i> Itinerary: ${itinerary.title}</h5>
    `;

    for (let i = 0; i < itinerary.places.length; i++) {
        html += `
            <div class="card mb-3 border-0 shadow-sm">
                <div class="card-body">
                    <div class="d-flex align-items-center gap-3">
                        <div class="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">${i + 1}</div>
                        <div>
                            <h6 class="mb-1">Day ${i + 1}</h6>
                            <p class="mb-0">${itinerary.places[i]}</p>
                            <small class="text-muted">🍽️ ${itinerary.meals[i]}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    html += `
        <div class="alert alert-warning mt-3">
            <strong>🏨 Recommended Hotels:</strong><br>
            ${itinerary.hotels.map(h => `• ${h}`).join('<br>')}
        </div>
        
        <div class="row mt-4">
            <div class="col-6"><button class="btn btn-outline-secondary w-100" onclick="savePlan()"><i class="fas fa-download"></i> Save Plan</button></div>
            <div class="col-6"><button class="btn btn-primary w-100" onclick="bookPlan()"><i class="fas fa-shopping-cart"></i> Book Now</button></div>
        </div>
    `;

    document.getElementById('plannerContent').innerHTML = html;
    window.currentPlan = { state, days, budget, travelers, totalCost, itinerary };
}

function savePlan() {
    if (window.currentPlan) {
        const plan = window.currentPlan;
        let text = `DAKSHIN TRIP PLAN\n`;
        text += `=================\n\n`;
        text += `Destination: ${plan.state}\n`;
        text += `Duration: ${plan.days} days\n`;
        text += `Travelers: ${plan.travelers}\n`;
        text += `Budget: ${plan.budget}\n`;
        text += `Total Cost: ₹${plan.totalCost.toLocaleString()}\n\n`;
        text += `ITINERARY:\n`;
        for (let i = 0; i < plan.itinerary.places.length; i++) {
            text += `Day ${i + 1}: ${plan.itinerary.places[i]}\n`;
            text += `  Meal: ${plan.itinerary.meals[i]}\n`;
        }
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `Dakshin_Plan_${plan.state}.txt`;
        link.click();
        alert('✅ Trip plan saved!');
    }
}

function bookPlan() {
    if (window.currentPlan) {
        localStorage.setItem('selectedPackage', `${window.currentPlan.state} Custom Trip - ${window.currentPlan.days} Days`);
        window.location.href = 'payment.html';
    }
}

// Make functions global
window.loadPlannerForm = loadPlannerForm;
window.selectState = selectState;
window.setDays = setDays;
window.setBudget = setBudget;
window.updateTravelers = updateTravelers;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.generatePlan = generatePlan;
window.savePlan = savePlan;
window.bookPlan = bookPlan;