const crd = document.querySelectorAll(".card-content");
crd.forEach((item) => {
    item.addEventListener("mousemove", function () {
        item.classList.add("active");
        item.addEventListener("mouseleave", function () {
            item.classList.remove("active");
        })
    });
});
const fct = document.querySelectorAll(".feat-content");
fct.forEach((item) => {
    item.addEventListener("mousemove", function () {
        item.classList.add("active");
        item.addEventListener("mouseleave", function () {
            item.classList.remove("active");
        })
    });
});