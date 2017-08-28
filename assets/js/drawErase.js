/*
This file handles pen' and eraser' functions
*/

$(function()
{
  $("#pencil").click(function()
  {
    draw();
  });

  $("#eraser").click(function()
  {
    draw("white");
  });

  function draw(drawColor = $("#color").val())
  {
    var first_pos_x;
    var first_pos_y;
    var paint;
    var clickX = [];
    var clickY = [];
    var clickDrag = [];
    var clickColor = [];
    var clickSize = [];
    //Removes all prevent events on the canvas
    canvas.unbind();

    $("#color").change(function()
    {
      drawColor = $("#color").val();
    });

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
  
    /*
    Stock mouse' coordinates, color and line width choosen on click and move
    */
    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
      clickColor.push(drawColor);
      clickSize.push(lineWidth);
    }

    function draw()
    { 
      for (var i = 0; i < clickX.length; i++)
      {   
        context.beginPath();

        if (clickDrag[i] === true)
        {
          context.moveTo(clickX[i - 1], clickY[i - 1]);
        }
        else
        {
          context.moveTo(clickX[i] - 1, clickY[i]);
        }

        context.lineTo(clickX[i], clickY[i]);
        context.strokeStyle = clickColor[i];
        context.lineWidth = clickSize[i];
        context.stroke();
      }
    }

    canvas.mousedown(function(event)
    {
      first_pos_x = event.pageX - offset.left;
      first_pos_y = event.pageY - offset.top;

      paint = true;
      addClick(first_pos_x, first_pos_y);
    });

    canvas.mousemove(function(event)
    {
      //Check if mouse still on click and not out of canvas
      if (paint === true)
      {
        first_pos_x = event.pageX - offset.left;
        first_pos_y = event.pageY - offset.top;

        addClick(first_pos_x, first_pos_y, true);
        draw();
      }
    });

    canvas.mouseup(function(event)
    {
      paint = false;
    });

    canvas.mouseleave(function(event)
    {
      paint = false;
    });
  }
});