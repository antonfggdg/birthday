const openBtn = document.getElementById("openBtn");
const card = document.getElementById("card");
const music = document.getElementById("music");
const soundBtn = document.getElementById("soundBtn");

openBtn.addEventListener("click", () => {
    openBtn.style.display = "none";
    card.classList.remove("hidden");
    soundBtn.classList.remove("hidden");

    music.volume = 0.6;
    music.currentTime = 0;
    music.play().catch(() => {});

    startPetals();
});

soundBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        soundBtn.textContent = "🔊 Звук: Вкл";
    } else {
        music.pause();
        soundBtn.textContent = "🔇 Звук: Выкл";
    }
});

function startPetals() {
    setInterval(() => {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.textContent = "🌸";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = 5 + Math.random() * 5 + "s";
        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);
    }, 300);
}
