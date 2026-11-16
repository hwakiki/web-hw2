// ===== Part A =====

// A1: 평균 평점 계산
let sumA = 0;
for (let i = 0; i < ratings.length; i++) {
  sumA += ratings[i];
}
const averageA = sumA / ratings.length;
console.log(`A1 평균 평점: ${averageA}`);

// A2: 최고 평점 영화의 제목과 평점
let maxA = 0;
for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] > ratings[maxA]) {
    maxA = i;
  }
}
console.log(`A2 최고 평점: ${titles[maxA]} ${ratings[maxA]}`);

// A3: 8점 이상인 영화 수
let over8A = 0;
for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] >= 8) {
    over8A++;
  }
}
console.log(`A3 8점 이상: ${over8A}편`);

// A4: 연도대별 영화 수
let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countOtherA = 0;

for (let i = 0; i < years.length; i++) {
  const decade = years[i] - (years[i] % 10);
  switch (decade) {
    case 2020:
      count2020A++;
      break;
    case 2010:
      count2010A++;
      break;
    case 2000:
      count2000A++;
      break;
    default:
      countOtherA++;
      break;
  }
}
console.log(`A4 2020년대 ${count2020A}편, 2010년대 ${count2010A}편, 2000년대 ${count2000A}편, 그 이전 ${countOtherA}편`);

// A5: 누적 관객 100만 이상인 영화 제목
let bigA = "";
for (let i = 0; i < audiences.length; i++) {
  if (audiences[i] >= 1000000) {
    bigA += titles[i] + " ";
  }
}
if (bigA === "") {
  bigA = "없음";
}
console.log(`A5 관객 100만 이상: ${bigA.trim()}`);
```[cite: 4]

