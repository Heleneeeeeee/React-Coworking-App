import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashboardPage = () => {
    // Je déclare la variable navigate pour une redirection
    const navigate = useNavigate();

    // J'utilise la fonction useEffect pour qu'au chargement 
    useEffect(()=>{
    // si le token est bien stocké dans le localstorage, j'accède à l'url (admin)
        const token = localStorage.getItem("jwt")
    //sinon s'il n'y a pas de token je suis redirigée sur la page login
        if(!token){
            navigate("/login");
        }
    });

    return (
        <HeaderAdmin />
    )
}

export default DashboardPage;