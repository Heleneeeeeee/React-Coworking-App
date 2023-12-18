const LoginPage = () => {

    const handleLogin = async (event) => {
        event.preventDefault()

    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log(username, password)

  

// Je déclare une variable afin de créer un objet contenant username et password
  const loginData = {
    username,
    password,
  };

// Je décalre une autre variable afin de convertir mon objet en JSON
  const loginDataJson= JSON.stringify(loginData)

// Je fais un fetch POST sur mon API login de mon objet JSON
  const loginResponse = await fetch ("http://localhost:3000/api/users/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: loginDataJson,
  });
// Je récupère la réponse JSON et je la transforme pour qu'elle soit lue en JS. Si le username est correct, il renvoie le token dans la réponse.
//Sinon il affiche un message d'erreur.
  const loginResponseData = await loginResponse.json();
  const token = loginResponseData.data;

// si le token existe
  if(token) {
// je le stocke fans le local storage
    localStorage.setItem("jwt", token);
  }
};

    return(
        <section>
            <form onSubmit={handleLogin}>
                <label>
                    username
                    <input type="text" name="username" />
                </label>
                <label>
                    password
                    <input type="password" name="password" />
                </label>
                <input type="submit"/>
            </form>
        </section>

    );
}

export default LoginPage;


