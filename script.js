$("#generate").click(function () {
    const creature = $("#textBox").val()
    const url = "https://pokeapi.co/api/v2/pokemon/" + creature + "/"
    $.ajax({
        url: url,
        success: function (data) {
            console.log(data)

            const creatureDescription = data.weight
            $("#moreDescription").html(creatureDescription);
            const abilities = data.abilities[0]
            $("#extra").html(abilities);

            const pokemon = data.species.name
            $("#description").html(pokemon)

            const image = document.createElement("IMG")
            pokemonPic = data.sprites.front_default
            image.src = pokemonPic
            $("#picture").html(image);
            M.toast({html: "Here!"})

          
        },
        error: function (request, error) {

            console.log(error)
            console.log(request)
            M.toast({html: "There's a typo. Try Again!"})

        }

    });

    $("#resetButton").click(function () {
        location.reload()
    });
});
