document.body.classList.add("loading");

/* 랜덤 로딩 문구 */
const loadingMessages = [
    "Initializing Portfolio...",
    "Loading Journey...",
    "Preparing Skills...",
    "Compiling Projects...",
    "Rendering Awards...",
    "Establishing Connection...",
    "Generating Experience...",
    "Building Portfolio...",
    "Synchronizing Data...",
    "Launching Portfolio...",
    "Almost Ready...",
    "Welcome, Dong-Yoon."
];

const loaderText = document.getElementById("loaderText");

if (loaderText) {
    let loadingIndex = Math.floor(Math.random() * loadingMessages.length);
    loaderText.textContent = loadingMessages[loadingIndex];

    const loadingInterval = setInterval(() => {
        loadingIndex = (loadingIndex + 1) % loadingMessages.length;
        loaderText.textContent = loadingMessages[loadingIndex];
    }, 450);

    window.addEventListener("load", () => {
        setTimeout(() => {
            clearInterval(loadingInterval);
            loaderText.textContent = "Welcome, Dong-Yoon.";
        }, 900);
    });
}

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) loader.classList.add("hide");
        document.body.classList.remove("loading");
    }, 1300);
});

/* 모바일 메뉴 */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.querySelectorAll(".nav a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
}

/* Hero 타이핑 효과 */
const typingText = document.getElementById("typingText");

const words = [
    "아이디어를 코드로 구현합니다.",
    "끊임없이 배우고 성장합니다.",
    "저만의 프로젝트를 만들어갑니다.",
    "개발자를 향해 나아가고 있습니다.",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;

    const current = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 45 : 85;

    if (!isDeleting && charIndex === current.length) {
        speed = 1300;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 350;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* 별 배경 생성 */
const stars = document.getElementById("stars");

if (stars) {
    for (let i = 0; i < 110; i++) {
        const star = document.createElement("span");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.opacity = 0.25 + Math.random() * 0.75;
        stars.appendChild(star);
    }
}

/* 스크롤 등장 애니메이션 */
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("active");
            }, index * 55);

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealItems.forEach((item) => {
    observer.observe(item);
});

/* 커스텀 마우스 */
const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
    }
});

function animateCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    if (cursorRing) {
        cursorRing.style.left = ringX + "px";
        cursorRing.style.top = ringY + "px";
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll("a, button, .tilt-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursorRing?.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
        cursorRing?.classList.remove("hover");
    });
});

/* 카드 3D 기울기 */
document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        if (window.innerWidth < 900) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

/* Magnetic 버튼 효과 */
document.querySelectorAll(".magnetic").forEach((item) => {
    item.addEventListener("mousemove", (e) => {
        if (window.innerWidth < 900) return;

        const rect = item.getBoundingClientRect();

        const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.18;

        item.style.transform = `translate(${x}px, ${y}px)`;
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "";
    });
});

if (window.lucide) {
    lucide.createIcons();
}