import { useParams } from "react-router-dom";
import Header from "../../component/guest/Header";
import { useEffect, useState } from "react";

const CoworkingDetailsPage = () => {
    const { id } = useParams()

    const [coworking, setCoworking] = useState (null)

    useEffect(() => {
        (async () => {
          const coworkingResponse = await fetch("http://localhost:3000/api/coworkings/" + id);
          const coworkingResponseData = await coworkingResponse.json();
    
          setCoworking(coworkingResponseData);
        })();
      }, []);

    return (
        <>
            <Header />
            <main>
            {coworking? (
                <article>
                    <h2>{coworking.data.name}</h2>
                    <p>Prix : </p>
                    <ul>
                        <li>Heure : {coworking.data.price.hour} €</li>
                        <li>Jour : {coworking.data.price.day} €</li>
                        <li>Mois : {coworking.data.price.month} €</li>
                    </ul>
                    <p>
                        Adresse : {coworking.data.address.number} {coworking.data.address.street} - {coworking.data.address.city}{" "}
                    </p>
                </article>
            ):(
                <p>En attente de chargement</p>
            )}
            </main>
        </>
    )
}

export default CoworkingDetailsPage;