let bebekler = document.getElementsByClassName("bebek");
console.log(bebekler);

//sayfada mouse hareket ettikçe bu fonksiyon çalışsın.
//onmousemove mosuun anlık durumunu alır


document.addEventListener("mousemove", (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%"; // belirli bir yüzde almak icin bu hesaplama yapildi. 
    var y = event.clientY * 100 / window.innerHeight + "%";
    console.log(x, y)
    for (let i = 0; i < 2; i++) {
        bebekler[i].style.top = y;
        bebekler[i].style.left = x;
        bebekler[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
})