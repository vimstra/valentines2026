const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const header = document.getElementById('header');
const gif = document.getElementById("gif");
let count = 0;
let scale = 1;
let width = 50;
let height = 50;
const messages = [
    "Wait, did you missclick?",
    "Are you 100% sure??",
    "You're playing hard to get, I respect that.",
    "Why not give me a chance.....",
    "I’m telling your mom.",
    "The 'Yes' button is right there!!!",
    "What do you meeeaaan???!",
    "Okay, now you’re just being mean...",
    "I can do this all day!",
    "Actually, the 'No' button was just for show, we're getting married."
];


function hearts() {
    const container = document.querySelector('.background-container');
    const create = document.createElement('div');
    create.classList.add('hearts');
    create.innerHTML = '❤︎';

    create.style.left = Math.random() * 100 + 'vw';
    container.appendChild(create);
    setTimeout(() => {
        create.remove();
    }, 5000);

}
setInterval(hearts, 500);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

yesBtn.addEventListener("click", () => {
    document.querySelector('.card-container').style.display = "none";
    document.getElementById('certificate').style.display = "flex";
});

noBtn.addEventListener("click", () => {
    count += 1;
    scale -= 0.1;
    let path = "gifs/" + count + ".gif";
    gif.src = path;
    header.textContent = messages[count - 1];

    let randomLeft = randomIntFromInterval(20, 80); // 90 to keep it on screen
    let randomTop = randomIntFromInterval(20, 80);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomLeft}vw`;
    noBtn.style.top = `${randomTop}vh`;
    noBtn.style.transform = `scale(${scale})`;

    if (count == messages.length) {
        gif.src = "gifs/final.gif";
        header.textContent = "Actually, the 'No' button was just for show, we're getting married.";
        setTimeout(() => {
            document.querySelector('.card-container').style.display = "none";
            document.getElementById('certificate').style.display = "flex";
        }, 4000);
    }
});
