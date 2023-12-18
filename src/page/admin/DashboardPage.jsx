import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useEffect } from "react";

const DashboardPage = () => {
    // Je déclare la variable navigate pour une redirection
    const navigate = useNavigate();

    // J'utilise la fonction useEffect pour qu'au nouveau rechargement si le token est bien stocké dans le localstorage, j'accède à l'url
    //sinon s'il n'ya pas de token je suis redirigé sur la page login
    useEffect(()=>{
        const token = localStorage.getItem("jwt")
        if(!token){
            navigate("/login");
        }
    });




    return (
        <HeaderAdmin />
    )
}

export default DashboardPage;