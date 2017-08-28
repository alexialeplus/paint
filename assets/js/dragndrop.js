/*
This file handles the drag'n'drop function
Allows the user to drag and drop a image directly in the canvas
*/

$(function()
{
	canvas.on("drop", function(event)
	{
		//Prevent the browser from opening the file
		event.preventDefault();
		//Check if file type is an image
		if(event.originalEvent.dataTransfer.files[0].type.search("image") !== -1)
		{
			var url = URL.createObjectURL(event.originalEvent.dataTransfer.files[0]);
			var img = new Image();
			$(img).on("load", function()
			{
				context.drawImage(img, 0, 0);
			});

			$(img).attr("src", url);
		}
	});

	//Prevent the browser from opening the file
	canvas.on("dragover", function()
	{
		return false;
	});

	canvas.on("dragleave", function()
	{
		return false;
	});
});