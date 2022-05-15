

console.log("Getting started with ludo game")

let firstTokenGreenBtn, secendTokenGreenBtn, thirdTokenGreenBtn, forthTokenGreenBtn

let firstTokenYellowBtn, secendTokenYellowBtn, thirdTokenYellowBtn, forthTokenYellowBtn;

let firstTokenRedBtn, secendTokenRedBtn, thirdTokenRedBtn, forthTokenRedBtn;


let firstTokenBlueBtn, secendTokenBlueBtn, thirdTokenBlueBtn, forthTokenBlueBtn;

let GreentokenCont, YellowtokenCont, RedtokenCont, BluetokenCont;

let triangleYellow,triangleBlue,triangleRed,triangleGreen;

let blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;

let reqElemG, reqElemR, reqElemY, reqElemB;

let WinnerName;

let safeArea = false;
initalization();

function initalization() {
    GreentokenCont = document.querySelectorAll('.GreentokenCont');
    firstTokenGreenBtn = document.getElementById('firstTokenGreenBtn');
    secendTokenGreenBtn = document.getElementById('secendTokenGreenBtn');
    thirdTokenGreenBtn = document.getElementById('thirdTokenGreenBtn');
    forthTokenGreenBtn = document.getElementById('forthTokenGreenBtn');

    YellowtokenCont = document.querySelectorAll('.YellowtokenCont');
    firstTokenYellowBtn = document.getElementById('firstTokenYellowBtn');
    secendTokenYellowBtn = document.getElementById('secendTokenYellowBtn');
    thirdTokenYellowBtn = document.getElementById('thirdTokenYellowBtn');
    forthTokenYellowBtn = document.getElementById('forthTokenYellowBtn');

    RedtokenCont = document.querySelectorAll('.RedtokenCont');
    firstTokenRedBtn = document.getElementById('firstTokenRedBtn');
    secendTokenRedBtn = document.getElementById('secendTokenRedBtn');
    thirdTokenRedBtn = document.getElementById('thirdTokenRedBtn');
    forthTokenRedBtn = document.getElementById('forthTokenRedBtn');

    BluetokenCont = document.querySelectorAll('.BluetokenCont');
    firstTokenBlueBtn = document.getElementById('firstTokenBlueBtn');
    secendTokenBlueBtn = document.getElementById('secendTokenBlueBtn');
    thirdTokenBlueBtn = document.getElementById('thirdTokenBlueBtn');
    forthTokenBlueBtn = document.getElementById('forthTokenBlueBtn');


    triangleYellow=document.getElementById('triangle-Yellow');
    triangleGreen=document.getElementById('triangle-Green');
    triangleBlue=document.getElementById('triangle-Blue');
    triangleRed=document.getElementById('triangle-Red');

    WinnerName=document.getElementById('Winner_name');
 

    // Green Tokens add event listners
    firstTokenGreenBtn.addEventListener('click', firstTGFunc);
    secendTokenGreenBtn.addEventListener('click', secendTGFunc);
    thirdTokenGreenBtn.addEventListener('click', thirdTGFunc);
    forthTokenGreenBtn.addEventListener('click', forthTGFunc);

    // Yellow Tokens add event listners
    firstTokenYellowBtn.addEventListener('click', firstTYFunc);
    secendTokenYellowBtn.addEventListener('click', secendTYFunc);
    thirdTokenYellowBtn.addEventListener('click', thirdTYFunc);
    forthTokenYellowBtn.addEventListener('click', forthTYFunc);


    // Yellow Tokens add event listners
    firstTokenRedBtn.addEventListener('click', firstTRFunc);
    secendTokenRedBtn.addEventListener('click', secendTRFunc);
    thirdTokenRedBtn.addEventListener('click', thirdTRFunc);
    forthTokenRedBtn.addEventListener('click', forthTRFunc);

    // Yellow Tokens add event listners
    firstTokenBlueBtn.addEventListener('click', firstTBFunc);
    secendTokenBlueBtn.addEventListener('click', secendTBFunc);
    thirdTokenBlueBtn.addEventListener('click', thirdTBFunc);
    forthTokenBlueBtn.addEventListener('click', forthTBFunc);



}
// Green tokens

firstTokenGreenBtn.disabled = true
secendTokenGreenBtn.disabled = true
thirdTokenGreenBtn.disabled = true
forthTokenGreenBtn.disabled = true


firstTokenYellowBtn.disabled = true
secendTokenYellowBtn.disabled = true
thirdTokenYellowBtn.disabled = true
forthTokenYellowBtn.disabled = true


firstTokenRedBtn.disabled = true
secendTokenRedBtn.disabled = true
thirdTokenRedBtn.disabled = true
forthTokenRedBtn.disabled = true



firstTokenBlueBtn.disabled = true
secendTokenBlueBtn.disabled = true
thirdTokenBlueBtn.disabled = true
forthTokenBlueBtn.disabled = true


function disableToken(i) {
    if (i == 1) {
        if(Greenlist[0])
        {
            firstTokenGreenBtn.disabled=true;
        }
       if(Greenlist[1])
        {
            secendTokenGreenBtn.disabled=true;
        }
       if(Greenlist[2])
        {
            thirdTokenGreenBtn.disabled=true;
        }
       if(Greenlist[3])
        {
            forthTokenGreenBtn.disabled=true;
        }
        firstTokenYellowBtn.disabled = true
        secendTokenYellowBtn.disabled = true
        thirdTokenYellowBtn.disabled = true
        forthTokenYellowBtn.disabled = true


        firstTokenRedBtn.disabled = true
        secendTokenRedBtn.disabled = true
        thirdTokenRedBtn.disabled = true
        forthTokenRedBtn.disabled = true



        firstTokenBlueBtn.disabled = true
        secendTokenBlueBtn.disabled = true
        thirdTokenBlueBtn.disabled = true
        forthTokenBlueBtn.disabled = true
    }
    else if (i == 2) {

        if(Yellowlist[0])
        {
            firstTokenYellowBtn.disabled=true;
        }
       if(Yellowlist[1])
        {
            secendTokenYellowBtn.disabled=true;
        }
       if(Yellowlist[2])
        {
            thirdTokenYellowBtn.disabled=true;
        }
       if(Yellowlist[3])
        {
            forthTokenYellowBtn.disabled=true;
        }

        firstTokenGreenBtn.disabled = true
        secendTokenGreenBtn.disabled = true
        thirdTokenGreenBtn.disabled = true
        forthTokenGreenBtn.disabled = true

        firstTokenRedBtn.disabled = true
        secendTokenRedBtn.disabled = true
        thirdTokenRedBtn.disabled = true
        forthTokenRedBtn.disabled = true



        firstTokenBlueBtn.disabled = true
        secendTokenBlueBtn.disabled = true
        thirdTokenBlueBtn.disabled = true
        forthTokenBlueBtn.disabled = true
    }
    else if (i == 3) {
        if(Bluelist[0])
        {
            firstTokenBlueBtn.disabled=true;
        }
       if(Bluelist[1])
        {
            secendTokenBlueBtn.disabled=true;
        }
       if(Bluelist[2])
        {
            thirdTokenBlueBtn.disabled=true;
        }
       if(Bluelist[3])
        {
            forthTokenBlueBtn.disabled=true;
        }
        firstTokenGreenBtn.disabled = true
        secendTokenGreenBtn.disabled = true
        thirdTokenGreenBtn.disabled = true
        forthTokenGreenBtn.disabled = true


        firstTokenYellowBtn.disabled = true
        secendTokenYellowBtn.disabled = true
        thirdTokenYellowBtn.disabled = true
        forthTokenYellowBtn.disabled = true

        firstTokenRedBtn.disabled = true
        secendTokenRedBtn.disabled = true
        thirdTokenRedBtn.disabled = true
        forthTokenRedBtn.disabled = true


    }
    else if (i == 4) {
        if(Redlist[0])
        {
            firstTokenRedBtn.disabled=true;
        }
       if(Redlist[1])
        {
            secendTokenRedBtn.disabled=true;
        }
       if(Redlist[2])
        {
            thirdTokenRedBtn.disabled=true;
        }
       if(Redlist[3])
        {
            forthTokenRedBtn.disabled=true;
        }
        firstTokenGreenBtn.disabled = true
        secendTokenGreenBtn.disabled = true
        thirdTokenGreenBtn.disabled = true
        forthTokenGreenBtn.disabled = true


        firstTokenYellowBtn.disabled = true
        secendTokenYellowBtn.disabled = true
        thirdTokenYellowBtn.disabled = true
        forthTokenYellowBtn.disabled = true

        firstTokenBlueBtn.disabled = true
        secendTokenBlueBtn.disabled = true
        thirdTokenBlueBtn.disabled = true
        forthTokenBlueBtn.disabled = true
    }
}

function resultant(node,strCol,randomNum)
{
    let num,result=0;
    if(node.parentNode!=null)
    {
        node.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes(`${strCol}_`)) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
            }
        });
        result=num+randomNumber;
    }
        
    return result;
}

