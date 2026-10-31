// 감자마켓 — 공통 스크립트
// <head>의 한 줄이 html에 .js 클래스를 붙이므로, 스크립트가 없어도 모든 내용은 보입니다.

/* =========================
   Reveal once on scroll
========================= */

(function () {

    const targets =
        document.querySelectorAll("[data-reveal]");

    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
        targets.forEach(function (el) { el.classList.add("is-in"); });
        return;
    }

    const io = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-in");
            io.unobserve(entry.target);

        });

    }, { rootMargin: "0px 0px 8% 0px", threshold: 0 });

    targets.forEach(function (el) { io.observe(el); });

    // 관찰자가 놓친 요소가 남지 않도록 한 번 더 확인
    window.addEventListener("load", function () {
        setTimeout(function () {
            targets.forEach(function (el) {
                const r = el.getBoundingClientRect();
                if (r.top < innerHeight && r.bottom > 0) el.classList.add("is-in");
            });
        }, 2500);
    });

})();


/* =========================
   Market search (매물 검색)
========================= */

(function () {

    const form =
        document.querySelector("[data-search]");

    if (!form) return;

    const input = form.querySelector("input");
    const count = form.querySelector(".search-count");
    const suggestions = form.querySelectorAll(".suggest button");
    const listings = document.querySelectorAll(".listing");
    const empty = document.querySelector(".no-result");

    // 이 단어를 치고 Enter를 누르면 해당 페이지로 이동 (첫 버전 검색창의 동작)
    const pages = {
        "경력": "./career.html",
        "소개": "./about.html",
        "about": "./about.html",
        "감자": "./about.html",
        "연락처": "./contact.html",
        "프로젝트": "./projects.html",
        "github": "https://github.com/heetae2007"
    };

    function filter() {

        const q =
            input.value.trim().toLowerCase();

        let shown = 0;
        let total = 0;

        listings.forEach(function (item) {

            const text =
                (item.dataset.tags + " " + item.textContent).toLowerCase();

            const match = q === "" || text.indexOf(q) !== -1;

            item.hidden = !match;

            if (item.classList.contains("part")) return;

            total++;

            if (match) shown++;

        });

        suggestions.forEach(function (b) {
            b.setAttribute("aria-pressed", String(b.dataset.q.toLowerCase() === q));
        });

        if (empty) empty.hidden = shown !== 0;

        count.textContent = q === ""
            ? "매물 " + total + "건"
            : "‘" + input.value.trim() + "’ 매물 " + shown + "건";

    }

    input.addEventListener("input", filter);

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const page =
            pages[input.value.trim().toLowerCase()];

        if (page) window.location.href = page;

    });

    suggestions.forEach(function (b) {

        b.addEventListener("click", function () {

            input.value =
                b.getAttribute("aria-pressed") === "true" ? "" : b.dataset.q;

            filter();

        });

    });

    filter();

})();


/* =========================
   Telegram: a new notice arrives
========================= */

(function () {

    const chat =
        document.querySelector("[data-tg-live]");

    if (!chat) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const msgs =
        Array.from(chat.querySelectorAll(".tg-msg"));

    if (msgs.length < 2) return;

    // 마지막 메시지가 5분 주기마다 새로 도착하는 것처럼 다시 그려짐
    const last = msgs[msgs.length - 1];

    setInterval(function () {

        last.classList.remove("is-new");
        void last.offsetWidth;
        last.classList.add("is-new");

    }, 6000);

    last.classList.add("is-new");

})();
