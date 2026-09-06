function copyIP() {
    const ip = "PLAY.NUVOLAMC.IT";
    const message = document.getElementById("copyMessage");

    navigator.clipboard.writeText(ip).then(() => {
        message.classList.add("show");

        setTimeout(() => {
            message.classList.remove("show");
        }, 2500);
    }).catch(() => {
        alert("IP del server: " + ip);
    });
}

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}

function closeMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.remove("open");
}

document.getElementById("year").textContent = new Date().getFullYear();
