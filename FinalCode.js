// Faction colors, for bg
let arrColorRed = [205,58,96,161,243,91,146,144,225,125];
let arrColorGreen = [111,102,173,161,233,195,59,92,34,125];
let arrColorBlue = [50,165,79,161,48,186,49,164,50,125];
// Factions names. Used for quickly referencing html elements in for loops
let arrFactions = ["Cat", "Bird", "Toast", "VB","Lizard", "Otter", "Mole", "Crow", "Rat", "Keeper"];
let arrFactionAmount = 10;

// These are a quick way for me to set the Top, Left, Width, and Height of a button (%). These have functionality and do something based off of their number in the list
let arrCatButton = [
    [3.5,36,16,5.5, 1],
    [3.5,47.5,18,3.5, 1],
    [3.5,51,36,4, 1],
    [4.5,55,8.5,3.5, 1],
    [4.5,58.5,15,5, 1],
    [4.5,63.5,30,5.25, 1],
    [4.5,68.75,35,7.25, 1],
    [4.5,76,34.5,7, 1],
    [3.5,89.5,39.5,4, 1],
    [45,28.5,51,42, 1],
    [46.25,34,49,4.5, 1],
    [46.25,38.5,49,10.5, 1],
    [46.25,49,49,10.5, 1],
    [46.25,59.5,49,10.5, 1],
    [4.5,65,42,6, 2],
    [4.5,71,42,9, 2],
    [4.5,80,42,8.5, 2],
    [4.5,88.5,42,8.5, 2],
    [19,13.5,18,12, 1],
    [37,13.5,34,12, 1]
];
let arrBirdButton = [
    [2.5,47,23,5, 1],
    [2.5,52,32,6, 1],
    [2.5,58,31,5, 1],
    [2.5,70,16,4, 1],
    [2.5,74,35,5.5, 1],
    [2.5,86,33.5,4.5, 1],
    [2.5,90.5,40,3.5, 1],
    [46,40,52,16, 1],
    [45.5,57,28.5,29.5, 1],
    [74.6,57,24,42.5, 1],
    [28,27,21,11, 1],
    [49,27,19,11, 1],
    [3,2,14.5,11.5, 1],
    [29.5,2,14.5,11.5, 1],
    [56.5,2,14.5,11.5, 1],
    [83.5,2,14.5,11.5, 1],
    [3,62,44,33, 2],
    [4,69,42,10, 2],
    [4,79,42,5, 2],
    [4,84,42,10, 2],
];
let arrToastButton=[
    [2.75,32.5,30,11, 1],
    [2.75,43.5,31,8, 1],
    [35.5,34.5,18,3.5, 1],
    [35.5,38,29,5.5, 1],
    [35.5,43.5,26.5,7, 1],
    [69,36.5,12,3, 1],
    [69,39.5,12,4.5, 1],
    [81,36.5,12,3, 1],
    [81,39.5,12,5.5, 1],
    [65.5,45.5,28,5.5, 1],
    [1.25,55.5,24,42.5, 1],
    [30,54,41,11.5, 1],
    [30,65.5,41,7, 1],
    [71,54,25.5,18.5, 1],
    [27,74.5,72,19.5, 1],
    [54,94,45,5.5, 1],
    [2.5,67,42,12, 2]
];
let arrVBButton=[
    [3.5,36,16,5.5, 1]
];
let arrLizardButton=[
    [3.5,36,16,5.5, 1]
];
let arrOtterButton=[
    [3.5,36,16,5.5, 1]
];
let arrMoleButton=[
    [3.5,36,16,5.5, 1]
];
let arrCrowButton=[
    [3.5,36,16,5.5, 1]
];
let arrRatButton=[
    [3.5,36,16,5.5, 1]
];
let arrKeeperButton=[
    [3.5,36,16,5.5, 1]
];

// These tell the buttons which ones they should highlight
let arrCatHighlight = [
    [10,11],
    [12],
    [3,4,5,6,7],
    [],
    [],
    [13],
    [9],
    [11],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [9],
    []
]
let arrBirdHighlight = [
    [],
    [12,13,14,15],
    [7],
    [7],
    [8,12,13,14,15],
    [7],
    [],
    [],
    [9,12,13,14,15],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];
let arrToastHighlight=[
    [10,11,14,15],
    [0,2,10,14],
    [14],
    [10],
    [13],
    [],
    [],
    [],
    [14],
    [],
    [0,1,3,14,15],
    [0,5,6,7,8],
    [11],
    [4,5,6,7,8],
    [],
    [],
    [],
    [],
    []
];

