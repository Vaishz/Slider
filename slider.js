let flag = 0;
slideshow(flag);

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}

function slideshow(num) {
    let slides = document.querySelectorAll(".image-container img");
    console.log(slides);

    // Hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Ensure flag doesn't go out of bounds
    if (num < 0) {
        flag = slides.length - 1;
    } else if (num >= slides.length) {
        flag = 0;
    }

    slides[flag].style.display = "block"; // Display the selected image
}
