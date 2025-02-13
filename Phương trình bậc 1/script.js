function giaiPhuongTrinhBacNhat(a, b) {
  if (a === 0) {
    if (b === 0) {
      return "Phương trình vô số nghiệm";
    } else {
      return "Phương trình vô nghiệm";
    }
  } else {
    return `Phương trình có nghiệm x = ${-b / a}`;
  }
}

const result = giaiPhuongTrinhBacNhat(0, 1);
console.log(result);
