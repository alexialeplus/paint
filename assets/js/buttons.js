/*
This file handles clear', save' and open file' functions
*/

$(function()
{
  //Clear the canvas
  $("#clear_button").click(function()
  {
    var width = canvas.css("width").replace(/px/, "");
    var height = canvas.css("height").replace(/px/, "");
    context.clearRect(0, 0, width, height);
  });

  //Save the canvas
  $("#save_button").click(function()
  {
    var url = canvas[0].toDataURL("image/png");
    $("#save_button").attr("href", url);
  });

  //Allows the user to open a existing file in the canvas
  $("#selected_file").click(function()
  {
    $("#select_button").click();

    $("#select_button").change(function(event)
    {
      var img = new Image();
      var url = URL.createObjectURL(event.target.files[0]);

      $(img).on("load", function()
      {
        context.drawImage(img, 0, 0);
      });

      $(img).attr("src", url);
    });
  });
});