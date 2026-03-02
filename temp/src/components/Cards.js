import GlobalStyles from '@/styles/GlobalStyles';
import Card from '../styles/cardStyles';

//<button onClick={() => addApplication({title}, {company}, {description}, {link})}>Save</button>
export function JobCard({title, company, description, link}){ //export default = Need to export so I can import it in other files
    return (
    <Card>
        <div id="jobText">
            <h3><a href={link}>{title}</a></h3>
            <p>{company}</p>
            <small>{description}</small>
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
        <h3><a href={link}>{title}</a></h3>
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
        </div>

        <button>
            Remove
        </button>
    </Card>
    );
}

// export default jobCard; //Need to export so I can import it in other files
// export default trackerCard;