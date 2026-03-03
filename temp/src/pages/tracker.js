import {TrackerCard} from '../components/Cards'; // ./ (look in same folder), ../ (go up a folder)
import {CardLayout} from '../styles/cardStyles';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import { useState, useEffect } from 'react';
import { auth, database } from '../library/firebaseConfig';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export default function TrackerPage() {
    // Stores the list of saved jobs from Firebase
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        // Load the user's saved jobs from Firebase when the page loads
        const fetchApplications = async () => {
            const user = auth.currentUser;

            // Don't fetch if no one is logged in
            if (!user) return;

            // Get all documents from the user's applications collection
            const snapshot = await getDocs(collection(database, 'users', user.uid, 'applications'));
            
            // Convert Firebase docs to a regular array of job objects
            // doc.id is the Firebase document ID, needed later for deletion
            const apps = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data() // spreads all saved fields like title, company, status etc
            }));

            setApplications(apps);
        };

        fetchApplications();
    }, []); // Empty [] means this only runs once when the page first loads

    const removeApplication = async (id) => {
        const user = auth.currentUser;
        if (!user) return;

        try {
            // Delete the document from Firebase using its document ID
            await deleteDoc(doc(database, 'users', user.uid, 'applications', id));

            // Remove it from local state so it disappears immediately without refreshing
            setApplications(prev => prev.filter(app => app.id !== id));
        } catch (error) {
            console.error('Error removing job:', error);
        }
    };

    const updateStatus = async (id, newStatus) => {
        const user = auth.currentUser;
        if (!user) return;

        try {
            // Update just the status field in Firebase
            await updateDoc(doc(database, 'users', user.uid, 'applications', id), {
                status: newStatus
            });

            // Update local state so the dropdown reflects the change immediately
            setApplications(prev =>
                prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
            );
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <> {/* Empty container because functions require a parent container*/}
            <GlobalStyles/>
            <Nav/>
            <label>Search for a specific job:</label>
            <input type="text" placeholder="Keywords"/>
            <hr style={{marginBottom: "10px"}}/>
            <CardLayout>
                {/* Loop through saved jobs and render a TrackerCard for each one */}
                {applications.map(app => (
                    <TrackerCard
                        key={app.id}
                        title={app.title}
                        company={app.company}
                        link={app.link}
                        status={app.status}
                        onStatusChange={(newStatus) => updateStatus(app.id, newStatus)}
                        onRemove={() => removeApplication(app.id)}
                    />
                ))}
            </CardLayout>
        </>
    );
}