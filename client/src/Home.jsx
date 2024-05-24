import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
    const handleLogout = () => {
        // Redirect to login page
    };

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <img src="https://t3.ftcdn.net/jpg/03/51/28/88/360_F_351288889_71tNYxJezxjxXEOYYSO3oZMU5Q3qV40T.jpg" alt="Description of the image" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
            <Link to="/login" className="btn btn-danger">Logout</Link>
        </div>
    );
}

export default Home;
