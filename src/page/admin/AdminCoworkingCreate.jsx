import { useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { UseVerifyIfUserIsLogged} from "../../utils/security-utils";

const AdminCoworkingCreate = () => {
    UseVerifyIfUserIsLogged();


    const [message, setMessage] = useState (null)
    // Je déclare une fonction asynchrone qui est liée au formulaire
    const handleCoworkingCreate = async (event) => {

    // Le "event.preventDefault()" permet de ne pas recharger la page par défaut
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

    // const coworkingToCreate = {
    //   name: name,
    const price = {
      month: parseInt(priceByMonth),
      day: parseInt(priceByDay),
      hour: parseInt(priceByHour),
    };
    
    //   address: {
    //     number: addressNumber,
    //     street: addressStreet,
    //     city: addressCity,
    //     postCode: addressPostcode,
    //   },
    //   superficy: superficy,
    //   capacity: capacity,
    // };

    // const coworkingToCreateJson = JSON.stringify(coworkingToCreate);

    // je créé un objet "FormData" => ça me permet d'envoyer
    // à mon api à la fois des infos JSON (text, number etc)
    // et des fichiers

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", JSON.stringify(price));
        
        formData.append("file", event.target.image.files[0])

        
        // Je récupère mon token dans le local storage
        const token = localStorage.getItem("jwt")

        // J'envoie une requête avec la méthode POST pour créer un coworking dans laquelle je lui fais passer dans le headers le format JSON, le token et le body en JSON
        const coworkingToCreateResponse = await fetch ('http://localhost:3000/api/coworkings/withImg',{
            method: "POST",
            headers: {
            // "Content-Type": "application/json",
            Authorization: "Bearer " + token,
            },
            body: formData,
        });
        // Si le statut de la réponse est égal à 201, un message de succès sera affiché
        if ( coworkingToCreateResponse.status === 201) {
            setMessage ('Le Coworking a bien été ajouté')
        // Sinon un message d'erreur sera affiché
        } else {
            setMessage ('Erreur!')
        }

    }

    
    return (
        <>
        <HeaderAdmin />
        <>
        {message && <p>{message}</p>}
        <form onSubmit={handleCoworkingCreate}>
            <div>
                <label>
                    Nom
                    <input type="text" name="name" />
                </label>
            </div>
            <div>
                <label>
                    Prix par heure
                    <input type="number" name="priceByHour" />
                </label>
            </div>
            <div>
                <label>
                    Prix par jour
                    <input type="number" name="priceByDay" />
                </label>
            </div>
            <div>
                <label>
                    Prix par mois
                    <input type="number" name="priceByMonth" />
                </label>
            </div>
            <div>
                <label>
                    Adresse: Numéro
                    <input type="number" name="addressNumber" />
                </label>
            </div>
            <div>
                <label>
                    Adresse: Rue
                    <input type="text" name="addressStreet" />
                </label>
            </div>
            <div>
                <label>
                    Adresse: Ville
                    <input type="text" name="addressCity" />
                </label>
            </div>
            <div>
                <label>
                    Adresse: Code Postal
                    <input type="number" name="addressPostcode" />
                </label>
            </div>
            <div>
                <label>
                    Superficie
                    <input type="number" name="superficy" />
                </label>
            </div>
            <div>
                <label>
                    Capacité
                    <input type="number" name="capacity" />
                </label>
            </div>
            <div>
                <label>
                    Image
                    <input type="file" name="image" />
                </label>
            </div>
            <input type="submit" />
        </form>
        </>
    </>
    )
}

export default AdminCoworkingCreate;