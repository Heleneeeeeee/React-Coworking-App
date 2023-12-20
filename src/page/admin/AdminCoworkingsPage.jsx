import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { jwtDecode } from "jwt-decode";

const AdminCoworkingsPage = () => {
  const [coworkings, setCoworkings] = useState(null);
  // Je récupère le tken dans le local storage
  const token = localStorage.getItem("jwt");
  // Je décode le token pour récupérer le RoleId
  const decodedToken = jwtDecode(token);


  useEffect(() => {
    (async () => {
      const coworkingsResponse = await fetch("http://localhost:3000/api/coworkings");
      const coworkingsResponseData = await coworkingsResponse.json();
      setCoworkings(coworkingsResponseData);
    })();
  }, []);

  const handleDeleteCoworking = async (event, coworkingId) => {
  

    await fetch("http://localhost:3000/api/coworkings/" + coworkingId, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });

    const coworkingsResponse = await fetch("http://localhost:3000/api/coworkings");
    const coworkingsResponseData = await coworkingsResponse.json();
    setCoworkings(coworkingsResponseData);
  };

 

  return (
    <>
    <HeaderAdmin />
      <h1>Liste des coworkings : </h1>

      {coworkings ? (
        <>
          {coworkings.map((coworking) => {
            return (
              <article>
                <h2>{coworking.name}</h2>
                {/* Si le Role dans le TokenData est différent de 3, Je peux supprimer les Coworkings  */}
                {decodedToken.data.role !== 3 && (
                <button onClick={(event) => handleDeleteCoworking(event, coworking.id)}>Supprimer</button>
                )}
              </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
    </>
  );
};

export default AdminCoworkingsPage;