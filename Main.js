// All of these lists are for the various rules that show up
let arrRules1=[
"Golden Rules",
"Key Concepts", 
"Victory", 
"Key Actions", 
"Setup"];
let arrRules2=[
["This section gives answers to technical, detailed questions. You do not need to read it when first learning.", "Rule Conflicts", "Public and Private Information", "Negotiation and Deals", "Game Structure"],
["", "Cards", "Clearings and Paths", "Rivers", "Forests", "Rule"],
["", "How to Win", "Scoring Victory Points", "Dominance Cards"],
["", "Craft", "Move", "Battle"],
["If any players are new to the game, use the Standard Setup (5.1) If everyone has played and you want more variety, use the Advanced Setup (Appendix A). If you want to play with five or more factions that would start in corner clearings, you must use the Advanced Setup.", "Standard Setup"]
];
let arrRules3=[
[
    ["", "Precedence", "Use of Cannot", "Unclear Resolutions and Choices"], 
    ["", "Hands", "Discard"], 
    ["", "Agreements", "Cards"], 
    ["", "Turn Structure", "Interrupts"], 
    ["", "Limits", "Starting Faction", "Piece Ownership", "Piece Manipulation", "Use of Force"]
],
[
    ["You draw cards from the top of the shared deck, and discard to a shared discard pile. If the deck is ever empty, shuffle the discard pile immediately to form a new deck. Each card has a suit: bird, fox, rabbit, or mouse. Most cards also have an effect you can craft (4.1). ", "Birds are Wild", "Ambush Cards", "Dominance Cards"], 
    ["The map of the Woodland is composed of many clearings linked by paths.","Adjacency", "Suit", "Slots", "Ruins"], 
    ["Many clearings are linked by rivers. (Rivers are not paths, but can be treated as paths if explicitly instructed. Rivers do not divide clearings or forests.)"], 
    ["Areas on the map enclosed by printed paths and clearings are called forests.", "Adjacency"], 
    ["A player rules a clearing if they have more total warriors and buildings in it than each other player. (Tokens and pawns do not contribute to rule.) If there is a tie between players in a clearing, no one rules it."]
],
[
    ["The first player to reach 30 victory points immediately wins the game. If multiple players reach 30 or more victory points simultaneously, the player taking the current turn wins."], 
    ["Each faction has a unique way to score victory points, but any faction can score victory points as follows.", "Removing Buildings and Tokens", "Crafting Items"], 
    ["The deck has four dominance cards, which let you win the game without scoring 30 victory points.", "Activating", "Activated Cards", "Using Dominance Cards", "Taking Available Cards"]
],
[
    ["You can craft most cards from your hand to gain an immediate or persistent effect.", "Cost", "Immediate Effects", "Persistent Effects", "No Duplicates"], 
    ["When you move, take any number (more than zero) of your warriors and pawns from one clearing and move them on a linking path (2.2) to one adjacent clearing.", "You Must Rule", "No Movement Limits"],
    ["When you battle, choose a clearing with any number of your warriors and pawns as the clearing of battle. You are the attacker. Choose an enemy in the clearing of battle to be the defender.", "Step 1: Defender May Ambush", "Step 2: Roll Dice", "Step 3: Use Effects", "Step 4: Deal Hits"]
],
[
    ["If any players are new to the game, use the Standard Setup (5.1) If everyone has played and you want more variety, use the Advanced Setup (Appendix A). If you want to play with five or more factions that would start in corner clearings, you must use the Advanced Setup.", "Step 1: Assign Factions and Starting Player", "Step 2: Place Score Markers", "Step 3: Draw Starting Hands", "Step 4: Place Ruins", "Step 5: Form Items Supply", "Step 6: Gather Other Pieces", "Step 7: Set Up Factions"]
]];
let arrRules4 = [

    [
        ["If a card conflicts with the Law, follow the card. If the Learning to Play guide conflicts with the Law, follow the Law. If you can follow both a general rule and a faction or hireling rule, follow both; if you cannot, follow the faction or hireling rule.", "The term cannot is absolute. It cannot be overridden unless explicitly instructed.", "Whenever it is unclear what order simultaneous effects should resolve in, or which player should make a decision, the player taking their turn chooses."], 
        ["Players may only show or reveal cards in their hand if explicitly instructed, but the number of cards in their hand is public information.", "The discard pile can be searched and inspected at any time."], 
        ["Each player's turn has three phases: Birdsong, Daylight, and Evening. Anything that says “at start of” a phase happens before everything else in the phase, and anything that says “at end of” happens after everything else in the phase but before the start of the next phase, if any. After a player ends Evening, the next clockwise player begins their turn. Play continues until one player has won the game (3.1).", "You cannot interrupt an action (including a compound action such as the Marquise's March), ability (such as the Corvids' Exposure), or persistent effect (such as the Eyrie Emigre card) with another effect unless it explicitly allows it. (For example, the Armorers card says it is used “In battle...”)."],
        ["Pieces are limited by the contents of the game. Do not use proxy pieces if you run out.", "Each player owns the faction they choose in setup (5) and the pieces listed on the back of its faction board except for items. Generically, these are called faction pieces or similar. Specifically, these are called [faction name] pieces. (For example, “your faction warriors” and “warriors of your faction” and “Marquise warriors” all refer to the orange wooden cat-shaped warriors.)", "The ownership of faction pieces cannot change. (For example, the Marquise cannot use Field Hospitals on Riverfolk mercenaries or hirelings, since these are not Marquise warriors.)", "Pieces are placed and removed as defined in the Glossary (G.1.19, G.1.22). If you are prompted to place, take, or remove pieces but you cannot do so fully, you must place, take, or remove the maximum number possible. (This does not let you avoid costs or prerequisites. You just cannot do less than the most you can.) If multiple pieces are removed simultaneously and that would trigger effects, remove all pieces before triggering effects.", "Some effects let you force a player or their pieces to act. Resolve this exactly as if that player were choosing to do this, as limited by the effect. (For example, if you force the Eyrie to move warriors, they benefit from Lords of the Forest.)"],
    ],
    [
        ["You can treat any bird card as a card of another suit, even if you must spend, take, or give multiple cards of the same suit. If you are prompted to discard or give cards of non-bird suits, you must treat your bird cards as a prompted suit. If you are prompted to spend, discard, take, or give a bird card, you cannot substitute a card of another suit.", "There are five ambush cards: one mouse, one rabbit, one fox, and two birds. You may spend an ambush card for its suit, but it does not have a crafted effect. You may also play one in battle to deal hits (4.3.1).", "There are four dominance cards matching the four suits. You may spend a dominance card for its suit, but it cannot be crafted. You may also play one to permanently change your victory condition (3.3)."],
        ["A clearing is adjacent to all other clearings linked to it by a path.", "Each clearing has a suit: mouse, rabbit, or fox.", "Each clearing has a number of building slots (white boxes). Whenever you place a building, it fills an open slot. You cannot place a building in a clearing with no open slots.", "Slots marked with a small “R” begin the game filled with ruins. Ruins cannot be removed unless explicitly instructed (such as by the Vagabond's Explore action)"],
        ["gaming"],
        [" A forest is adjacent to all clearings that touch it without crossing a printed path, and it is adjacent to all forests that are separated by only one printed path."],
        ["cool text", "cooler text"],
    ],
    [
        ["very cool very awesome text"],
        ["Whenever you remove an enemy's building or token, you score one victory point.", "Whenever you craft an item (4.1), score the victory points listed on the card."]
        ["During your Daylight, if you have at least 10 victory points, you may activate a dominance card in your hand by placing it in your play area. Remove your score marker from the score track. You can no longer score victory points. For Mouse, Rabbit, or Fox Dominance, you win the game immediately if you rule three clearings of the suit matching the activated dominance card at the start of your Birdsong. For Bird Dominance, you win the game immediately if you rule two clearings in opposite corners at the start of your Birdsong.", "An activated dominance card does not count against your hand limit, and it cannot be removed from play. You cannot replace an activated dominance card with a different one.", " A dominance card can be spent for its suit. Anytime a dominance card would be placed in the discard pile, instead place it near the map to show it is available to be taken."]
    ],
    [
        ["To craft a card, you must activate crafting pieces of the suits listed in the card's bottom-left corner. (A faction's crafting piece is listed in its Crafting section.) A crafting piece's suit matches its clearing. Each crafting piece may be activated only once per turn. A three-color question mark denotes a crafting piece of any suit.", "When you craft an immediate effect (paper box), resolve its effect and then discard the card. If it shows an item, take the matching item from the item supply on the map and place it in the Crafted Items box on your faction board. If the card lists an item not in the item supply, the card cannot be crafted.", "When you craft a persistent effect (stone box), place it in your play area. You may use the effect described on the card.", "You cannot craft a persistent effect if you have an identical one in your play area."]
        ["To take a move, you must rule the origin clearing, destination clearing, or both.", "A given piece can be moved any number of times per turn. If you are prompted to take multiple moves, you may move the same or separate groups of warriors."], 
        ["The defender may play one ambush card matching the clearing of battle. If so, the attacker may also play an ambush card matching the clearing of the battle. If they do, the defender and attacker each discard their ambush cards. If the attacker does not foil the defender's ambush, the defender deals two hits immediately. Then, the defender discards the ambush card. If no attacking warriors or pawns remain, end the battle immediately",
        'Roll both dice. The attacker will deal hits equal to the higher roll, and the defender will deal hits equal to the lower roll. If the rolls are equal, attacker and defender will deal the same number of hits. (The use of "will" here reflects that hits are not dealt until step 4.) The maximum hits you can deal from rolling equals the number of your warriors in the clearing of battle, whether you are the attacker or defender.', 
        "The attacker and defender may use optional effects (such as the Brutal Tactics card) that affect battle. If both want to use effects, the attacker chooses who uses them first (1.1.3). Many effects will deal extra hits, which are not limited by the number of warriors in the clearing of battle. If the defender has no warriors in the clearing of battle, the attacker will deal an extra hit.", 
        "Each hit that a side deals removes one piece of the other side from the clearing of battle. (You score one victory point per enemy building or token removed.) The side taking hits chooses the order in which their own pieces are removed, but all of their warriors there must be removed before any of their buildings or tokens there can be removed; they also choose the order of any effects triggered by their pieces being removed."]
    ],
    [
        ["Assign one faction to each player in any way. Determine the starting player and seating order randomly. Each player takes their chosen faction board and the pieces listed on its back.", "Each player places their score marker on “0” on the score track.", "If you are playing with two players, remove all four dominance cards from the deck. Shuffle the deck. Each player draws three cards.", "Place a ruin in each slot on the map marked with an “R” (four in total).", "Place these items on the matching spaces of the item supply near the top of the map: 2 Boots, 2 Bags, 1 Crossbow, 1 Hammer, 2 Swords, 2 Root Teas, 2 Coins", "Hand out the 16 faction overview cards as desired, and place the two dice near the map.", "In setup order (A, B, C, etc.), each player follows their faction’s setup instructions, listed in their rules section and on the back of their faction board."]
    ]
];
let arrFactionNames = ["Marquise De Cat", "Eyrie Dynasties", "Woodland Alliance", "Vagabond","Lizard Cult", "Riverfolk Company", "Underground Duchy", "Corvid Conspiracies", "Lord of the Hundreds", "Keepers in Iron"];
let arrColorRed = [205,58,96,161,243,91,146,144,225,125];
let arrColorGreen = [111,102,173,161,233,195,59,92,34,125];
let arrColorBlue = [50,165,79,161,48,186,49,164,50,125];
let arrFactions = ["Cat", "Bird", "Toast", "VB","Lizard", "Otter", "Mole", "Crow", "Rat", "Keeper"];
let FactionAmount=4;

