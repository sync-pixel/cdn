// JavaScript Document
var ilast2 = 0;
function tabitOn2(n)
{
	var oTabL=document.getElementById("otab2"+ilast2);
	var oTabC=document.getElementById("otab2"+n);
		oTabL.style.display 	= "none";
		oTabC.style.display		= "block";

	var oL=document.getElementById("otdClass2"+ilast2);
	var oC=document.getElementById("otdClass2"+n);

		oL.className	= "classOut2";
		oC.className	= "classOn2";

	ilast2 = n;
}
var ilast3 = 0;
function tabitOn3(n)
{
	var oTabL=document.getElementById("otab3"+ilast3);
	var oTabC=document.getElementById("otab3"+n);
		oTabL.style.display 	= "none";
		oTabC.style.display		= "block";

	var oL=document.getElementById("otdClass3"+ilast3);
	var oC=document.getElementById("otdClass3"+n);

		oL.className	= "classOut3";
		oC.className	= "classOn3";

	ilast3 = n;
}
