
const imageA = document.getElementById("imageA");
const imageB = document.getElementById("imageB");

const previewA = document.getElementById("previewA");
const previewB = document.getElementById("previewB");

imageA.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
    previewA.src = URL.createObjectURL(file);
  }
});

imageB.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
    previewB.src = URL.createObjectURL(file);
  }
});

document.getElementById("compareBtn")
.addEventListener("click", function() {

  if (!imageA.files[0] || !imageB.files[0]) {
    document.getElementById("result").innerText =
      "Please upload both images!";
    return;
  }

  document.getElementById("result").innerText =
    "Both images loaded successfully! " +
    "Visual comparison is ready.";

});
