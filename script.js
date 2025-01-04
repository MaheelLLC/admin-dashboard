document.addEventListener("DOMContentLoaded", () => {
    const showAllButton = document.querySelector("#show-all-button");
    const artist5 = document.getElementById("artist-5");
    const artist6 = document.getElementById("artist-6");

    let isShown = false;

    showAllButton.addEventListener("click", () => {
        if (!isShown) {
            artist5.style.display = "flex";
            artist6.style.display = "flex";
            showAllButton.textContent = "Hide All";
        } else {
            artist5.style.display = "none";
            artist6.style.display = "none";
            showAllButton.textContent = "Show All";
        }
        isShown = !isShown;
    });
});