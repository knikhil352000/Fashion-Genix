myButton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const wrapper = document.querySelector('.header-extradiv');
const designers = document.querySelector('#clientdiv')
const wrapperDesigners = document.querySelector('#pricingdiv');
wrapper.addEventListener('click', (event) => {
    window.location.href = "#clientdiv"
});
wrapperDesigners.addEventListener('click', function (event) {
    window.location.href = "checkout.html";
});
designers.addEventListener('click', function (event) {
    window.location.href = "#pricingdiv";
});