// Current number for faction. Is a float so I can adjust things fluidly rather than rigid
let factionCurrent = 0;
// Faction 1 and 2 are to show the current factions that factionCurrent is floating between
let faction1 = factionCurrent;
let faction2 = factionCurrent;
let factionProg = faction1%1;
let goal = factionCurrent;

let activeGif = 0;
function gifChoose(number){
// set the current gif# when a button is clicked
    if(number==activeGif){
        highlightButton(-1);
        activeGif = 0;
    }
    else{
        console.log(number-1+141,number-1);
        highlightButton(number-1);
        activeGif = number;
        showButtons(number-1);
    }
    
}
function highlightButton(number){
// highlight the current selected button
    for(let i=0; i<eval("arr"+arrFactions[Math.round(factionCurrent)]+"Button").length; i++){
        let Selected=document.getElementById("button"+arrFactions[Math.round(factionCurrent)]+i);
        if(i==number){
            Selected.style.backgroundColor="rgb(0,255,0,0.1)";
            Selected.addEventListener("mouseover", function(){Selected.style.backgroundColor="rgb(0,255,0,0.1)";})
            Selected.addEventListener("mouseleave", function(){Selected.style.backgroundColor="rgb(0,255,0,0.35)";})
        }
        else{
            Selected.style.backgroundColor="rgb(255,0,0,0)";
            Selected.addEventListener("mouseover", function(){Selected.style.backgroundColor="rgb(255,255,255,0.256)";})
            Selected.addEventListener("mouseleave", function(){Selected.style.backgroundColor="rgb(255,255,255,0)";})
        }
    }
}
function showButtons(number){
// pick buttons to highlight when other buttons are clicked (for related actions on the boards)
let currentListHighlight = eval("arr"+arrFactions[Math.round(factionCurrent)]+"Highlight")[number];
    for(let i=0; i<currentListHighlight.length; i++){
        let Selected=document.getElementById("button"+arrFactions[Math.round(factionCurrent)]+currentListHighlight[i]);

        Selected.style.backgroundColor="rgb(0,185,200,0.35)";

        Selected.addEventListener("mouseover", function(){Selected.style.backgroundColor="rgb(0,185,200,0.2)";});

        Selected.addEventListener("mouseleave", function(){Selected.style.backgroundColor="rgb(0,185,200,0.35)";});
    }
}
for(let i=0; i<arrFactionAmount; i++){
    // NME is the arrays above that correspond to each faction board's buttons
    let NME = eval("arr"+arrFactions[i]+"Button");
        // DivFaction stuff is for me to set the Faction board to the correct spot
        let DivFaction = document.getElementById("buttons"+arrFactions[i]);
        DivFaction.style.position = "absolute";
        DivFaction.style.top= "min(3vh,3vw)";
        DivFaction.style.left = "min(3vh,3vw)";
        DivFaction.style.maxWidth = "100vh";
        DivFaction.style.maxHeight= "77.096vh";
        DivFaction.style.width = "55vw";
        DivFaction.style.height = "42.4028vw";
    for(let j=0; j<NME.length; j++){
        // BTN is a way to create button children within each faction's div "page", that way it's easier for me to make buttons on the faction boards
        let BTN = document.createElement("button");
        BTN.setAttribute("id", "button"+arrFactions[i]+j);
        BTN.setAttribute("class", "buttons "+"buttons"+(NME[j])[4]+" "+arrFactions[i]);
        BTN.setAttribute("onclick", "gifChoose("+(j+1)+")");
        BTN.style.position = "absolute";
        BTN.style.top = (NME[j])[1]+"%";
        BTN.style.left = (NME[j])[0]+"%";
        BTN.style.width = (NME[j])[2]+"%";
        BTN.style.height = (NME[j])[3]+"%";
        document.getElementById("buttons"+arrFactions[i]).appendChild(BTN);
    }
}
changeBGC();
// if the array number is a decimal, multiply the floored color of the list to 1-"the decimal" and the ceiled color multiplied by the decimal (makes a smooth fade color to color) 
function adjustFactionColor(array){
    return (factionProg)*array[faction1]+(1-factionProg)*array[faction2];
}
        
function changeBGC(){
    // Set current background to this color
    let bgColorRed = adjustFactionColor(arrColorRed);
    let bgColorGreen = adjustFactionColor(arrColorGreen);
    let bgColorBlue = adjustFactionColor(arrColorBlue);
    // change the body background color
    document.getElementById("factionBody").style.backgroundColor = 'rgb('+bgColorRed+','+bgColorGreen+','+bgColorBlue+')';
}

