function weird(n) {
    if ((n % 2 === 0) && (1 < n < 6) ) {
        return "Not Weird";
    } else if(n% 2 === 0) && (5 < n < 21) {
        return "Weird";
    } else if(n % 2 === 0) && (n > 20) {
        return "Not Weird";
    } else {
        return "Weird";
    }
}
function main() {
    var N = parseInt(readLine());
    console.log(weird(N));

}
