const API_URL = "https://your-backend-url.com"; // Replace with actual backend URL

async function loadServices() {
    const response = await fetch(`${API_URL}/services`);
    const services = await response.json();

    const serviceContainer = document.getElementById("services-list");
    serviceContainer.innerHTML = "";

    services.forEach(service => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
        serviceContainer.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", loadServices);
