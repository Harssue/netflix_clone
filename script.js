// Handle Sign In button click
const signInButton = document.getElementById('signInButton');
if (signInButton) {
    signInButton.addEventListener('click', function() {
        window.location.href = 'https://www.netflix.com/in/login';
    });
}

// Handle Get Started button click
const getStartedButton = document.getElementById('getStartedButton');
const emailInput = document.getElementById('emailInput');
if (getStartedButton && emailInput) {
    getStartedButton.addEventListener('click', function() {
        const email = emailInput.value.trim();
        if (email) {
            alert(`Welcome! We will use ${email} to create your account (demo only).`);
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Optional: Language button interaction
document.getElementById('languageButton')?.addEventListener('click', function() {
    alert('Language selection is a demo feature.');
}); 