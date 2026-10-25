import { Outlet, NavLink } from "react-router-dom";
import "../style/Dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>

            <nav className="dashboard-nav">
                <NavLink to="/dashboard" end>
                    Accueil
                </NavLink>

                <NavLink to="/dashboard/profile">
                    Profile
                </NavLink>

                <NavLink to="/dashboard/settings">
                    Settings
                </NavLink>
            </nav>

            <main className="dashboard-content">
                <Outlet />
            </main>
        </div>
    );
}

// end means: this link is active only when the URL is exactly /dashboard,
// not when the URL starts with /dashboard.

// Without end
// jsx
// <NavLink to="/dashboard">Accueil</NavLink>
// This link is considered active for:

// /dashboard
// /dashboard/profile
// /dashboard/settings

// So when you open /dashboard/profile, both Accueil and Profile may look active, 
// because both URLs begin with /dashboard.