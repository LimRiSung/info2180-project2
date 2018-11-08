/*Appearance Details*/

//var puzzlepiecesstyles;
window.onload = addPuzzlePiecesStyles;

function addPuzzlePiecesStyles() {
    var puzzle, puzzlepieces;
    puzzle = document.getElementById('puzzlearea');
    puzzlepieces = puzzle.getElementsByTagName('div'); 

    for (var i = 0; i < puzzlepieces.length; i++)
    {
        puzzlepieces[i].classList.add('puzzlepiece');
        puzzlepieces[i].style.position = "relative";
        puzzlepieces[i].style.float = "left";
    } 
  tileBackground();   
  additionalFeature();  
  //displayBackground();                                                                                                                      
}

    function tileBackground() 
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
    }

//Behaviour Details

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

