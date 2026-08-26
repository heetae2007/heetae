const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");


const searchData = {

    "감자": "./about.html",

    "프로젝트": "./projects.html",

    "GitHub": "https://github.com/heetae2007",

    "경력": "./career.html",

    "About": "./about.html"

};


function search() {

    const keyword =
        searchInput.value.trim();


    if (keyword === "") {

        alert("검색어를 입력해주세요.");

        return;
    }


    const page =
        searchData[keyword];


    if (page) {

        window.location.href = page;

    } else {

        alert(
            `"${keyword}"에 대한 검색 결과가 없습니다.`
        );

    }

}


searchButton.addEventListener(
    "click",
    search
);


searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            search();

        }

    }
);


const keywords =
    document.querySelectorAll(".keyword");


keywords.forEach(function(keyword) {

    keyword.addEventListener(
        "click",
        function() {

            const value =
                keyword.dataset.keyword;

            searchInput.value = value;

            search();

        }
    );

});


/* =========================
   Rotating keyword in hero
========================= */

const rotatingKeyword =
    document.getElementById("rotatingKeyword");

const rotatingWords =
    Array.from(keywords).map(function(keyword) {
        return keyword.dataset.keyword;
    });

let rotatingIndex = 0;

if (rotatingKeyword && rotatingWords.length > 0) {

    rotatingKeyword.textContent = rotatingWords[rotatingIndex];

    setInterval(function() {

        // 위로 올라가면서 흐려지는 효과
        rotatingKeyword.style.transform = "translateY(-10px)";
        rotatingKeyword.style.opacity = 0;

        setTimeout(function() {

            rotatingIndex =
                (rotatingIndex + 1) % rotatingWords.length;

            rotatingKeyword.textContent =
                rotatingWords[rotatingIndex];

            // 애니메이션 없이 아래쪽으로 순간 이동
            rotatingKeyword.style.transition = "none";
            rotatingKeyword.style.transform = "translateY(10px)";

            void rotatingKeyword.offsetHeight;

            // 다시 원위치로 올라오면서 나타나는 효과
            rotatingKeyword.style.transition = "";
            rotatingKeyword.style.transform = "translateY(0)";
            rotatingKeyword.style.opacity = 1;

        }, 250);

    }, 2000);

}