console.log(arrRules3[0][0][3])
console.log(arrRules4[1][0][1])
function showRule(number1,number2,number3,number4){
    CSec1=number1;
    CSec2=number2;
    CSec3=number3;
    CSec4=number4;
    console.log(arrRules1[CSec1-1])
    console.log(arrRules2[CSec1-1][CSec2-1]);
}

let CurrentPage="";
for(let i=window.location.href.length-1; i>window.location.href.length-15; i--){
    CurrentPage=window.location.href[i]+CurrentPage;
    if(window.location.href[i]=="#"){
        i=0
    }
}
console.log(CurrentPage)
// a for that sets the table on the home page
if(CurrentPage=="Main_Page.html"){
    for(let i=0; i<arrRules1.length; i++){
        // Creates the title Rows
        let astuff = document.createElement("a");
        let column = document.createElement("td");
        astuff.setAttribute("id", "Click"+i);
        astuff.setAttribute("href", "Rules.html#"+(i+1)+"000");
        column.setAttribute("id", "COLUMN"+i);
        astuff.textContent=(i+1)+".0 - "+arrRules1[i];
        document.getElementById("TableTitle").appendChild(column);
        document.getElementById("COLUMN"+i).appendChild(astuff);
        // Creates the rows for the rules
        let row = document.createElement("td");
        row.setAttribute("id", "Rules"+(i+1));
        document.getElementById("listItems").appendChild(row);
        let divHeights = 50/(arrRules2[i]).length;
        for(let o=0; o<(arrRules2[i]).length-1; o++){
            // Adds a rule + it's number
            let Rule = document.createElement("a");
            Rule.textContent= (i+1)+"."+(o+1)+" "+arrRules2[i][o+1];
            Rule.setAttribute("href", "Rules.html#"+(i+1)+(o+1)+0+0);
            document.getElementById("Rules"+(i+1)).appendChild(Rule);
            Rule.setAttribute("class", "AwesomeButtons");
            // Adds a div so they aren't just next to each other
            let DIV = document.createElement("div");
            DIV.style.height=divHeights+"%";
            document.getElementById("Rules"+(i+1)).appendChild(DIV);
        }
        document.getElementById("COLUMN"+i).style.backgroundColor="rgb("+(225*(1-i%2))+","+(130+125*(i%2))+","+(255*(i%2))+")"
        document.getElementById("Rules"+(i+1)).style.backgroundColor="rgb("+(225*(1-i%2))+","+(130+125*(i%2))+","+(255*(i%2))+",0.1)"
        document.getElementById("Click"+i).addEventListener("mouseleave", function(){document.getElementById("Click"+i).style.backgroundColor="rgb("+(225*(1-i%2))+","+(130+125*(i%2))+","+(255*(i%2))+")"})
        document.getElementById("Click"+i).addEventListener("mouseenter", function(){document.getElementById("Click"+i).style.backgroundColor="rgb(255,255,255)"})
    };
    // a for loop that sets the faction table
    for(let i=0; i<FactionAmount; i++){
        // Creates a new table row
        let Row = document.createElement("tr");
        Row.setAttribute("id", "Row"+i);
        Row.setAttribute("onclick", "document.location = 'Factions.html#div"+arrFactions[i]+"'");
        // adds group to the clicked on link
        let group = document.createElement("td");
        group.setAttribute("id", "group"+i);
        group.addEventListener("mouseenter", function(){
            group.style.backgroundColor="rgb("+arrColorRed[i]+","+arrColorGreen[i]+","+arrColorBlue[i]+",0.2)"; 
            group.style.color="rgb(255,0,0)"
            group.style.cursor="pointer";
        })
        group.addEventListener("mouseleave", function(){
            group.style.backgroundColor="rgb("+arrColorRed[i]+","+arrColorGreen[i]+","+arrColorBlue[i]+",0.6)"; 
            group.style.color="rgba(0, 0, 0, 1)";
        })    
        group.style.backgroundColor="rgb("+arrColorRed[i]+","+arrColorGreen[i]+","+arrColorBlue[i]+",0.4)"
        // creates the text for the faction name
        let name = document.createElement("div");
        name.textContent=arrFactionNames[i];
        // Creates the image to go with it
        let image = document.createElement("img");
        image.setAttribute("src", "Symbol"+arrFactions[i]+".png")
        image.setAttribute("id", "image"+i);
        image.style.height=30/FactionAmount+"vh";
        // Adds them all to each other 
        document.getElementById("FactionTable").appendChild(Row);
        document.getElementById("Row"+i).appendChild(group);
        document.getElementById("group"+i).appendChild(image);
        document.getElementById("group"+i).appendChild(name);
    }
}
else{
    let CSec1=window.location.href[window.location.href.length-4];
    let CSec2=window.location.href[window.location.href.length-3];
    let CSec3=window.location.href[window.location.href.length-2];
    let CSec4=window.location.href[window.location.href.length-1];
    console.log(CSec1+""+CSec2+""+CSec3+""+CSec4)
    for(let i=0; i<arrRules1.length; i++){
        for(let o=0; o<(arrRules2[i]).length-1; o++){
            let Subs1=document.createElement("td");
            Subs1.textContent=(i+1)+"."+(o+1)+" "+arrRules2[i][(o+1)];
            Subs1.setAttribute("id", (i+1)+""+(o+1)+""+0+""+0)
            Subs1.setAttribute("class", "i"+(i+1)+" o"+(o+1)+" p"+0+" l"+0)
            Subs1.setAttribute("onclick", "showRule("+(i+1)+","+(o+1)+",0,0)");
            document.getElementById("Rules"+(i+1)).appendChild(Subs1);
            for(let p=1; p<((arrRules3[i])[o]).length; p++){
                let Subs2=document.createElement("button");
                Subs2.textContent=(i+1)+"."+(o+1)+"."+(p)+" | "+arrRules3[i][o][p];
                Subs2.setAttribute("id", (i+1)+""+(o+1)+""+(p)+""+0);
                document.getElementById("RULES").appendChild(Subs2);
                Subs2.setAttribute("class", "i"+(i+1)+" o"+(o+1)+" p"+(p)+" l"+0)
                let Subs3=document.createElement("div");
                Subs3.textContent=arrRules4[i][o][p];
                document.getElementById("RULES").appendChild(Subs3);
            }
        }
        let divider=document.createElement("div")
        document.getElementById("RULES").appendChild(divider)
    }
}