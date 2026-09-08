/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


/* ==================================================
   HEADER SCROLL
================================================== */

const header = document.querySelector(".header");

function updateHeader() {

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* ==================================================
   HERO PERSON PARALLAX
================================================== */

const heroPerson = document.querySelector(".hero-person");

if (heroPerson) {

    let ticking = false;

    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(() => {

                    const scrollY = window.scrollY;

                    if (scrollY < window.innerHeight) {

                        const offset = scrollY * 0.08;

                        heroPerson.style.transform =
                            `translateY(${offset}px)`;

                    }

                    ticking = false;

                });

                ticking = true;
            }

        },
        { passive: true }
    );

}


/* ==================================================
   SMOOTH ANCHOR SCROLL
================================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ==================================================
   WECHAT QR
================================================== */

const wechatLink =
    document.querySelector(".wechat-link");

const wechatPopup =
    document.querySelector(".wechat-popup");

if (wechatLink && wechatPopup) {

    wechatLink.addEventListener(
        "click",
        (event) => {

            if (window.innerWidth <= 700) {

                event.stopPropagation();

                wechatPopup.classList.toggle("mobile-show");

            }

        }
    );

}


/* ==================================================
   PAGE LOAD
================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
