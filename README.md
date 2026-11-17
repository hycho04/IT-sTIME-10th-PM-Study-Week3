# WATT IF · 화면·기능 통합 문서와 Live Demo

WATT IF의 화면 정의서, 기능명세서, 문서용 와이어프레임 미리보기와 실제 조작 가능한 React 데모를 한 사이트에서 확인할 수 있습니다. 팀원이 같은 화면 ID·기능 ID를 기준으로 기획 의도와 구현 결과를 함께 볼 수 있도록 만들었습니다.

다른 프로젝트에서 같은 문서 사이트를 만들 때 쓸 수 있는 한 번 입력용 통합 프롬프트와 배포 안내는 [GUIDE-KR.md](./GUIDE-KR.md)에 있습니다.

## 메뉴

- **전체 흐름 보기:** Notion 화면 정의서의 12개 화면을 ID와 진입·종료 경로로 탐색합니다.
- **문서 보기:** 화면 목적, 이동 경로, 구성 요소, 상태·예외, 연결된 Feature ID와 상세 로직을 화면별로 읽습니다.
- **시연하기:** 실제 React UI에서 캠핑 설정, 프리셋, 차량 제어, 종료·점검 흐름을 조작합니다.

문서의 구성 요소 번호를 선택하면 설명으로 이동합니다. 초록 점선으로 표시한 영역은 실제 데모에서 조작할 수 있습니다. 화면 정의의 원문은 Notion 페이지로 연결됩니다.

## 실행 방법

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
```

## 자료와 와이어프레임 범위

화면 12개와 기능 17개는 제공된 Notion 데이터베이스 스냅샷 `src/specData.json`에서 가져옵니다. 앱은 원문에 기록된 화면 ID, Feature ID, 목적, 경로, 주요 구성, 주요 동작, 상태·예외, 기능 유형·중요도, 데이터 로직과 제한사항을 표시합니다.

제공 자료에서 Figma 프레임 URL과 원본 구성 요소 번호를 확인하지 못했습니다. 따라서 문서 화면의 시각 미리보기는 화면 정의에 적힌 구성 요소를 바탕으로 생성하며, 표시 번호는 문서 탐색용입니다. 원본 Figma 와이어프레임이나 번호로 오인하지 않도록 화면에 안내합니다. Notion 원문에 별도 필드가 없는 Actor, Trigger, 선행 조건, QA 기준도 임의로 채우지 않고 미기재로 표시합니다.

## Demo 데이터와 제한

정적 Live Demo이며 실제 차량 SDK, 날씨 API, 지도/목적지 API, RoomDB 또는 서버와 연결하지 않습니다. 차량 상태·날씨·목적지 거리·캠핑 기록은 `src/mockData.ts`와 화면 상태로 제공합니다. 야간 모드 외의 진행 중 캠핑 상태는 새로고침 후 유지되지 않습니다.

## 기술 구성

React, Vite, TypeScript, Tailwind CSS, React Router, Lucide React

## Vercel 배포

GitHub 저장소를 Vercel에 연결하고 기본 설정을 확인합니다.

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: `package.json`이 있는 폴더 (저장소 루트라면 `./`)
