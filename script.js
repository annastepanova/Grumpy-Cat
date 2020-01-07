let doorImage1 = document.getElementById('door1')
let doorImage2 = document.getElementById('door2')
let doorImage3 = document.getElementById('door3')

let numClosedDoors = 3
let openDoor1
let openDoor2
let openDoor3

randomChoreDoorGenerator = () => { const choreDoor = Math.floor(Math.random()*numClosedDoors)
if (choreDoor === 0) { 
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;
} 
else if (choreDoor === 1) { 
  openDoor2 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor3 = spaceDoorPath;
}
else if (choreDoor === 2) { 
  openDoor3 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor2 = spaceDoorPath;
}
}

let botDoorPath = "grumpycat.png"
let beachDoorPath = "cheese.png"
let spaceDoorPath = "cookies.png"

doorImage1.onclick = () => { doorImage1.src = openDoor1 }
doorImage2.onclick = () => { doorImage2.src = openDoor2 }
doorImage3.onclick = () => { doorImage3.src = openDoor3 }

randomChoreDoorGenerator()