/*
  Applications are stored in localStorage.
  This simulates a simple database for checkpoint purposes.
*/

/* ADD APPLICATION*/
function addApplication(title, company, description) {
  // Get existing applications (or empty array if none exist)
    let apps = JSON.parse(localStorage.getItem("applications")) || [];

    // Check if an application already exists
    const alreadyExists = apps.some(app =>
        app.title === title && app.company === company
    );

    // If duplicate found, stop and notify user
    if (alreadyExists) {
        alert("You have already added this application.");
        return;
    }

    // Add new application object
    apps.push({
        title: title,
        company: company,
        description: description,
        status: "Applied" // Default status
    });

    // Save back to localStorage
    localStorage.setItem("applications", JSON.stringify(apps));

    alert("Application added!");
}


/* LOAD APPLICATIONS*/
function loadApplications() {
    const container = document.getElementById("applications");

    // If we're not on the tracker page, stop
    if (!container) return;

    // Clear previous content before re-rendering
    container.innerHTML = "";

    // Get saved applications
    let apps = JSON.parse(localStorage.getItem("applications")) || [];

    // Loop through each application and display it
    apps.forEach((app, index) => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
        <h3>${app.title}</h3>
        <p>Company: ${app.company}</p>

        <!-- 
            Dropdown allows user to update application status.
            onchange triggers updateStatus().
        -->
        <select onchange="updateStatus(${index}, this.value)">
            <option ${app.status === "Applied" ? "selected" : ""}>Applied</option>
            <option ${app.status === "Interview" ? "selected" : ""}>Interview</option>
            <option ${app.status === "OA" ? "selected" : ""}>OA</option>
            <option ${app.status === "Awaiting Next Steps" ? "selected" : ""}>Awaiting Next Steps</option>
            <option ${app.status === "Completed Something but got Rejected" ? "selected" : ""}>Completed Something but got Rejected</option>
            <option ${app.status === "Rejected" ? "selected" : ""}>Rejected</option>
            <option ${app.status === "Accepted" ? "selected" : ""}>Accepted</option>
        </select>

        <button onclick="removeApplication(${index})">
            Remove
        </button>
        
        
        <button onclick="gotoWebsite(${app.title}, ${app.company})">
            Job Listing
        </button>
        `;
        //!NEED TO CHANGE gottoWebsite inputs

        container.appendChild(div);
    });

    // After loading applications, update the pie chart
    renderChart(apps);
}


/* REMOVE APPLICATION*/
function removeApplication(index) {
    let apps = JSON.parse(localStorage.getItem("applications")) || [];

    // Remove item at given index
    apps.splice(index, 1);

    localStorage.setItem("applications", JSON.stringify(apps));

    // Re-render list and chart
    loadApplications();
}


/* UPDATE STATUS*/
function updateStatus(index, newStatus) {
    let apps = JSON.parse(localStorage.getItem("applications")) || [];

    // Change status of selected application
    apps[index].status = newStatus;

    localStorage.setItem("applications", JSON.stringify(apps));

    // Reload everything so UI + chart update
    loadApplications();
}


/* RENDER PIE CHART*/
function renderChart(apps) {
    const ctx = document.getElementById("statusChart");

    // If not on tracker page, stop
    if (!ctx) return;

    // Count how many applications are in each status
    let counts = {
        "Applied": 130,
        "Interview": 0,
        "OA": 0,
        "Awaiting Next Steps": 0,
        "Completed Something but got Rejected": 12,
        "Rejected": 79,
        "Accepted": 0

    };

    apps.forEach(app => {
        if (counts[app.status] !== undefined) {
        counts[app.status]++;
        }
    });

    /*
        Create pie chart using Chart.js
        - labels = categories
        - data = counts
        - backgroundColor = slice colors
    */
    new Chart(ctx, {
        type: "pie",
        data: {
        labels: Object.keys(counts),
        datasets: [{
            data: Object.values(counts),
            backgroundColor: [
            "#ffffff", // Applied (white)
            "#f5f50b", // Interview (yellow)
            "#3b82f6", // Need to do OA (blue)
            "#ea00ff", // Awaiting next steps (purple)
            "#f5970b", // Completed something after applying, but got rejected (orange)
            "#ef4444", // Rejected (red)
            "#10b981"  // Accepted (green)
            ]
        }]
        },
        options: { // I guess I need this for controlling the chart size
            responsive: true,
            maintainAspectRatio: false
}
    });
}

/* SEARCH IN APPLIED TO JOBS*/
function searchAppliedJobs(keyword){
    
    //functionality for if more than one keyword is entered (split by space and search)

    alert("Searching for");
}


/* AUTO LOAD ON PAGE OPEN*/
document.addEventListener("DOMContentLoaded", loadApplications); //loads initial 