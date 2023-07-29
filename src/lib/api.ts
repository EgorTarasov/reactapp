import pb from "./pocketbase";
const baseUrl = "http://larek.itatmisis.ru:12347";

export async function VkAuth() {
    const data = await fetch(baseUrl + "/api/v1/auth_vk", {
        method: "GET",
        redirect: "follow",
    });

    return await data.json();
}

export async function login(email: string, password: string) {
    console.log("login");
    const response = await pb
        .collection("users")
        .authWithPassword(email, password);
    console.log(response);
}

export async function register(
    username: string,
    email: string,
    password: string,
) {
    console.log("register");

    const data = {
        username: username,
        email: email,
        emailVisibility: true,
        password: password,
        passwordConfirm: password,
        name: username,
    };
    console.log(data);
    const userData = await pb.collection("users").create(data);
    console.log(userData);
}

export async function logout() {
    console.log("logout");
    pb.authStore.clear();
}

export function checkAuth() {
    console.log("checkAuth");
    return pb.authStore.model !== null;
}
