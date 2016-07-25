function processData(input) {
    //Enter your code here
    var input_array = input.split('\n');
    var cost = input_array[0];
    var tipPercent = input_array[1];
    var taxPercent = input_array[2];
    var tip = cost * (tipPercent\100);
    var tax = cost * (taxPercent\100);
    var totalCost = cost + tip + tax;

    console.log("The total meal cost is " + totalCost + " dollars.");
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
