function showText (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}

    
$(function () { 
 
  showText("#msg", "Dhruv Diddi", 0, 100);
  setTimeout(function() {showText("#msg1", "Software Developer", 0, 50);}, 1000);
  setTimeout(function() {showText("#msg2", "Improving the world one line at a time. ", 0, 50);},2000);    
 	
}); 

