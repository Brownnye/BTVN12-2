function cachtinhnamnhuan(a) {
  if (a % 4 === 0) {
    if (a % 100 === 0) {
      if (a % 400 === 0) {
        return `${a} là năm nhuận`;
      } else {
        return `${a} không phải là năm nhuận`;
      }
    } else {
      return `${a} là năm nhuận`;
    }
  } else {
    return `${a} không phải là năm nhuận`;
  }
}
const result = cachtinhnamnhuan(2048);
console.log(result);
