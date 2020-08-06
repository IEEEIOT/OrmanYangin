jQuery(function($){
	$('.table').footable({
		"columns": [
			{ "name": "id", "title": "ID", "breakpoints": "xs" },
			{ "name": "sensor", "title": "Sensör" },
			{ "name": "voltaj", "title": "Voltaj" },
			{ "name": "flame", "title": "Flame", "breakpoints": "xs" },
			{ "name": "location", "title": "Location", "breakpoints": "xs sm" },
			{ "name": "date", "title": "Date", "breakpoints": "xs sm md" }
		],
		"rows": [
			{
				"options": {
					"expanded": true
				},
				"value": { "id": 1, "sensor": "Duman", "voltaj": "5", "flame": "4", "location": "B Bölgesi", "date": "July 25th 1960" }
			},
			{ "id": 2, "sensor": "Pil", "voltaj": "2", "flame": "3", "location": "C Bölgesi", "date": "July 18th 2018" },
			{ "id": 3, "sensor": "Duman", "voltaj": "5", "flame": "4", "location": "B Bölgesi", "date": "July 25th 1960" }
		]
	});
});








$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});





// var mqtt=require('mqtt');


// var client = mqtt.connect("mqtt://52.157.107.206:1883",{clientId:"yakub"});

// client.on("connect",function(){	
//     console.log("connected");
// });





// client.subscribe("sensor1");
// client.subscribe("sensor2");







// var dizia;

// client.on("message",function(topic,message){
//     console.log(topic);
//     dizia = message.toString().split("$");
//     console.log(dizia[0].toString());

// })
// client.on("message",function(topic,message){
//     console.log(topic);
//     dizia = message.toString().split("$");
//     console.log(dizia[1].toString());

// })
// var dizib;
// client.on("message",function(topic,message){
//     console.log(topic);
//     dizib = message.toString().split("$");
//     console.log(dizib[0].toString());

// })
// client.on("message",function(topic,message){
//     console.log(topic);
//     dizib = message.toString().split("$");
//     console.log(dizib[1].toString());

// })





//  document.getElementById("donut1text").innerHTML = dizia[0].toString();
//  document.getElementById("donut1value").setAttribute("data-value", "dizia[0].toString()");

//  document.getElementById("donut2text").innerHTML = dizia[1].toString();
// document.getElementById("donut2value").setAttribute("data-value", "dizia[1].toString()");

//  document.getElementById("donut3text").innerHTML = dizib[0].toString();
//  document.getElementById("donut3value").setAttribute("data-value", "dizib[0].toString()");

//  document.getElementById("donut4text").innerHTML = dizib[1].toString();
//  document.getElementById("donut4value").setAttribute("data-value", "dizib[1].toString()");




document.getElementById("donut1text").innerHTML = "71";
document.getElementById("donut1value").setAttribute("data-value", "71");




