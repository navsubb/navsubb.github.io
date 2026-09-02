document.querySelectorAll(".photo-frame img").forEach((image) => {
  const showPlaceholder = () => image.classList.add("is-missing");
  const showImage = () => image.classList.remove("is-missing");

  image.addEventListener("error", showPlaceholder);
  image.addEventListener("load", showImage);

  if (image.complete) {
    image.naturalWidth ? showImage() : showPlaceholder();
  }
});
