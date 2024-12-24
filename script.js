function showPanel(panelId) {
    // Hide all panels
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.classList.remove('active'));

    // Show the selected panel
    const activePanel = document.getElementById(panelId);
    activePanel.classList.add('active');
}

// Track page visit
fetch('https://your-server.com/track-visit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ page: window.location.pathname, timestamp: Date.now() })
});