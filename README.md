# 실습과제 #2 : 영화 데이터를 자바스크립트로
- 이름 / 학번 :황규영 / 26 학번
- 사이트 주소 : https://hwakiki.github.io/web-hw2/
- 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 YYYY-MM-DD)
## 구현 항목 체크
[x] 요구사항 1: 영화 데이터 배열 가공 및 통계 출력
[x] 요구사항 2: 평균 평점 계산 함수 (average)
[x] 요구사항 3: 최고 평점 영화 검색 함수 (best)
[x] 요구사항 4: 기준 평점 이상 영화 필터링 함수 (filterByRating)
[x] 요구사항 5: 연도대별 영화 수 집계 함수 (getDecadeCounts)
[x] 요구사항 6: 관객 수 100만 이상 영화 제목 추출 함수 (getMillionAudienceTitles)
## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기)
| 번호 | 호출 | 기대 결과 | 실제 결과 |
| 1 | formatNumber("1234567") | '1,234,567' | '1,234,567' |
| 2 | average(movies).toFixed(1) | 손으로 계산한 평균의 소수 1자리(예 '7.0') | '7.6' |
| 3 | best(movies).title | A2와 같은 제목 | "인터스텔라"|
| 4 | sortBy(movies, "rating", true)[0].title | 3번과 같은 제목 (최고 평점이 두 편 이상이면 그중 하나) | "인터스텔라" |
| 5 | filterByRating(movies, 8).length | A3와 같은 개수 | 3 |
| 6 | search(movies, " 인터 ").length | 제목에 "인터"가 든 영화 수 | 1 |
| 7 | yearsSince("2014-11-06") | 올해 연도에서 2014를 뺀 값 (2026년이면 12) | 12 |
| 8 | 4번 실행 뒤 movies[0].title | data.js의 첫 영화 제목 그대로 | "아이언맨" |
## 어려웠던 점 3가지와 해결

어려웠던 점: 인터넷 브라우저 콘솔창에 직접 코드를 쳐야 하는지, VS Code의 app.js 파일에 작성해야 하는지 처음에 위치를 잡기가 헷갈렸다.
해결: app.js 파일의 알맞은 위치에 코드를 작성하고 저장한 뒤 브라우저를 새로고침하는 방식을 정확히 익혀 해결했다.

어려웠던 점: TMDB에서 복사해 온 엄청나게 길고 복잡한 데이터(JSON)를 tmdb.js 파일에 형식에 맞게 틀리지 않고 붙여넣는 과정이 조심스러웠습니다.
해결: const TMDB =  기호를 앞에 붙이고 맨 끝에 세미콜론(;)을 정확히 찍어주어 데이터를 오류 없이 불러올 수 있게 처리했습니다.

어려웠던 점: 안내서 예시처럼 영화 상위 5개 표와 글자들을 콘솔창에 깔끔하게 맞추는 게 너무 헷갈렸다
해결: console.table과 console.log를 사용해 요구하는 모양대로 출력했다.
## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어)

## 생성형 AI 사용 내역 (없으면 "없음")
- 질문 요지 : 여태까지 내가 적은 자가표를 적기 쉽게 정렬 
- 답변 요약 : 1	formatNumber("1234567")	'1,234,567'	'1,234,567'
2	average(movies).toFixed(1)	손으로 계산한 평균의 소수 1자리 (예 '7.0')	'7.6'
3	best(movies).title	A2와 같은 제목	"인터스텔라"
4	sortBy(movies, "rating", true)[0].title	3번과 같은 제목 (최고 평점이 두 편 이상이면 그중 하나)	"인터스텔라"
5	filterByRating(movies, 8).length	A3와 같은 개수	3
6	search(movies, " 인터 ").length	제목에 "인터"가 든 영화 수	1
7	yearsSince("2014-11-06")	올해 연도에서 2014를 뺀 값 (2026년이면 12)	12
8	4번 실행 뒤 movies[0].title	data.js의 첫 영화 제목 그대로	"아이언맨"
- 채택 여부 : 채택
