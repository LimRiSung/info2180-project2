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
  //tileBackground();   
  additionalFeature();                                                                                                                                
}

/*function tileBackground()
{
    var puzzlepieces, bgWidth, bgHeight;
    puzzlepieces = document.getElementById('puzzlearea').getElementsByTagName('div'); 
    bgWidth = 400;
    bgHeight = 400;
    //puzzlepieces[0].style.backgroundPosition = 0 + 'px' + ' ' + 0 + 'px';
    //puzzlepieces[1].style.backgroundPosition = 100;
    for (var i = 0; i < puzzlepieces.length; i++) 
    {
        puzzlepieces[i].style.backgroundPosition =  '-' + 300 + 'px' + ' ' + 0 + 'px';
        //puzzlepieces[i].style.top = (parseInt(i / 4) * 100) + 'px';
        //puzzlepieces[i].style.left = (i % 4 * 100) + 'px';
        //puzzlepieces[i].style.backgroundPosition = '-' + puzzlepieces[i].style.left + ' ' + '-' + puzzlepieces[i].style.top;
    }
   }*/

    /*function tileBackground() 
    {
        var puzzlepieces, x;

        setInterval(function() {
            for (var i = 0; i < puzzlepieces.length; i++) {
                puzzlepieces[i].style.backgroundPosition = 
            }

        }, 500);
   

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
 }

