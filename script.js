// ❤️ Like Button Logic
document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
    button.textContent = button.classList.contains('liked') ? '💖 Liked' : '❤️ Like';
  });
});

// 💬 Comment Logic
document.querySelectorAll('.comment-box').forEach(box => {
  const input = box.querySelector('.comment-input');
  const postBtn = box.querySelector('.comment-submit');
  const output = box.querySelector('.comment-output');

  postBtn.addEventListener('click', () => {
    const comment = input.value.trim();
    if (comment !== "") {
      const commentLine = document.createElement('p');
      commentLine.textContent = `💬 ${comment}`;
      output.appendChild(commentLine);
      input.value = "";
    }
  });
});

// 📷 Upload Alert
const uploadInput = document.querySelector('.upload-input');
uploadInput.addEventListener('change', () => {
  alert("🚧 Upload not available in retro mode. Please insert floppy disk to continue.");
});
setTimeout(() => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.remove();
  }
}, 1600);
// Typing effect for loading screen
const loadingText = "💾 Loading from floppy disk...";
let i = 0;
const loadingBox = document.querySelector('.loading-box');

function typeEffect() {
  if (i < loadingText.length) {
    loadingBox.textContent += loadingText.charAt(i);
    i++;
    setTimeout(typeEffect, 50); // Speed of typing
  }
}

window.addEventListener('load', () => {
  loadingBox.textContent = ""; // Clear first
  typeEffect();
});
