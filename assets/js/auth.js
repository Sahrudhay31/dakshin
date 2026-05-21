// Authentication System with Working Bookings

const USERS_KEY = 'dakshin_users';
const CURRENT_USER_KEY = 'dakshin_current_user';
const BOOKINGS_KEY = 'dakshin_bookings';

// Initialize default users
function initUsers() {
    if (!localStorage.getItem(USERS_KEY)) {
        const defaultUsers = [
            { id: 1, fullName: "Demo User", username: "demo", email: "demo@dakshin.com", password: "demo123", dob: "1990-01-01", createdAt: new Date().toISOString() }
        ];
        localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }

    // Initialize empty bookings if not exists
    if (!localStorage.getItem(BOOKINGS_KEY)) {
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify([]));
    }
}

// Get all users
function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

// Save users
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Check if logged in
function isLoggedIn() {
    return localStorage.getItem(CURRENT_USER_KEY) !== null;
}

// Get current user
function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

// Register new user
function registerUser(fullName, username, email, password, dob) {
    const users = getUsers();

    if (users.some(u => u.username === username)) {
        return { success: false, message: "Username already taken" };
    }
    if (users.some(u => u.email === email)) {
        return { success: false, message: "Email already registered" };
    }

    const newUser = {
        id: users.length + 1,
        fullName,
        username,
        email,
        password,
        dob: dob || "",
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    const { password: _, ...safeUser } = newUser;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));

    return { success: true, user: safeUser };
}

// Logout
function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    sessionStorage.removeItem('redirectAfterLogin');
    window.location.href = 'index.html';
}

// Save booking
function saveBooking(packageName, amount, passengers, travelDate) {
    const user = getCurrentUser();
    if (!user) {
        console.log("No user logged in");
        return false;
    }

    const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]');
    const newBooking = {
        id: Date.now(),
        userId: user.id,
        packageName: packageName,
        amount: amount,
        passengers: passengers || 2,
        travelDate: travelDate || new Date().toISOString().split('T')[0],
        bookingDate: new Date().toISOString(),
        status: 'confirmed'
    };
    bookings.push(newBooking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    console.log("Booking saved:", newBooking);
    return true;
}

// Get user bookings
function getUserBookings() {
    const user = getCurrentUser();
    if (!user) return [];
    const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]');
    const userBookings = bookings.filter(b => b.userId === user.id);
    console.log("User bookings:", userBookings);
    return userBookings;
}

// Display bookings in a nice modal
function showMyBookings() {
    const bookings = getUserBookings();

    if (bookings.length === 0) {
        alert("📋 You have no bookings yet.\n\nBook a tour package to get started!");
        return;
    }

    let message = "📋 MY BOOKINGS\n";
    message += "═══════════════════════════════════\n\n";

    bookings.forEach((booking, index) => {
        message += `${index + 1}. ${booking.packageName}\n`;
        message += `   📅 Travel Date: ${booking.travelDate}\n`;
        message += `   👥 Passengers: ${booking.passengers}\n`;
        message += `   💰 Amount: ₹${booking.amount.toLocaleString()}\n`;
        message += `   ✅ Status: ${booking.status.toUpperCase()}\n`;
        message += `   🕐 Booked on: ${new Date(booking.bookingDate).toLocaleDateString()}\n`;
        message += `   💳 Payment: ${booking.paymentMethod ? booking.paymentMethod.toUpperCase() : 'Card'}\n`;
        message += `\n`;
    });

    alert(message);
}

// View profile
function viewProfile() {
    const user = getCurrentUser();
    if (user) {
        alert(`👤 MY PROFILE\n\nName: ${user.fullName}\nUsername: ${user.username}\nEmail: ${user.email}\nMember since: ${new Date(user.createdAt).toLocaleDateString()}`);
    }
}

// Update navbar with user info
function updateNavbarUser() {
    const user = getCurrentUser();
    const authNavItem = document.getElementById('authNavItem');

    if (user && authNavItem) {
        authNavItem.innerHTML = `
            <div class="dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    <i class="fas fa-user-circle"></i> ${user.fullName.split(' ')[0]}
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#" onclick="viewProfile()"><i class="fas fa-user"></i> My Profile</a></li>
                    <li><a class="dropdown-item" href="#" onclick="showMyBookings()"><i class="fas fa-suitcase"></i> My Bookings</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="#" onclick="logoutUser()"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                </ul>
            </div>
        `;
    } else if (authNavItem) {
        authNavItem.innerHTML = `<a class="nav-link" id="authLink" href="login.html">Sign In</a>`;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initUsers();
    updateNavbarUser();
});

// Make functions global
window.viewProfile = viewProfile;
window.showMyBookings = showMyBookings;
window.logoutUser = logoutUser;
window.getUserBookings = getUserBookings;
window.saveBooking = saveBooking;