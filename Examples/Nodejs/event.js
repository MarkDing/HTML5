var EventEmitter = require("events").EventEmitter;
var events = new EventEmitter();

events.on("some_events", function(){
	console.log("some_events occured.");
});

setTimeout(function(){
	events.emit("some_events");
}, 1000);