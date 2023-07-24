const baseUrl = "http://192.168.1.80:9999";

export async function testVkAuth() {
    const data = await fetch(baseUrl + "/api/v1/auth_vk", {
        method: "GET",
        redirect: "follow",
    });

    return await data.json();
}
