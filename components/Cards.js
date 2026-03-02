import Card from '../styles/cardStyles';

export default function JobCard({title, company, description, link}){ //export default = Need to export so I can import it in other files
    return (
    <Card>
        <div class="jobText">
            <h3><a href={link}>{title}</a></h3>
            <p>{company}</p>
            <small>{description}</small>
        </div>
        <button onclick="addApplication({title}, {company}, {description})">
            Add to Tracker
        </button>
    </Card>
    );
}

export default function TrackerCard({title, company, link}){ //React components MUST start with a capital letter
    return (
    <Card>
        <h3><a href={link}>{title}</a></h3>
        <p>Company: {company}</p>
        {/* Dropdown allows user to update application status.
        onchange triggers updateStatus(). */}
        {/* <select onchange="updateStatus(${index}, this.value)">
            <option ${app.status === "Applied" ? "selected" : ""}>Applied</option>
            <option ${app.status === "Interview" ? "selected" : ""}>Interview</option>
            <option ${app.status === "OA" ? "selected" : ""}>OA</option>
            <option ${app.status === "Awaiting Next Steps" ? "selected" : ""}>Awaiting Next Steps</option>
            <option ${app.status === "Completed Something but got Rejected" ? "selected" : ""}>Completed Something but got Rejected</option>
            <option ${app.status === "Rejected" ? "selected" : ""}>Rejected</option>
            <option ${app.status === "Accepted" ? "selected" : ""}>Accepted</option>
        </select> */}

        <button onclick="removeApplication(${index})">
            Remove
        </button>
    </Card>
    );
}

export default function IntroCard(){
    return (
        <Card style="width: 100%">
            <h2>Why Use NextRound?</h2>
            <ul>
                <li>Find Jobs</li>
                <li>Track applications</li>
                <li>Organize your job search</li>
                <li>Keep all the information in one place</li>
                <li>Get to the NextRound of interviews</li>
            </ul>
        </Card>
    );
}

export default function ProfileCard(){
    return (
        <Card style="width: 100%">
            <label>Name:</label>
            <input type="text" id="name"/> 
            {/* The /> just means I don't need a </input> at the end (it saves space and words)*/}

            <label>Email:</label>
            <input type="email" id="email"/>

            <label>Password:</label>
            <input type="password" id="password"/>

            <button onclick="saveProfile()">Save</button>
        </Card>
    );
}

// export default jobCard; //Need to export so I can import it in other files
// export default trackerCard;