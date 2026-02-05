const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  message.textContent =
    "YAY 💖 I’m so happy, Willow!! I can’t wait to spend Valentine’s Day with you 🌷✨";
  confettiHearts();
});

// On phones, tap-to-dodge is best
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
  message.textContent = "That button doesn’t seem to work 😌";
});

function moveNoButton() {
  const container = document.querySelector(".buttons");
  const rect = container.getBoundingClientRect();

  const maxX = Math.max(0, rect.width - noBtn.offsetWidth);
  const maxY = Math.max(0, rect.height - noBtn.offsetHeight);

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

function confettiHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.textContent = ["💗", "💖", "💘", "💞", "💕"][Math.floor(Math.random() * 5)];
    heart.style.position = "fixed";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `-20px`;
    heart.style.fontSize = `${16 + Math.random() * 20}px`;
    heart.style.zIndex = 9999;
    heart.style.transition = "transform 1.4s ease, opacity 1.4s ease";
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translateY(${110 + Math.random() * 60}vh) rotate(${Math.random() * 360}deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 1500);
  }
}
