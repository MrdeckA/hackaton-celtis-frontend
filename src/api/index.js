import axios from "axios";
const qs = require("qs");

export const api = async () => {
  const data = qs.stringify({
    client_id: "5abcee9f127671d687f5c9b3ae10881f",
    client_secret: "c0b28c9106667c852a51c27a7d6cedd9c36b3a1cab72829a",
    grant_type: "client_credentials",
  });

  const tokenConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://pub-za.appcubecloud.com/baas/auth/v1.0/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  const response = await axios.request(tokenConfig);
  const accessToken = response.data.access_token;

  return axios.create({
    baseURL:
      "https://pub-za.appcubecloud.com/service/TontiisCash__Tontine/1.0.0",
    headers: {
      "access-token": accessToken,
    },
    maxBodyLength: Infinity,
  });
};
