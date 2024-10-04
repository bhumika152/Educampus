// Navigation handling
function goBack() {
    window.history.back();
}

document.getElementById('sign-up-link').addEventListener('click', function() {
    document.getElementById('sign-up-form').classList.remove('hidden');
    document.getElementById('sign-in-form').classList.add('hidden');
    document.getElementById('reset-password-form').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('sign-in-link').classList.remove('active');
});

document.getElementById('sign-in-link').addEventListener('click', function() {
    document.getElementById('sign-in-form').classList.remove('hidden');
    document.getElementById('sign-up-form').classList.add('hidden');
    document.getElementById('reset-password-form').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('sign-up-link').classList.remove('active');
});