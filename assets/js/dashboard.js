// Show logout modal
function confirmLogout() {
  new bootstrap.Modal(document.getElementById('logoutModal')).show();
}

// Redirect to login page on logout
function logout() {
  location.href = "Login.html";
}

// Toggle date filter visibility
function toggleDateFilter(button) {
  const filterDateElement = button.closest('.main-section')?.querySelector('.filter-date');

  if (filterDateElement) {
    filterDateElement.classList.toggle('d-none');
    filterDateElement.classList.toggle('d-flex');
  } else {
    console.error("Error: .filter-date or .main-section not found.");
  }
}

// Toggle status
function toggleStatus(button) {
  const icon = button.querySelector('i');
  
  if (icon) {
    const isActive = button.classList.toggle('active'); // Adds/removes 'active' class
    button.classList.toggle('inactive', !isActive); // Adds/removes 'inactive' class
    icon.classList.toggle('fa-toggle-on', isActive); // Toggles 'on' icon
    icon.classList.toggle('fa-toggle-off', !isActive); // Toggles 'off' icon
  }
}
