function pickCar(color){
    let message="you picked: " + color
    document.querySelector("#picked").textContent = message
    console.log(message)
        localStorage.setItem("selectedCar", color);
}