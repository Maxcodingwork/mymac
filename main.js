var allImages = document.querySelectorAll("img");
allImages.forEach(function(img) {
    img.onclick = function () {
        let mySrc = img.getAttribute("src");
        let altSrc = img.getAttribute("data-alt-src");
        img.setAttribute("src", altSrc);
        img.setAttribute("data-alt-src", mySrc);
    };
});

document.getElementById('myButton').addEventListener('click', function() {
    alert('我的毒沒有解藥!!');
});
       
