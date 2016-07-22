
    // Declare second integer, double, and String variables.
    var int;
    var double;
    var string = "";
    // Read and save an integer, double, and String to your variables.
    int = parseInt(readLine());
    double = parseFloat(readLine());
    string = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + int);
    // Print the sum of the double variables on a new line.
    var sum_double = (d + double);
    if (sum_double % 1 === 0) {
        console.log(sum_double.toFixed(1));
    } else {
        console.log(sum_double);
    }
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + string);
