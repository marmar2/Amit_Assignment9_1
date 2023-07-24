   
   var container = document.querySelector('.container');
   
   let random;
   
   let sBoxList;
   
   for (var i=0; i<400; i++){
	   
	   
     var box = document.createElement('div');
     box.setAttribute('class','sBox');
     box.classList.add(`box${i}`);
     container.append(box);
     	 
   }
   

   
   for (var j=0; j<400; j++){   
	   
	   var newbox= document.querySelector(`.box${j}`);
	   console.log(newbox);
	   
	 newbox.addEventListener('mouseenter', function(e){
		 
	     	 
	   random =  "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
	   
	   
       this.style.backgroundColor = random; 
       this.style.transition = "0.1s"; 
	   // this.classList.add("fade");
	   // e.target.classList.add("fadee");
	   

	   // let opacity = 1;
	   
       // let fadeIn = setInterval(() => {
           // e.target.style.opacity = opacity;
           // opacity -= 0.01;
      // }, 3);   
	 
	 });
	 
	 newbox.addEventListener('mouseleave', function(e){
		 
		 // e.target.style.transition = '1s';
		 //e.target.classList.remove("fadee");
         e.target.style.backgroundColor = "grey";  
         this.style.transition = "7s"; 		 
		
	 });
	 
   }
   
   