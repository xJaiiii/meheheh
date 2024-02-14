
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector(".description").style.opacity = 1;
    }, 3000);
  });