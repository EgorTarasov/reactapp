import pb from "./pocketbase";
const baseUrl = "http://larek.itatmisis.ru:12347";

export async function VkAuth() {
    const data = await fetch(baseUrl + "/api/v1/auth_vk", {
        method: "POST",
        redirect: "follow",
    });

    return await data.json();
}

export async function GoogleAuth() {
    const authData = await pb
        .collection("users")
        .authWithOAuth2({ provider: "google" });
    console.log(authData);
    return authData;
}

export async function TgAuth(body: any) {
    console.log(body);
    const data = await fetch(baseUrl + "/api/v1/auth_tg", {
        method: "POST",
        redirect: "follow",
        body: JSON.stringify(body),
    });
    return await data.json();
}

export async function login(email_or_username: string, password: string) {
    console.log("login");
    const response = await pb
        .collection("users")
        .authWithPassword(email_or_username, password);
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

export function getUser() {
    console.log("getUser");
    return pb.authStore.model;
}
