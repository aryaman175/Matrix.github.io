
var count;
var A,B,C;
$(document).ready(function()
{
  $(document.querySelectorAll(".answerElm")).hide()
  count=1;
  for (let i=0;i<4;i++)
  {
    $ (document.getElementById("b" + i)).hide()
    $ (document.getElementById("text" + i)).hide()

  }

     $("table").show();


  $("#evalB").on("click",function()
  {
         calculate(0);
  })

  $("#trans").on("click",function()
  {
         calculate(1);

  })


function calculate(t)
   {
      (document.getElementById("final")).innerHTML = "";
     for (var i=1;i<4;i++)
    {

      tabToMatrix(i);
    }
    var table = document.getElementById("answerT")
    for (let i=table.rows.length-1;i>=0;i--)
    {
      table.deleteRow(i)
    }
       $(document.querySelectorAll(".answerElm")).show()
      var result = evaluate();
  if (result != 0)
    {
      console.log("enter result part")
       if (t==1)
      {
       console.log("enter t")
        result = result.transpose()
      }
     console.log(result)
      matrixToTab(result);

     var x =document.querySelectorAll("#answerT tr td");
     for (var i=0;i<x.length;i++)
     {
      console.log("enter for loop")
       x[i].style.border = "1px solid black";
      //  x[i].style.width = "100px;"
     }

  }

  }

  $("#b").on("click",function()
  {

    var rN = document.getElementById("r").value
    var cN = document.getElementById("c").value
     newMatrix(rN,cN);
     //$ (document.getElementsByClassName("unit")).show();
  $(".del").on("click",function()
{
  var thisId =  (this).id

  var tempCount = thisId[1];
  if (tempCount<count)
  {
    count = tempCount
  }
  var thisTab = document.getElementById("tab" + tempCount)
  for (i=thisTab.rows.length-1;i>=0;i--)
  {

    thisTab.deleteRow(i)
  }
  $(document.getElementById("text" + tempCount)).hide()
//$ (document.querySelectorAll("div.unit")).show()
  $(document.getElementById("b" + tempCount)).hide()
})


  })

})
