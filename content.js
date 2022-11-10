let LBronImages = [
    "https://images.app.goo.gl/1dpABm44pPQG43V88",
    "https://images.app.goo.gl/isRCtVU8xQ61ytE76",
    "https://images.app.goo.gl/4pF52iWpR7y6SukR7",
    "https://images.app.goo.gl/bMVmpPBKY3Mg8szP8",
    "https://images.app.goo.gl/LQDncvCT7GPiWENw5",
    "https://images.app.goo.gl/6sjUAMh3GQg3bBzf8",
    "https://images.app.goo.gl/GCGzTkWQTaYhFtBm6",
    "http://i0.kym-cdn.com/entries/icons/facebook/000/011/061/lelbron.jpg",
    "https://i.imgur.com/vzzC9SK.jpeg",
    "https://i.pinimg.com/736x/0f/2a/c7/0f2ac7930b70e7eef23e6a21b5586a7a--nike-janoski-nike-sweatpants.jpg",
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * LBronImages.length);
    imgs[i].src = LBronImages[randomImg];
}

const headers = document.getElementsByTagName("h2");
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "LeBum Jahames";
}

const title = document.getElementsByTagName("h1");
for (let i = 0; i < title.length; i++) {
    title[i].innerText = "JeBron Lames";
}

const subs = document.getElementsByTagName("h3");
for (let i = 0; i < subs.length; i++) {
    subs[i].innerText = "LeGM";
}

const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links[i].innerText = "LeBrown Stains";
}