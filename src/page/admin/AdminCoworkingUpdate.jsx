import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";

const AdminCoworkingUpdate = () =>{
  UseVerifyIfUserIsLogged();
  
// J'utilise la fonction useParams afin d'associer l'id de l'url à l'id du coworking
    const { id } = useParams()
// J'utilise la fonction useState je lui passe en paramètre la variable coworking dont la valeur par defaut est nulle.
    const [coworking, setCoworking] = useState (null)

    const [message, setMessage] = useState(null)
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

    const handleUpdateCoworking = async(event) => {
        event.preventDefault();

        

        // Je déclare les variables des input de mon formulaire pour les faire matcher avec le modèle de mes coworkings du back
            const name = event.target.name.value;
            const priceByMonth = event.target.priceByMonth.value;
            const priceByDay = event.target.priceByDay.value;
            const priceByHour = event.target.priceByHour.value;
            const addressNumber = event.target.addressNumber.value;
            const addressStreet = event.target.addressStreet.value;
            const addressCity = event.target.addressCity.value;
            const addressPostcode = event.target.addressPostcode.value;
            const superficy = event.target.superficy.value;
            const capacity = event.target.capacity.value;
    
            // Je créé un objet
            const coworkingToUpdate = {
               
                name: name,
                price: {
                hour: priceByHour,
                day: priceByDay,
                month: priceByMonth,
                },
                address: {
                number: addressNumber,
                street: addressStreet,
                postCode: addressPostcode,
                city: addressCity ,
                },
                superficy: superficy,
                capacity: capacity,
                };

        // Je transforme mon objet en JSON
        const coworkingToUpdateJson = JSON.stringify(coworkingToUpdate)
        
        // Je récupère mon token dans le local storage
        const token = localStorage.getItem("jwt")

        // J'envoie une requête avec la méthode PUT pour modifier un coworking dans laquelle je lui fais passer le headers (en format JSON), le token et le body en JSON
        const coworkingToUpdateResponse = await fetch ('http://localhost:3000/api/coworkings/' +id,{
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
            },
            body: coworkingToUpdateJson,
        });
        // Si le statut de la réponse est égal à 201, un message de succès sera affiché
        if ( coworkingToUpdateResponse.status === 201) {
            setMessage ('Le Coworking a bien été modifié')
        // Sinon un message d'erreur sera affiché
        } else {
            setMessage ('Erreur!')
        }


    }


    return (
        <div>
          <HeaderAdmin />
          <>{message && <p>{message}</p>}</>
          {coworking && (
            <form onSubmit={handleUpdateCoworking}>
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
