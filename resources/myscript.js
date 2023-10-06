/* Code for DVD Bounce project */

let id = null;

//Returns an array of some random starting x and y coordinates for the animatee: form [x, y]
function randomPosNum(maxWidth, maxHeight) {

    const xPos = Math.floor(Math.random() * maxWidth);
    const yPos = Math.floor(Math.random() * maxHeight);

    const posArray = [xPos, yPos];
    console.log(posArray);
    return posArray;
}

//Returns a random positive or negative number between the number specified, excluding 0
function randomSignIncr(incrementValue) {
    let value = Math.random() - 0.5;
    return value = value > 0 ? Math.ceil((value + value) * incrementValue) : Math.floor((value + value) * incrementValue);
}

//Function for moving the animatee
function moveIt(element, xIncr, yIncr, posArr) {
    posArr[0] = posArr[0] + xIncr;
    posArr[1] = posArr[1] + yIncr;

    element.style.left = posArr[0] + 'px';
    element.style.top = posArr[1] + 'px';
}


//Function to bounce element around container
function myMove() {

    if (!id) {
        const container = document.getElementById("container");
        const xMax = container.offsetWidth;
        const yMax = container.offsetHeight;
        const xMin = 0;
        const yMin = 0;

        const animatee = document.getElementById("animation");
        const animSizeX = animatee.offsetWidth ;
        const animSizeY = animatee.offsetHeight;

        const elem = document.getElementById("animation");
        let posArr = randomPosNum(xMax, yMax);
        elem.style.left = posArr[0] + 'px';
        elem.style.top = posArr[1] + 'px';

        const bounceValue = document.getElementById("bounce-value").value;

        let xIncr = randomSignIncr(bounceValue);
        let yIncr = randomSignIncr(bounceValue);

        clearInterval(id);
        id = setInterval(() => {

            if (posArr[0] > 0 &&
                   posArr[0] + animSizeX < xMax &&
                   posArr[1] > 0 &&
                   posArr[1] + animSizeY < yMax) {

                moveIt(elem, xIncr, yIncr, posArr);
            }

            else if (posArr[0] <= xMin) {
                xIncr = Math.abs(xIncr);
                moveIt(elem, xIncr, yIncr, posArr);
            } 
            else if (posArr[0] + animSizeX >= xMax) {
                xIncr = -(Math.abs(xIncr));
                moveIt(elem, xIncr, yIncr, posArr);
            }
            else if (posArr[1] <= yMin) {
                yIncr = Math.abs(yIncr);
                moveIt(elem, xIncr, yIncr, posArr);
            }
            else if (posArr[1] + animSizeY >= yMax) {
                yIncr = -(Math.abs(yIncr));
                moveIt(elem, xIncr, yIncr, posArr);
            }
        }, 10);
    }
    
}

//Function that clears the current interval
function stopMove() {
    clearInterval(id);
    id = null;
}


document.getElementById("stop").addEventListener("click", stopMove);