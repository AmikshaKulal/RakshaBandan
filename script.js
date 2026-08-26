const photos = [
    "image/memory1.jpg",
    "image/memory2.jpg",
    "image/memory3.jpg",
    "image/memory4.jpg",
    "image/memory5.jpg",
    "image/memory6.jpg",
    "image/memory7.jpg"
];

const titles = [
    "Where It All Began ❤️",
    "Those Simple Days 🌸",
    "Partners in Crime 😂",
    "The Laughs We Shared ✨",
    "Growing Up Together 🥹",
    "Always My Brother 🤍",
    "A Memory to Keep Forever ❤️"
];

const sentences = [
    "We were just kids, living in our own little world. We didn't know it then, but these simple days were quietly becoming memories we'd carry forever.",

    "Back then, happiness was so simple — a little laughter, a little mischief, and having you beside me was enough to make an ordinary day special.",

    "We may have fought like enemies sometimes, but when it came to fun, secrets and mischief, there was no better team than us.",

    "Some of my favorite childhood memories aren't about big moments. They are about the silly laughs we shared for absolutely no reason.",

    "We never noticed ourselves growing up. One day we were just two little kids, and suddenly those days had become memories we wished we could visit again.",

    "Life keeps moving and people keep changing, but the bond we built during those little years will always have a special place in my heart.",

    "If I could keep one thing from our childhood forever, it wouldn't be a toy, a place or a day — it would be the beautiful bond we shared through all of it."
];


let current = 0;


/* =========================
   SLIDESHOW ELEMENTS
========================= */

const image = document.getElementById("slideImage");
const title = document.getElementById("slideTitle");
const text = document.getElementById("slideText");

const next = document.getElementById("nextBtn");
const previous = document.getElementById("prevBtn");


/* =========================
   CHANGE SLIDE
========================= */

function changeSlide() {

    image.src = photos[current];

    title.textContent = titles[current];

    text.textContent = sentences[current];

}


/* =========================
   NEXT →
========================= */

if (next) {

    next.onclick = function () {

        current++;

        if (current >= photos.length) {
            current = 0;
        }

        changeSlide();

    };

}


/* =========================
   ← PREVIOUS
========================= */

if (previous) {

    previous.onclick = function () {

        current--;

        if (current < 0) {
            current = photos.length - 1;
        }

        changeSlide();

    };

}


/* =========================
   FIRST PHOTO
========================= */

changeSlide();


/* =========================
   OPEN GIFT
========================= */

const giftButton = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");

if (giftButton && giftMessage) {

    giftButton.onclick = function () {

        /* Open gift */

        giftMessage.classList.add("open");

        giftMessage.classList.add("show");


        /* Change button */

        giftButton.textContent = "❤️ For You, Brother";

        giftButton.disabled = true;


        /* Start heart animation */

        createHeartFlow();

    };

}


/* =========================
   ❤️ HEART FLOW
========================= */

function createHeartFlow() {

    const totalHearts = 40;

    for (let i = 0; i < totalHearts; i++) {

        const heart = document.createElement("div");

        heart.className = "flow-heart";

        heart.innerHTML = "❤️";


        /* Random horizontal position */

        heart.style.left =
            Math.random() * 100 + "vw";


        /* Random size */

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";


        /* Random animation speed */

        heart.style.animationDuration =
            (5 + Math.random() * 3) + "s";


        /* Random starting delay */

        heart.style.animationDelay =
            Math.random() * 2 + "s";


        document.body.appendChild(heart);


        /* Automatically remove heart */

        setTimeout(() => {

            heart.remove();

        }, 9000);

    }

}