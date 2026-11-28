let color = localStorage.getItem("selectedCar")
    if (color === "red"){
            document.querySelector("#car").src = "images/racingcar.png" 
    } if (color === "orange"){
                    document.querySelector("#car").src = "images/orangecar.png"     
    } if (color === "green"){
                            document.querySelector("#car").src = "images/greencar.png"     
    } if (color === "blue"){
                                    document.querySelector("#car").src = "images/bluecar.png"     
    } if (color === "purple"){
                                            document.querySelector("#car").src = "images/purplecar.png"     
    } if (color === "pink"){
                                                    document.querySelector("#car").src = "images/pinkcar.png"     
    }
//document.querySelector("#xxxx").src = "";
if (color === null){
    document.querySelector("#yourCar").textContent = "No car picked yet"
} else {
    document.querySelector("#yourCar").textContent = "Your car: " + color
}
