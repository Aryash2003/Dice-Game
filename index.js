
    var num1=Math.floor(Math.random()*6+1);
    var num2=Math.floor(Math.random()*6+1);
    var str1="images/dice"+num1+".png";
    var str2="images/dice"+num2+".png";
    document.querySelector(".container .dice .img1").setAttribute("src",str1);
    document.querySelector(".container .dice .img2").setAttribute("src",str2);
    // now for the winning tag
    if (num1>num2) {
      document.querySelector("h1").innerHTML="Player 1 wins";
    }
    else if(num1==num2)
    {
      document.querySelector("h1").innerHTML="Draw";
    }
    else{
      document.querySelector("h1").innerHTML="Player 2 wins";
    }
  