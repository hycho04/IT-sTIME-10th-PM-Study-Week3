import type { CampingRecord, Preset } from './types'

export const presets: Array<{ name: Preset; info: string; values: [number, number, number, number] }> = [
  { name: '휴식 모드', info: '적당한 공조·은은한 조명', values: [22, 20, 3, 60] },
  { name: '미디어 모드', info: '화면 중심·조명 낮춤', values: [21, 10, 2, 80] },
  { name: '취침 모드', info: '조명·화면 밝기 최소화', values: [24, 0, 4, 10] },
]

export const records: CampingRecord[] = [
  { id: 1, date: '11.12', name: '한강 노을 캠핑', duration: '12h 34m', batteryDelta: '18%', mode: '휴식 모드', meta: '휴식 모드 8h · 취침 모드 3h' },
  { id: 2, date: '11.03', name: '가평 숲속 캠핑', duration: '09h 10m', batteryDelta: '14%', mode: '취침 모드', meta: '휴식 모드 6h · 취침 모드 3h' },
  { id: 3, date: '10.21', name: '을왕리 차박', duration: '11h 42m', batteryDelta: '21%', mode: '미디어 모드', meta: '휴식 모드 6h · 미디어 모드 5h' },
  { id: 4, date: '10.09', name: '남양주 새벽 캠핑', duration: '08h 55m', batteryDelta: '12%', mode: '휴식 모드', meta: '휴식 모드 6h · 취침 모드 2h' },
]

