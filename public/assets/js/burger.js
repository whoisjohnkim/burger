$(function() {
    // Response for when the user clicks the devour button for a burger
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var devouredState = {
            devoured: devoured
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function() {
                location.reload();
            }
        );
    });

    // Response for when a user submits a new burger
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgs").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        )
    });

})