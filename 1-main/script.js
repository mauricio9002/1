
document.getElementById('contactForm').addEventListener('submit', function(event){
    if (!document.getElementById('dataConsent').checked) {
        event.preventDefault();
        alert('você deve concordar com a politica de privacidade e o uso e dados conforme a lgpd.')
    }
})