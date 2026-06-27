# 📋 Changelog

이 프로젝트의 모든 주요 변경 사항을 기록합니다.


---

## [1.0.3] - 2026-06-27

### ✨ Added

- CSS 파일 구조 분리
- `base.css`, `effects.css`, `layout.css`, `hero.css`, `components.css`, `pages.css`, `animations.css`, `icons.css`, `responsive.css`, `polish.css` 구조 적용
- 최종 디자인 보정용 `polish.css` 추가
- 디자인 토큰 시스템 적용
- 프로젝트 상세 페이지 내용 확장
- 프로젝트 정보 요약 섹션 추가
- 개발 과정 섹션 추가
- 어려웠던 점과 해결 방법 섹션 추가
- 앞으로 개선할 점 섹션 추가
- Home Hero 카드에 직접 제작한 로고 이미지 적용
- Home Hero 카드에 한국어 이름 `이동윤` 표시
- Home Next Pages 섹션에 Projects 가로형 카드 추가

### 🎨 Improved

- 전체 색감 및 여백 시스템 개선
- 버튼 시스템 정리
- 카드 시스템 정리
- 태그 및 진행 바 스타일 정리
- 공통 카드 디자인 통일
- Projects 페이지 레이아웃 개선
- 대표 프로젝트 카드를 크게 보여주는 구조로 변경
- Contact 페이지 카드 레이아웃 개선
- Email / GitHub / Phone 카드 가독성 개선
- Project Detail 페이지 디자인 완성도 향상
- 모바일 화면에서 버튼과 카드 간격 개선
- 전체 UI의 색상, 그림자, 둥근 모서리, 여백 정리

### 🛠 Fixed

- GitHub 아이콘이 표시되지 않던 문제 수정
- Font Awesome 의존성 제거
- GitHub 브랜드 아이콘을 직접 SVG로 적용
- 아이콘 추가 과정에서 발생한 버튼 내부 아이콘 표시 문제 수정
- Contact 카드 레이아웃이 깨지던 문제 수정
- 프로젝트 카드가 좁게 보이던 문제 수정
- Hero 로고 이미지가 기존 원형 배경과 겹쳐 보이던 문제 수정
- CSS 중복 코드 정리
- 버튼 아이콘 관련 중복 스타일 제거

### 🧹 Refactor

- CSS 구조 리팩토링
- 역할별 CSS 파일 분리
- 디자인 토큰 정리
- 공통 컴포넌트 스타일 정리
- 버튼 / 카드 / 태그 / 진행 바 스타일 구조화
- 아이콘 시스템 정리
- 유지보수하기 쉬운 CSS 구조로 개선

### 📝 Notes

- v1.0.3은 CSS 구조 리팩토링과 디자인 시스템 정리를 중심으로 한 업데이트입니다.
- 다음 버전에서는 새로운 프로젝트 추가와 프로젝트 상세 페이지 확장을 진행할 예정입니다.

---

## [1.0.2] - 2026-06-27

### ✨ Added
- Hero 섹션 디자인 리뉴얼
- 새로운 Hero 레이아웃 적용
- 새로운 버튼 디자인 시스템 추가
- 카드 디자인 시스템 개선
- 404 페이지 추가
- 로딩 화면(Loader) 추가

### 🎨 Improved
- Landing Page 디자인 개선
- Hero 시각적 완성도 향상
- 버튼 Hover 애니메이션 개선
- 버튼 Glow 효과 추가
- 버튼 Shine 효과 추가
- 버튼 클릭 애니메이션 추가
- 카드 Hover 애니메이션 개선
- Reveal 애니메이션 개선
- Scroll Down 애니메이션 개선
- Hero Float 애니메이션 개선
- 전체 UI 디자인 통일

### 🛠 Fixed
- Contact 페이지 레이아웃 수정
- Hero 소개 문구 개선
- Projects 페이지 연결 수정
- Contact 버튼 연결 수정
- GitHub Pages 배포 오류 수정
- Git 인증 및 Push 오류 해결

### 📝 Notes
- CSS 리팩토링과 아이콘 시스템은 v1.0.3으로 연기

---

## [v1.0.1] - 2026-06-27

### ✨ Added
- GitHub Pages를 이용한 웹사이트 배포
- Favicon 추가
- Thumbnail 이미지 추가
- SEO(Search Engine Optimization) 메타 태그 적용
- Open Graph(OG) 메타 태그 적용
- Twitter Card 메타 태그 적용
- 랜덤 Loading 메시지 시스템
- 404 오류 페이지 추가

### 🎨 Improved
- 페이지별 브라우저 제목(Title) 적용
- CSS 코드 가독성 개선 및 구조 정리
- Skills 진행 바 애니메이션 개선
- 사이트 메타데이터 구성 개선
- 프로젝트 전체 완성도 향상

### 🐛 Fixed
- CSS 문법 오류 수정
- 로딩 화면 동작 개선
- 페이지별 `<head>` 메타데이터 구성 수정

---

## [v1.0.0] - 2026-06-26

### 🎉 Initial Release

#### Pages
- Home
- Journey
- Skills
- Awards
- Projects
- Project Detail
- Contact

#### Features
- 반응형 디자인
- Hero 섹션
- 자기소개
- 개발 성장 과정(Journey)
- 기술 스택(Skills)
- 수상 내역(Awards)
- 프로젝트 소개(Projects)
- 프로젝트 상세 페이지
- 연락처(Contact)
- 로딩 화면
- 별 배경 애니메이션
- Aurora 배경 효과
- Reveal 스크롤 애니메이션
- 타이핑 애니메이션
- 커스텀 마우스 커서
- Magnetic 버튼 효과
- 3D Tilt 카드 효과

---

## 📝 What's Next?

앞으로 추가될 기능과 개발 계획은 **[TODO.md](TODO.md)** 에서 확인할 수 있습니다.
