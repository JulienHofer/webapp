//var Greeting = "Hello ";
//var name = prompt("what is your new name?");
//var greetingmessage= Greeting + name;
//alert(greetingmessage);
jQuery("#greeting-form").on("submit", function(event_details) {
    var greeting = "Hello ";
    var name = this.fullName.value;
    var greetingmessage = greeting + name;
   $("#greeting-form").hide();
    jQuery("#greeting").append("<p>" + greetingmessage + "</p>");
    //event_details.preventDefault();
});