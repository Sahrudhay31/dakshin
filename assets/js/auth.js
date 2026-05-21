// Authentication System - Complete

const USERS_KEY = 'dakshin_users';
const CURRENT_USER_KEY = 'dakshin_current_user';
const BOOKINGS_KEY = 'dakshin_bookings';

function initUsers() {
    if (!localStorage.getItem(USERS_KEY)) {
        const defaultUsers = [
            { id: 1, fullName: "Demo User", username: "demo", email: "demo@dakshin.com", password: "demo123", dob: "1990-01-01", createdAt: new Date().toISOString() }
        ];
        localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
}

function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function isLoggedIn() {
    return localStorage.getItem(CURRENT_USER_KEY) !== null;
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

function loginUser(emailOrUsername, password) {
    const users = getUsers();
    const user = users.find(u => (u.email === emailOrUsername || u.username === emailOrUsername) && u.password === password);
    if (user) {
        const { password, ...safeUser } = user;
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
        return { success: true, user: safeUser };
    }
    return { success: false, message: "Invalid email/username or password" };
}

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
        createdAt: new Date().toISOString(),
        bookings: []
    };
    users.push(newUser);
    saveUsers(users);
    const { password: _, ...safeUser } = newUser;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
    return { success: true, user: safeUser };
}

function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    sessionStorage.removeItem('redirectAfterLogin');
    window.location.href = 'index.html';
}

function saveBooking(packageName, amount) {
    const user = getCurrentUser();
    if (!user) return false;

    const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]');
    const newBooking = {
        id: Date.now(),
        userId: user.id,
        packageName: packageName,
        amount: amount,
        bookingDate: new Date().toISOString(),
        status: 'confirmed'
    };
    bookings.push(newBooking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    return true;
}

function getUserBookings() {
    const user = getCurrentUser();
    if (!user) return [];
    const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]');
    return bookings.filter(b => b.userId === user.id);
}

function updateNavbarUser() {
    const user = getCurrentUser();
    const navLinks = document.querySelector('.navbar-nav');
    if (!navLinks) return;

    const existingUserMenu = document.getElementById('userMenuContainer');
    if (existingUserMenu) existingUserMenu.remove();

    if (user) {
        const userMenu = document.createElement('li');
        userMenu.className = 'nav-item dropdown';
        userMenu.id = 'userMenuContainer';
        userMenu.innerHTML = `
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <i class="fas fa-user-circle"></i> ${user.fullName.split(' ')[0]}
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#" onclick="viewProfile()"><i class="fas fa-user"></i> My Profile</a></li>
                <li><a class="dropdown-item" href="#" onclick="viewBookings()"><i class="fas fa-suitcase"></i> My Bookings</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" onclick="logoutUser()"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
            </ul>
        `;
        navLinks.appendChild(userMenu);
    }
}

function viewProfile() {
    const user = getCurrentUser();
    if (user) {
        alert(`👤 My Profile\n\nName: ${user.fullName}\nUsername: ${user.username}\nEmail: ${user.email}\nMember since: ${new Date(user.createdAt).toLocaleDateString()}`);
    }
}

function viewBookings() {
    const bookings = getUserBookings();
    if (bookings.length === 0) {
        alert("📋 You have no bookings yet.\n\nBook a tour package to get started!");
    } else {
        let message = "📋 My Bookings:\n\n";
        bookings.forEach((booking, index) => {
            message += `${index + 1}. ${booking.packageName}\n   Date: ${new Date(booking.bookingDate).toLocaleDateString()}\n   Status: ${booking.status}\n\n`;
        });
        alert(message);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initUsers();
    if (typeof bootstrap !== 'undefined') {
        updateNavbarUser();
    }
});