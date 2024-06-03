var allImages = document.querySelectorAll("img");
allImages.forEach(function(img) {
    img.onclick = function () {
        let mySrc = img.getAttribute("src");
        let altSrc = img.getAttribute("data-alt-src");
        let myAlt = img.getAttribute("alt");
        let altAlt = img.getAttribute("data-alt-alt");
        img.setAttribute("src", altSrc);
        img.setAttribute("data-alt-src", mySrc);
        img.setAttribute("alt", altAlt);
        img.setAttribute("data-alt-alt", myAlt);
        )
    };
});

document.getElementById('myButton').addEventListener('click', function() {
    alert('我的毒沒有解藥!!');
});
       
