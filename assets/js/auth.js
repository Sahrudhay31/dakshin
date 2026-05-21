const USERS_KEY = 'dakshin_users';
const CURRENT_USER_KEY = 'dakshin_current_user';

function initUsers() {
    if (!localStorage.getItem(USERS_KEY)) {
        const defaultUsers = [{ id: 1, fullName: "Demo User", username: "demo", email: "demo@dakshin.com", password: "demo123", dob: "1990-01-01", createdAt: new Date().toISOString() }];
        localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
}

function getUsers() { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
function saveUsers(users) { localStorage.setItem(USERS_KEY, JSON.stringify(users)); }
function isLoggedIn() { return localStorage.getItem(CURRENT_USER_KEY) !== null; }
function getCurrentUser() { return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)); }

function loginUser(emailOrUsername, password) {
    const users = getUsers();
    const user = users.find(u => (u.email === emailOrUsername || u.username === emailOrUsername) && u.password === password);
    if (user) { const { password, ...safeUser } = user; localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser)); return { success: true, user: safeUser }; }
    return { success: false, message: "Invalid email/username or password" };
}

function registerUser(fullName, username, email, password, dob) {
    const users = getUsers();
    if (users.some(u => u.username === username)) return { success: false, message: "Username already taken" };
    if (users.some(u => u.email === email)) return { success: false, message: "Email already registered" };
    const newUser = { id: users.length + 1, fullName, username, email, password, dob: dob || "", createdAt: new Date().toISOString() };
    users.push(newUser);
    saveUsers(users);
    const { password: _, ...safeUser } = newUser;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
    return { success: true, user: safeUser };
}

function logoutUser() { localStorage.removeItem(CURRENT_USER_KEY); sessionStorage.removeItem('redirectAfterLogin'); }

function handleLogin(event) {
    event.preventDefault();
    const emailOrUsername = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    if (!emailOrUsername || !password) { showError('Please fill in all fields'); return; }
    const result = loginUser(emailOrUsername, password);
    if (result.success) { showSuccess('Login successful! Redirecting...'); setTimeout(() => { const redirectUrl = sessionStorage.getItem('redirectAfterLogin'); if (redirectUrl) { sessionStorage.removeItem('redirectAfterLogin'); window.location.href = redirectUrl; } else { window.location.href = 'index.html'; } }, 1500); }
    else { showError(result.message); }
}

function handleSignup(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const termsChecked = document.getElementById('termsCheckbox').checked;
    if (!fullName || !username || !email || !password) { showError('Please fill in all required fields'); return; }
    if (password !== confirmPassword) { showError('Passwords do not match'); return; }
    if (password.length < 6) { showError('Password must be at least 6 characters'); return; }
    if (!termsChecked) { showError('Please agree to the Terms of Service'); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { showError('Please enter a valid email address'); return; }
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!usernameRegex.test(username)) { showError('Username must be 3-20 characters (letters, numbers, underscore only)'); return; }
    const result = registerUser(fullName, username, email, password, dob);
    if (result.success) { showSuccess('Account created successfully! Redirecting...'); setTimeout(() => { window.location.href = 'index.html'; }, 1500); }
    else { showError(result.message); }
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');
    if (errorDiv) { errorDiv.textContent = message; errorDiv.style.display = 'block'; if (successDiv) successDiv.style.display = 'none'; setTimeout(() => { errorDiv.style.display = 'none'; }, 4000); }
    else { alert(message); }
}

function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    const errorDiv = document.getElementById('errorMessage');
    if (successDiv) { successDiv.textContent = message; successDiv.style.display = 'block'; if (errorDiv) errorDiv.style.display = 'none'; }
}

function requireAuth(redirectUrl) {
    if (!isLoggedIn()) { sessionStorage.setItem('redirectAfterLogin', redirectUrl || window.location.href); window.location.href = 'login.html'; return false; }
    return true;
}

document.addEventListener('DOMContentLoaded', initUsers);