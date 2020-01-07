let doorImage1 = document.getElementById('door1')
let doorImage2 = document.getElementById('door2')
let doorImage3 = document.getElementById('door3')

let botDoorPath = "grumpycat.png"
let beachDoorPath = "cheese.png"
let spaceDoorPath = "cookies.png"

doorImage1.onclick = () => { doorImage1.src = botDoorPath }
doorImage2.onclick = () => { doorImage2.src = beachDoorPath }
doorImage3.onclick = () => { doorImage3.src = spaceDoorPath }
