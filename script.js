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
    const themeToggle = document.querySelector(".input"); // Select the checkbox toggle
    const rootElement = document.documentElement; // Get the root element

    // Check local storage for the saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        rootElement.classList.add("dark-mode");
        themeToggle.checked = true; // Ensure the toggle reflects the saved theme
    } else {
        rootElement.classList.remove("dark-mode");
        themeToggle.checked = false;
    }

    // Add event listener to the toggle button
    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            rootElement.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            rootElement.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});



function expandProject(project) {
    // Toggle the "expanded" class
    project.classList.toggle("expanded");
  
    // Check if additional images have already been added
    const imagesContainer = project.querySelector(".additional-images");
    if (imagesContainer.childElementCount === 0) {
      // Add more images dynamically
      const images = [
        "figs/project1_2.png",
        "figs/project1_3.png",
        "figs/project1_4.png"
      ];
  
      images.forEach(imageSrc => {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        imgElement.alt = "Additional Image";
        imagesContainer.appendChild(imgElement);
      });
    }
  }
  
  function expandAllProjects() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => project.classList.add('expanded'));
  }
  
  function collapseAllProjects() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => project.classList.remove('expanded'));
  }
  
    
  function expandProject(project) {
    const isExpanded = project.classList.contains('expanded');

    // Toggle the "expanded" state
    if (isExpanded) {
        project.classList.remove('expanded', 'clicked');
        project.style.height = ''; // Reset height
    } else {
        project.classList.add('expanded', 'clicked');

        // Dynamically adjust height to fit content
        const content = project.querySelector('.content'); // Replace with the correct class for the expandable content
        if (content) {
            project.style.height = `${content.scrollHeight}px`;
        }
    }
}

function adjustLayout() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (project.classList.contains('expanded')) {
            const content = project.querySelector('.content');
            if (content) {
                project.style.height = `${content.scrollHeight}px`;
            }
        } else {
            project.style.height = '';
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            expandProject(project);
        });
    });

    // Expand/Collapse all projects logic
    const expandButton = document.getElementById('expandAll');
    const collapseButton = document.getElementById('collapseAll');

    expandButton.addEventListener('click', () => {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.classList.add('expanded', 'clicked');
        });
    });

    collapseButton.addEventListener('click', () => {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.classList.remove('expanded', 'clicked');
        });
    });
});


  
      

