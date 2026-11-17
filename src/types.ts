export type Preset = '휴식 모드' | '미디어 모드' | '취침 모드'

export type CampingRecord = {
  id: number
  date: string
  name: string
  duration: string
  batteryDelta: string
  mode: Preset
  meta: string
}

export type CampingPlan = {
  name: string
  destination: string
  reserveBattery: number
}

