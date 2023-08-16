// slider data
const sliderData = [
    {
        id: 1,
        title: "Nữ chúa hư không",
        name: "Bel'Veth",
        desc: "Lorem ipsum",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 2,
        title: "NỮ HOÀNG NHỀN NHỆN",
        name: "ELISE",
        desc: "Only the spider is safe in her web",
        image: "../assets/img/elise.jpg"
    },
    {
        id: 3,
        title: "Can trường",
        name: "Shurima",
        desc: "Predators become prey, as quickly as night becomes day",
        image: "../assets/img/ksante-splash.jpg"
    },
    {
        id: 4,
        title: "Captain Teemo on duty",
        name: "Teemo",
        desc: "Lorem ipsum",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 5,
        title: "KẺ BẤT DUNG THỨ",
        name: "Yasuo",
        desc: "Death is like the wind; always by my side.",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 6,
        title: "KẺ LƯU ĐÀY",
        name: "Riven",
        desc: "What is broken can be reforged!",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 7,
        title: "NỮ THỢ SĂN HÓA THÚ",
        name: "NIDALEE",
        desc: "They will fear the wild",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 8,
        title: "KẺ LỪA ĐẢO",
        name: "LEBLANC",
        desc: "For my next trick I'll make their life bar disappear",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 9,
        title: "THẦN CHẾT ĐỎ",
        name: "VLADIMIR",
        desc: "Go ahead, be negative. You'll be just my type",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 10,
        title: "TỬ THẦN BÓNG TỐI",
        name: "KAYN",
        desc: "Those who seek balance find only death",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 11,
        title: "MŨI TÊN BÁO THÙ",
        name: "VARUS",
        desc: "Beware a man with nothing to lose",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 12,
        title: "THÚ SĂN MỒI KIÊU HÃNH",
        name: "RENGAR",
        desc: "There is the hunter and the hunted",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 13,
        title: "SÁT THỦ HƯ KHÔNG",
        name: "KHA'ZIX",
        desc: "To truly know someone, eat them and walk a mile in their feet",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 14,
        title: "Embracing life means accepting death",
        name: "KINDRED",
        desc: "THỢ SĂN VĨNH HẰNG",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 15,
        title: "TIẾNG RU TỬ THẦN",
        name: "KARTHUS",
        desc: "Death is a song all will hear",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 16,
        title: "CAI NGỤC XIỀNG XÍCH",
        name: "THRESH",
        desc: "There is life. There is death. And then there is me",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 17,
        title: "BÓNG MA CHIẾN TRANH",
        name: "HECARIM",
        desc: "Your life is a burden. I bring you freedom!",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 18,
        title: "MŨI GIÁO PHỤC HẬN",
        name: "KALISTA",
        desc: "Our fates are intertwined",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 19,
        title: "HOÀNG ĐẾ SA MẠC",
        name: "AZIR",
        desc: "What is the desert, but the ashes of my enemies?",
        image: "../assets/img/belveth-splash.jpg"
    },
    {
        id: 20,
        title: "NHÀ THÔNG THÁI SA MẠC",
        name: "NASUS",
        desc: "The cycle of life and death continues. We will live, they will die.",
        image: "../assets/img/belveth-splash.jpg"
    }
]
const carousel = document.querySelector(".carousel");
// load slider data to html
const loadSliderData = async () => {
    carousel.innerHTML = "";
    sliderData.map((item, index) => {
        const { id, title, description, image } = item;
        const liTag = document.createElement("li");
        liTag.classList.add("card");
        liTag.innerHTML = `
        <div class="img">
            <img src=${item.image} alt="img" draggable="false">
        </div>
        <div class="content">
            <div class="upperTriangle">
                <div class="triangleBackground"></div>
            </div>
            <img src="../assets/img/itemIcon.png" alt="champ icon" class="champIcon">
            <h2 style="font-family: 'Playfair Display', serif;" class="title">${item.title}</h2>
            <h1 style="font-family: 'Playfair Display', serif;" class="name">${item.name}</h1>
            <p>${item.desc}</p>
            <div class="lowerTriangle">
                <div class="triangleBackground"></div>
            </div>
            <!-- <canvas width="450" height="244"> -->
        </div>
        `;
        carousel.appendChild(liTag);
    });

    // console.log(sliderDataHtml)
    // carousel.innerHTML = sliderDataHtml.join("");

}
loadSliderData()
    
