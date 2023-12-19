import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminCoworkingUpdate = () =>{
// J'utilise la fonction useParams afin d'associer l'id de l'url à l'id du coworking
    const { id } =useParams()
// J'utilise la fonction useState je lui passe en paramètre la variable coworking dont la valeur par defaut est nulle.
    const [coworking, setCoworking] = useState (null)
// J'utilise un useEffect pour qu'au chargement de la page le composant se recahrge qu'une fois
    useEffect(()=> {
// Je déclare une fonction fléchée anonyme afin de récupérer l'url de l'id. Je convertis la réponse Json qui sera lu par le JS
        (async()=>{
        const coworkingResponse = await fetch("http://localhost:3000/api/coworkings/" + id);
        const coworkingResponseData = await coworkingResponse.json();
// Je stocke dans la fonction du Hook useState les données
        setCoworking(coworkingResponseData.data);

        })();
    },[])


    return (
        <div>
          {coworking && (
            <form>
              <div>
                <label>
                  Nom
                  <input type="text" name="name" defaultValue={coworking.name} />
                </label>
              </div>
              <div>
                <label>
                  Prix par mois
                  <input type="number" name="priceByMonth" defaultValue={coworking.price.month} />
                </label>
              </div>
              <div>
                <label>
                  Prix par jour
                  <input type="number" name="priceByDay" defaultValue={coworking.price.day} />
                </label>
              </div>
              <div>
                <label>
                  Prix par heure
                  <input type="number" name="priceByHour" defaultValue={coworking.price.hour} />
                </label>
              </div>
              <div>
                <label>
                  Adresse : Numéro
                  <input type="text" name="addressNumber" defaultValue={coworking.address.number} />
                </label>
              </div>
              <div>
                <label>
                  Adresse : Rue
                  <input type="text" name="addressStreet" defaultValue={coworking.address.street} />
                </label>
              </div>
              <div>
                <label>
                  Adresse : Ville
                  <input type="text" name="addressCity" defaultValue={coworking.address.city} />
                </label>
              </div>
              <div>
                <label>
                  Adresse : Postcode
                  <input type="text" name="addressPostcode" defaultValue={coworking.address.postCode} />
                </label>
              </div>
              <div>
                <label>
                  Superficie
                  <input type="number" name="superficy" defaultValue={coworking.superficy} />
                </label>
              </div>
              <div>
                <label>
                  Capacité
                  <input type="number" name="capacity" defaultValue={coworking.capacity} />
                </label>
              </div>
    
              <input type="submit" />
            </form>
          )}
        </div>
      );
    };

export default AdminCoworkingUpdate;
