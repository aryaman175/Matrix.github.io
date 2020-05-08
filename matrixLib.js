var undef;
function Matrix(rows,cols)
{
  this.rows = rows;
  this.cols = cols;
  this.matrix =[]

  for(let i=0;i<this.rows;i++)
  {
    this.matrix[i] =[];

    for(let j=0;j<this.cols;j++)
    {
      this.matrix[i][j]=0;
    }
  }

this.randomize = function()
{
  for(let i=0;i<this.rows;i++)
    {
      for(let j=0;j<this.cols;j++)
        this.matrix[i][j] = Math.floor(Math.random() * 10);
   }
}
  this.add = function(n)
{
  if (n instanceof Matrix)
 {
      if(this.rows == n.rows && this.cols == n.cols)             //obj instanceof Class
    {
      for(let i=0;i<this.rows;i++)
        {
          for(let j=0;j<this.cols;j++)
            this.matrix[i][j] += n.matrix[i][j]
       }
       return this
     }
     else
  {
    document.getElementById("final").innerHTML = "Undefined! Matrices must have the same dimensions."
       undef =0;
}
   }
      else
     {
      for(let i=0;i<this.rows;i++)
      {
        for(let j=0;j<this.cols;j++)
          this.matrix[i][j] += n
        }
        return this;
      }

  }


this.mult = function(n)
{
console.log("enter mult")
  if (n instanceof Matrix)
{
  console.log("true")
    if (this.cols == n.rows)
  {

       temp = new Matrix(this.rows,n.cols);

   for(let i=0;i<this.rows;i++)
  {  for (let k=0;k<n.cols;k++)
    {
        let sum =0;
      for(let j=0;j<this.cols;j++)
       {
         sum += this.matrix[i][j]* n.matrix[j][k]
          temp.matrix[i][k] = sum;
       }
     }
   }
    return temp;
 }
     else
       {
         (document.getElementById("final")).innerHTML ="Undefined! Number of columns of first Matrix must equal number of rows of second";
          undef =0;

       }
}
else
    {

      for(let i=0;i<this.rows;i++)
     {

       for(let j=0;j<this.cols;j++)
      {
        this.matrix[i][j] *= n
      }
      }

      return (this)
}


}

this.transpose = function()
{
  temp = new Matrix(this.cols,this.rows)
  for(let i=0;i<this.rows;i++)
 {
 for(let j=0;j<this.cols;j++)
{

  temp.matrix[j][i] = this.matrix[i][j]
}
 }

  return temp;
 }

}

function newMatrix(r,c)
{
if (count<4)
{  var rand = new Matrix();
//var x = querySelector("empty");
  $(document.getElementById("text" + count)).show()
//$ (document.querySelectorAll("div.unit")).show()
  $(document.getElementById("b" + count)).show()
  var table = document.getElementById("tab" +count)

  for(let i=0;i<r;i++)
  {
       var row = table.insertRow(i);
        for(let j=0;j<c;j++)
      {
        var cell = row.insertCell(j);
        cell.innerHTML = '<input type="number">'
      }
  }
}
  count++;
}

function tabToMatrix(x)
{
  // finding no of rows and columns for tables
  var tempId = "tab" + x
   var rows = document.querySelectorAll("#" + tempId + " tr")
   var totalCells = document.querySelectorAll("#" + tempId + " tr td")
   var cols = totalCells.length/rows.length
   myMatrix = new Matrix(rows.length,cols);

   for (i=0;i<myMatrix.rows;i++)
    {
      for (j=0;j<myMatrix.cols;j++)
    {

      myMatrix.matrix[i][j] = parseInt($("#" + tempId).children().children().eq(i).children().eq(j).children()[0].value)
    }
    }
     if (x==1)
        A = myMatrix;
      if (x==2)
        B = myMatrix;
      else
       C = myMatrix;

       //console.log("A = " + A)
}

function evaluate()
{
  undef =1;
  var oprn = document.getElementById("evalI").value;
   for (i=oprn.length-1; i>=0;i--)
   {
     if(oprn[i] == " " || oprn[i] == ".")
        {
          oprn =removeElement(oprn,i);
        }
      }
   var parts = oprn.split("+")

   var subpart;
   var sum =0;
   for(let i=0;i<parts.length;i++)
{
  subPart = parts[i].split("*")

  var product =1;
    for(let j=0;j<subPart.length;j++)
  {
      // console.log("i = " + i + " j = " + j);

        if(subPart[j] == "A")
          subPart[j] = A;
        else
          if(subPart[j] == "B")
          subPart[j] = B;
          else
            if(subPart[j] =="C")
            subPart[j] = C;
            else
              subPart[j] = parseInt(subPart[j]);

      product = multiply(product,subPart[j]); // product is not excepting return statement (procedure is right)
    //  console.log(subPart[j])
    //  console.log(subpart[j].matrix)
  //    console.log("product = " + product)

    }
    sum = addition(sum,product)
    //console.log("sum = " + sum)

  // check sum part!!!
}
 // console.log("sum = " +sum);
 // console.log("sumMatrix = " +sum.matrix);
 if (undef ==0)
{
  return 0;
}
else
    return sum;

}

 function multiply(m,n)
{
  if (m instanceof Matrix)
{
  var temp =m.mult(n);
  return temp;
}
else if( n instanceof Matrix)
{
  var temp = n.mult(m);
  return temp;
}
else {
  return m*n;
}
}


function addition(m,n)
{
 if (m instanceof Matrix)
{
 var temp = m.add(n);
 return temp;
}
else if( n instanceof Matrix)
{
 var temp = n.add(m);
 return temp;
}
else {
 return m + n;
}
}

// 4*A + 3*B

function removeElement(string, position)
{
  var newstring =  string.slice(0, position) + string.slice(position +1, string.length);
  return newstring

}

function matrixToTab(mObj)
{
   let r = mObj.rows
   let c = mObj.cols

   var table = document.querySelector("#answerT")

   for(let i=0;i<r;i++)
   {
        var row = table.insertRow(i);
         for(let j=0;j<c;j++)
       {
         var cell = row.insertCell(j);
         cell.innerHTML = mObj.matrix[i][j]
       }
   }
 }
