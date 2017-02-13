/* index scripts */
    function getdatetime(){
        $.ajax({
          url: api_base_url+"/datetime",
          type: "GET"
        })
        .done(function( data ) {
          $("#msgtxt").html(data);
        })
        .fail(function( xhr, status, errorThrown ) {
          $("#msgtxt").html("There was a problem getting date time ");
        });
    }
