# WATT IF · Live Demo

전기차 캠핑 중 배터리와 차량 설정을 한 화면에서 관리하는 모바일 우선 Live Demo입니다. Figma 와이어프레임과 Notion의 화면·기능 명세를 기준으로 구현했습니다.

## 실행 방법

```bash
npm install
npm run dev
```

검증 명령은 다음과 같습니다.

```bash
npm run lint
npm run build
```

## 구현 범위

- SCR-001/002: 캠핑 시작 전·진행 중 홈
- SCR-003/004: 목적지 미선택·선택 캠핑 계획
- SCR-005/006: 캠핑 기록 목록·상세
- SCR-007/008: 종료 요약·출발 전 점검
- SCR-012: 캠핑 종료 확인
- 주간/야간 모드, 프리셋, 개별 차량 설정, 배터리 계산, 기록 탐색
- 모바일 우선 반응형 레이아웃

## 데모 데이터와 제한

이 프로젝트는 정적 Live Demo이며 실제 차량 SDK, 날씨 API, 지도/목적지 API, RoomDB 또는 서버와 연결하지 않습니다. 차량 상태·날씨·목적지 거리·캠핑 기록은 `src/mockData.ts`와 화면 상태로 제공됩니다. 새로고침 후 캠핑 진행 상태와 수정 데이터는 유지되지 않으며, 야간 모드만 브라우저에 저장됩니다.

프리셋 적용 실패, 차량 데이터 오류, 배터리 기준 도달 화면의 UI는 구현되어 있으나 실제 SDK 오류를 발생시키는 별도 데모 제어 UI는 명세에 없어 노출하지 않았습니다.

## 기술 구성

React 19, Vite 7, TypeScript, Tailwind CSS 4, React Router, Lucide React

## 배포

Vercel에서 저장소를 Import하면 자동으로 Vite 프로젝트를 인식합니다.

- Build Command: `npm run build`
- Output Directory: `dist`
