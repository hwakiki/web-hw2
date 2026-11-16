// ===== Part A: 10칸짜리 배열 4개 =====
const titles = [
  // 내 인생 영화 5편 (인덱스 0~4)
  "아이언맨",
  "아이언맨 2",
  "아이언맨 3",
  "인터스텔라",
  "스파이더맨: 브랜드 뉴 데이",
  // 박스오피스 1~5위 (인덱스 5~9)
  "극장판 치이카와: 인어 섬의 비밀",
  "암살자(들)",
  "실낙원",
  "클레이페이스",
  "타짜: 벨제붑의 노래"
];

const ratings = [
  // 내 인생 영화 5편 평점
  7.7,
  6.9,
  6.9,
  8.4,
  8.4,
  // 박스오피스 1~5위 평점 (숫자만)
  7.4,
  7.2,
  8.0,
  7.6,
  7.0
];

const years = [
  // 내 인생 영화 5편 개봉 연도 (숫자만)
  2008,
  2010,
  2013,
  2014,
  2026,
  // 박스오피스 1~5위 개봉 연도 (숫자만)
  2026,
  2026,
  2026,
  2026,
  2026
];

const audiences = [
  // 내 인생 영화 5편 누적 관객 (내 영화 5편은 0)
  0,
  0,
  0,
  0,
  0,
  // 박스오피스 1~5위 누적 관객 (콤마와 '명'을 제외한 숫자)
  2112684,
  3348403,
  82565,
  61177,
  1982705
];
```[cite: 2, 4]

---

### 2. `app.js` 파일 맨 위에 넣을 코드 (`// ===== Part A =====`)
```javascript
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
