document.getElementById("toggle").addEventListener("click", () => { document.querySelector(".card").classList.toggle("dark");
});

document.getElementById("reveal").addEventListener("click", () => {
    const info = document.getElementById("more-info");
    info.style.display = info.style.display  === "none" ? "block" : "none";
});