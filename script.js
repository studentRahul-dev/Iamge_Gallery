const gallery = document.querySelectorAll(".gallery img");
      const newImgBox = document.querySelector(".displayImg");
      const showImg = document.querySelector("#showImg");

      gallery.forEach((img) => {
        img.addEventListener("click", () => {
          showImg.src = img.src;
          newImgBox.style.display = "flex";
        });
      });

      newImgBox.addEventListener("click", () => {
        newImgBox.style.display = "none";
      });