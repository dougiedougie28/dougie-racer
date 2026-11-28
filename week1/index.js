let color = localStorage.getItem("selectedCar")
if (color === null){
    document.querySelector("#yourCar").textContent = "No car picked yet"
} else {
    document.querySelector("#yourCar").textContent = "Your car: " + color
}
