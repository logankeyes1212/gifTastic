
var animals = [];
      console.log(animals.length)
      
      function animalSearch() {
        
        // var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "=1&api_key=7DOQVnkfCCpYFM63QasxoSFoXcaaVmbV&limit=10";

        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
            
          for (i = 0; i < response.data.length; i++) {
            // console.log(i)
            // console.log("the rating is", response.data[i].rating)
            // console.log(response)
            var animalDiv = $("<p class='animal'/>");



            var rating = $("<p>").text("Rating: " + response.data[i].rating);




            var image = $("<img>").attr("src", response.data[i].images.fixed_height_still.url);
            image.attr("data-still", response.data[i].images.fixed_height_still.url);
            image.attr("data-animate", response.data[i].images.fixed_height.url);
            image.attr("data-state","still");
            image.attr("class", "gif")

            

            animalDiv.append(rating, image);


            $("#animal-view").prepend(animalDiv);


          }
         
          $(".gif").on("click", function () {
            // image.attr("data-state='still'");
            
            
            var state = $(this).attr("data-state");
            
            if (state === "still") {
              // this.attr("data-state", "animate");
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
              console.log($(this).attr("data-state", "animate"))

            } else {
              // image.attr("data-state","still");
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
              console.log($(this).attr("data-state", "still"))
            }
            console.log(state)
          });
        });
      };


      // $(".gif").on("click", function () {

      //     var state = $(image).attr("data-state");

      //     if (state === "still") {
      //       $(this).attr("src", $(this).attr("data-animate"));
      //       $(this).attr("data-state", "animate");

      //     } else {
      //       $(this).attr("src", $(this).attr("data-still"));
      //       $(this).attr("data-state", "still");

      //     }
      //   console.log(state)
      //   })








      function render() {

        $("#buttons").empty();


        for (var i = 0; i < animals.length; i++) {


          var a = $("<button>");

          a.addClass("animal-button");

          a.attr("data-name", animals[i]);

          a.text(animals[i]);

          $("#buttons").append(a);
        }
      };

      
      $("#add-animal").on("click", function (event) {
        event.preventDefault();

        var animal = $("#animal-input").val().trim();


        animals.push(animal);

        $("#animal-view").empty();
        render();

      });


          $(document).on("click", ".animal-button", animalSearch, function(event){
           event.preventDefault();
          animalSearch();
          render();
          });

    

