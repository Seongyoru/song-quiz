# SONG QUIZ

팬이 만든 비공식 곡 퀴즈. 아티스트별로 다섯 가지 모드가 있다. (지금은 Mrs. GREEN APPLE 129곡)

- **힌트 퀴즈** (스무고개) : 막연한 힌트(시기 · 발매 연도 · 형태)부터 하나씩 열고, 갈수록 앨범 · 트랙 번호 · 타이업 작품 · 발매일 · 첫 글자처럼 확실한 힌트가 나온다. 답을 적어 「답 확인」, 또는 「정답 공개」. 정답 때 공식 MV → 공식 영상 → 리릭 비디오 → 공식 음원 → 라이브 순으로 찾은 영상을 틀고, 없으면 Apple Music 앨범 커버 · 30초 미리듣기
- **듣기 퀴즈** : 청사과 턴테이블로 가린 채 일부분만 들려준다. 인트로 Q / 배속 Q(하이라이트 1.5x · 2x) / 아웃트로 Q. 3초부터 3초씩 15초까지 더 듣기
- **JAM'S 퀴즈** : 멤버 · 밴드에 관한 4지선다 38문제 중 한 판 10문제 (일본어 위키백과의 공개 정보, `js/artists/mga-trivia.js`)
- **Up & Down** : 다음 곡이 더 나중 / 먼저 (발매일), MV 조회수가 많다 / 적다 (조회수)
- **월드컵** : 8 ~ 64강. 공식 라이브 · 오케스트라 영상(라이브가 없는 곡은 MV)을 둘씩 띄워 놓고 고른다. 같은 곡도 공연마다 따로 나온다

「크게 보기」 · 「전체 화면」으로 여럿이 함께 보기 좋다. 정답 때 축하 효과(꽃가루 · 이모지 비 · 불꽃놀이 · 별)와 효과음이 나온다.

## 실행

정적 사이트라 아무 웹서버로나 열면 된다. (유튜브 재생 때문에 `127.0.0.1` 대신 `localhost` 로 연다)

```
python -m http.server 5180
```

## 파일

- `js/app.js` 화면 · 게임 규칙
- `js/fx.js` 축하 효과
- `js/i18n.js` 한국어 · 日本語 · English
- `js/artists/mga.js` 곡 데이터 (일본어 위키백과 기준, 2026-11 확인)
- `js/artists/mga-media.js` 정답 때 틀 공식 영상
- `js/artists/mga-live.js` 월드컵 라이브 영상 · Up & Down 조회수 (2026-11-19 기준)
- `js/artists/mga-clips.js` 듣기 퀴즈 구간 (첫 박 · 하이라이트 · 끝)
- `sounds/` 효과음

## 아티스트 추가

`js/artists/` 에 같은 꼴의 파일을 만들고 `index.html` 에 script 를 추가한다.

곡 항목

| 키 | 뜻 |
| --- | --- |
| `t` | 원래 제목 |
| `ko` / `en` / `alias` | 한국어 읽기 · 로마자/영어 · 그 밖에 정답으로 받을 말 (`|` 로 구분) |
| `d` | 처음 나온 날 `YYYY-MM-DD` |
| `dq` | 날짜가 확실하지 않으면 `true` (Up & Down 발매일에서 빠짐) |
| `type` | `single` (CD 싱글 표제곡) / `coupling` (커플링) / `digital` (배포 싱글) / `album` / `ep` (미니 앨범) / `best` (베스트 신곡) |
| `rel` | 커플링이면 표제곡 이름 |
| `album` / `track` | 처음 실린 앨범 이름 (`albums` 에 날짜 · 종류와 함께 적어 둔다)과 트랙 번호, 없으면 `null` |
| `tie` / `tieName` | `anime` / `drama` / `movie` / `cm` / `tv` / `game` / `other` / `null` (확인된 것만) |

## 효과음

모두 Freesound 의 CC0 (퍼블릭 도메인) 소리.

| 파일 | 원래 제목 | 만든 사람 | 출처 |
| --- | --- | --- | --- |
| hint.ogg | Pop sound | deraj | https://freesound.org/people/deraj/sounds/202230/ |
| correct.ogg | Correct Answer / That's Right! | Beetlemuse | https://freesound.org/people/Beetlemuse/sounds/528957/ |
| wrong.ogg | Wrong Answer | -Andreas | https://freesound.org/people/-Andreas/sounds/648462/ |
| reveal.ogg | Tada Fanfare A | plasterbrain | https://freesound.org/people/plasterbrain/sounds/397355/ |
| up-right.ogg | Retro, Coin 01 | LilMati | https://freesound.org/people/LilMati/sounds/402067/ |
| up-wrong.ogg | Lose_Funny_Retro_Video Game | cabled_mess | https://freesound.org/people/cabled_mess/sounds/371451/ |
| pick.ogg | Affirmative decision chime | Raclure | https://freesound.org/people/Raclure/sounds/405547/ |
| champion.ogg | Success Fanfare Trumpets | FunWithSound | https://freesound.org/people/FunWithSound/sounds/456966/ |

## 알아 둘 것

- 비공식 팬메이드. 곡 · 영상 파일은 들어 있지 않고, 영상은 유튜브 공식 플레이어로 공식 채널 영상을 재생한다
- 듣기 퀴즈는 플레이어를 가리개로 덮는다. 유튜브 이용 규칙상 회색 지대이고, 프리미엄이 아니면 문제마다 광고가 나올 수 있다
