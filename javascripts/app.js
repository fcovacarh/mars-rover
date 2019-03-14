var canvas = document.getElementById("map");
var ctx = canvas.getContext("2d");

var initialPosition = {
  x: 0, 
  y: 0,
};

var rover = {
  direction: "N",
  position: initialPosition,
  travelLog: [],
};

updateDisplay();

function drawRover(){
  ctx.clearRect(0,0, 500, 500);    
  ctx.fillStyle = "#fff";
  ctx.fillRect(
    rover.position.x*50, 
    rover.position.y*50,
    50,
    50
  );
}

function updateDisplay(){
  drawRover();
  updateTravelLog(rover);
}

function receiveCommands(commandString){
  for(var i = 0; i < commandString.length; i++){
    var char = commandString.charAt(i);
    switch (char) {
      case "f": 
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      case "r": 
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      default:
        break;
    }
  }
}

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
      break;
  }
  console.log("turnLeft, " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    default:
      break;
  }
  console.log("turnRight, " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      if(rover.position.y > 0){
        rover.position.y--;
        updateDisplay(rover);
      } else {
        console.log("Rover can't move in that direction");
      }
      break;
    case "W":
      if(rover.position.x > 0){
        rover.position.x--;
        updateDisplay(rover);
      } else {
        console.log("Rover can't move in that direction");
      }
      break;
    case "S":
      if(rover.position.y < 9){
        rover.position.y++;
        updateDisplay(rover);
      } else {
        console.log("Rover can't move in that direction");
      }
      break;
    case "E":
      if(rover.position.x < 9){
        rover.position.x++;
        updateDisplay(rover);
      } else {
        console.log("Rover can't move in that direction");
      }
      break;
    default:
      break;
  }
  console.log("position (X:" + rover.position.x + ", Y:" + rover.position.y + ")");
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction) {
    case "N":
      if(rover.position.y < 9){
        rover.position.y++;
        updateDisplay(rover);
      } else {
        console.log("Rover can't move in that direction");
      }
      break;
    case "W":
      if(rover.position.x < 9){
        rover.position.x++;
        updateDisplay(rover);
      } else {
        console.log("Rover can't move in that direction");
      }
      break;
    case "S":
      if(rover.position.y > 0){
        rover.position.y--;
        updateDisplay(rover);
      } else {
        console.log("Rover can't move in that direction");
      }
      break;
    case "E":
      if(rover.position.x > 0){
        rover.position.x--;
        updateDisplay(rover);
      } else {
        console.log("Rover can't move in that direction");
      }
      break;
    default:
      break;
  }
  console.log("position (X:" + rover.position.x + ", Y:" + rover.position.y + ")");
}

function updateTravelLog(rover){
  rover.travelLog.push({
    x: rover.position.x, 
    y: rover.position.y
  });
}