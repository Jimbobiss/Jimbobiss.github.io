let id = null;

function randomPosNum(maxWidth, maxHeight) {

    const xPos = Math.floor(Math.random() * maxWidth);
    const yPos = Math.floor(Math.random() * maxHeight);

    const posArray = [xPos, yPos];
    console.log(posArray);
    return posArray;
}

//function executed when start button pressed
function myMove() {

    if (!id) {
        const container = document.getElementById("container");
        const xMax = container.offsetWidth;
        const yMax = container.offsetHeight;

        const animatee = document.getElementById("animation");
        const animSizeX = animatee.offsetWidth ;
        const animSizeY = animatee.offsetHeight;

        const elem = document.getElementById("animation");
        let posArr = randomPosNum(xMax, yMax);
        elem.style.left = posArr[0] + 'px';
        elem.style.top = posArr[1] + 'px';

        clearInterval(id);
        id = setInterval(() => {

            

            /*
            if (posArr[1] + animSizeY >= yMax  || posArr[0] + animSizeX >= xMax) {
                clearInterval(id);
            } else {
                posArr[0]++;
                posArr[1]++;

                elem.style.left = posArr[0] + 'px';
                elem.style.top = posArr[1] + 'px';
            } */

        }, 10);
    }
    
}

function stopMove() {
    clearInterval(id);
    id = null;
}

document.getElementById("stop").addEventListener("onclick", stopMove);