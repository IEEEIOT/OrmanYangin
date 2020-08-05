jQuery(function($){
	$('.table').footable({
		"columns": [
			{ "name": "id", "title": "ID", "breakpoints": "xs" },
			{ "name": "firstName", "title": "First Name" },
			{ "name": "lastName", "title": "Last Name" },
			{ "name": "jobTitle", "title": "Job Title", "breakpoints": "xs" },
			{ "name": "started", "title": "Started On", "breakpoints": "xs sm" },
			{ "name": "dob", "title": "DOB", "breakpoints": "xs sm md" }
		],
		"rows": [
			{
				"options": {
					"expanded": true
				},
				"value": { "id": 1, "firstName": "Dennise", "lastName": "Fuhrman", "jobTitle": "High School History Teacher", "started": "November 8th 2011", "dob": "July 25th 1960" }
			},
			{ "id": 2, "firstName": "Elodia", "lastName": "Weisz", "jobTitle": "Wallpaperer Helper", "started": "October 15th 2010", "dob": "March 30th 1982" },
			{ "id": 3, "firstName": "Raeann", "lastName": "Haner", "jobTitle": "Internal Medicine Nurse Practitioner", "started": "November 28th 2013", "dob": "February 26th 1966" },
			{ "id": 4, "firstName": "Junie", "lastName": "Landa", "jobTitle": "Offbearer", "started": "October 31st 2010", "dob": "March 29th 1966" },
			{ "id": 5, "firstName": "Solomon", "lastName": "Bittinger", "jobTitle": "Roller Skater", "started": "December 29th 2011", "dob": "September 22nd 1964" },
			{ "id": 6, "firstName": "Bar", "lastName": "Lewis", "jobTitle": "Clown", "started": "November 12th 2012", "dob": "August 4th 1991" },
			{ "id": 7, "firstName": "Usha", "lastName": "Leak", "jobTitle": "Ships Electronic Warfare Officer", "started": "August 14th 2012", "dob": "November 20th 1979" },
			{ "id": 8, "firstName": "Lorriane", "lastName": "Cooke", "jobTitle": "Technical Services Librarian", "started": "September 21st 2010", "dob": "April 7th 1969" }
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




