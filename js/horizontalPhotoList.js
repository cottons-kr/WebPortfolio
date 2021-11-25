const imgs = [
    "cat.jpg",
    "flower.jpg",
    "python.jpg",
    "react.jpg",
    "tux.jpg"
];

const list = document.querySelector(".lists");
const MAX_WIDTH = 300;
const MAX_HEIGHT = 300;

for (const img of imgs) {
    const li = document.createElement("li")
    const imgTag = document.createElement("img")
    imgTag.setAttribute("src", `res/${img}`)
    li.appendChild(imgTag)
    list.appendChild(li)
}
