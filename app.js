// ===== Part A =====

let sumA = 0;
for (let i = 0; i < ratings.length; i++) {
  sumA += ratings[i];
}
const averageA = sumA / ratings.length;
console.log(`A1 평균 평점: ${averageA}`);

let maxA = 0;
for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] > ratings[maxA]) {
    maxA = i;
  }
}
console.log(`A2 최고 평점: ${titles[maxA]} ${ratings[maxA]}`);

let over8A = 0;
for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] >= 8) {
    over8A++;
  }
}
console.log(`A3 8점 이상: ${over8A}편`);

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


// ===== Part B =====

// getAverageRating : movies 배열 ⇒ 평균 평점(숫자)
function getAverageRating(movieList) {
  let sumB = 0;
  for (let i = 0; i < movieList.length; i++) {
    sumB += movieList[i].rating;
  }
  return sumB / movieList.length;
}

// getBestMovie : movies 배열 ⇒ 최고 평점 영화 객체
function getBestMovie(movieList) {
  let bestIdx = 0;
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].rating > movieList[bestIdx].rating) {
      bestIdx = i;
    }
  }
  return movieList[bestIdx];
}

// getHighRatingCount : movies 배열, 기준 평점(number) ⇒ 조건 만족 영화 수(number)
function getHighRatingCount(movieList, criteria) {
  let countB = 0;
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].rating >= criteria) {
      countB++;
    }
  }
  return countB;
}

// getDecadeCounts : movies 배열 ⇒ 연도대별 영화 수 객체
function getDecadeCounts(movieList) {
  let counts = { "2020년대": 0, "2010년대": 0, "2000년대": 0, "그 이전": 0 };
  for (let i = 0; i < movieList.length; i++) {
    const yr = movieList[i].year;
    const dec = yr - (yr % 10);
    switch (dec) {
      case 2020:
        counts["2020년대"]++;
        break;
      case 2010:
        counts["2010년대"]++;
        break;
      case 2000:
        counts["2000년대"]++;
        break;
      default:
        counts["그 이전"]++;
        break;
    }
  }
  return counts;
}

// getMillionAudienceTitles : movies 배열 ⇒ 관객 100만 이상 영화 제목 배열
function getMillionAudienceTitles(movieList) {
  let resultTitles = [];
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].audience >= 1000000) {
      resultTitles.push(movieList[i].title);
    }
  }
  return resultTitles;
}

// getMoviesByType : movies 배열, 타입 문자열("mine" 또는 "boxoffice") ⇒ 해당 타입 영화 객체 배열
function getMoviesByType(movieList, typeStr) {
  let typeList = [];
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].type === typeStr) {
      typeList.push(movieList[i]);
    }
  }
  return typeList;
}

// getTotalAudience : movies 배열 ⇒ 총 누적 관객 수 합계(number)
function getTotalAudience(movieList) {
  let totalAud = 0;
  for (let i = 0; i < movieList.length; i++) {
    totalAud += movieList[i].audience;
  }
  return totalAud;
}

// sortBy : 배열, 기준 키, 내림차순 여부 ⇒ 정렬된 새 배열
function sortBy(list, key, desc = false) {
  const sign = desc ? -1 : 1;
  return [...list].sort((a, b) => {
    let result = 0;
    if (typeof a[key] === "string") {
      result = a[key].localeCompare(b[key]);
    } else {
      result = a[key] - b[key];
    }
    return result * sign;
  });
}

// search : 배열, 검색어 ⇒ 검색된 영화 객체 배열
function searchMovies(list, keyword) {
  const searchTerm = keyword.trim().toLowerCase();
  let searchResult = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].title.toLowerCase().includes(searchTerm)) {
      searchResult.push(list[i]);
    }
  }
  return searchResult;
}


// ===== Part B 출력 (웹페이지 #out 요소에 3줄 표시) =====

function getYearsSince(year) {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}

function formatNumber(num) {
  return num.toLocaleString();
}

const bestMovie = getBestMovie(movies);
const yearsSinceReleased = getYearsSince(bestMovie.year);
const topAudienceMovie = sortBy(movies, "audience", true)[0];
const avgRating = getAverageRating(movies);

const line1 = `전체 10편, 평균 평점 ${avgRating.toFixed(1)}점`;
const line2 = `최고 평점 ${bestMovie.title} (${bestMovie.rating}점, 개봉한 지 ${yearsSinceReleased}년)`;
const line3 = `관객 1위 ${topAudienceMovie.title} (누적 ${formatNumber(topAudienceMovie.audience)}명)`;

const outputText = `${line1}\n${line2}\n${line3}`;

document.getElementById("out").textContent = outputText;
