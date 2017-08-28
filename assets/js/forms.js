/*
This files handles all the forms
*/

$(function()
{
  canvas = $("canvas");
  context = $("canvas")[0].getContext("2d");
  var nbClick = 0;
  offset = canvas.offset();
  color = $("#color").val();
  //Default line width
  lineWidth = 5;

  $("#smallsize").click(function()
  {
    lineWidth = 3;
  });

  $("#mediumsize").click(function()
  {
    lineWidth = 10;
  });

  $("#largesize").click(function()
  {
    lineWidth = 20;
  });

  $("#color").change(function()
  {
    color = $("#color").val();
  });

  //Draws a line with 2 clicks
  $("#line").click(function()
  {
    canvas.unbind();
    canvas.click(function(event)
    {
      nbClick++;
    
      if (nbClick === 1)
      {
        context.beginPath();
        context.moveTo(event.pageX - offset.left, event.pageY - offset.top);
      }

      else if (nbClick === 2)
      {
        context.lineTo(event.pageX - offset.left, event.pageY - offset.top);
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.stroke();

        nbClick = 0;
      }
    });
  });

  //Draws an empty rectangle with two clicks
  $("#rect").click(function()
  {
    var first_pos_x;
    var first_pos_y;
    canvas.unbind();

    canvas.click(function(event)
    {
      nbClick++;

      if (nbClick === 1)
      {
        first_pos_x = event.pageX - offset.left;
        first_pos_y = event.pageY - offset.top;
      }

      else if (nbClick === 2)
      {

        var width = (event.pageX - offset.left) - first_pos_x;
        var height = (event.pageY - offset.top) - first_pos_y;

        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.rect(first_pos_x, first_pos_y, width, height);
        context.stroke();

        nbClick = 0;
      }
    });
  });

  //Draws a full rectangle with two clicks (top left corner, bottom right corner)
  $("#fullrect").click(function()
  {
    var first_pos_x;
    var first_pos_y;
    canvas.unbind();

    canvas.click(function(event)
    {
      nbClick++;
    
      if (nbClick === 1)
      {
        first_pos_x = event.pageX - offset.left;
        first_pos_y = event.pageY - offset.top;
      }

      else if (nbClick === 2)
      {
        var width = (event.pageX - offset.left) - first_pos_x;
        var height = (event.pageY - offset.top) - first_pos_y;

        context.beginPath();
        context.strokeStyle = color;
        context.fillStyle = color;
        context.lineWidth = lineWidth;
        context.rect(first_pos_x, first_pos_y, width, height);
        context.fill();
        context.stroke();

        nbClick = 0;
      }
    });
  });

  //Draws an empty circle with two clicks, one for the center, the other for the radius
  $("#circle").click(function()
  {
    var first_pos_x;
    var first_pos_y;
    canvas.unbind();

    canvas.click(function(event)
    {
      nbClick++;

      if (nbClick === 1)
      {
        first_pos_x = event.pageX - offset.left;
        first_pos_y = event.pageY - offset.top;
      }

      else if (nbClick === 2)
      {
        if ((event.pageY - offset.top) - first_pos_y > 0)
        {
          var radius = (event.pageY - offset.top) - first_pos_y;
        }
        else
        {
          var radius = first_pos_y - (event.pageY - offset.top);
        }

        context.beginPath();
        context.arc(first_pos_x, first_pos_y, radius, 0, 2 * Math.PI);
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.stroke();

        nbClick = 0;
      }
    });
  });

  //Draws a full circle with two clicks, one for the center, the other for the radius
  $("#fullcircle").click(function()
  {
    var first_pos_x;
    var first_pos_y;
    canvas.unbind();

    canvas.click(function(event)
    {
      nbClick++;

      if (nbClick === 1)
      {
        first_pos_x = event.pageX - offset.left;
        first_pos_y = event.pageY - offset.top;
      }

      else if (nbClick === 2)
      {
        if ((event.pageY - offset.top) - first_pos_y > 0)
        {
          var radius = (event.pageY - offset.top) - first_pos_y;
        }
        else
        {
          var radius = first_pos_y - (event.pageY - offset.top);
        }

        context.beginPath();
        context.arc(first_pos_x, first_pos_y, radius, 0, 2 * Math.PI);
        context.lineWidth = lineWidth;
        context.fillStyle = color;
        context.strokeStyle = color;
        context.fill();
        context.stroke();

        nbClick = 0;
      }
    });
  });
});