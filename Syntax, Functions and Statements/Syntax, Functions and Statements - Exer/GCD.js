function greatestCommonDivisor(x, y) {
    while(y) {
        let t = y;
        y = x % y;
        x = t;
      }
      return x;
}
console.log(greatestCommonDivisor(54, 24));