function weird(n) {
    if ((n % 2 === 0) && (2 <= n && n <= 5)) {
        return "Not Weird";
    } else if((n % 2 === 0) && (6 <= n && n <= 20)) {
        return "Weird";
    } else if((n % 2 === 0) && (n > 20)) {
        return "Not Weird";
    } else {
        return "Weird";
    }
}
function main() {
    var N = parseInt(readLine());
    console.log(weird(N));

}
