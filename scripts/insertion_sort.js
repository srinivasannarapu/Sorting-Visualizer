//In this script/file we will write the function for Insertion sort

function Insertion()
{

    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay = 0;

    for(var i=0;i<array_size;i++)
    {
        
        div_update(divs[i],div_sizes[i],"yellow"); //Update Color

        var temp = div_sizes[i];
        
        var j = i-1;

        while(j>=0 && div_sizes[j]> temp)
        {

          div_update(divs[j],div_sizes[j],"red"); //Color Update
          div_update(divs[j+1],div_sizes[j+1],"red"); //Color Update

          div_sizes[j+1]=div_sizes[j];

          div_update(divs[j],div_sizes[j],"red"); //Height Update
          div_update(divs[j+1],div_sizes[j+1],"red"); //Height Update

          div_update(divs[j],div_sizes[j],"blue"); //Color Update
          
          if(j==(i-1))
          {
            div_update(divs[j+1],div_sizes[j+1],"yellow"); //Color Update
          }
          else
          {
            div_update(divs[j+1],div_sizes[j+1],"blue"); //Color Update
          }

          j--;
        }
        div_sizes[j+1] = temp;

      for(var t=0;t<i;t++)
      {
          div_update(divs[t],div_sizes[t],"green"); //Color Update
      }

    }

    div_update(divs[i-1],div_sizes[i-1],"green")

    enable_buttons(); 

}