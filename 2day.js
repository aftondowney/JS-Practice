function processData(input) {
    //Enter your code here
    var input_array = input.split('\n');
    var cost = parseFloat(input_array[0]);
    var tipAmount = parseInt(input_array[1]);
    var taxAmount = parseInt(input_array[2]);
    var tip = cost * (tipAmount / 100);
    var tax = cost * (taxAmount/100);
    var totalCost = (cost + tip + tax);
    totalCost = Math.round(totalCost);

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
