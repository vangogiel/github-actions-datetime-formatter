function isGitHubActionsPage() {
    return window.location.host === 'github.com' && window.location.pathname.match(/\/[^/]+\/[^/]+\/actions/);
}

function formatTime() {
    const targetNode = document.querySelector('.PageLayout-content-centered-xl');
    if (targetNode && !targetNode.classList.contains('full-time-updated')) {
        const timeElements = document.querySelectorAll('relative-time');
        timeElements.forEach(el => {
            const fullTime = el.getAttribute('title');
            if (fullTime && !el.classList.contains('full-time-updated')) {
                const newElement = document.createElement('span');
                const dateConstructor = new Date(fullTime)
                newElement.textContent = `${dateConstructor.toLocaleString()}`;
                el.parentElement.style = 'position: relative'
                el.style = "display: none; visibility: hidden;"
                el.parentElement.insertBefore(newElement, el.nextSibling);
                el.classList.add('full-time-updated');
            }
        });
        targetNode.classList.add('full-time-updated');
    }
}

if (isGitHubActionsPage()) {
    setInterval(formatTime, 1000);
}