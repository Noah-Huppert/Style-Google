$("#lga").empty();
$("#lga").append("Google").addClass("sText");
$("head").append("<link href='https://fonts.googleapis.com/css?family=Lobster|Anton|Shadows+Into+Light|Pacifico|Audiowide|Luckiest+Guy' rel='stylesheet' type='text/css'>");
var fontf = [];

fontf[0] = "'Lobster', cursive";
fontf[1] = "Anton', sans-serif";
fontf[2] = "'Shadows Into Light', cursive";
fontf[3] = "'Pacifico', cursive";
fontf[4] = "'Audiowide', cursive";
fontf[5] = "'Luckiest Guy', cursive";

var r = Math.floor(Math.random()*6);



$(".sText").css({
	'font-family' : fontf[r]
});

console.log(fontf[r]);