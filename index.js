let randomImage1= Math.floor(Math.random() * 6) +1;
let image1= 'images/dice' +randomImage1 + '.png';

$('.img1').attr('src', image1);



let randomImage2= Math.floor(Math.random() * 6) +1;
let image2= 'images/dice' +randomImage2 + '.png';

$('.img2').attr('src', image2);



if (randomImage1 > randomImage2) {
    $('h1').text('Player One Wins!');
} else if(randomImage2 > randomImage1) {
    $('h1').text('Player Two Wins!');
}else if(randomImage1 == randomImage2){
    $('h1').text('Draw!');
}