/*
This function is fired when the webpage is loaded
*/
$(document).ready(function(){
   $('.all-content').hide(); 
});

/*
When someone clicks goals-button we should hide all-content 
and then show only goals-content
*/
$("#goals-button").click(function(){
    $('.all-content').hide();
    $('#goals-content').show();
});


/*
When someone clicks the info button we should hide all-content 
and then show only info-content
*/
$("#info-button").click(function(){
    $('.all-content').hide();
    $('#info-content').show();
});

$("#past-button").click(function(){
     $('.all-content').hide();
    $('#past-content').show();
});

$("#dark-button").click(function(){
    $('.all-content').hide();
    $('#dark-content').show();
    $('body').css("background-color", "black");
    $('body').css("color", "white");
});

$("#press-button").click(function(){
    alert("I SAID DON'T PRESS ME!");
});

$("#takeover-button").click(function(){
    $('.all-content').hide();
    $('#takeover-content').show();
});

$("#takeover-form-button").click(function(){
    $("#site-title").hide();
    $("#site").show();
    $("#site").html("your site now belongs to:" + $("#takeover-input").val());
});
