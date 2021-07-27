let cssModal = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: grey;
`;

document.querySelectorAll("[modal]").forEach(element => {
    element.addEventListener("click", toggleModal)
});

let toggle = true;
let currentButton

function toggleModal(e) {
    e.stopPropagation();
    console.log(e.target)
    if (toggle) {
        toggle = !toggle
        const modal = e.target.parentNode
        currentButton = e.target
        modal.childNodes[modal.childNodes.length - 1]
        modal.style.cssText = cssModal
        modal.childNodes[1].style.display = "block"
        currentButton.style.display = "none"
    } else if(e.target.getAttribute("modal") != null) {
        toggle = !toggle
        const modal = e.target
        modal.style.cssText = ""
        modal.childNodes[1].style.display = "none"
        currentButton.style.display = "block"
    }

}