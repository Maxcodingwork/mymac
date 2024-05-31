var myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "死亡之握.jpeg") {
      myImage.setAttribute("src", "雞哥.jpeg");
    } else {
      myImage.setAttribute("src", "死亡之握.jpeg");
    }
  };

var allImages = document.querySelectorAll("img");
allImages.forEach(function(img, index) {
    console.log("Image " + index, img); // 這會輸出所有的 <img> 元素
});

document.getElementById('myButton').addEventListener('click', function() {
    alert('我的毒沒有解藥!!');
});
       