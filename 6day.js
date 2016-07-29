function processData(input) {
    //Enter your code here
    var input_array = input.split("\n");
    var even_array = [];
    var odd_array = [];
    input_array.splice(0, 1);
    input_array.forEach(function(word) {
        even_array = [];
        odd_array = [];
        var char_array = word.split("");
            for (i = 0; i <= char_array.length; i++) {
                if (i % 2 !== 0) {
                odd_array.push(char_array[i]);
                } else {
                even_array.push(char_array[i]);
                }
            }
        console.log(even_array.join("") + " " + odd_array.join(""));
   });

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
