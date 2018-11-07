/*Apperance Details*/

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
                                                                                                                                             
}