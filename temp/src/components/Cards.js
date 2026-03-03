import GlobalStyles from '@/styles/GlobalStyles';
import Card from '../styles/cardStyles';

//<button onClick={() => addApplication({title}, {company}, {description}, {link})}>Save</button>
export function JobCard({title, company, description, link, domain}){ //export default = Need to export so I can import it in other files
    return (
    <Card>
        <div id="jobText">
            {/*target = _blank opens the link in a new tab, rel = noopener noreferrer was a recommended security measure*/}
            <h3><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h3>
            <p>{company}</p>
            <small><details><summary>Job Description:</summary>{description}</details></small>
        </div>
        <button>
            Add to Tracker
        </button>
    </Card>
    );
}

export function TrackerCard({title, company, link}){ //React components MUST start with a capital letter
    return (
    <Card>
        <div id="jobText">
            <h3><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h3>
            <p>{company}</p>
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
            <label for="status">Current Status:</label>
            <select id="status" name="status">
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="OA">Need to do OA</option>
                <option value="Awaiting Next Steps">Awaiting Next Steps</option>
                <option value="Completed Rejected">Completed Something but got Rejected</option>
                <option value="Rejected">Rejected</option>
                <option value="Offer">Offer</option>
            </select>
        </div>

        <button>
            Remove
        </button>
    </Card>
    );
}

// export default jobCard; //Need to export so I can import it in other files
// export default trackerCard;