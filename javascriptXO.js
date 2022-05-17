
let title = document.querySelector('.title');  //تعريف بالعنوان 
let turn ='x';
let squars = [] ;
let restart = document.querySelector('.restart');


function styler(box1 , box2 , box3 )
{      
 title.innerHTML ='player  "'+squars[box1] + '"   winner';

   document.getElementById('item' + box1).style.background = '#000';
    document.getElementById('item' + box2).style.background = '#000';
    document.getElementById('item' + box3).style.background = '#000';
    setInterval(function(){ title.innerHTML +='.'} ,1000)
    setTimeout(function(){ location.reload()} , 4000)
    
}


function winner()
{
    for( let i = 1 ; i<10 ; i++)
    {
      squars[i] = document.getElementById('item' + i).innerHTML;
    }
          ////لكل عمود
    if(squars[1] == squars[2] && squars[2] == squars[3] && squars[3] !='')
   
     {
        styler(1,2,3);
     }

      if(squars[4] == squars[5] && squars[5] == squars[6] && squars[6] !='')
      {
        styler(4,5,6);
      }

      if(squars[7] == squars[8] && squars[8] == squars[9] && squars[9] !='' )
      {
        styler(7,8,9);
      }
       // لكل صف

      if(squars[1] == squars[4] && squars[4] == squars[7] && squars[7] !='')
      {
        styler( 1,4,7);
      }

      if(squars[2] == squars[5] && squars[5] == squars[8] && squars[8] !='')
      {
        styler(2,5,8);
      }

      if(squars[3] == squars[6] && squars[6] == squars[9] && squars[9] !='')
      {
        styler(3,6,9);
      }
            // قطريا 
      if(squars[3] == squars[5] && squars[5] == squars[7]  && squars[3] !='')
      {
        styler(3,5,7);
      }

      if(squars[1] == squars[5] && squars[5] == squars[9]  && squars[5] !='')
      {
        styler(1,5,9);
      }   
}    


function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x'  && element.innerHTML == '')
    {
        element.innerHTML ='X' ;   
        turn = 'o' ;
        title.innerHTML=' ENTER "O" ' ;
     }
     else
     
         if (turn === 'o' && element.innerHTML == '')
         {
            element.innerHTML ='O' ;
            turn ='x';
            title.innerHTML=' ENTER "X" ' ; 

         }

         winner();
}

     restart.onclick = function(){
           window.location.reload();
           }