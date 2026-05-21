const tripPlannerData = {
    states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Telangana', 'Andhra Pradesh'],
    durations: [3, 4, 5, 6, 7],
    budgets: [{ value: 'budget', label: '💸 Budget (₹10k-20k)' }, { value: 'medium', label: '💰 Standard (₹20k-35k)' }, { value: 'luxury', label: '💎 Luxury (₹35k-60k+)' }],
    travelStyles: [{ value: 'cultural', label: '🏛️ Cultural & Heritage' }, { value: 'nature', label: '🌿 Nature & Wildlife' }, { value: 'beach', label: '🏖️ Beach & Relaxation' }, { value: 'spiritual', label: '🛕 Spiritual & Pilgrimage' }],
    attractions: {
        'Kerala': ['Alleppey Backwaters', 'Munnar Hills', 'Thekkady Wildlife', 'Varkala Beach', 'Fort Kochi', 'Wayanad'],
        'Tamil Nadu': ['Meenakshi Temple', 'Ooty Hill Station', 'Kodaikanal', 'Rameshwaram', 'Kanyakumari', 'Mahabalipuram'],
        'Karnataka': ['Hampi Ruins', 'Mysore Palace', 'Coorg', 'Bandipur', 'Gokarna', 'Badami Caves'],
        'Telangana': ['Charminar', 'Golconda Fort', 'Ramoji Film City', 'Ramappa Temple', 'Hussain Sagar'],
        'Andhra Pradesh': ['Tirupati', 'Vizag Beach', 'Araku Valley', 'Gandikota', 'Srisailam']
    },
    hotels: { 'Kerala': { budget: ['Zostel Kochi', 'Greenwood Homestay'], medium: ['Tea Valley Resort', 'Spice Village'], luxury: ['Kumarakom Lake Resort', 'Taj Malabar'] }, 'Tamil Nadu': { budget: ['Zostel Ooty', 'Hotel Aakash'], medium: ['Heritage Madurai', 'Great Trails Kodaikanal'], luxury: ['Taj Fisherman\'s Cove', 'Leela Palace Chennai'] }, 'Karnataka': { budget: ['Zostel Hampi', 'GoSTops Coorg'], medium: ['Coorg Cliffs', 'Royal Orchid Mysore'], luxury: ['Evolve Back Hampi', 'Taj West End'] }, 'Telangana': { budget: ['Backpacker Panda', 'Hotel Grand Plaza'], medium: ['Park Hyatt', 'ITC Kohenur'], luxury: ['Taj Falaknuma Palace', 'JW Marriott'] }, 'Andhra Pradesh': { budget: ['Zostel Vizag', 'Hotel Daspalla'], medium: ['Novotel Vizag', 'The Gateway Hotel'], luxury: ['Taj Vizag', 'The Park Vizag'] } },
    foods: { 'Kerala': ['Kerala Sadya', 'Malabar Biryani', 'Karimeen Pollichathu'], 'Tamil Nadu': ['Chettinad Chicken', 'Dosa & Sambhar', 'Filter Coffee'], 'Karnataka': ['Mysore Pak', 'Bisi Bele Bath', 'Coorg Pandi Curry'], 'Telangana': ['Hyderabadi Biryani', 'Irani Chai', 'Haleem'], 'Andhra Pradesh': ['Gongura Chicken', 'Pulihora', 'Andhra Chilli Chicken'] }
};

let currentPreferences = { state: '', duration: 5, budget: 'medium', travelStyle: 'cultural', travelers: 2, startDate: new Date().toISOString().split('T')[0] };
let currentStep = 1;

