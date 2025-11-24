import { AppContext } from "../../AppProvider";
import { useContext } from "react";

export function Navbar() {
    const {meta, user, logout} = useContext(AppContext);

    console.log(user);
    const handleLogout = async (e) => {
        try {
            await logout();
        } catch (error) {
            alert(error.message);
        }
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm mb-2">
                <div className="container-fluid d-flex justify-content-between">
                    <h4>{meta.title}</h4>
                    <div className="dropdown">
                        <button
                            className="btn btn-light dropdown-toggle"
                            type="button"
                            id="profileDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-person-circle"></i> {user?.email ?? 'Loading..'}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                            <li>
                            <a className="dropdown-item" href="#">
                                My Account
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Settings
                            </a>
                            </li>
                            <li>
                            <hr className="dropdown-divider" />
                            </li>
                            <li>
                            <button className="dropdown-item text-danger" onClick={handleLogout}>
                                Logout
                            </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}