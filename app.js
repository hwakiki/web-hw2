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

function averageBy(list, key) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i][key];
  }
  return sum / list.length;
}

function average(movieList) {
  return averageBy(movieList, "rating");
}

function best(movieList) {
  let bestIdx = 0;
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].rating > movieList[bestIdx].rating) {
      bestIdx = i;
    }
  }
  return movieList[bestIdx];
}

function filterByRating(movieList, criteria) {
  let filtered = [];
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].rating >= criteria) {
      filtered.push(movieList[i]);
    }
  }
  return filtered;
}

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

function getMillionAudienceTitles(movieList) {
  let resultTitles = [];
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].audience >= 1000000) {
      resultTitles.push(movieList[i].title);
    }
  }
  return resultTitles;
}

function getMoviesByType(movieList, typeStr) {
  let typeList = [];
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].type === typeStr) {
      typeList.push(movieList[i]);
    }
  }
  return typeList;
}

function getTotalAudience(movieList) {
  let totalAud = 0;
  for (let i = 0; i < movieList.length; i++) {
    totalAud += movieList[i].audience;
  }
  return totalAud;
}

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

function search(list, keyword) {
  const searchTerm = keyword.trim().toLowerCase();
  let searchResult = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].title.toLowerCase().includes(searchTerm)) {
      searchResult.push(list[i]);
    }
  }
  return searchResult;
}


// ===== Part C =====

function getList(data) {
    return data.results;
}

function averageBy(list, key) {
    if (!list || list.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i][key];
    }
    return sum / list.length;
}

function average(list) {
    return averageBy(list, "rating");
}

console.log(`C1: page: ${TMDB.page}, total_pages: ${TMDB.total_pages}, total_results: ${TMDB.total_results}, 이번 응답 영화 수: ${getList(TMDB).length}`);
console.log(`C2: 상영작 평균 평점: ${averageBy(getList(TMDB), "vote_average").toFixed(1)}`);

console.table(sortBy(getList(TMDB), "vote_average", true).slice(0, 5), ["title", "release_date", "vote_average"]);

const searchKeyword = getList(TMDB)[0].title.substring(0, 2);
console.log(`C4: '${searchKeyword}' 검색 개수: ${search(getList(TMDB), searchKeyword).length}`);
