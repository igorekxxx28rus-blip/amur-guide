document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    if (!intro) return;

    if (sessionStorage.getItem("introShown")) {
        intro.remove();
        return;
    }

    sessionStorage.setItem("introShown", "true");
    document.body.classList.add("intro-lock");

    setTimeout(() => {
        intro.remove();
        document.body.classList.remove("intro-lock");
    }, 3000);
});
