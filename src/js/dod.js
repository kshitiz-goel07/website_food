while(1)
{

 x=Math.random()*10;
 if((x>=1)&&(x<=5))
   {break;}
}
x=parseInt(x);
a=document.getElementById("1");
a.src="dishoftheday/"+x+".jpg";