import axios from "axios";
import { getAccessToken } from "../config";

export const generateConfig = async (endpoint: string) => {
    const accessToken = await getAccessToken()
    const config = {
        method: "get",
        url: `https://www.googleapis.com/gmail/v1${endpoint}`,
        headers: {
            Authorization: `Bearer ${accessToken} `,
            "Content-type": "application/json",
        },
    };

    return axios(config);
};
