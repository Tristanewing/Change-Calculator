$(document).ready(function() {



$("#button").click(function(){

var due=$("#due").val()

var given=$("#given").val()

var total= due - given;

var dollars= Math.floor(total)

$("#dollars").text(" $ " + dollars);

total -= dollars; 

var quarters= Math.floor(total / .25);

$("#quarters").text(quarters);

total %= .25;

var dimes= Math.floor(total / .10);

$("#dimes").text(dimes);

total %= .10;

var nickles= Math.floor(total / .05);

$("#nickles").text(nickles);

total %= .05;

var pennies= Math.floor(total / .01);

$("#pennies").text(pennies);

total %= .01;

});





});