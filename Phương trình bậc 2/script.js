function giaiPhuongTrinhBacHai(a, b, c) {
  if (a === 0) {
    if (b === 0) {
      return c === 0
        ? "phương trình có vô số nghiệm"
        : "phương trình vô nghiệm";
    }

    return `Phương trình có nghiệm x = ${-c / b}`;
  }

  console.log(a);
  console.log(b);
  console.log(c);

  let delta = b * b - 4 * a * c;
  console.log("Delta", delta);
  if (delta < 0) {
    return "phương trình vô nghiệm";
  } else if (delta === 0) {
    let x = (-b / 2) * a;
    return `Phương trình có nghiệm x = ${x}`;
  } else {
    console.log("delta", Math.sqrt(delta));
    let x1 = ((-b - Math.sqrt(delta)) / 2) * a;
    console.log("x1", x1);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    console.log("x2", x2);
    return `Phương trình có 2 nghiệm khác biệt x1 = ${x1} , x2 = ${x2}`;
  }
}
const result = giaiPhuongTrinhBacHai(1, -49, -50);
console.log(result);
