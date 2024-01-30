// myscript.js

// Array of allowed domains
var allowedSites = ["https://cscc24.000webhostapp.com/loginsystem/link-portal.php", "allowed-site2.com", "allowed-site3.com"];

// Check if the referring site is in the allowedSites array
function checkReferrer() {
    var referrer = document.referrer.toLowerCase();
    var isAllowed = allowedSites.some(function(allowedSite) {
        return referrer.indexOf(allowedSite) !== -1;
    });

    if (!isAllowed) {
        // Redirect to a custom error page or another site
        window.location.href = "https://your-error-page.com";
    }
}

// Call the checkReferrer function when the page loads
window.onload = checkReferrer;