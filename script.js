function changeColor() {
    let el = document.querySelector("body");
    if (document.body.scrollTop > 700 && document.body.scrollTop < 2560 || document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 2560){
    el.style.backgroundColor = "white";
    } else {
        el.style.backgroundColor = "black";
    }
}