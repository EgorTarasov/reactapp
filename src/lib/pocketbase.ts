import PocketBase from "pocketbase";

const pb = new PocketBase("http://192.168.1.80:9999");

export async function login(email: string, password: string) {
    try {
        const userData = await pb
            .collection("users")
            .authWithPassword(email, password);
        return userData;
    } catch (error) {
        console.log(error);
    }
}

export default pb;
