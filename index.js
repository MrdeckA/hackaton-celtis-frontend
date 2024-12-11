const axios = require("axios");
const qs = require("qs");

// Définir les paramètres pour récupérer le token OAuth
const data = qs.stringify({
  client_id: "5abcee9f127671d687f5c9b3ae10881f",
  client_secret: "c0b28c9106667c852a51c27a7d6cedd9c36b3a1cab72829a",
  grant_type: "client_credentials",
});

// Configuration de la requête POST pour récupérer le token
const tokenConfig = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://pub-za.appcubecloud.com/baas/auth/v1.0/oauth2/token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: data,
};

let token = "";

// Fonction pour récupérer le token d'authentification
const getToken = async () => {
  try {
    const response = await axios.request(tokenConfig);
    const accessToken = response.data.access_token; // Extraire le token
    console.log("Token récupéré:", accessToken); // Afficher le token dans le terminal

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://pub-za.appcubecloud.com/service/TontiisCash__Tontine/1.0.0/tontines",
      headers: {
        "access-token": accessToken,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return accessToken; // Retourner le token
  } catch (error) {
    console.error("Erreur lors de la récupération du token:", error);
    throw error; // Lancer une exception pour signaler l'échec de la récupération du token
  }
};
