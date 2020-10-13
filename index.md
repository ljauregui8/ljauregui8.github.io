<!DOCTYPE html>
<html>
<head>
<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
<meta content="utf-8" http-equiv="encoding">
	<title>Flexbox Layout</title>
	<link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/page.css">
	<link rel="stylesheet" href="css/flexbox.css">
    <script src="js/workout.js"></script> 
    <script src="https://unpkg.com/freezeframe/dist/freezeframe.min.js"></script>
</head>
<body>

  
	<div class="container">
    <header class="main-header responsive">
		<img class="logo responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdkXW8Bifhctt6q_sDl7ZA-Y5Vdghl4Pmabw&amp;usqp=CAU"> 
    <h1 class="name">Bodyweight Workouts</h1>
    <form class="set-rep">
    <label  for="rep">Reps</label>
    <input  type="text" id="rep" name="rep">
    <button type="button" id="generate_button" onclick="routineCalc()">Generate</button>
    <button type="reset" onClick="window.location.reload();">Reset Page</button>
    </form>
	</header><!--/.main-header--> 
  <main></main> 
  <div id="group">
		<div class="item-1 item"> 
      <div class="item-top"><h3>Inchworm</h3> 
          <input class="check" type="checkbox" id="inchworm" name="inchworm">
      </div>
<!--   hover dropdown   -->
    <div class="dropdown"><button type="button" class="info_button">&or;</button><p class="dropdown-content">Stand up tall with legs straight, making sure your knees aren not locked. Slowly lower torso toward the floor, then walk hands forward. Once in a push-up position, start taking tiny steps so feet meet hands.</p> 
        </div> 
<!--  end hover dropdown   -->    
    <figure>
    <img class="freezeframe video1 video responsive" id="inchworm" value="Inchworm" src="https://www.verywellfit.com/thmb/qpYxZrnZ3gKew0sj0alH3NJxAes=/3000x1687/smart/filters:no_upscale()/73--InchwormGIF-9a268be275804d59b0c34b9d357d6015.gif">
      <figcaption> <p>Hover over this image.</p>
       </figcaption> 
      </figure> 
    </div>

    <div class="item-2 item">
      <div class="item-top"><h3>Bear Crawl</h3>
      <input class="check" type="checkbox" id="bearcrawl" name="bearcrawl"> </div>
<!--   hover dropdown   -->
      <div class="dropdown"><button type="button" class="info_button">&or;</button><p class="dropdown-content">Starting on hands and knees, rise up onto your toes but maintain your hips at the same height as your torso.  Tighten your core, and slowly reach forward with right arm and left knee.</p>
      </div> 
<!--  end hover dropdown   -->  
     <figure>
     <img class="freezeframe video2 video responsive freezeframe" id="bearcrawl" value="Bearcrawl" src="https://media.self.com/photos/5a14928e0972980b389a618d/master/w_1600%2Cc_limit/new-years-challenge-b-bear-crawl.gif">
      <figcaption> <p>Hover over this image.</p>
       </figcaption> 
      </figure> 
    </div>
    
		<div class="item-3 item">
      <div class="item-top"><h3>Giant Mountain Climber</h3>
      <input class="check" type="checkbox" id="climber" name="climber" > </div>
 <!--   hover dropdown   -->
      <div class="dropdown"><button type="button" class="info_button">&or;</button><p class="dropdown-content">Start with a plank position, engage your core and jump your right foot to the outside of your right hand. From this low lunge position, jump right foot back as you simultaneously jump your left foot to the outside of your left hand. Continue to alternate.</p>
      </div> 
<!--  end hover dropdown   -->  
      <figure>
    <img class="freezeframe video3 video responsive" id="climber" value="Giant Mountain Climber" src="https://media.self.com/photos/5a149291e91faa1fe3315901/master/w_1600%2Cc_limit/new-years-challenge-b-giant-mtn-climber.gif" >
       <figcaption> <p>Hover over this image.</p>
       </figcaption> 
      </figure> 
    </div>
    
		<div class="item-4 item">
      <div class="item-top"><h3>Burpee</h3>
      <input class="check" type="checkbox" id="burpee" name="burpee" > </div>
<!--   hover dropdown   -->
      <div class="dropdown"><button type="button" class="info_button">&or;</button><p class="dropdown-content">Start in a low squat with your hands positioned on the floor. Kick your feet back to a plank position and do one push-up. Return your feet to the squat position and leap up.  Return to a squat with both hands on the ground.</p>
      </div> 
<!--  end hover dropdown   -->  
      <figure>      
    <img class="freezeframe video4 video responsive" id="burpee" value="Burpee" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/burpee-1457045324.gif">
       <figcaption> <p>Hover over this image.</p>
       </figcaption> 
      </figure> 
    </div>
    
<div class="item-5 item">
     <div class="item-top"><h3>Plank to Chataranga</h3>
     <input class="check" type="checkbox" id="chataranga" name="chataranga" > 
      </div>
<!--   hover dropdown   -->
      <div class="dropdown"><button type="button" class="info_button">&or;</button><p class="dropdown-content">Start in push-up position. Hold for 10 seconds.  Lower your body and hover over the floor without touching. Hold for 10 seconds. Return to plank(push-up position)</p>
      </div> 
<!--  end hover dropdown   -->   
    <figure>
    <img class="freezeframe video5 video responsive" id="chataranga" value="Chataranga" src="https://i.pinimg.com/originals/fe/a2/a7/fea2a70ed48ea564fd067646577fbc9c.gif">
      <figcaption> <p>Hover over this image.</p>
       </figcaption> 
      </figure> 
 </div>

    <div class="item-6 item">
      <div class="item-top"><h3>Star Jump</h3>
      <input class="check" type="checkbox" id="starjump" name="starjump" > </div>
<!--   hover dropdown   -->
      <div class="dropdown"><button type="button" class="info_button">&or;</button><p class="dropdown-content">From a standing position, do a half-squat.  From the half-squat, explode up, jumping legs apart, and spreading arms wide overhead, resembling a star shape.  Land lightly on the balls of your feet and immediately drop into a half-squat again to repeat. </p>
      </div> 
<!--  end hover dropdown   -->      
      <figure>
   <img class="freezeframe video6 video responsive" id="starjump" value="Star Jump" src="https://media.self.com/photos/5a1492a2dc49bc5025df5d97/master/w_1600%2Cc_limit/new-years-challenge-b-star-jump.gif"> 
       <figcaption> <p>Hover over this image.</p>
       </figcaption> 
      </figure> 
    </div>
	</div>
</div>    
</body>
</html>


