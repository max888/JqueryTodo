$(document).ready(function() {

    $("#add").on("click", function() {
      var value = $("#additem").val();
        $("ol li:last").after("<li>" + value + "</li>");
        $("#additem").val("");
    })

});