//Multiple Background
/*Appearance Details*/
//var self = this;
//var countMove = 0;

window.onload = setPuzzleGrid;

function setPuzzleGrid() {
    var shuffleButton; //,puzzle, puzzlepieces;
    var puzzle = document.getElementById('puzzlearea');
    var puzzlepieces = puzzle.getElementsByTagName('div');
        //puzzle = document.getElementById('puzzlearea');
    //puzzlepieces = puzzle.getElementsByTagName('div');
    shuffleButton = document.getElementById('shufflebutton'); 

    for (var i = 0; i < puzzlepieces.length; i++)
    {
        puzzlepieces[i].classList.add('puzzlepiece');
        puzzlepieces[i].style.left = (i % 4 * 100) + 'px';
        puzzlepieces[i].style.top = (parseInt(i / 4) * 100) + 'px';
        puzzlepieces[i].style.backgroundPosition = '-' + puzzlepieces[i].style.left + ' ' + '-' + puzzlepieces[i].style.top; 
    } 
    puzzlepieces[11].classList.add("movablepiece");
    puzzlepieces[14].classList.add("movablepiece");
   // isClicked();  
  additionalFeature();  
  //displayBackground();                                                                                                                      
}

    /*function tileBackground() //Inefficient - But produce the same result
    {
        var puzzlepieces, y1, y2, y3, y4;
        y1 = 0;
        y2 =0;
        y3 =0;
        y4 = 0;
        puzzlepieces = document.getElementById('puzzlearea').getElementsByTagName('div'); 
        for(var i = 0; i < puzzlepieces.length; i+=4)
        {
            puzzlepieces[i].style.backgroundPosition = "0px" + " " + y1 + "px";
            y1 = y1 - 100;
        }

        for (var i = 1; i < puzzlepieces.length; i += 4) {

            puzzlepieces[i].style.backgroundPosition = "-100px" + " " + y2 + "px";
            console.log(y1);
            y2 = y2 - 100;
        }

        for (var i = 2; i < puzzlepieces.length; i += 4) {

            puzzlepieces[i].style.backgroundPosition = "-200px" + " " + y3 + "px";
            y3 = y3 - 100;
        }

        for (var i = 3; i < puzzlepieces.length; i += 4) {

            puzzlepieces[i].style.backgroundPosition = "-300px" + " " + y4 + "px";
            y4 = y4 - 100;
        }
    }*/

//Behaviour Details

/*function isClicked() {
    var puzzlepieces;
    //var emptySpaceXCoord = "300px";
    //var emptySpaceYCoord = "300px";
    puzzlepieces = document.getElementById('puzzlearea').getElementsByTagName('div');
    for (var i = 0; i < puzzlepieces.length; i++) {

        puzzlepieces[i].onclick =  canMove(self); 
    }   
}

function canMove(element)
{
    if(element.target.className == "movablepiece puzzlepiece")
    {
        countMove++;
        puzzle = self.moveTile(puzzle, element.target.innerHTML);

    }
}
function isShuffle ()
{
    puzzle = shufflePuzzle(puzzle);
}

function shufflePuzzle (puzzle)
{
    var randomNum = Math.floor((Math.random()*4));
    for (var i = 0; i < 50; i++)
    {
        while(puzzle[15][randomNum] == null)
        {
            randomNum = Math.floor((Math.random() * 4))
        }
        puzzle = moveTile(puzzle, puzzle[15][randomNum]);
        randomNum = Math.floor((Math.random() * 4));
        }

    countMove = 0;
    return puzzle;
}
function moveTile(puzzle, tile) {

    var puzzle = document.getElementById("puzzlearea");
    var puzzlepieces = puzzle.getElementsByTagName("div");

    //Conditions that check the directions in which the puzzle piece can be moved
    if (puzzle[tile - 1][0] == 16) {

        return movePieceUp(puzzle, tile, puzzlepieces);
    }
    else if (puzzle[tile - 1][1] == 16) {

        return movePieceRight(puzzle, tile, puzzlepieces);
    }
    else if (puzzle[element - 1][2] == 16) {

        return movePieceDown(puzzle, tile, puzzlepieces);
    }
    else if (puzzle[element - 1][3] == 16) {

        return movePieceLeft(puzzle, tile, puzzlepieces);
    }
}

function blankSpace (blankTile)
{
    for (var count = 0; count < blankCell.length; count++) {

        if (lankTile[count] != null) {
            puzzlePieces[blankTile[count] - 1].classList.add("puzzlepiece", "movablepiece");
        }
    }
}*/

/*Extra Features*/

//Multiple Background
 function additionalFeature () 
 {
     var div = document.getElementById("picChoice");
     var array = ["Smoking Joker", "Justice League", "Painted Joker", "Joker with Umbrella", "Butterfly"];
     var selectList = document.createElement("select");
     selectList.id = "picSelect";
     div.appendChild(selectList);

     for (var i = 0; i < array.length; i++) 
     {
         var option = document.createElement("option");
         option.value = array[i];
         option.text = array[i];
         selectList.appendChild(option);
     }
     //displayBackground(selectList);
 }

 function displayBackground() 
 {
     var selectedOption = document.getElementById('picChoice').selectedValue;
     console.log(selectedOption);
     //alert(selectedOption);
     var puzzle = document.getElementsByClassName('puzzlepiece');
     //alert(puzzle);
     if (selectedOption == "Smoking Joker")
     {
         puzzle.src = selectList.options[selectList.selectedIndex].value;
     }
     else if (selectedOption == "Justice League")
     {
         puzzle.src = url("justiceLeague.jpg");
     }
     else if (selectedOption == "Painted Joker")
     {
         puzzle.src = url("background.jpg");
     }
     else if (selectedOption == "Joker with Umbrella")
     {
         puzzle.src = url("umbrellaJoker.jpg");
     }
     else 
     {
         puzzle.src = url("butterfly.jpg");
     }
 }