function pageReload()
{
    location.reload();
}


let bRoute = document.getElementsByClassName('bRoute');
let yRoute = document.getElementsByClassName('yRoute');
let rRoute = document.getElementsByClassName('rRoute');
let gRoute = document.getElementsByClassName('gRoute');
let allGreenTokenInside = true;
let allYellowTokenInside = true;
let allBlueTokenInside = true;
let allRedTokenInside = true;
let dice = document.getElementById('dice');
let diceInfoContainer = document.querySelector('.diceInfoContainer');
let diceNumberShow = document.getElementById('diceNumberShow');
let playerId = 1, k = 1;
let randomNumber = 0;

let Greenlist=[false,false,false,false],Yellowlist=[false,false,false,false],Bluelist=[false,false,false,false],Redlist=[false,false,false,false];
let allGreenTokenReachEndPoint=false,allYellowTokenReachEndPoint=false,allBlueTokenReachEndPoint=false,allRedTokenReachEndPoint=false;

dice.addEventListener('click', function () {
    randomNumber = 1 + Math.floor(Math.random() * 6);
    let htmlstr = '';

    if ((firstTokenGreenBtn.parentNode.className.includes('inside')) && (secendTokenGreenBtn.parentNode.className.includes('inside')) && (thirdTokenGreenBtn.parentNode.className.includes('inside')) && (forthTokenGreenBtn.parentNode.className.includes('inside'))) {
        allGreenTokenInside = true;
    }
    else {
        allGreenTokenInside = false;
    }

    if (playerId == 1) {

        disableToken(1);
        if (randomNumber == 1) {
            htmlstr = `
        <h2 class="player_name playerColor_1" id="">Player ${playerId}(Green)</h2>
        <img src="images/dice_1.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_1" id=''>Dice Result</h2>
        `
        }
        else if (randomNumber == 2) {
            htmlstr = `
        <h2 class="player_name playerColor_1" id="">Player ${playerId}(Green)</h2>
        <img src="images/dice_2.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_1" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 3) {
            htmlstr = `
            <h2 class="player_name playerColor_1" id="">Player ${playerId}(Green)</h2>
            <img src="images/dice_3.png" alt="" srcset="" id="dice_1" class="dice_img">
            <h2 class="player_name playerColor_1" id=''>Dice Result</h2>
            `
        }
        else if (randomNumber == 4) {
            htmlstr = `
        <h2 class="player_name playerColor_1" id="">Player ${playerId}(Green)</h2>
        <img src="images/dice_4.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_1" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 5) {
            htmlstr = `
        <h2 class="player_name playerColor_1" id="">Player ${playerId}(Green)</h2>
        <img src="images/dice_5.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_1" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 6) {
            htmlstr = `
        <h2 class="player_name playerColor_1" id="">Player ${playerId}(Green)</h2>
        <img src="images/dice_6.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_1" id=''>Dice Result</h2>
        `
        }
        if ((randomNumber != 6) && (allGreenTokenInside)) {
            dice.disabled = false;

        }
        else if (randomNumber == 6) {

            let resultnum=0;
            if (!firstTokenGreenBtn.parentNode.className.includes('inside')) {

                resultnum=resultant(firstTokenGreenBtn,"g",randomNumber);
                if(resultnum>57)
                {
                    firstTokenGreenBtn.disabled = true;
                }
                else{
                    firstTokenGreenBtn.disabled = false;
                }
            }
            else {
                firstTokenGreenBtn.disabled = false;
            }
            if(firstTokenGreenBtn.parentNode.id.includes('triangle'))
            {
                firstTokenGreenBtn.disabled = true;
            }

            
            if (!secendTokenGreenBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(secendTokenGreenBtn,"g",randomNumber);
                if(resultnum>57)
                {
                    secendTokenGreenBtn.disabled = true;
                }
                else{
                    secendTokenGreenBtn.disabled = false;
                }
            }else {
                secendTokenGreenBtn.disabled = false;
            }

            if(secendTokenGreenBtn.parentNode.id.includes('triangle'))
            {
                secendTokenGreenBtn.disabled = true;
            }


            if (!thirdTokenGreenBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(thirdTokenGreenBtn,"g",randomNumber);
                if(resultnum>57)
                {
                    thirdTokenGreenBtn.disabled = true;
                }
                else{
                    thirdTokenGreenBtn.disabled = false;
                }
            }
            else {
                thirdTokenGreenBtn.disabled = false;
            }

            if(thirdTokenGreenBtn.parentNode.id.includes('triangle'))
            {
                thirdTokenGreenBtn.disabled = true;
            }

            if (!forthTokenGreenBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(forthTokenGreenBtn,"g",randomNumber);
                if(resultnum>57)
                {
                    forthTokenGreenBtn.disabled = true;
                }
                else{
                    forthTokenGreenBtn.disabled = false;
                }
            }
            else {
                forthTokenGreenBtn.disabled = false;
            }
            if(forthTokenGreenBtn.parentNode.id.includes('triangle'))
            {
                forthTokenGreenBtn.disabled = true;
            }

            if((firstTokenGreenBtn.disabled||firstTokenGreenBtn.parentNode.id.includes('triangle'))&&(secendTokenGreenBtn.disabled||secendTokenGreenBtn.parentNode.id.includes('triangle'))&&(thirdTokenGreenBtn.disabled||thirdTokenGreenBtn.parentNode.id.includes('triangle'))&&(forthTokenGreenBtn.disabled||forthTokenGreenBtn.parentNode.id.includes('triangle')))
            {
                dice.disabled=false;
            }
            else{
                dice.disabled=true;
            }


        }
        else if ((randomNumber != 6) && (!allGreenTokenInside)) {
            let resultnum=0;
            if (!firstTokenGreenBtn.parentNode.className.includes('inside')) {

                resultnum=resultant(firstTokenGreenBtn,"g",randomNumber);
                if(resultnum>57)
                {
                    firstTokenGreenBtn.disabled = true;
                }
                else{
                    firstTokenGreenBtn.disabled = false;
                }
            }
            else {
                firstTokenGreenBtn.disabled = true;
            }

            if(firstTokenGreenBtn.parentNode.id.includes('triangle'))
            {
                firstTokenGreenBtn.disabled = true;
            }
            if (!secendTokenGreenBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(secendTokenGreenBtn,"g",randomNumber);
                if(resultnum>57)
                {
                    secendTokenGreenBtn.disabled = true;
                }
                else{
                    secendTokenGreenBtn.disabled = false;
                }
            }
            else {
                secendTokenGreenBtn.disabled = true;
            }


            if(secendTokenGreenBtn.parentNode.id.includes('triangle'))
            {
                secendTokenGreenBtn.disabled = true;
            }
            if (!thirdTokenGreenBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(thirdTokenGreenBtn,"g",randomNumber);
                if(resultnum>57)
                {
                    thirdTokenGreenBtn.disabled = true;
                }
                else{
                    thirdTokenGreenBtn.disabled = false;
                }
            }
            else {
                thirdTokenGreenBtn.disabled = true;
            }

            if(thirdTokenGreenBtn.parentNode.id.includes('triangle'))
            {
                thirdTokenGreenBtn.disabled = true;
            }
            if (!forthTokenGreenBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(forthTokenGreenBtn,"g",randomNumber);
                if(resultnum>57)
                {
                    forthTokenGreenBtn.disabled = true;
                }
                else{
                    forthTokenGreenBtn.disabled = false;
                }
            }
            else {
                forthTokenGreenBtn.disabled = true;
            }

            if(forthTokenGreenBtn.parentNode.id.includes('triangle'))
            {
                forthTokenGreenBtn.disabled = true;
            }

            if((firstTokenGreenBtn.disabled||firstTokenGreenBtn.parentNode.id.includes('triangle'))&&(secendTokenGreenBtn.disabled||secendTokenGreenBtn.parentNode.id.includes('triangle'))&&(thirdTokenGreenBtn.disabled||thirdTokenGreenBtn.parentNode.id.includes('triangle'))&&(forthTokenGreenBtn.disabled||forthTokenGreenBtn.parentNode.id.includes('triangle')))
            {
                dice.disabled=false;
            }
            else{
                dice.disabled=true;
            }
        }
        diceInfoContainer.innerHTML = htmlstr;


        k = 2;
    }
    else if (playerId == 2) {

        disableToken(2);
        if ((firstTokenYellowBtn.parentNode.className.includes('inside')) && (secendTokenYellowBtn.parentNode.className.includes('inside')) && (thirdTokenYellowBtn.parentNode.className.includes('inside')) && (forthTokenYellowBtn.parentNode.className.includes('inside'))) {
            allYellowTokenInside = true;
        }
        else {
            allYellowTokenInside = false;
        }
        if (randomNumber == 1) {
            htmlstr = `
        <h2 class="player_name playerColor_2" id="">Player ${playerId}(Yellow)</h2>
        <img src="images/dice_1.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_2" id=''>Dice Result</h2>
        `
        }
        else if (randomNumber == 2) {
            htmlstr = `
        <h2 class="player_name playerColor_2" id="">Player ${playerId}(Yellow)</h2>
        <img src="images/dice_2.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_2" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 3) {
            htmlstr = `
            <h2 class="player_name playerColor_2" id="">Player ${playerId}(Yellow)</h2>
            <img src="images/dice_3.png" alt="" srcset="" id="dice_1" class="dice_img">
            <h2 class="player_name playerColor_2" id=''>Dice Result</h2>
            `
        }
        else if (randomNumber == 4) {
            htmlstr = `
        <h2 class="player_name playerColor_2" id="">Player ${playerId}(Yellow)</h2>
        <img src="images/dice_4.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_2" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 5) {
            htmlstr = `
        <h2 class="player_name playerColor_2" id="">Player ${playerId}(Yellow)</h2>
        <img src="images/dice_5.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_2" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 6) {
            htmlstr = `
        <h2 class="player_name playerColor_2" id="">Player ${playerId}(Yellow)</h2>
        <img src="images/dice_6.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_2" id=''>Dice Result</h2>
        `

        }

        if ((randomNumber != 6) && (allYellowTokenInside)) {
            dice.disabled = false;

        }
        else if (randomNumber == 6) {

            let resultnum=0;
            if (!firstTokenYellowBtn.parentNode.className.includes('inside')) {

                resultnum=resultant(firstTokenYellowBtn,"y",randomNumber);
                if(resultnum>57)
                {
                    firstTokenYellowBtn.disabled = true;
                }
                else{
                    firstTokenYellowBtn.disabled = false;
                }
            }
            else {
                firstTokenYellowBtn.disabled = false;
            }

            if(firstTokenYellowBtn.parentNode.id.includes('triangle'))
            {
                firstTokenYellowBtn.disabled = true;
            }
            if (!secendTokenYellowBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(secendTokenYellowBtn,"y",randomNumber);
                if(resultnum>57)
                {
                    secendTokenYellowBtn.disabled = true;
                }
                else{
                    secendTokenYellowBtn.disabled = false;
                }
            }
            else {
                secendTokenYellowBtn.disabled = false;
            }


            if(secendTokenYellowBtn.parentNode.id.includes('triangle'))
            {
                secendTokenYellowBtn.disabled = true;
            }
            if (!thirdTokenYellowBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(thirdTokenYellowBtn,"y",randomNumber);
                if(resultnum>57)
                {
                    thirdTokenYellowBtn.disabled = true;
                }
                else{
                    thirdTokenYellowBtn.disabled = false;
                }
            }
            else {
                thirdTokenYellowBtn.disabled = false;
            }

            if(thirdTokenYellowBtn.parentNode.id.includes('triangle'))
            {
                thirdTokenYellowBtn.disabled = true;
            }
            if (!forthTokenYellowBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(forthTokenYellowBtn,"y",randomNumber);
                if(resultnum>57)
                {
                    forthTokenYellowBtn.disabled = true;
                }
                else{
                    forthTokenYellowBtn.disabled = false;
                }
            }
            else {
                forthTokenYellowBtn.disabled = false;
            }

            if(forthTokenYellowBtn.parentNode.id.includes('triangle'))
            {
                forthTokenYellowBtn.disabled = true;
            }

            if((firstTokenYellowBtn.disabled||firstTokenYellowBtn.parentNode.id.includes('triangle'))&&(secendTokenYellowBtn.disabled||secendTokenYellowBtn.parentNode.id.includes('triangle'))&&(thirdTokenYellowBtn.disabled||thirdTokenYellowBtn.parentNode.id.includes('triangle'))&&(forthTokenYellowBtn.disabled||forthTokenYellowBtn.parentNode.id.includes('triangle')))
            {
                dice.disabled=false;
            }
            else{
                dice.disabled=true;
            }


        }
        else if ((randomNumber != 6) && (!allYellowTokenInside)) {
            let resultnum=0;
            if (!firstTokenYellowBtn.parentNode.className.includes('inside')) {

                resultnum=resultant(firstTokenYellowBtn,"y",randomNumber);
                if(resultnum>57)
                {
                    firstTokenYellowBtn.disabled = true;
                }
                else{
                    firstTokenYellowBtn.disabled = false;
                }
            }
            else {
                firstTokenYellowBtn.disabled = true;
            }

            if(firstTokenYellowBtn.parentNode.id.includes('triangle'))
            {
                firstTokenYellowBtn.disabled = true;
            }
            if (!secendTokenYellowBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(secendTokenYellowBtn,"y",randomNumber);
                if(resultnum>57)
                {
                    secendTokenYellowBtn.disabled = true;
                }
                else{
                    secendTokenYellowBtn.disabled = false;
                }
            }
            else {
                secendTokenYellowBtn.disabled = true;
            }


            if(secendTokenYellowBtn.parentNode.id.includes('triangle'))
            {
                secendTokenYellowBtn.disabled = true;
            }
            if (!thirdTokenYellowBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(thirdTokenYellowBtn,"y",randomNumber);
                if(resultnum>57)
                {
                    thirdTokenYellowBtn.disabled = true;
                }
                else{
                    thirdTokenYellowBtn.disabled = false;
                }
            }
            else {
                thirdTokenYellowBtn.disabled = true;
            }

            if(thirdTokenYellowBtn.parentNode.id.includes('triangle'))
            {
                thirdTokenYellowBtn.disabled = true;
            }
            if (!forthTokenYellowBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(forthTokenYellowBtn,"y",randomNumber);
                if(resultnum>57)
                {
                    forthTokenYellowBtn.disabled = true;
                }
                else{
                    forthTokenYellowBtn.disabled = false;
                }
            }
            else {
                forthTokenYellowBtn.disabled = true;
            }

            if(forthTokenYellowBtn.parentNode.id.includes('triangle'))
            {
                forthTokenYellowBtn.disabled = true;
            }

            if((firstTokenYellowBtn.disabled||firstTokenYellowBtn.parentNode.id.includes('triangle'))&&(secendTokenYellowBtn.disabled||secendTokenYellowBtn.parentNode.id.includes('triangle'))&&(thirdTokenYellowBtn.disabled||thirdTokenYellowBtn.parentNode.id.includes('triangle'))&&(forthTokenYellowBtn.disabled||forthTokenYellowBtn.parentNode.id.includes('triangle')))
            {
                dice.disabled=false;
            }
            else{
                dice.disabled=true;
            }
        }
        diceInfoContainer.innerHTML = htmlstr;



        k = 3
    }
    else if (playerId == 3) {

        disableToken(3)

        if ((firstTokenBlueBtn.parentNode.className.includes('inside')) && (secendTokenBlueBtn.parentNode.className.includes('inside')) && (thirdTokenBlueBtn.parentNode.className.includes('inside')) && (forthTokenBlueBtn.parentNode.className.includes('inside'))) {
            allBlueTokenInside = true;
        }
        else {
            allBlueTokenInside = false;
        }

        if (randomNumber == 1) {
            htmlstr = `
        <h2 class="player_name playerColor_3" id="">Player ${playerId}(Blue)</h2>
        <img src="images/dice_1.png" alt=""  class="dice_img">
        <h2 class="player_name playerColor_3" id=''>Dice Result</h2>
        `
        }
        else if (randomNumber == 2) {
            htmlstr = `
        <h2 class="player_name playerColor_3" id="">Player ${playerId}(Blue)</h2>
        <img src="images/dice_2.png" alt=""  class="dice_img">
        <h2 class="player_name playerColor_3" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 3) {
            htmlstr = `
            <h2 class="player_name playerColor_3" id="">Player ${playerId}(Blue)</h2>
            <img src="images/dice_3.png" alt=""  class="dice_img">
            <h2 class="player_name playerColor_3" id=''>Dice Result</h2>
            `
        }
        else if (randomNumber == 4) {
            htmlstr = `
        <h2 class="player_name playerColor_3" id="">Player ${playerId}(Blue)</h2>
        <img src="images/dice_4.png" alt=""   class="dice_img">
        <h2 class="player_name playerColor_3" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 5) {
            htmlstr = `
        <h2 class="player_name playerColor_3" id="">Player ${playerId}(Blue)</h2>
        <img src="images/dice_5.png" alt=""  class="dice_img">
        <h2 class="player_name playerColor_3" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 6) {
            htmlstr = `
        <h2 class="player_name playerColor_3" id="">Player ${playerId}(Blue)</h2>
        <img src="images/dice_6.png" alt=""  class="dice_img">
        <h2 class="player_name playerColor_3" id=''>Dice Result</h2>
        `

        }


        if ((randomNumber != 6) && (allBlueTokenInside)) {
            dice.disabled = false;

        }
        else if (randomNumber == 6) {

            let resultnum=0;
            if (!firstTokenBlueBtn.parentNode.className.includes('inside')) {

                resultnum=resultant(firstTokenBlueBtn,"b",randomNumber);
                if(resultnum>57)
                {
                    firstTokenBlueBtn.disabled = true;
                }
                else{
                    firstTokenBlueBtn.disabled = false;
                }
            }
            else {
                firstTokenBlueBtn.disabled = false;
            }

            if(firstTokenBlueBtn.parentNode.id.includes('triangle'))
            {
                firstTokenBlueBtn.disabled = true;
            }
            if (!secendTokenBlueBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(secendTokenBlueBtn,"b",randomNumber);
                if(resultnum>57)
                {
                    secendTokenBlueBtn.disabled = true;
                }
                else{
                    secendTokenBlueBtn.disabled = false;
                }
            }
            else {
                secendTokenBlueBtn.disabled = false;
            }


            if(secendTokenBlueBtn.parentNode.id.includes('triangle'))
            {
                secendTokenBlueBtn.disabled = true;
            }
            if (!thirdTokenBlueBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(thirdTokenBlueBtn,"b",randomNumber);
                if(resultnum>57)
                {
                    thirdTokenBlueBtn.disabled = true;
                }
                else{
                    thirdTokenBlueBtn.disabled = false;
                }
            }
            else {
                thirdTokenBlueBtn.disabled = false;
            }

            if(thirdTokenBlueBtn.parentNode.id.includes('triangle'))
            {
                thirdTokenBlueBtn.disabled = true;
            }
            if (!forthTokenBlueBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(forthTokenBlueBtn,"b",randomNumber);
                if(resultnum>57)
                {
                    forthTokenBlueBtn.disabled = true;
                }
                else{
                    forthTokenBlueBtn.disabled = false;
                }
            }
            else {
                forthTokenBlueBtn.disabled = false;
            }

            if(forthTokenBlueBtn.parentNode.id.includes('triangle'))
            {
                forthTokenBlueBtn.disabled = true;
            }

            if((firstTokenBlueBtn.disabled||firstTokenBlueBtn.parentNode.id.includes('triangle'))&&(secendTokenBlueBtn.disabled||secendTokenBlueBtn.parentNode.id.includes('triangle'))&&(thirdTokenBlueBtn.disabled||thirdTokenBlueBtn.parentNode.id.includes('triangle'))&&(forthTokenBlueBtn.disabled||forthTokenBlueBtn.parentNode.id.includes('triangle')))
            {
                dice.disabled=false;
            }
            else{
                dice.disabled=true;
            }


        }
        else if ((randomNumber != 6) && (!allBlueTokenInside)) {
            let resultnum=0;
            if (!firstTokenBlueBtn.parentNode.className.includes('inside')) {

                resultnum=resultant(firstTokenBlueBtn,"b",randomNumber);
                if(resultnum>57)
                {
                    firstTokenBlueBtn.disabled = true;
                }
                else{
                    firstTokenBlueBtn.disabled = false;
                }
            }
            else {
                firstTokenBlueBtn.disabled = true;
            }

            if(firstTokenBlueBtn.parentNode.id.includes('triangle'))
            {
                firstTokenBlueBtn.disabled = true;
            }
            if (!secendTokenBlueBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(secendTokenBlueBtn,"b",randomNumber);
                if(resultnum>57)
                {
                    secendTokenBlueBtn.disabled = true;
                }
                else{
                    secendTokenBlueBtn.disabled = false;
                }
            }
            else {
                secendTokenBlueBtn.disabled = true;
            }


            if(secendTokenBlueBtn.parentNode.id.includes('triangle'))
            {
                secendTokenBlueBtn.disabled = true;
            }
            if (!thirdTokenBlueBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(thirdTokenBlueBtn,"b",randomNumber);
                if(resultnum>57)
                {
                    thirdTokenBlueBtn.disabled = true;
                }
                else{
                    thirdTokenBlueBtn.disabled = false;
                }
            }
            else {
                thirdTokenBlueBtn.disabled = true;
            }

            if(thirdTokenBlueBtn.parentNode.id.includes('triangle'))
            {
                thirdTokenBlueBtn.disabled = true;
            }
            if (!forthTokenBlueBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(forthTokenBlueBtn,"b",randomNumber);
                if(resultnum>57)
                {
                    forthTokenBlueBtn.disabled = true;
                }
                else{
                    forthTokenBlueBtn.disabled = false;
                }
            }
            else {
                forthTokenBlueBtn.disabled = true;
            }

            if(forthTokenBlueBtn.parentNode.id.includes('triangle'))
            {
                forthTokenBlueBtn.disabled = true;
            }

            if((firstTokenBlueBtn.disabled||firstTokenBlueBtn.parentNode.id.includes('triangle'))&&(secendTokenBlueBtn.disabled||secendTokenBlueBtn.parentNode.id.includes('triangle'))&&(thirdTokenBlueBtn.disabled||thirdTokenBlueBtn.parentNode.id.includes('triangle'))&&(forthTokenBlueBtn.disabled||forthTokenBlueBtn.parentNode.id.includes('triangle')))
            {
                dice.disabled=false;
            }
            else{
                dice.disabled=true;
            }
        }
        diceInfoContainer.innerHTML = htmlstr;


        k = 4

    }
    else if (playerId == 4) {

        disableToken(4)

        if ((firstTokenRedBtn.parentNode.className.includes('inside')) && (secendTokenRedBtn.parentNode.className.includes('inside')) && (thirdTokenRedBtn.parentNode.className.includes('inside')) && (forthTokenRedBtn.parentNode.className.includes('inside'))) {
            allRedTokenInside = true;
        }
        else {
            allRedTokenInside = false;
        }


        if (randomNumber == 1) {
            htmlstr = `
        <h2 class="player_name playerColor_4" id="">Player ${playerId}(Red)</h2>
        <img src="images/dice_1.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_4" id=''>Dice Result</h2>
        `
        }
        else if (randomNumber == 2) {
            htmlstr = `
        <h2 class="player_name playerColor_4" id="">Player ${playerId}(Red)</h2>
        <img src="images/dice_2.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_4" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 3) {
            htmlstr = `
            <h2 class="player_name playerColor_4" id="">Player ${playerId}(Red)</h2>
            <img src="images/dice_3.png" alt="" srcset="" id="dice_1" class="dice_img">
            <h2 class="player_name playerColor_4" id=''>Dice Result</h2>
            `
        }
        else if (randomNumber == 4) {
            htmlstr = `
        <h2 class="player_name playerColor_4" id="">Player ${playerId}(Red)</h2>
        <img src="images/dice_4.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_4" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 5) {
            htmlstr = `
        <h2 class="player_name playerColor_4" id="">Player ${playerId}(Red)</h2>
        <img src="images/dice_5.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_4" id=''>Dice Result</h2>
        `

        }
        else if (randomNumber == 6) {
            htmlstr = `
        <h2 class="player_name playerColor_4" id="">Player ${playerId}(Red)</h2>
        <img src="images/dice_6.png" alt="" srcset="" id="dice_1" class="dice_img">
        <h2 class="player_name playerColor_4" id=''>Dice Result</h2>
        `

        }

        if ((randomNumber != 6) && (allRedTokenInside)) {
            dice.disabled = false;

        }
        else if (randomNumber == 6) {

            let resultnum=0;
            if (!firstTokenRedBtn.parentNode.className.includes('inside')) {

                resultnum=resultant(firstTokenRedBtn,"r",randomNumber);
                if(resultnum>57)
                {
                    firstTokenRedBtn.disabled = true;
                }
                else{
                    firstTokenRedBtn.disabled = false;
                }
            }
            else {
                firstTokenRedBtn.disabled = false;
            }

            if(firstTokenRedBtn.parentNode.id.includes('triangle'))
            {
                firstTokenRedBtn.disabled = true;
            }
            if (!secendTokenRedBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(secendTokenRedBtn,"r",randomNumber);
                if(resultnum>57)
                {
                    secendTokenRedBtn.disabled = true;
                }
                else{
                    secendTokenRedBtn.disabled = false;
                }
            }
            else {
                secendTokenRedBtn.disabled = false;
            }


            if(secendTokenRedBtn.parentNode.id.includes('triangle'))
            {
                secendTokenRedBtn.disabled = true;
            }
            if (!thirdTokenRedBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(thirdTokenRedBtn,"r",randomNumber);
                if(resultnum>57)
                {
                    thirdTokenRedBtn.disabled = true;
                }
                else{
                    thirdTokenRedBtn.disabled = false;
                }
            }
            else {
                thirdTokenRedBtn.disabled = false;
            }

            if(thirdTokenRedBtn.parentNode.id.includes('triangle'))
            {
                thirdTokenRedBtn.disabled = true;
            }
            if (!forthTokenRedBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(forthTokenRedBtn,"r",randomNumber);
                if(resultnum>57)
                {
                    forthTokenRedBtn.disabled = true;
                }
                else{
                    forthTokenRedBtn.disabled = false;
                }
            }
            else {
                forthTokenRedBtn.disabled = false;
            }

            if(forthTokenRedBtn.parentNode.id.includes('triangle'))
            {
                forthTokenRedBtn.disabled = true;
            }

            if((firstTokenRedBtn.disabled||firstTokenRedBtn.parentNode.id.includes('triangle'))&&(secendTokenRedBtn.disabled||secendTokenRedBtn.parentNode.id.includes('triangle'))&&(thirdTokenRedBtn.disabled||thirdTokenRedBtn.parentNode.id.includes('triangle'))&&(forthTokenRedBtn.disabled||forthTokenRedBtn.parentNode.id.includes('triangle')))
            {
                dice.disabled=false;
            }
            else{
                dice.disabled=true;
            }


        }
        else if ((randomNumber != 6) && (!allRedTokenInside)) {
            let resultnum=0;
            if (!firstTokenRedBtn.parentNode.className.includes('inside')) {

                resultnum=resultant(firstTokenRedBtn,"r",randomNumber);
                if(resultnum>57)
                {
                    firstTokenRedBtn.disabled = true;
                }
                else{
                    firstTokenRedBtn.disabled = false;
                }
            }
            else {
                firstTokenRedBtn.disabled = true;
            }

            if(firstTokenRedBtn.parentNode.id.includes('triangle'))
            {
                firstTokenRedBtn.disabled = true;
            }
            if (!secendTokenRedBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(secendTokenRedBtn,"r",randomNumber);
                if(resultnum>57)
                {
                    secendTokenRedBtn.disabled = true;
                }
                else{
                    secendTokenRedBtn.disabled = false;
                }
            }
            else {
                secendTokenRedBtn.disabled = true;
            }


            if(secendTokenRedBtn.parentNode.id.includes('triangle'))
            {
                secendTokenRedBtn.disabled = true;
            }
            if (!thirdTokenRedBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(thirdTokenRedBtn,"r",randomNumber);
                if(resultnum>57)
                {
                    thirdTokenRedBtn.disabled = true;
                }
                else{
                    thirdTokenRedBtn.disabled = false;
                }
            }
            else {
                thirdTokenRedBtn.disabled = true;
            }

            if(thirdTokenRedBtn.parentNode.id.includes('triangle'))
            {
                thirdTokenRedBtn.disabled = true;
            }
            if (!forthTokenRedBtn.parentNode.className.includes('inside')) {
                resultnum=resultant(forthTokenRedBtn,"r",randomNumber);
                if(resultnum>57)
                {
                    forthTokenRedBtn.disabled = true;
                }
                else{
                    forthTokenRedBtn.disabled = false;
                }
            }
            else {
                forthTokenRedBtn.disabled = true;
            }

            if(forthTokenRedBtn.parentNode.id.includes('triangle'))
            {
                forthTokenRedBtn.disabled = true;
            }

            if((firstTokenRedBtn.disabled||firstTokenRedBtn.parentNode.id.includes('triangle'))&&(secendTokenRedBtn.disabled||secendTokenRedBtn.parentNode.id.includes('triangle'))&&(thirdTokenRedBtn.disabled||thirdTokenRedBtn.parentNode.id.includes('triangle'))&&(forthTokenRedBtn.disabled||forthTokenRedBtn.parentNode.id.includes('triangle')))
            {
                dice.disabled=false;
            }
            else{
                dice.disabled=true;
            }
        }

        diceInfoContainer.innerHTML = htmlstr;

        k = 1
    }
    playerId = k;

    initalization();
    console.log(firstTokenGreenBtn);
})

let i = 1
// Array.from(rRoute).forEach(element => {

//     console.log(element);
//     // console.log(element.classList[2].startsWith('y'));

//     element.classList.forEach(listelement => {
//         // console.log(listelement);
//         if (listelement.includes('r_')) {
//             let splitList = listelement.split('_');
//             element.innerHTML = `<p>${splitList[2]}</p>`;
//             console.log(splitList[2]);

//         }
//     });



//     i++;

// });




// Green Token React Functions
function firstTGFunc(e) {
    safeArea = false;

    // console.log("Cliked")
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;

    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber = 6;
        if (randomNumber == 6) {
            let td = document.querySelector('.g_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `GreentokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('g_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        // console.log('Target number is' + targetnum)
        Array.from(gRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`g_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `GreentokenItemMini`);
        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(Green)Safe Area ");
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Green) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Green')) && (element.id.includes('Blue'))) {
                            console.log('Blue inserting Green');
                            blueNum += 1;
                            console.log(element);
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Green')) && (element.id.includes('Red'))) {
                            console.log('Red inserting Green');
                            redNum += 1;
                            console.log(element);
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Green')) && (element.id.includes('Yellow'))) {
                            console.log('Yellow inserting Green');
                            yellowNum += 1;
                            console.log(element);
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (yellowNum > 1) {
                                reqElemY = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 Green inserting");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (redNum == 1) {
                        console.log("Red 1 Green inserting");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        console.log("Yellow 1 Green inserting");
                        let reqLoc = reqElemY.id.split('T');
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
                    }
    
    
    
                }
            }
            targetElement.appendChild(btnNode);
            e.target.remove();
           
        }

        initalization();
    }
    // playerId=1;

    if (randomNumber == 6) {
        playerId = 1;
    }

    let Resultsum=resultant(e.target,'g',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="firstTokenGreenBtn" class="GreentokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','firstTokenGreenBtn')
        newElement.setAttribute('class','GreentokenItemMini')

        triangleGreen.appendChild(newElement);
        e.target.remove();
        initalization();

        Greenlist[0]=true;
        playerId=1;

    }
    if(Greenlist[0]&&Greenlist[1]&&Greenlist[2]&&Greenlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Green is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenGreenBtn.disabled = true;
    secendTokenGreenBtn.disabled = true;
    thirdTokenGreenBtn.disabled = true;
    forthTokenGreenBtn.disabled = true;


}

function secendTGFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber = 6;
        if (randomNumber == 6) {
            let td = document.querySelector('.g_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `GreentokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();

            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('g_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(gRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`g_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `GreentokenItemMini`);

        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(Green)Safe Area ");
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Green) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Green')) && (element.id.includes('Blue'))) {
                            console.log('Blue inserting Green');
                            blueNum += 1;
                            console.log(element);
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Green')) && (element.id.includes('Red'))) {
                            console.log('Red inserting Green');
                            redNum += 1;
                            console.log(element);
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Green')) && (element.id.includes('Yellow'))) {
                            console.log('Yellow inserting Green');
                            yellowNum += 1;
                            console.log(element);
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (yellowNum > 1) {
                                reqElemY = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 Green inserting");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (redNum == 1) {
                        console.log("Red 1 Green inserting");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        console.log("Yellow 1 Green inserting");
                        let reqLoc = reqElemY.id.split('T');
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }

            targetElement.appendChild(btnNode);
            e.target.remove();
            
        }
        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 1;
    }
    let Resultsum=resultant(e.target,'g',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="secendTokenGreenBtn" class="GreentokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','secendTokenGreenBtn')
        newElement.setAttribute('class','GreentokenItemMini')

        triangleGreen.appendChild(newElement);
        e.target.remove();
        initalization();

        playerId = 1;
        Greenlist[1]=true;

    }
    if(Greenlist[0]&&Greenlist[1]&&Greenlist[2]&&Greenlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Green is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenGreenBtn.disabled = true;
    secendTokenGreenBtn.disabled = true;
    thirdTokenGreenBtn.disabled = true;
    forthTokenGreenBtn.disabled = true;
}

function thirdTGFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber = 6;
        if (randomNumber == 6) {
            let td = document.querySelector('.g_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `GreentokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();

            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('g_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(gRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`g_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `GreentokenItemMini`);

        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(Green)Safe Area ");
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Green) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Green')) && (element.id.includes('Blue'))) {
                            console.log('Blue inserting Green');
                            blueNum += 1;
                            console.log(element);
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Green')) && (element.id.includes('Red'))) {
                            console.log('Red inserting Green');
                            redNum += 1;
                            console.log(element);
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Green')) && (element.id.includes('Yellow'))) {
                            console.log('Yellow inserting Green');
                            yellowNum += 1;
                            console.log(element);
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (yellowNum > 1) {
                                reqElemY = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 Green inserting");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (redNum == 1) {
                        console.log("Red 1 Green inserting");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        console.log("Yellow 1 Green inserting");
                        let reqLoc = reqElemY.id.split('T');
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }

            targetElement.appendChild(btnNode);
            e.target.remove();
           
        }

        initalization();
    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 1;
    }

    let Resultsum=resultant(e.target,'g',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="thirdTokenGreenBtn" class="GreentokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','thirdTokenGreenBtn')
        newElement.setAttribute('class','GreentokenItemMini')

        triangleGreen.appendChild(newElement);
        e.target.remove();
        initalization();

        Greenlist[2]=true;

        playerId = 1;

    }
    if(Greenlist[0]&&Greenlist[1]&&Greenlist[2]&&Greenlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Green is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenGreenBtn.disabled = true;
    secendTokenGreenBtn.disabled = true;
    thirdTokenGreenBtn.disabled = true;
    forthTokenGreenBtn.disabled = true;
}

function forthTGFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber = 6;
        if (randomNumber == 6) {
            let td = document.querySelector('.g_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `GreentokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();

            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('g_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(gRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`g_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `GreentokenItemMini`);


        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(Green)Safe Area ");
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Green) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Green')) && (element.id.includes('Blue'))) {
                            console.log('Blue inserting Green');
                            blueNum += 1;
                            console.log(element);
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Green')) && (element.id.includes('Red'))) {
                            console.log('Red inserting Green');
                            redNum += 1;
                            console.log(element);
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Green')) && (element.id.includes('Yellow'))) {
                            console.log('Yellow inserting Green');
                            yellowNum += 1;
                            console.log(element);
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (yellowNum > 1) {
                                reqElemY = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 Green inserting");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (redNum == 1) {
                        console.log("Red 1 Green inserting");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        console.log("Yellow 1 Green inserting");
                        let reqLoc = reqElemY.id.split('T');
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 1;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }

            targetElement.appendChild(btnNode);
            e.target.remove();
            
        }
        initalization();
    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 1;
    }

    let Resultsum=resultant(e.target,'g',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="forthTokenGreenBtn" class="GreentokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','forthTokenGreenBtn')
        newElement.setAttribute('class','GreentokenItemMini')

        triangleGreen.appendChild(newElement);
        e.target.remove();
        initalization();

        Greenlist[3]=true;
        playerId = 1;

    }
    if(Greenlist[0]&&Greenlist[1]&&Greenlist[2]&&Greenlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Green is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenGreenBtn.disabled = true;
    secendTokenGreenBtn.disabled = true;
    thirdTokenGreenBtn.disabled = true;
    forthTokenGreenBtn.disabled = true;


}


// Yellow Token React Functions

function firstTYFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.y_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `YellowtokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('y_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(yRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`y_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `YellowtokenItemMini`);

        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(yellow)Safe Area ")
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Yellow) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Yellow')) && (element.id.includes('Blue'))) {
                            blueNum += 1;
                            console.log(element);
                            console.log('Blue inserting yellow');
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Yellow')) && (element.id.includes('Red'))) {
                            redNum += 1;
                            console.log(element);
                            console.log('Red inserting yellow');
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Yellow')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log('Green inserting yellow');
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 yellow inserting");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (redNum == 1) {
                        console.log("Red 1 Yellow inserTing");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        console.log("Red 1 Green inserTing");
                        let reqLoc = reqElemG.id.split('T');
                        Array.from(GreentokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }

            targetElement.appendChild(btnNode);
            e.target.remove();
           
        }

        initalization(); 
    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 2;
    }
    let Resultsum=resultant(e.target,'y',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="firstTokenYellowBtn" class="YellowtokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','firstTokenYellowBtn')
        newElement.setAttribute('class','YellowtokenItemMini')

        triangleYellow.appendChild(newElement);
        e.target.remove();
        initalization();

        Yellowlist[0]=true;
        playerId = 2;

    }
    if(Yellowlist[0]&&Yellowlist[1]&&Yellowlist[2]&&Yellowlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Yellow is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenYellowBtn.disabled = true;
    secendTokenYellowBtn.disabled = true;
    thirdTokenYellowBtn.disabled = true;
    forthTokenYellowBtn.disabled = true;
}

function secendTYFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);

        if (randomNumber == 6) {
            let td = document.querySelector('.y_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `YellowtokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('y_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(yRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`y_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `YellowtokenItemMini`);


        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(yellow)Safe Area ")
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Yellow) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Yellow')) && (element.id.includes('Blue'))) {
                            blueNum += 1;
                            console.log(element);
                            console.log('Blue inserting yellow');
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Yellow')) && (element.id.includes('Red'))) {
                            redNum += 1;
                            console.log(element);
                            console.log('Red inserting yellow');
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Yellow')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log('Green inserting yellow');
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 yellow inserting");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (redNum == 1) {
                        console.log("Red 1 Yellow inserTing");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        console.log("Red 1 Green inserTing");
                        let reqLoc = reqElemG.id.split('T');
                        Array.from(GreentokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
    
    
            targetElement.appendChild(btnNode);
            e.target.remove();

        }

        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 2;
    }

    let Resultsum=resultant(e.target,'y',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="secendTokenYellowBtn" class="YellowtokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','secendTokenYellowBtn')
        newElement.setAttribute('class','YellowtokenItemMini')

        triangleYellow.appendChild(newElement);
        e.target.remove();
        initalization();

        playerId = 2;

        Yellowlist[1]=true;

    }
    if(Yellowlist[0]&&Yellowlist[1]&&Yellowlist[2]&&Yellowlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Yellow is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenYellowBtn.disabled = true;
    secendTokenYellowBtn.disabled = true;
    thirdTokenYellowBtn.disabled = true;
    forthTokenYellowBtn.disabled = true;
}

function thirdTYFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('Third Token Yellow Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.y_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `YellowtokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('y_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(yRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`y_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `YellowtokenItemMini`);

        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(yellow)Safe Area ")
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Yellow) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Yellow')) && (element.id.includes('Blue'))) {
                            blueNum += 1;
                            console.log(element);
                            console.log('Blue inserting yellow');
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Yellow')) && (element.id.includes('Red'))) {
                            redNum += 1;
                            console.log(element);
                            console.log('Red inserting yellow');
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Yellow')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log('Green inserting yellow');
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 yellow inserting");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (redNum == 1) {
                        console.log("Red 1 Yellow inserTing");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        console.log("Red 1 Green inserTing");
                        let reqLoc = reqElemG.id.split('T');
                        Array.from(GreentokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
    
            targetElement.appendChild(btnNode);
            e.target.remove();
        }
        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 2;
    }

    let Resultsum=resultant(e.target,'y',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="thirdTokenYellowBtn" class="YellowtokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','thirdTokenYellowBtn')
        newElement.setAttribute('class','YellowtokenItemMini')

        triangleYellow.appendChild(newElement);
        e.target.remove();
        initalization();
        playerId = 2;

        Yellowlist[2]=true;

    }
    if(Yellowlist[0]&&Yellowlist[1]&&Yellowlist[2]&&Yellowlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Yellow is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenYellowBtn.disabled = true;
    secendTokenYellowBtn.disabled = true;
    thirdTokenYellowBtn.disabled = true;
    forthTokenYellowBtn.disabled = true;
}

function forthTYFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('Forth Token Yellow Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.y_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `YellowtokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('y_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(yRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`y_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `YellowtokenItemMini`);

        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(yellow)Safe Area ")
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Yellow) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Yellow')) && (element.id.includes('Blue'))) {
                            blueNum += 1;
                            console.log(element);
                            console.log('Blue inserting yellow');
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Yellow')) && (element.id.includes('Red'))) {
                            redNum += 1;
                            console.log(element);
                            console.log('Red inserting yellow');
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Yellow')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log('Green inserting yellow');
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 yellow inserting");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (redNum == 1) {
                        console.log("Red 1 Yellow inserTing");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        console.log("Red 1 Green inserTing");
                        let reqLoc = reqElemG.id.split('T');
                        Array.from(GreentokenCont).forEach(elementli => {
                            if (elementli.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                elementli.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 2;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
            targetElement.appendChild(btnNode);
            e.target.remove();
        }

        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 2;
    }

    let Resultsum=resultant(e.target,'y',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="forthTokenYellowBtn" class="YellowtokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','forthTokenYellowBtn')
        newElement.setAttribute('class','YellowtokenItemMini')

        triangleYellow.appendChild(newElement);
        e.target.remove();
        initalization();

        playerId = 2;

        Yellowlist[3]=true;

    }
    if(Yellowlist[0]&&Yellowlist[1]&&Yellowlist[2]&&Yellowlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Yellow is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenYellowBtn.disabled = true;
    secendTokenYellowBtn.disabled = true;
    thirdTokenYellowBtn.disabled = true;
    forthTokenYellowBtn.disabled = true;
}


// Red Token React Functions

function firstTRFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('First Token Red Btn clicked');
    console.log('Forth Token Red Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        //    console.log('Token is inside the container');
        //    console.log(randomNumber);
        //    randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.r_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `RedtokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('r_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(rRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`r_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `RedtokenItemMini`);


        if(targetElement!=null)
        {

            if (targetElement.className.includes('SaveArea')) {
                console.log("(Red)Safe Area ")
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Red) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Red')) && (element.id.includes('Blue'))) {
                            blueNum += 1;
                            console.log('Blue inserting Red');
                            console.log(element);
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Red')) && (element.id.includes('Yellow'))) {
                            yellowNum += 1;
                            console.log(element);
                            console.log('Yellow inserting Red');
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (redNum > 1) {
                                reqElemY = null;
                            }
                        }
                        else if ((!element.id.includes('Red')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log('Green inserting Red');
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 Red inserTing");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(element => {
    
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        console.log("Yellow 1 Red inserTing");
                        let reqLoc = reqElemY.id.split('T');
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        console.log("Green 1 Red inserTing");
                        let reqLoc = reqElemG.id.split('T');
                        Array.from(GreentokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
    
    
            targetElement.appendChild(btnNode);
            e.target.remove();
        }

        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 4;
    }

    let Resultsum=resultant(e.target,'r',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="firstTokenRedBtn" class="RedtokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','firstTokenRedBtn')
        newElement.setAttribute('class','RedtokenItemMini')

        triangleRed.appendChild(newElement);
        e.target.remove();
        initalization();
        playerId = 4;

        Redlist[0]=true;

    }
    if(Redlist[0]&&Redlist[1]&&Redlist[2]&&Redlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Red is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenRedBtn.disabled = true;
    secendTokenRedBtn.disabled = true;
    thirdTokenRedBtn.disabled = true;
    forthTokenRedBtn.disabled = true;
}

function secendTRFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('Forth Token Red Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.r_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `RedtokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('r_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(rRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`r_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `RedtokenItemMini`);

        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(Red)Safe Area ")
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Red) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Red')) && (element.id.includes('Blue'))) {
                            blueNum += 1;
                            console.log('Blue inserting Red');
                            console.log(element);
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Red')) && (element.id.includes('Yellow'))) {
                            yellowNum += 1;
                            console.log(element);
                            console.log('Yellow inserting Red');
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (redNum > 1) {
                                reqElemY = null;
                            }
                        }
                        else if ((!element.id.includes('Red')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log('Green inserting Red');
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 Red inserTing");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(element => {
    
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        console.log("Yellow 1 Red inserTing");
                        let reqLoc = reqElemY.id.split('T');
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        console.log("Green 1 Red inserTing");
                        let reqLoc = reqElemG.id.split('T');
                        Array.from(GreentokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
    
            targetElement.appendChild(btnNode);
            e.target.remove();

        }
        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 4;
    }

    let Resultsum=resultant(e.target,'r',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="secendTokenRedBtn" class="RedtokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','secendTokenRedBtn')
        newElement.setAttribute('class','RedtokenItemMini')

        triangleRed.appendChild(newElement);
        e.target.remove();
        initalization();
        playerId = 4;

        Redlist[1]=true;

    }
    if(Redlist[0]&&Redlist[1]&&Redlist[2]&&Redlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Red is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenRedBtn.disabled = true;
    secendTokenRedBtn.disabled = true;
    thirdTokenRedBtn.disabled = true;
    forthTokenRedBtn.disabled = true;
}

function thirdTRFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('Forth Token Red Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.r_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `RedtokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('r_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(rRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`r_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `RedtokenItemMini`);

        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(Red)Safe Area ")
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Red) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Red')) && (element.id.includes('Blue'))) {
                            blueNum += 1;
                            console.log('Blue inserting Red');
                            console.log(element);
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Red')) && (element.id.includes('Yellow'))) {
                            yellowNum += 1;
                            console.log(element);
                            console.log('Yellow inserting Red');
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (redNum > 1) {
                                reqElemY = null;
                            }
                        }
                        else if ((!element.id.includes('Red')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log('Green inserting Red');
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 Red inserTing");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(element => {
    
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        console.log("Yellow 1 Red inserTing");
                        let reqLoc = reqElemY.id.split('T');
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        console.log("Green 1 Red inserTing");
                        let reqLoc = reqElemG.id.split('T');
                        Array.from(GreentokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
            targetElement.appendChild(btnNode);
            e.target.remove();
        }


        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 4;
    }

    let Resultsum=resultant(e.target,'r',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="thirdTokenRedBtn" class="RedtokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','thirdTokenRedBtn')
        newElement.setAttribute('class','RedtokenItemMini')

        triangleRed.appendChild(newElement);
        e.target.remove();
        initalization();

        playerId = 4;
        Redlist[2]=true;

    }
    if(Redlist[0]&&Redlist[1]&&Redlist[2]&&Redlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Red is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenRedBtn.disabled = true;
    secendTokenRedBtn.disabled = true;
    thirdTokenRedBtn.disabled = true;
    forthTokenRedBtn.disabled = true;
}

function forthTRFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('Forth Token Red Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.r_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `RedtokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('r_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(rRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`r_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `RedtokenItemMini`);

        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(Red)Safe Area ")
                safeArea = true;
            }
            if (safeArea != true) {
                console.log('(Red) not safe area');
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Red')) && (element.id.includes('Blue'))) {
                            blueNum += 1;
                            console.log('Blue inserting Red');
                            console.log(element);
                            if (blueNum == 1) {
                                reqElemB = element;
                            }
                            else if (blueNum > 1) {
                                reqElemB = null;
                            }
                        }
                        else if ((!element.id.includes('Red')) && (element.id.includes('Yellow'))) {
                            yellowNum += 1;
                            console.log(element);
                            console.log('Yellow inserting Red');
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (redNum > 1) {
                                reqElemY = null;
                            }
                        }
                        else if ((!element.id.includes('Red')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log('Green inserting Red');
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (blueNum == 1) {
                        console.log("Blue 1 Red inserTing");
                        let reqLoc = reqElemB.id.split('T');
                        Array.from(BluetokenCont).forEach(element => {
    
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemB.id}`);
                                btnNodeReturn.setAttribute('class', `BluetokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemB.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        console.log("Yellow 1 Red inserTing");
                        let reqLoc = reqElemY.id.split('T');
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        console.log("Green 1 Red inserTing");
                        let reqLoc = reqElemG.id.split('T');
                        Array.from(GreentokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 4;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }

            targetElement.appendChild(btnNode);
            e.target.remove();
        }

        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 4;
    }

    let Resultsum=resultant(e.target,'r',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="forthTokenRedBtn" class="RedtokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','forthTokenRedBtn')
        newElement.setAttribute('class','RedtokenItemMini')

        triangleRed.appendChild(newElement);
        e.target.remove();
        initalization();
        playerId = 4;

        Redlist[3]=true;

    }
    if(Redlist[0]&&Redlist[1]&&Redlist[2]&&Redlist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Red is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenRedBtn.disabled = true;
    secendTokenRedBtn.disabled = true;
    thirdTokenRedBtn.disabled = true;
    forthTokenRedBtn.disabled = true;
}


// Blue Token React Functions


function firstTBFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('First Token Blue Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.b_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `BluetokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('b_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(bRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`b_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `BluetokenItemMini`);

        if(targetElement!=null)
        {

            if (targetElement.className.includes('SaveArea')) {
                console.log("(Blue) Safe Area");
                safeArea = true;
            }
            if (safeArea != true) {
                console.log("(Blue) Not Safe Area");
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Blue')) && (element.id.includes('Red'))) {
                            redNum += 1;
                            console.log(element);
                            console.log("blue inserting red");
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Blue')) && (element.id.includes('Yellow'))) {
                            yellowNum += 1;
                            console.log(element);
                            console.log("blue inserting yellow");
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (redNum > 1) {
                                reqElemY = null;
                            }
                        }
                        else if ((!element.id.includes('Blue')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log("blue inserting Green");
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (redNum == 1) {
                        console.log("red 1 inerting blue");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        let reqLoc = reqElemY.id.split('T');
                        console.log("Yellow 1 inserting blue");
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        let reqLoc = reqElemG.id.split('T');
                        console.log("green 1 inserting blue");
                        Array.from(GreentokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
    
            targetElement.appendChild(btnNode);
            e.target.remove();
        }
        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 3;
    }


    let Resultsum=resultant(e.target,'b',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="firstTokenBlueBtn" class="BluetokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','firstTokenBlueBtn')
        newElement.setAttribute('class','BluetokenItemMini')

        triangleBlue.appendChild(newElement);
        e.target.remove();
        initalization();

        playerId = 3;
        Bluelist[0]=true;

    }
    if(Bluelist[0]&&Bluelist[1]&&Bluelist[2]&&Bluelist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Blue is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenBlueBtn.disabled = true;
    secendTokenBlueBtn.disabled = true;
    thirdTokenBlueBtn.disabled = true;
    forthTokenBlueBtn.disabled = true;
}

function secendTBFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('Secend Token Blue Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.b_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `BluetokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('b_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(bRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`b_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `BluetokenItemMini`);

        if(targetElement!=null)
        {
            if (targetElement.className.includes('SaveArea')) {
                console.log("(Blue) Safe Area");
                safeArea = true;
            }
            if (safeArea != true) {
                console.log("(Blue) Not Safe Area");
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Blue')) && (element.id.includes('Red'))) {
                            redNum += 1;
                            console.log(element);
                            console.log("blue inserting red");
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Blue')) && (element.id.includes('Yellow'))) {
                            yellowNum += 1;
                            console.log(element);
                            console.log("blue inserting yellow");
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (redNum > 1) {
                                reqElemY = null;
                            }
                        }
                        else if ((!element.id.includes('Blue')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log("blue inserting Green");
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (redNum == 1) {
                        console.log("red 1 inerting blue");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        let reqLoc = reqElemY.id.split('T');
                        console.log("Yellow 1 inserting blue");
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        let reqLoc = reqElemG.id.split('T');
                        console.log("green 1 inserting blue");
                        Array.from(GreentokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
    
            targetElement.appendChild(btnNode);
            e.target.remove();
        }
        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 3;
    }

    let Resultsum=resultant(e.target,'b',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="secendTokenBlueBtn" class="BluetokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','secendTokenBlueBtn')
        newElement.setAttribute('class','BluetokenItemMini')

        triangleBlue.appendChild(newElement);
        e.target.remove();
        initalization();
        playerId = 3;

        Bluelist[1]=true;

    }
    if(Bluelist[0]&&Bluelist[1]&&Bluelist[2]&&Bluelist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Blue is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenBlueBtn.disabled = true;
    secendTokenBlueBtn.disabled = true;
    thirdTokenBlueBtn.disabled = true;
    forthTokenBlueBtn.disabled = true;
}

function thirdTBFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('Third Token Blue Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        if (randomNumber == 6) {
            let td = document.querySelector('.b_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `BluetokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('b_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(bRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`b_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `BluetokenItemMini`);

        if(targetElement!=null)
        {

            if (targetElement.className.includes('SaveArea')) {
                console.log("(Blue) Safe Area");
                safeArea = true;
            }
            if (safeArea != true) {
                console.log("(Blue) Not Safe Area");
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Blue')) && (element.id.includes('Red'))) {
                            redNum += 1;
                            console.log(element);
                            console.log("blue inserting red");
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Blue')) && (element.id.includes('Yellow'))) {
                            yellowNum += 1;
                            console.log(element);
                            console.log("blue inserting yellow");
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (redNum > 1) {
                                reqElemY = null;
                            }
                        }
                        else if ((!element.id.includes('Blue')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log("blue inserting Green");
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (redNum == 1) {
                        console.log("red 1 inerting blue");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        let reqLoc = reqElemY.id.split('T');
                        console.log("Yellow 1 inserting blue");
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        let reqLoc = reqElemG.id.split('T');
                        console.log("green 1 inserting blue");
                        Array.from(GreentokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
    
    
            targetElement.appendChild(btnNode);
            e.target.remove();
        }
        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 3;
    }

    let Resultsum=resultant(e.target,'b',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="thirdTokenBlueBtn" class="BluetokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','thirdTokenBlueBtn')
        newElement.setAttribute('class','BluetokenItemMini')

        triangleBlue.appendChild(newElement);
        e.target.remove();
        initalization();
        playerId = 3;

        Bluelist[2]=true;

    }
    if(Bluelist[0]&&Bluelist[1]&&Bluelist[2]&&Bluelist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Blue is Champion
        `
        setTimeout(pageReload(),3000);
    }
    dice.disabled = false;
    firstTokenBlueBtn.disabled = true;
    secendTokenBlueBtn.disabled = true;
    thirdTokenBlueBtn.disabled = true;
    forthTokenBlueBtn.disabled = true;
}

function forthTBFunc(e) {
    safeArea = false;
    blueNum = 0, redNum = 0, greenNum = 0, yellowNum = 0;
    console.log('Forth Token Blue Btn clicked');
    if (e.target.parentNode.className.includes('inside') == true) {
        // console.log('Token is inside the container');
        // console.log(randomNumber);
        // randomNumber=6;
        if (randomNumber == 6) {
            let td = document.querySelector('.b_route_1');
            let btnNode = document.createElement('button');
            btnNode.setAttribute('id', `${e.target.id}`);
            btnNode.setAttribute('class', `BluetokenItemMini`);

            td.appendChild(btnNode);
            e.target.remove();
            initalization();


            console.log(td)
        }
    }
    else {
        let num
        e.target.parentNode.classList.forEach(listelement => {
            // console.log(listelement);
            if (listelement.includes('b_')) {
                let splitList = listelement.split('_');
                num = parseInt(splitList[2]);
                // element.innerHTML = `<p>${splitList[2]}</p>`;
                // console.log(splitList[2]);

            }
        });

        let targetnum = num + randomNumber;
        let targetElement=null;
        // console.log("Target Element"+ targetElement)
        console.log('Target number is' + targetnum)
        Array.from(bRoute).forEach(element => {
            element.classList.forEach(listelement => {
                // console.log(listelement);
                if (listelement == (`b_route_${targetnum}`)) {
                    console.log(element);
                    targetElement = element
                }
            });
        })

        let btnNode = document.createElement('button');
        btnNode.setAttribute('id', `${e.target.id}`);
        btnNode.setAttribute('class', `BluetokenItemMini`);

        if(targetElement!=null)
        {

            if (targetElement.className.includes('SaveArea')) {
                console.log("(Blue) Safe Area");
                safeArea = true;
            }
            if (safeArea != true) {
                console.log("(Blue) Not Safe Area");
                if (targetElement.childElementCount >= 1) {
                    Array.from(targetElement.children).forEach(element => {
                        if ((!element.id.includes('Blue')) && (element.id.includes('Red'))) {
                            redNum += 1;
                            console.log(element);
                            console.log("blue inserting red");
                            if (redNum == 1) {
                                reqElemR = element;
                            }
                            else if (redNum > 1) {
                                reqElemR = null;
                            }
                        }
                        else if ((!element.id.includes('Blue')) && (element.id.includes('Yellow'))) {
                            yellowNum += 1;
                            console.log(element);
                            console.log("blue inserting yellow");
                            if (yellowNum == 1) {
                                reqElemY = element;
                            }
                            else if (redNum > 1) {
                                reqElemY = null;
                            }
                        }
                        else if ((!element.id.includes('Blue')) && (element.id.includes('Green'))) {
                            greenNum += 1;
                            console.log(element);
                            console.log("blue inserting Green");
                            if (greenNum == 1) {
                                reqElemG = element;
                            }
                            else if (greenNum > 1) {
                                reqElemG = null;
                            }
                        }
                    });
    
                    if (redNum == 1) {
                        console.log("red 1 inerting blue");
                        let reqLoc = reqElemR.id.split('T');
                        Array.from(RedtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemR.id}`);
                                btnNodeReturn.setAttribute('class', `RedtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemR.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (yellowNum == 1) {
                        let reqLoc = reqElemY.id.split('T');
                        console.log("Yellow 1 inserting blue");
                        Array.from(YellowtokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemY.id}`);
                                btnNodeReturn.setAttribute('class', `YellowtokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemY.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
    
                    }
                    else if (greenNum == 1) {
                        let reqLoc = reqElemG.id.split('T');
                        console.log("green 1 inserting blue");
                        Array.from(GreentokenCont).forEach(element => {
                            if (element.id.includes(`${reqLoc[0]}`)) {
                                let btnNodeReturn = document.createElement('button');
                                btnNodeReturn.setAttribute('id', `${reqElemG.id}`);
                                btnNodeReturn.setAttribute('class', `GreentokenItem`);
                                element.appendChild(btnNodeReturn);
                                btnNodeReturn.disabled=true;
                                reqElemG.remove();
                                playerId = 3;
                                initalization();
                            }
    
                        });
                    }
    
    
                }
            }
            targetElement.appendChild(btnNode);
            e.target.remove();
        }
        initalization();

    }
    // playerId=1;
    if (randomNumber == 6) {
        playerId = 3;
    }

    let Resultsum=resultant(e.target,'b',randomNumber);
    if(Resultsum==57)
    {
        let htmlString=`
        <button id="forthTokenBlueBtn" class="BluetokenItemMini">
        `
        let newElement=document.createElement('button');
        newElement.setAttribute('id','forthTokenBlueBtn')
        newElement.setAttribute('class','BluetokenItemMini')

        triangleBlue.appendChild(newElement);
        e.target.remove();
        initalization();
        playerId = 3;

        Bluelist[3]=true;

    }
    if(Bluelist[0]&&Bluelist[1]&&Bluelist[2]&&Bluelist[3])
    {
        console.log("Game Over:::::::");
        WinnerName.innerText=`
        Blue is Champion
        `
        setTimeout(pageReload(),3000);
    }

    dice.disabled = false;
    firstTokenBlueBtn.disabled = true;
    secendTokenBlueBtn.disabled = true;
    thirdTokenBlueBtn.disabled = true;
    forthTokenBlueBtn.disabled = true;
}
