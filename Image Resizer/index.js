const image_input = document.querySelector("#image_input");
var uploaded_image;

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#display_image"
      ).style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
    
    const img = document.getElementById("image_input");
    const btnLeft = document.getElementById("left");
    const btnRight = document.getElementById("right");
    const btnHorizontal = document.getElementById("horizontal");
    const btnVertical = document.getElementById("vertical");
    
    let rotateL = 0;
    let rotateR = 0;
    let rotateH = 0;
  let rotateV = 0;
  btnLeft.addEventListener("click", () => {
    // rotateL = rotateL +-90
    rotateL += 180;
    display_image.style.transform = `rotate(${rotateL}deg)`;
  });
});




