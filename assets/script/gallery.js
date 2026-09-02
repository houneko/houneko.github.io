// const images = document.querySelectorAll(".gallery img");
// const modal = document.getElementById("modal");
// const modalImg = document.getElementById("modalImg");
// const closeBtn = document.querySelector(".close");

// images.forEach(img => {
//   img.addEventListener("click", () => {
//     modal.style.display = "block";
//     modalImg.src = img.src;
//   });
// });

// closeBtn.onclick = () => {
//   modal.style.display = "none";
// };

// modal.onclick = () => {
//   modal.style.display = "none";
// };

const images = document.querySelectorAll(".item img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// 画像クリックでモーダル表示
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// ×ボタンで閉じる
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// 背景クリックで閉じる
modal.onclick = (e) => {
  if (e.target !== modalImg) {
    modal.style.display = "none";
  }
};