let right_arrow1 = document.getElementById("right-arrow1");
let left_arrow1 = document.getElementById("left-arrow1");
let post1 = document.getElementById("post1");
let img_position1 = 12;
right_arrow1.addEventListener('click', () => {
    img_position1++;
    if (img_position1 > 20) {
        img_position1 = 12;
    }
    post1.src = "images/" + img_position1 + ".jpg";
})
left_arrow1.addEventListener('click', () => {
    img_position1--;
    if (img_position1 < 12) {
        img_position1 = 20;
    }
    post1.src = "images/" + img_position1 + ".jpg";
})

let right_arrow2 = document.getElementById("right-arrow2");
let left_arrow2 = document.getElementById("left-arrow2");
let post2 = document.getElementById("post2");
let img_position2 = 21;
right_arrow2.addEventListener('click', () => {
    img_position2++;
    if (img_position2 > 27) {
        img_position2 = 21;
    }
    post2.src = "images/" + img_position2 + ".jpg";
})
left_arrow2.addEventListener('click', () => {
    img_position2--;
    if (img_position2 < 21) {
        img_position2 = 27;
    }
    post2.src = "images/" + img_position2 + ".jpg";
})

let right_arrow3 = document.getElementById("right-arrow3");
let left_arrow3 = document.getElementById("left-arrow3");
let post3 = document.getElementById("post3");
let img_position3 = 28;
right_arrow3.addEventListener('click', () => {
    img_position3++;
    if (img_position3 > 37) {
        img_position3 = 28;
    }
    post3.src = "images/" + img_position3 + ".jpg";
})
left_arrow3.addEventListener('click', () => {
    img_position3--;
    if (img_position3 < 28) {
        img_position3 = 37;
    }
    post3.src = "images/" + img_position3 + ".jpg";
})

let right_arrow4 = document.getElementById("right-arrow4");
let left_arrow4 = document.getElementById("left-arrow4");
let post4 = document.getElementById("post4");
let img_position4 = 1;
right_arrow4.addEventListener('click', () => {
    img_position4++;
    if (img_position4 > 11) {
        img_position4 = 1;
    }
    post4.src = "images/" + img_position4 + ".jpg";
})
left_arrow4.addEventListener('click', () => {
    img_position4--;
    if (img_position4 < 1) {
        img_position4 = 11;
    }
    post4.src = "images/" + img_position4 + ".jpg";
})