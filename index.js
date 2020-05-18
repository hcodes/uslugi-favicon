const imageDot1 = new FaviconDot({
    positionX: 'left',
    size: 64,
    links: [
        document.querySelector('#preview1')
    ]
});

imageDot1.show();

const favDot = new FaviconDot({
    positionX: 'left'
});
const imageDot2 = new FaviconDot({
    positionX: 'left',
    size: 64,
    links: [
        document.querySelector('#preview2')
    ]
});

imageDot2.show();
favDot.show();

let imageDot3 = new FaviconDot({
    positionX: 'left',
    size: 64,
    links: [
        document.querySelector('#preview3')
    ]
});

let imageDot4 = new FaviconDot({
    positionX: 5,
    positionY: 5,
    size: 64,
    links: [
        document.querySelector('#preview4')
    ]
});


let isShow = false;
setInterval(() => {
    isShow = !isShow;
    if (isShow) {
        imageDot2.hide();
        favDot.hide();
    } else {
        imageDot2.show();
        favDot.show();
    }
}, 2000);

// let koef3 = -1;
// let step3 = 0.2;
// let value3 = 1;
// setInterval(() => {
//     value3 += koef3 * step3;

//     if (value3 >= 1) {
//         koef3 = -1;
//         value3 = 1;
//     }

//     if (value3 <= 0) {
//         koef3 = 1;
//         value3 = 0;
//     }

//     imageDot3.show({
//         alpha: value3,
//     });

//     /*favDot.show({
//         alpha: value3,
//     });*/
// }, 50);

// let koef4 = 1;
// let value4 = 1;
// let step4 = 0.25;
// let maxValue4 = 5;
// let minValue4 = 1;
// setInterval(() => {
//     if (value4 < minValue4) {
//         koef4 = 1;
//         value4 = minValue4;
//     }

//     if (value4 > maxValue4) {
//         koef4 = -1;
//         value4 = maxValue4;
//     }

//     value4 += koef4 * step4;

//     // @ts-ignore
//     imageDot4.show({
//         radius: value4,
//     });
// }, 50);



