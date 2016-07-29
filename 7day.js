function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    arr = arr.reverse();
    var result = arr.join(' ');
    console.log(result);
}
