import { generateConfig } from "./generateConfig";

const getUser = async () => {
    const url = `/users/me/profile`;
    const response = await generateConfig(url);
    console.log(response.data)
}

export default getUser