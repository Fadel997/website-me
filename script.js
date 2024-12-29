function showPanel(panelId) {
    // Hide all panels
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.classList.remove('active'));

    // Show the selected panel
    const activePanel = document.getElementById(panelId);
    activePanel.classList.add('active');

    // Trigger MathJax to re-render LaTeX in the active panel
    if (typeof MathJax !== 'undefined') {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, activePanel]);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const lightModeRadio = document.getElementById("lightMode");
    const darkModeRadio = document.getElementById("darkMode");

    // Check local storage for the saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
        darkModeRadio.checked = true;
    } else {
        lightModeRadio.checked = true;
    }

    // Listen for theme changes
    lightModeRadio.addEventListener("change", () => {
        if (lightModeRadio.checked) {
            document.documentElement.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });

    darkModeRadio.addEventListener("change", () => {
        if (darkModeRadio.checked) {
            document.documentElement.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        }
    });
});


  
// Track page visit
fetch('https://your-server.com/track-visit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ page: window.location.pathname, timestamp: Date.now() })
});
