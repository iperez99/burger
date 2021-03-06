$(function () {

    //logic for creating a new burger
    $(".create-form").on("submit", function (event) {
        //Prevent default refresh
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim(),
            devoured: false
        };

        //Send POST request
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                //Reload the page to get updated burger list
                location.reload();
            }
        );
    });

    //logic for updating devoured state
    $(".devour").on("click", function (event) {
        //set id to equal the burger id associated w/ this button
        var id = $(this).data("id");
        console.log("devour id: ", id);
        //set newDevour variable to be this newdevour
        var newDevour = $(this).data("newDevour");


        //set newDevour state to equal newDevour
        var newDevourState = {
            devoured: true
        };

        //Send the PUT update request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to ", newDevour);
                //Reload the page to get new updated list
                location.reload();
            }
        );
    });
})