function setFactionLocation(){
// sets the current div "page" to the correct one, showing the correct faction that needs displayed
    for(let j=0; j<arrFactionAmount; j++){
        let coolFaction = document.getElementById("div"+arrFactions[j]);
        coolFaction.style.transform = "translate("+100*(j-factionCurrent)+"vw,0vh)";
        
        if(faction2==j){
            coolFaction.style.opacity=(1-1.5*factionProg);
        }
        else{
            coolFaction.style.opacity=(1.5*factionProg);
        }
    }
}

let flipped=1;
function flipBoard(){
    if(flipped==1){
        // show front side of board
        flipped=2;
        gifChoose(0)
    }
    else{
        // show backside of board
        flipped=1;
        gifChoose(0)
    }
}
function setBoards(){
    for(let k=0; k<arrFactionAmount; k++){
        // using the flipped variable, sets whether or not the front or back should be seen
        let currentBoard = document.getElementById("board"+k);
        currentBoard.setAttribute("src", "Board"+arrFactions[k]+flipped+".png");
        let Class1 = document.getElementsByClassName("buttons"+flipped);
        let Class2 = document.getElementsByClassName("buttons"+(3-flipped));
        for(let i=0; i<Class1.length; i++){
            (Class1[i]).style.visibility="visible";
        }
        for(let i=0; i<Class2.length; i++){
            (Class2[i]).style.visibility="hidden";
        }
    }
}

function setButtonLocation(){
// set the locations of the buttons on the bottom of the page
    for(let i=0; i<arrFactionAmount; i++){
        let ButtonCurrentFaction = document.getElementById("button" + i);
        if(i==faction1){
            ButtonCurrentFaction.style.bottom = 0.5+5*factionProg+"vh";
            ButtonCurrentFaction.style.height = 4+2*factionProg+"vh";
        }
        else{
            ButtonCurrentFaction.style.bottom = 0.5+"vh";
            ButtonCurrentFaction.style.height = 4+"vh";
        }
        if(i==faction2){
            ButtonCurrentFaction.style.bottom = 0.5+5*(1-factionProg)+"vh";
            ButtonCurrentFaction.style.height = 4+2*(1-factionProg)+"vh";
        }
        ButtonCurrentFaction.style.left = 50+4*(i-factionCurrent)+"vw";
    }
}
for(let o=0; o<arrFactionAmount; o++){
    // sets the background of the mini buttons on the bottom
    let c1 = arrColorRed[o];
    let c2 = arrColorGreen[o];
    let c3 = arrColorBlue[o];
    let C4 = document.getElementById("button"+o);
    C4.style.backgroundColor = 'rgb('+0.85*c1+','+0.85*c2+','+0.85*c3+')';
    C4.addEventListener("mouseover", function(){C4.style.backgroundColor="rgb("+1.2*c1+","+1.2*c2+","+1.2*c3+")";})
    C4.addEventListener("mouseleave", function(){C4.style.backgroundColor='rgb('+0.85*c1+','+0.85*c2+','+0.85*c3+')';})
}
// Faction target sets the current "goal" faction of a specific number
function factionTarget(number){
    goal=number;
    gifChoose(0)
    }

// a global time interval. Useful for stuff like whether or not stuff could be visible and of course the background color
setInterval(function(){
    if(Math.abs(goal - factionCurrent) <= 0.0015){
        // locks the div into place if it's close enough
        faction1 = goal;
        factionCurrent = faction1;
    }
    else{
        let thing = 0.94+0.005*Math.abs(goal-factionCurrent);
        factionCurrent = thing*factionCurrent+(1-thing)*goal;
    }
    // makes faction1 go to the top if factionCurrent is below 0,
    if(factionCurrent < 0){
        faction1 = arrFactionAmount + factionCurrent;
    }
    else{
        faction1 = factionCurrent%arrFactionAmount;
    }
    factionProg = faction1%1;
    faction2 = Math.floor(faction1);
    faction1 = Math.ceil(faction1)%arrFactionAmount;
    // functions that change stuff based on factionCurrent, faction1, and faction2
    changeBGC();
    setButtonLocation();
    setFactionLocation();
    setBoards();
    // 
    if(activeGif>0){
        document.getElementById("Ginfo").style.visibility="visible";
        document.getElementById("example").setAttribute("src", ["Board","Character","Symbol"][activeGif-1]+arrFactions[Math.round(factionCurrent)]+["1","",""][activeGif-1]+".png");
        document.getElementById("description").textContent= "this is awesome because it is "+arrFactions[Math.round(factionCurrent)]+"'s button #"+activeGif;
    }
    else{
        document.getElementById("Ginfo").style.visibility="hidden";
    }
},1000/60);
