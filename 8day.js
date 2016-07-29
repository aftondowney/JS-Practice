function processData(input) {
    //Enter your code here
    var phoneBook = new Map();
    input = input.split('\n');
    var n = input.splice(0,1);
    for (i = 0; i < n; i++) {
        var contact = input[i].split(' ');
        phoneBook.set(contact[0], contact[1]);
    }
    for (i = n; i < input.length; i++) {
        var number = phoneBook.get(input[i]);
        if (number === undefined) {
            console.log("Not found");
        } else {
            console.log(input[i] + "=" + number);
        }
    }

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
