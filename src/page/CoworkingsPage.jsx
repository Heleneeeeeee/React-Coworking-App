import { useEffect, useState } from "react";
import Header from "../component/Header";

const CoworkingsPage = () => {
    const [coworkings, setcoworkings] = useState()

    useEffect(()=>{
        (async()=>{
            const coworkingsResponse = await fetch ('http://localhost:3000/api/coworkings')
            const coworkingsData = await coworkingsResponse.json()
            setcoworkings(coworkingsData)
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