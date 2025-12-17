// Faction colors, for bg
let arrColorRed = [205,58]//,96,161,243,91,146,144,225,125];
let arrColorGreen = [111,102]//,173,161,233,195,59,92,34,125];
let arrColorBlue = [50,165]//,79,161,48,186,49,164,50,125];
// Factions names. Used for quickly referencing html elements in for loops
let arrFactions = ["Cat", "Bird"]//, "Toast", "VB","Lizard", "Otter", "Mole", "Crow", "Rat", "Keeper"];
let arrFactionAmount =2;

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

// These are the descriptions for every button for each faction
let arrCatDesc=[
    "You place wood tokens on the board at every sawmill. Wood on the board is used to make buildings, and their cost is determined by their spot on the building track",
    "You may craft cards in your hand if you want. The workshops you have on the board count as crafting pieces towards their own clearingsuit",
    "Take any of the actions in any order with a limit of 3 + the number of Bird cards you spend to take additional actions. (Ex. Build->March->Battle-> spend a bird card for it's suit-> Recruit ) ",
    "Choose an enemy in a clearing with Marquise de Cat warriors and start a battle. Attacker takes the higher roll while the defender takes lower",
    "You can take up to two standard move actions. They do not have to be the same warrior, and if you wanted, you could choose to move only once instead of twice",
    "This spawns a new Cat Warrior at every recruiter building out on the field. This can only be done once per turn.",
    "If you rule the clearing, you can build. You spend it's cost in wood currently on the map. The clearings with wood need to be connected by any number of clearings you rule. The cost of each building that you want to build is determined by the leftmost building of each track and the cost at the top. (Ex. if you have no sawmills, sawmills cost 0. if you have 5 Sawmills, the last one costs 4)",
    "You spend a card for it's suit and then place a wood at a matching sawmill.",
    "Draw cards. At 3 Recruiters on the map and 5 recruiters on the map there is a card symbol that is obscured unless you have the correct amount built. These card symbols add to your card draw at the end of your turn. If you have more than 5 cards, discard down to 5 cards.",
    "This is your building track. This is THE most important thing on the board, as placing buildings directly allows for scoring points. Each building does something different for you",
    "This is the wood cost of the buildings below. 0 buildings of a type costs 0 wood to build that building, but building the last building on a track would cost 4.",
    "These are sawmills. These are your fundamental building, as more sawmills build allows for more places wood gets spawned at birdsong and suits to overwork with. The more sawmills you have, the faster you can get all of your buildings down and score points",
    "These are workshops. The more workshops you have, the more you can craft at the start of your daylight. You shouldn't focus on crafting, as it takes up building slots for things like sawmills and recruiters, but if you can score a lot of points from crafting, it may just be worth it.",
    "These are Recruiters. These directly increase how many Cat Warriors are spawned when you take the Recruit action in daylight. Late-game, it gets outclassed by field hospitals, but it takes recruiters to get your full supply of warriors on the board to make Field Hospitals good.",
    "Your Keep token is arguably your most important building. It means people cannot build in your clearing, as well as that it allows for fantastic Late-Game recruiting.",
    "You start out the game with influence over the entire board. You get a Cat in almost every single clearing, which allows you to build pretty much wherever. Unfortunately, 1 cat is just slightly weak, so be careful.",
    "You start the game with 1 of each type of building, which allows your turn 1 to be used for building",
    "Fill your build track on the front side with your buildings,",
    "Nobody else can build in the clearing with the Keep, only you can build while the Keep is on the map",
    "Whenever you lose warriors in battle (whether as attacker or defender), you can spend a card to spawn the lost warriors at your keep. This is useful for not only reinforcing your keep, but also making sure you don't have to spend precious actions on recruiting"
]
let arrBirdDesc=[
    "This ensures you have a card to add to the decree",
    "Add a card to 1 of the columns above. You are REQUIRED to take EVERY action in the Decree. If you cannot you will Turmoil and lose your current leader. Bird cards are extremely valuable (because they count as every kind of suit), so you can only add 1 per turn.",
    "This ensures that you can respawn if your Roosts get board wiped",
    "Eyrie crafting is very poweful, but be careful of disdain for trade and whether it is worth it",
    "You resolve the Decree. You are required to take every action, or else you Turmoil: you lose points, lose your decree, lose your current leader, and skip the rest of your actions that you would have taken.",
    "For every Roost you have on the board, you automatically score. So if you have 2 Roosts, you only score 1... but if you have all out, you score 5 points",
    "The more Roosts you have on the board means you draw more at the end of your turn. If you have less than 3 Roosts, you only draw 1. If you have 3, you draw 2. If you have 6, you draw 3. Then if you have more than 5 cards, you discard down to 5.",
    "This is your Roost track. It is the most important thing on your board. It allows for better crafting, card draw, recruiting, and best of all, scoring.",
    "This is Turmoil. When you cannot take an action in the Decree, you perform these actions. It is important to make sure the cards you add to your decree are going to make sure you don't Turmoil",
    "You have 4 Eyrie Leaders. You can only have 1 at a time and each one has a different ability and different starting Bird Cards (Loyal Viziers) in the decree. You can see these leaders in the gif below",
    "If you tie an opponent for Rule, you automatically rule. This is good for building",
    "Your Disdain for Trade is a way to weaken your powerful crafting. The way you get around this is by using the Builder as your leader",
    "This is the Recruit column. You Recruit 1 Bird Warrior at a matching Roost for every suit card you have here (Ex. Mouse Card, you recruit at a mouse suited Roost). The more cards you have here, the more you will recruit to complete the other actions in the Decree.",
    "Thie is the Move column. You take a move action from each suit that is in the decree (Ex. Rabbit card, you move FROM Rabbit). You get to position your troops for the next two columns, battling and moving. You can also use the move column to reinforce roosts you want to protect",
    "This is the Battle column. You do a battle in each suit clearing (Ex. Fox Card, you do a Battle in a Fox clearing). This can be used to slow down your enemies or clean up valuable buildings on the board",
    "This is the Build column. You build in each suit clearing that you don't have a Roost already and that you rule (Ex. Mouse Card, Build in a Mouse clearing that does not already have a Roost). This powers you up for next turn, since more Roosts is better for you.",
    "Pick a corner clearing. If someone has already setup (Marquise de Cat has setup A), do it diagonally opposite of them. Then you place 1 Roost and 6 Warriors there.",
    "Set all leaders face up beside your board, pick one. This is your starting leader. Keep in mind that each leader starts with two Bird cards in the decree that you need to complete. (Loyal Viziers)",
    "You flip your board, place your chosen leader on the leader slot, then place the Loyal Viziers in the columns that your leader has on it's card. Then you can fill your Roost track from right to left.",
]
// Current number for faction. Is a float so I can adjust things fluidly rather than rigid
let factionCurrent = 0;
let awesomenumber = window.location.href.length;
let Letters="";
let goal = factionCurrent;
for(let i=0; i<15; i++){
    awesomenumber-=1;
    if(window.location.href[awesomenumber]=="#"){
        for(let o=1; o<i-2; o++){
            Letters=window.location.href[window.location.href.length-o]+Letters;
        }
        i=999
        for(let i=0; i<arrFactionAmount; i++){
            if(arrFactions[i]==Letters){
                factionCurrent=i
                goal=factionCurrent
            }
        }
    }
}
// Faction 1 and 2 are to show the current factions that factionCurrent is floating between
let faction1 = factionCurrent;
let faction2 = factionCurrent;
let factionProg = faction1%1;

let activeGif = 0;
let gifChange=0
function gifChoose(number){
// set the current gif# when a button is clicked
document.getElementById("example").setAttribute("src", arrFactions[Math.round(factionCurrent)]+activeGif+".gif");
    if(number==activeGif){
        highlightButton(-1);
        activeGif = 0;
    }
    else{
        highlightButton(number-1);
        activeGif = number;
        showButtons(number-1);
        document.getElementById("example").setAttribute("src", arrFactions[Math.round(factionCurrent)]+activeGif+".gif");
        document.getElementById("Ginfo").style.visibility="visible";
        document.getElementById("description").textContent= eval("arr"+arrFactions[Math.round(factionCurrent)]+"Desc")[activeGif-1];
    }
    gifChange=0
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
    if(activeGif==0){
        document.getElementById("Ginfo").style.visibility="hidden";
        gifChange=0
    }
},1000/60);
