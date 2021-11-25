const lists = document.querySelector(".lists");
let i = 0;


while (i < lists.childElementCount) {
    const li = document.querySelector(`li:nth-child(${i+1})`);
    li.classList.add("loadList")
    i++;
}
