function searchRestaurants() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let restaurantCards = document.querySelectorAll(".restaurant-card");

    restaurantCards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
