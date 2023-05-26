const menu_btn = document.querySelector("#menu-btn");
const menu_btn_Active = document.querySelector("#menu-btn.active");
const header = document.querySelector(".header");
const overlay = document.querySelector("#overlay");
const overlayActive = document.querySelector("#overlay.active");
menu_btn.addEventListener("click", function () {
    header.classList.toggle("active");
    overlay.classList.toggle("active");
    menu_btn.classList.toggle("fa-xmark");
});
// Xử lý khi có sự thay đổi kích thước màn hình lớn hơn 991px
window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) {
        overlay.classList.remove("active");
        header.classList.remove("active");
        menu_btn.classList.remove("fa-xmark");
    }
});
// window.addEventListener("scroll", () => {
//     overlay.classList.remove("active");
//     header.classList.remove("active");
//     menu_btn.classList.remove("active");
//     menu_btn.classList.remove("fa-xmark");
// });
