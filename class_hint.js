
var one_array = ["DD", "DD", "DD"];

var another_array = ["DD", "  ", "DD"];

var a_third_array = ["dd", "DD", "dd"];

var space_array = ["", "", ""];

for (var j=0; j<3; j++) {

	var temp_string = one_array[j] + space_array[j] + another_array[j] + space_array[j] + a_third_array[j];

	console.log(temp_string);

}
