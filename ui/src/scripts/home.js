/* index scripts */
    function getdatetime(){
        $.ajax({
          url: config.api_url,
          type: "GET"
        })
        .done(function( data ) {
          $("#msgtxt").html(data);
        })
        .fail(function( xhr, status, errorThrown ) {
          $("#msgtxt").html("There was a problem getting date time ");
        });
    }
