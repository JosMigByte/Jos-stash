images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.png"];
img=Math.floor((Math.random() * images.length) + 1);
document.write("<img src='./randomImg/"+images[img-1]+"'>");