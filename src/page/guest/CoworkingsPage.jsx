import { useEffect, useState } from "react";
import Header from "../../component/guest/Header";
import { Link } from "react-router-dom";

const CoworkingsPage = () => {
    const [coworkings, setcoworkings] = useState(null);

    const apiHost = "http://localhost:3000/api"

    useEffect(()=>{
        (async()=>{
            const coworkingsResponse = await fetch (apiHost+'/coworkings')
            const coworkingsResponseData = await coworkingsResponse.json()

            setcoworkings(coworkingsResponseData);
    })()
    },[])

    return (
        <>
        <Header />
        <main>
            <h1>Liste des Coworkings:</h1>
            {coworkings? (
            <>
                {coworkings.map((coworking)=>{
                return (
                    <article>
                        <>
                        <h2>{coworking.name}</h2>
                        <Link to={`/coworking/details/${coworking.id}`}>Voir le coworking</Link>
                        </>    
                    </article>
                );
                })}
            </>
        ):(
            <p>En attente de chargement</p>
        )}
        </main>
        </>
    )
}
export default CoworkingsPage;