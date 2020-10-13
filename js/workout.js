new Freezeframe();
//
//$("img").hover(function() {
//  $(".overlay").fadeOut();
//}, function() {
//  $(".overlay").fadeIn();
//});



/**
 * Goes through a loop of all exercises and searches for True checked values.
 *
 * @returns {[return array]} [documents the function's return value]
 */

function getExerciseChecked () {
   let container = document.querySelector("#group");
   let exercise_match = container.querySelectorAll("input.check");
   let video_match = container.querySelectorAll("img.video"); 
   let exerciseArray = [];
   let exercise_id = '';
   let video_id = '';
  
  
  // Loop for checked exercises and into array
    for (i = 0; i < exercise_match.length; i++) {

      if(exercise_match[i].checked) {
          let exercise_id = exercise_match[i].getAttributeNode('id');
        
           // Loop through videos until exercise id matches video id => to grab the src  
            for (let  x = 0 ; x < video_match.length; x++) {
              let video_id = video_match[x].getAttributeNode('id');

              if (video_id.value == exercise_id.value) {
                let source = video_match[x].getAttributeNode('src');
                let name = video_match[x].getAttributeNode('value');
//                inserting the exercise name and img source to an array
                exerciseArray.push(name, source);
                }
            }
        } 
    }
        return exerciseArray;
}





function routineCalc() { 
   
//  let set = document.getElementById("set").value;
  let rep = document.getElementById("rep").value;
  let list = getExerciseChecked();
  let message = '';
  let routineArray = [];
  

  if  (isNaN(rep)){
    alert('Enter only numbers');
      } 
  else if (list.length === 0){
    
    alert("Please select an exercise");
  }
  
  else { 

      for (let j = 0 ; j < list.length ; j+=2) {  
         message += `<h2>${list[j].value} for 30 seconds. </h2>
         <li> <img class='output' src="${list[j+1].value}"> </li> `;
      }
      
      for (let k = 1; k <= rep; k++) {
        routineArray.push(message);
      }
    
       message = routineArray.join(' ');
   
    let routine = 
    `<div class="container main-header responsive">
    <h1>Workout Session</h1>
   <ul> ${message} </ul>
    </div>`;
    
    
   const groupSelection = document.getElementById('group');
   groupSelection.style.display = 'none'
   document.querySelector('main').innerHTML = routine;
    
    
}
      
   
  
return   rep;
    
}





