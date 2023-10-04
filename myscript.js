function randomPosNum() {
    const container = document.getElementById("container");
    const xMax = container.offsetWidth;
    const yMax = container.offsetHeight;
    console.log(`${xMax} and ${yMax}`);


    const xPos = Math.floor(Math.random() * xMax);
    const yPos = Math.floor(Math.random() * yMax);

    const posArray = [xPos, yPos];
    console.log(posArray);
    return posArray;
}

function myMove() {
    console.log("entered");
    let id = null;
    const elem = document.getElementById("animation");
    let posArr = randomPosNum();
    elem.style.left = posArr[0] + 'px';
    elem.style.top = posArr[1] + 'px';

    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (posArr[0] <= 0 || posArr[0] >= 500) {
            clearInterval(id);
        } else {
            posArr[0]++;
            posArr[1]++;

            elem.style.left = posArr[0] + 'px';
            elem.style.top = posArr[1] + 'px';
        }
    }

    elem.style.left = posArr[0] + 'px';
    elem.style.top = posArr[1] + 'px';
}