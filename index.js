// ways of targeting elements:
// by type: $("button"), by class: $(".btn"), and by id $("#target1").

$(function() {

    $( "#js-shopping-list-form" ).submit(function( event ) {
        let newItem = $("#shopping-list-entry").val();
        let check = "check";
        let deleted = "delete";
        let newElement = "<li><span class='shopping-item'>" + newItem + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>" + check + "</span></button><button class='shopping-item-delete'><span class='button-label' style='padding:5px;'>" + deleted + "</span></button></div></li>";
        $(".shopping-list").append( newElement );
        event.preventDefault();
      });

    $( "ul" ).on("click", ".shopping-item-delete", function(event) {
        $(this).closest("li").remove();
    });

    $( "ul" ).on("click", ".shopping-item-toggle", function(event) {
        //$(".shopping-item").toggleClass("shopping-item__checked");
        $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
    });

});
  
 