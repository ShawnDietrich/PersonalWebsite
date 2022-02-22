let colorArray = ['green', 'skyblue', 'pink', 'limegreen', 'gray'];

//let aboutTitle = document.querySelector('.title');
let aboutMission = document.querySelector('.mission');

let index = 0;

let changeColor = () => {
    // reset index when length is reached
    index >= colorArray.length ? index = 0 : false;
    // set background color
    aboutMission.style.backgroundColor = colorArray[index];
    // increase index
    index++;
    
}

setInterval(changeColor, 500);