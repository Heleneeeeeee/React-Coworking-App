import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwt")

        navigate("/login")

    }
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    <li>
                    <Link to="/admin/coworkings">Gérer les Coworkings</Link>
                    </li>
                    <li>
                    <Link to="/admin/coworkings/create">Créer un Coworking</Link>
                    </li>
                </ul>
                <button onClick={handleLogout}>Se déconnecter</button>
            </nav>
        </header>
    )
}

export default HeaderAdmin;