function loadPlannerForm() {
    const content = document.getElementById('plannerContent');
    if (!content) return;
    if (currentStep === 1) {
        content.innerHTML = `<div class="text-center mb-4"><div class="rounded-circle bg-danger text-white d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px;"><i class="fas fa-map-marked-alt fa-2x"></i></div><h4 class="mt-3">Step 1: Choose Your Destination</h4><p class="text-muted">Select which South Indian state you want to explore</p></div><div class="row g-3">${tripPlannerData.states.map(state => `<div class="col-md-6"><div class="p-3 border rounded-3 text-center cursor-pointer ${currentPreferences.state === state ? 'border-danger bg-danger bg-opacity-10' : ''}" style="cursor: pointer;" onclick="selectState('${state}')"><i class="fas fa-${state === 'Kerala' ? 'water' : state === 'Tamil Nadu' ? 'landmark' : state === 'Karnataka' ? 'mountain' : 'city'} fa-2x text-danger mb-2"></i><h5>${state}</h5>${currentPreferences.state === state ? '<i class="fas fa-check-circle text-success mt-2"></i>' : ''}</div></div>`).join('')}</div><div class="row mt-4"><div class="col-12"><button class="btn btn-primary w-100" onclick="nextStep()" ${!currentPreferences.state ? 'disabled' : ''}>Continue →</button></div></div>`;
    } else if (currentStep === 2) {
        content.innerHTML = `<div class="text-center mb-4"><div class="rounded-circle bg-danger text-white d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px;"><i class="fas fa-sliders-h fa-2x"></i></div><h4 class="mt-3">Step 2: Customize Your Trip</h4><p class="text-muted">Tell us your preferences for a personalized itinerary</p></div><div class="mb-3"><label class="form-label fw-bold">📅 Duration (Days)</label><div class="d-flex gap-2 flex-wrap">${tripPlannerData.durations.map(d => `<button class="btn ${currentPreferences.duration === d ? 'btn-danger' : 'btn-outline-secondary'}" onclick="setDuration(${d})">${d} Days</button>`).join('')}</div></div><div class="mb-3"><label class="form-label fw-bold">💰 Budget</label>${tripPlannerData.budgets.map(b => `<div class="form-check"><input class="form-check-input" type="radio" name="budget" value="${b.value}" ${currentPreferences.budget === b.value ? 'checked' : ''} onchange="setBudget('${b.value}')"><label class="form-check-label">${b.label}</label></div>`).join('')}</div><div class="mb-3"><label class="form-label fw-bold">🎒 Travel Style</label><div class="row g-2">${tripPlannerData.travelStyles.map(style => `<div class="col-6"><div class="p-2 text-center border rounded-3 ${currentPreferences.travelStyle === style.value ? 'border-danger bg-danger bg-opacity-10' : ''}" style="cursor: pointer;" onclick="setTravelStyle('${style.value}')">${style.label}</div></div>`).join('')}</div></div><div class="mb-3"><label class="form-label fw-bold">👥 Number of Travelers</label><div class="d-flex align-items-center gap-3"><button class="btn btn-outline-secondary" onclick="updateTravelers(-1)">-</button><span class="fs-4 fw-bold" id="travelerCount">${currentPreferences.travelers}</span><button class="btn btn-outline-secondary" onclick="updateTravelers(1)">+</button></div></div><div class="row mt-4"><div class="col-6"><button class="btn btn-outline-secondary w-100" onclick="prevStep()">← Back</button></div><div class="col-6"><button class="btn btn-primary w-100" onclick="generateAndShow()">Generate Itinerary →</button></div></div>`;
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
    const attractions = tripPlannerData.attractions[currentPreferences.state];
    const hotels = tripPlannerData.hotels[currentPreferences.state][currentPreferences.budget];
    const foods = tripPlannerData.foods[currentPreferences.state];
    const perPersonCost = currentPreferences.budget === 'luxury' ? 35000 : currentPreferences.budget === 'medium' ? 20000 : 12000;
    const totalCost = perPersonCost * currentPreferences.travelers;
    let itineraryHtml = `<div class="text-center mb-4"><div class="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px;"><i class="fas fa-check fa-2x"></i></div><h4 class="mt-3">Your Personalized Itinerary</h4><p class="text-muted">${currentPreferences.state} • ${currentPreferences.duration} Days • ${currentPreferences.travelStyle} Travel</p></div><div class="alert alert-info"><strong>Trip Summary</strong><br>Destination: ${currentPreferences.state}<br>Duration: ${currentPreferences.duration} days<br>Travelers: ${currentPreferences.travelers}<br>Estimated Cost: <strong>₹${totalCost.toLocaleString()}</strong> (₹${perPersonCost.toLocaleString()} per person)</div><h5 class="mt-4"><i class="fas fa-route text-danger"></i> Day-by-Day Itinerary</h5>`;
    for (let i = 0; i < Math.min(currentPreferences.duration, attractions.length); i++) {
        itineraryHtml += `<div class="bg-light p-3 rounded-3 mb-3"><div class="d-flex justify-content-between align-items-center mb-2"><h5 class="mb-0">Day ${i + 1}: ${attractions[i]}</h5><span class="badge bg-info">Full Day</span></div><p>Explore ${attractions[i]} with guided tours and local experiences.</p><div><small><i class="fas fa-utensils text-danger"></i> <strong>Recommended Meal:</strong> ${foods[i % foods.length]}</small></div></div>`;
    }
    itineraryHtml += `<div class="alert alert-success mt-3"><h6><i class="fas fa-hotel"></i> Recommended Hotels (${currentPreferences.budget} Category)</h6><ul>${hotels.map(h => `<li>🏨 ${h}</li>`).join('')}</ul></div><div class="alert alert-warning"><h6><i class="fas fa-utensils"></i> Must-Try Local Cuisine</h6><ul>${foods.map(f => `<li>🍽️ ${f}</li>`).join('')}</ul></div><div class="row mt-4"><div class="col-6"><button class="btn btn-outline-secondary w-100" onclick="loadPlannerForm()"><i class="fas fa-edit"></i> Edit Trip</button></div><div class="col-6"><button class="btn btn-primary w-100" onclick="bookFromPlanner()"><i class="fas fa-shopping-cart"></i> Book This Trip</button></div></div>`;
    document.getElementById('plannerContent').innerHTML = itineraryHtml;
    window.generatedTrip = { preferences: currentPreferences, totalCost: totalCost };
}

function bookFromPlanner() { if (window.generatedTrip) { localStorage.setItem('selectedPackage', `Custom ${window.generatedTrip.preferences.state} Trip - ${window.generatedTrip.preferences.duration} Days`); window.location.href = 'payment.html'; } }

window.loadPlannerForm = loadPlannerForm;
window.selectState = selectState; window.setDuration = setDuration; window.setBudget = setBudget; window.setTravelStyle = setTravelStyle; window.updateTravelers = updateTravelers; window.nextStep = nextStep; window.prevStep = prevStep; window.generateAndShow = generateAndShow; window.bookFromPlanner = bookFromPlanner;