//In this script/file we will write the function for selection sort

function Selection()
{

  document.getElementById("Time_Worst").innerText="O(N^2)";
  document.getElementById("Time_Average").innerText="Θ(N^2)";
  document.getElementById("Time_Best").innerText="Ω(N^2)";

  //Setting Space complexity
  document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++){
        var min = i;
        div_update(divs[i],div_sizes[i],"red");

        for(var j=i+1;j<array_size;j++)
        {

          div_update(divs[j],div_sizes[j],"yellow");     //Color Update

          if(div_sizes[j]<div_sizes[min])
          { 
            if(min!=i)
            {
              div_update(divs[min],div_sizes[min],"blue");
             
            }
              
            min=j;

            div_update(divs[min],div_sizes[min],"red");  //Color Update
          }
          else
            {
              div_update(divs[j],div_sizes[j],"blue");
            }      
        }

        if(min!=i)
        {
          var temp = div_sizes[min];
          div_sizes[min]=div_sizes[i];
          div_sizes[i]=temp;

          div_update(divs[i],div_sizes[i],"red"); //Height Update
          div_update(divs[min],div_sizes[min],"red"); //Height Update
          div_update(divs[min],div_sizes[min],"blue");

        }
        div_update(divs[i],div_sizes[i],"green"); //Color Update
    }
     div_update(divs[i],div_sizes[i],"green"); //Color Update

  enable_buttons();

}
