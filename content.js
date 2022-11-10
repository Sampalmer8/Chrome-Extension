let LBronImages = [
    "https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/05/Screen-Shot-2021-05-20-at-7.36.14-AM.jpg?w=1000&h=589&crop=1",
    "https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2017/11/08/5a026860b545451139139aea_Screen%20Shot%202017-11-07%20at%209.13.35%20PM.png",
    "https://media.tenor.com/w8_zBqWgYZcAAAAC/lebron-james-funny.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_2cCGodRoZrCH71564GijTSDGqpt5vCurg&usqp=CAU",
    "https://people.com/thmb/MINGL7PmmqhS_4h3Hx9eGqbj7yc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/lebron-james-2-c5de5ce7a3434b12bc1dd2514ea28e5e.jpg",
    "https://i.ytimg.com/vi/mTgG6kT3120/hqdefault.jpg",
    "https://external-preview.redd.it/ykL8u0k9s5YiWIEd4Qme0LmTgZYMsIhLrIuM2ntde20.jpg?auto=webp&s=c196ccdd6ad5a797582b81b37d24caa853ab0aa4",
    "http://i0.kym-cdn.com/entries/icons/facebook/000/011/061/lelbron.jpg",
    "https://i.imgur.com/vzzC9SK.jpeg",
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
    subs[i].innerText = "LeBrown Stains";
}