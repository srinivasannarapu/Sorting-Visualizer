//In this script we write the function for Bubble_sort() 

function Bubble(){

    //Set Time Complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay = 0;

  for(var i=0;i<array_size-1;i++)
  {

    for(var j=0;j<array_size-1-i;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow"); //Color Update

        if(div_sizes[j]>div_sizes[j+1])
        {
          div_update(divs[j],div_sizes[j],"red");//Color Update
          div_update(divs[j+1],div_sizes[j+1],"red");//Color Update

          var temp = div_sizes[j];
          div_sizes[j] = div_sizes[j+1];
          div_sizes[j+1] = temp;

          div_update(divs[j],div_sizes[j],"red"); //Height Update
          div_update(divs[j+1],div_sizes[j+1],"red"); //Height Update
        }

        div_update(divs[j],div_sizes[j],"blue"); //Color update to its intial position

    }
      div_update(divs[j],div_sizes[j],"green");
      //Color Update
  }
  
  div_update(divs[0],div_sizes[0],"green"); //Color Update

  enable_buttons();
}

