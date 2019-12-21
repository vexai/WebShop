//declare an array
var my_array = new Array();

//get all instances of the SPAN tag and iterate through each one
$('div.Parent div.childOne span').each(function(){

    //build an associative array that assigns the span's id as the array id
    //assign the inner value of the span to the array piece
    //the single quotes and plus symbols are important in my_array[''++'']
    my_array[''+$(this).attr('id')+''] = $(this).text();

    //this code assigns the values to a non-associative array
    //use either this code or the code above depending on your needs
    my_array.push($(this).text());
});


console.log(my_array)