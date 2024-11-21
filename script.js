const navigationEntries = performance.getEntriesByType("navigation")[0];
if (navigationEntries && navigationEntries.type === "reload") {
    window.location.href = 'index.html';
}

const currentPage = window.location.pathname.split('/').pop();

if (currentPage !== 'contact.html') {
    const contactLink = document.querySelector('a[href="contact.html"]');
};
