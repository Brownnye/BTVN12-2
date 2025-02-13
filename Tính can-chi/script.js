function tinhCanChi(nam) {
  const danhsachcan = [
    "Canh",
    "Tân",
    "Nhâm",
    "Quý",
    "Giáp", 
    "Ất",
    "Bính",
    "Đinh",
    "Mậu",
    "Kỷ",
  ];
  const danhsachchi = [
    "Thân",
    "Dậu",
    "Tuất",
    "Hợi",
    "Tý",
    "Sửu",
    "Dần",
    "Mão",
    "Thìn",
    "Tỵ",
    "Ngọ",
    "Mùi",
  ];

  let can = danhsachcan[nam % 10];
  let chi = danhsachchi[nam % 12];

  return `${can} ${chi}`;
}
console.log(tinhCanChi(2003));
console.log(tinhCanChi(2006));
console.log(tinhCanChi(2009));
