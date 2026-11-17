import { useEffect, useState } from 'react'
import { Check, ChevronRight, Moon, Plus, RotateCcw, Sun, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { presets, records } from './mockData'
import DocPortal, { PortalChrome } from './DocPortal'
import type { CampingPlan, CampingRecord, Preset } from './types'

type Dialog = 'plan' | 'record' | 'end' | 'summary' | 'check' | 'battery' | 'preset-error' | 'vehicle-error' | null

const initialPlan: CampingPlan = { name: '한강 노을 캠핑', destination: '', reserveBattery: 20 }

function App() {
  const location = useLocation()
  if (!location.pathname.startsWith('/demo')) return <DocPortal />
  const screen = new URLSearchParams(location.search).get('screen') ?? 'SCR-001'
  return <div className="portal"><PortalChrome tab="demo" selected={screen} /><DemoApp initialScreen={screen} /></div>
}

function DemoApp({ initialScreen }: { initialScreen: string }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [dark, setDark] = useState(() => localStorage.getItem('watt-if-theme') === 'dark')
  const [running, setRunning] = useState(['SCR-002', 'SCR-009', 'SCR-012'].includes(initialScreen))
  const initialDialogs: Record<string, Dialog> = { 'SCR-003': 'plan', 'SCR-004': 'plan', 'SCR-006': 'record', 'SCR-007': 'summary', 'SCR-008': 'check', 'SCR-009': 'battery', 'SCR-010': 'preset-error', 'SCR-011': 'vehicle-error', 'SCR-012': 'end' }
  const [dialog, setDialog] = useState<Dialog>(initialDialogs[initialScreen] ?? null)
  const [plan, setPlan] = useState<CampingPlan>({ ...initialPlan, destination: initialScreen === 'SCR-004' ? '서울 성수동' : '' })
  const [draft, setDraft] = useState<CampingPlan>({ ...initialPlan, destination: initialScreen === 'SCR-004' ? '서울 성수동' : '' })
  const [preset, setPreset] = useState<Preset>('휴식 모드')
  const [controls, setControls] = useState<[number, number, number, number]>([22, 20, 3, 60])
  const [toast, setToast] = useState('')
  const [selectedRecord, setSelectedRecord] = useState<CampingRecord | null>(initialScreen === 'SCR-006' ? records[0] : null)
  const [checks, setChecks] = useState([false, false, false])

  const isRecords = location.pathname.endsWith('/records') || (location.pathname === '/demo' && initialScreen === 'SCR-005')
  const availableBattery = Math.max(0, 82 - draft.reserveBattery - (draft.destination ? 14 : 0))

  useEffect(() => {
    localStorage.setItem('watt-if-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(''), 2200)
    return () => window.clearTimeout(id)
  }, [toast])

  const openPlan = () => {
    setDraft(plan)
    setDialog('plan')
  }

  const applyPreset = (name: Preset) => {
    const selected = presets.find((item) => item.name === name)!
    setPreset(name)
    setControls(selected.values)
    if (name === '취침 모드') setDark(true)
    setToast(`${name}를 적용했어요`)
  }

  const savePlan = () => {
    if (availableBattery <= 0) return
    setPlan(draft)
    setRunning(true)
    setPreset('휴식 모드')
    setControls(presets[0].values)
    setDialog(null)
    navigate('/demo/camping')
    setToast('캠핑을 시작했어요')
  }

  const completeEnd = (save: boolean) => {
    setDialog('summary')
    setRunning(false)
    if (!save) setToast('기록을 저장하지 않았어요')
  }

  const openRecord = (record: CampingRecord) => {
    setSelectedRecord(record)
    setDialog('record')
  }

  return (
    <div className={`app-shell ${dark ? 'dark' : ''}`}>
      <header className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-5 md:px-10 md:py-8">
        <button className="flex items-center gap-3" onClick={() => navigate('/demo/camping')} aria-label="캠핑 홈으로 이동">
          <span className="grid size-10 place-items-center rounded-full bg-ink text-sm font-black text-white dark:bg-white dark:text-ink">W</span>
          <span className="hidden text-sm font-bold tracking-[.18em] sm:block">WATT IF</span>
        </button>
        <nav className="flex rounded-full p-1 soft" aria-label="주요 메뉴">
          <button onClick={() => navigate('/demo/camping')} className={`min-w-24 rounded-full px-5 py-3 text-sm font-bold transition ${!isRecords ? 'bg-ink text-white dark:bg-white dark:text-ink' : ''}`}>캠핑</button>
          <button onClick={() => navigate('/demo/records')} className={`min-w-24 rounded-full px-5 py-3 text-sm font-bold transition ${isRecords ? 'bg-ink text-white dark:bg-white dark:text-ink' : ''}`}>기록</button>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs muted md:block">차량 연결됨 · 방금 업데이트</span>
          <button onClick={() => setDark(!dark)} className="grid size-11 place-items-center rounded-full soft" aria-label={dark ? '주간 모드' : '야간 모드'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1500px] px-5 pb-14 md:px-10">
        {isRecords ? <RecordsScreen openRecord={openRecord} /> : <CampingScreen running={running} plan={plan} preset={preset} controls={controls} setControls={setControls} openPlan={openPlan} applyPreset={applyPreset} onEnd={() => setDialog('end')} />}
      </main>

      {dialog === 'plan' && <PlanPanel draft={draft} setDraft={setDraft} available={availableBattery} running={running} onClose={() => setDialog(null)} onSave={savePlan} />}
      {dialog === 'record' && selectedRecord && <RecordModal record={selectedRecord} onClose={() => setDialog(null)} onCheck={() => { setDialog('check'); setChecks([false, false, false]) }} />}
      {dialog === 'end' && <EndDialog onCancel={() => setDialog(null)} onEnd={completeEnd} />}
      {dialog === 'summary' && <Summary onConfirm={() => { setDialog('check'); setChecks([false, false, false]) }} />}
      {dialog === 'check' && <Checklist checks={checks} setChecks={setChecks} onLater={() => { setDialog(null); navigate('/demo/records') }} onComplete={() => { setDialog(null); navigate('/demo/records'); setToast('출발 전 점검을 완료했어요') }} />}
      {dialog === 'battery' && <Notice title="출발용 배터리를 남겨둘 시간이에요" body="현재 42% · 설정한 기준에 도달했어요." sub="캠핑 제어를 유지하거나 종료할 수 있어요." primary="캠핑 종료" secondary="계속 사용" onPrimary={() => setDialog('end')} onSecondary={() => setDialog(null)} />}
      {dialog === 'preset-error' && <Notice title="조명 설정을 적용하지 못했어요" primary="취소" secondary="다시 시도" onPrimary={() => setDialog(null)} onSecondary={() => { setDialog(null); applyPreset(preset) }} />}
      {dialog === 'vehicle-error' && <Notice title="차량 정보를 불러오지 못했어요" body="배터리와 주행가능거리를 확인할 수 없습니다." sub="마지막 업데이트 · 10분 전" primary="취소" secondary="다시 시도" onPrimary={() => setDialog(null)} onSecondary={() => { setDialog(null); setToast('차량 정보를 다시 불러왔어요') }} />}
      {toast && <div className="toast fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-xl dark:bg-white dark:text-ink" role="status">{toast}</div>}
    </div>
  )
}

function CampingScreen({ running, plan, preset, controls, setControls, openPlan, applyPreset, onEnd }: { running: boolean; plan: CampingPlan; preset: Preset; controls: [number, number, number, number]; setControls: (v: [number, number, number, number]) => void; openPlan: () => void; applyPreset: (p: Preset) => void; onEnd: () => void }) {
  return <div className="grid gap-5 xl:grid-cols-[1.05fr_.95fr]">
    <section className="hero-gradient min-h-[560px] rounded-[30px] border border-[var(--app-line)] p-6 md:p-10">
      <div className="flex items-start justify-between gap-4">
        <div><p className="text-sm font-semibold muted">{running ? '진행 중인 캠핑' : '캠핑 계획'}</p><h1 className="mt-2 text-3xl font-black tracking-[-.04em] md:text-5xl">{running ? '2시간 18분' : '캠핑 준비를 시작해볼까요?'}</h1></div>
        <button onClick={openPlan} className="shrink-0 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white dark:bg-white dark:text-ink">{running ? '캠핑 정보 수정' : '캠핑 계획 설정'}</button>
      </div>
      {running && <div className="mt-8"><div className="mb-2 flex justify-between text-xs font-semibold muted"><span>캠핑 배터리 사용량</span><span>40%</span></div><div className="h-3 rounded-full soft"><div className="h-3 w-2/5 rounded-full bg-ink dark:bg-white" /></div></div>}
      <div className="mt-8 grid grid-cols-3 gap-3">{[['현재 배터리', running ? '64%' : '82%'], ['주행 가능 거리', running ? '248 km' : '304 km'], ['실내 온도', '24°C']].map(([label, value]) => <Metric key={label} label={label} value={value} />)}</div>
      {running && plan.destination && <div className="surface mt-4 flex items-center justify-between rounded-2xl p-5"><div><p className="text-xs muted">다음 목적지</p><p className="mt-2 font-black">{plan.destination}</p></div><p className="text-sm muted">84 km · 14% 예상</p></div>}
      <div className="mt-12"><p className="text-sm font-semibold muted">현재 날씨 · 서울 성수동</p><p className="mt-3 text-5xl font-black tracking-[-.05em]">맑음 8°</p><p className="mt-3 font-bold">오늘 최저 3°C</p><p className="mt-2 text-sm muted">강수 20% · 바람 2m/s</p></div>
      {running && <button onClick={onEnd} className="mt-10 w-full rounded-2xl bg-ink py-4 font-black text-white dark:bg-white dark:text-ink">캠핑 종료</button>}
    </section>
    <section className="rounded-[30px] border border-[var(--app-line)] p-5 md:p-8">
      <div className="grid grid-cols-3 gap-3">{presets.map((item) => <button key={item.name} onClick={() => applyPreset(item.name)} className={`min-h-36 rounded-3xl p-4 text-left transition md:min-h-48 ${preset === item.name ? 'bg-ink text-white dark:bg-white dark:text-ink' : 'soft'}`}><span className="block font-black">{item.name}</span><span className={`mt-3 block text-xs ${preset === item.name ? 'opacity-70' : 'muted'}`}>{item.info}</span></button>)}</div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">{[['온도', 18, 28, '°C'], ['조명', 0, 100, '%'], ['시트', 0, 5, ''], ['디스플레이', 0, 100, '%']].map(([label, min, max, unit], index) => <label key={label as string} className="block"><span className="flex justify-between text-sm font-bold"><span>{label}</span><span>{controls[index]}{unit}</span></span><input className="range mt-3 w-full" type="range" min={min} max={max} value={controls[index]} onChange={(e) => { const next = [...controls] as [number, number, number, number]; next[index] = Number(e.target.value); setControls(next) }} /></label>)}</div>
      <div className="mt-12 rounded-3xl soft p-6"><p className="text-xs font-semibold muted">현재 적용 모드</p><p className="mt-2 text-2xl font-black">{preset}</p><p className="mt-2 text-sm muted">개별 조절을 변경해도 모드 이름은 유지돼요.</p></div>
    </section>
  </div>
}

function RecordsScreen({ openRecord }: { openRecord: (record: CampingRecord) => void }) {
  return <div className="grid gap-5 xl:grid-cols-[1.4fr_.6fr]"><section className="surface rounded-[30px] p-6 md:p-9"><h1 className="text-3xl font-black">기록</h1><div className="mt-6 divide-y divide-[var(--app-line)]">{records.map(record => <button key={record.id} onClick={() => openRecord(record)} className="grid w-full grid-cols-[62px_1fr_auto] items-start gap-4 py-6 text-left"><span className="text-sm muted">{record.date}</span><span><strong className="block text-lg">{record.name}</strong><span className="mt-2 block text-sm muted">{record.meta}</span></span><span className="text-right"><strong className="block">{record.duration}</strong><span className="mt-2 block font-black">{record.batteryDelta}</span></span></button>)}</div></section><aside className="grid gap-5"><div className="rounded-[30px] bg-gradient-to-b from-[#18181c] to-[#44444b] p-8 text-white"><p className="text-sm opacity-70">이번 달 총 캠핑</p><p className="mt-5 text-6xl font-black">42h</p><p className="mt-3 text-sm opacity-70">4번의 캠핑 · 평균 10h 48m</p></div><div className="surface rounded-[30px] p-8"><p className="text-sm muted">가장 오래 사용한 모드</p><p className="mt-5 text-3xl font-black">휴식 모드</p><p className="mt-3 text-sm muted">총 26시간</p></div></aside></div>
}

function Metric({ label, value }: { label: string; value: string }) { return <div className="surface rounded-2xl p-4"><p className="text-xs muted">{label}</p><p className="mt-2 text-lg font-black md:text-2xl">{value}</p></div> }

function ModalFrame({ children, onClose, wide = false }: { children: React.ReactNode; onClose?: () => void; wide?: boolean }) { return <div className="modal-backdrop fixed inset-0 z-50 grid place-items-center overflow-y-auto p-3 md:p-8"><div className={`surface relative my-auto max-h-[94vh] w-full overflow-y-auto rounded-[28px] p-5 shadow-2xl md:p-8 ${wide ? 'max-w-4xl' : 'max-w-xl'}`}>{onClose && <button onClick={onClose} className="absolute right-4 top-4 grid size-10 place-items-center rounded-full soft" aria-label="닫기"><X size={19} /></button>}{children}</div></div> }

function PlanPanel({ draft, setDraft, available, running, onClose, onSave }: { draft: CampingPlan; setDraft: (p: CampingPlan) => void; available: number; running: boolean; onClose: () => void; onSave: () => void }) {
  return <ModalFrame onClose={onClose}><p className="text-xs font-black tracking-[.15em] muted">CAMPING PLAN</p><h2 className="mt-2 text-3xl font-black">캠핑 계획 설정</h2><p className="mt-2 text-sm muted">캠핑 이름과 목적지, 남길 배터리를 설정하세요.</p><label className="mt-7 block"><span className="text-xs font-semibold muted">캠핑 이름</span><input value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} className="mt-2 w-full rounded-2xl border border-[var(--app-line)] bg-transparent p-4 font-bold" maxLength={24} /></label><div className="mt-4 rounded-2xl border border-[var(--app-line)] p-4">{draft.destination ? <div className="flex items-center justify-between"><div><p className="text-xs muted">다음 목적지</p><p className="mt-1 font-bold">{draft.destination}</p></div><button onClick={() => setDraft({ ...draft, destination: '' })} className="text-sm font-bold muted">삭제</button></div> : <button onClick={() => setDraft({ ...draft, destination: '서울 성수동' })} className="flex w-full items-center justify-between font-bold"><span className="flex items-center gap-2"><Plus size={18} /> 다음 목적지 추가</span><ChevronRight size={18} /></button>}</div>{draft.destination && <div className="mt-4 grid grid-cols-2 rounded-2xl bg-ink p-4 text-white dark:bg-white dark:text-ink"><div><p className="text-xs opacity-60">목적지까지</p><p className="mt-2 font-black">84 km</p></div><div><p className="text-xs opacity-60">이동 예상 소모</p><p className="mt-2 font-black">약 14%</p></div></div>}<label className="mt-7 block"><span className="flex justify-between text-sm font-bold"><span>남길 배터리</span><span>{draft.reserveBattery}%</span></span><input type="range" min="10" max="50" step="5" value={draft.reserveBattery} onChange={e => setDraft({ ...draft, reserveBattery: Number(e.target.value) })} className="range mt-4 w-full" /><span className="mt-1 flex justify-between text-xs muted"><span>10%</span><span>권장 20%</span><span>50%</span></span></label><div className="mt-7 rounded-2xl border border-[var(--app-line)] p-5"><p className="text-sm muted">캠핑에 사용 가능한 배터리</p><p className="mt-2 text-4xl font-black">{available}%</p><div className="mt-5 grid grid-cols-3 gap-3 text-sm"><div><p className="muted">현재</p><p className="font-black">82%</p></div><div><p className="muted">캠핑 종료</p><p className="font-black">{draft.destination ? draft.reserveBattery + 14 : draft.reserveBattery}%</p></div><div><p className="muted">도착 예상</p><p className="font-black">{draft.destination ? `${draft.reserveBattery}%` : '-'}</p></div></div></div><button onClick={onSave} disabled={available <= 0} className="mt-8 w-full rounded-2xl bg-ink py-4 font-black text-white disabled:cursor-not-allowed disabled:opacity-30 dark:bg-white dark:text-ink">{running ? '수정 완료' : '캠핑 시작'}</button></ModalFrame>
}

function RecordModal({ record, onClose, onCheck }: { record: CampingRecord; onClose: () => void; onCheck: () => void }) { return <ModalFrame onClose={onClose} wide><h2 className="text-3xl font-black">{record.name}</h2><p className="mt-2 muted">2026. {record.date.replace('.', '. ')} 15:00–다음 날 03:34</p><div className="mt-7 grid grid-cols-3 gap-3"><Metric label="캠핑 시간" value={record.duration} /><Metric label="총 배터리 사용" value={record.batteryDelta} /><Metric label="배터리 변화" value="82% → 64%" /></div><div className="surface mt-5 flex justify-between rounded-2xl p-5"><span className="muted">다음 목적지</span><strong>서울 성수동 · 84 km</strong></div><h3 className="mt-8 text-xl font-black">사용한 모드</h3><div className="mt-4 rounded-2xl soft p-5">{['23:30–00:40 · 휴식 모드 · 1시간 10분', '00:40–02:10 · 미디어 모드 · 1시간 30분', '02:10–03:05 · 취침 모드 · 55분', '03:05–07:20 · 휴식 모드 · 4시간 15분'].map(item => <p className="border-l-2 border-ink py-2 pl-4 text-sm dark:border-white" key={item}>{item}</p>)}</div><div className="mt-5 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl soft p-5"><p className="text-sm muted">차량 설정 복원</p><p className="mt-2 font-black"><Check className="mr-2 inline" size={17} /> 완료</p></div><div className="rounded-2xl soft p-5"><p className="text-sm muted">출발 전 점검</p><div className="mt-2 flex items-center justify-between"><strong>미완료</strong><button onClick={onCheck} className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-ink">점검하러 가기</button></div></div></div><button onClick={onClose} className="mt-6 w-full rounded-2xl border border-[var(--app-line)] py-4 font-black">닫기</button></ModalFrame> }

function EndDialog({ onCancel, onEnd }: { onCancel: () => void; onEnd: (save: boolean) => void }) { return <ModalFrame><h2 className="text-2xl font-black">캠핑을 종료할까요?</h2><p className="mt-3 text-sm leading-6 muted">캠핑 시작 전 차량 설정으로 복원합니다.</p><div className="mt-7 grid gap-3"><button onClick={() => onEnd(true)} className="rounded-2xl bg-ink py-4 font-black text-white dark:bg-white dark:text-ink">종료하고 저장</button><button onClick={() => onEnd(false)} className="rounded-2xl border border-[var(--app-line)] py-4 font-black">저장하지 않고 종료</button><button onClick={onCancel} className="py-3 text-sm font-bold muted">취소</button></div></ModalFrame> }

function Summary({ onConfirm }: { onConfirm: () => void }) { return <ModalFrame wide><span className="rounded-full bg-ink px-4 py-2 text-xs font-black text-white dark:bg-white dark:text-ink">SAVED</span><div className="mt-7 flex items-start justify-between"><div><h2 className="text-4xl font-black">오늘의 캠핑을 마쳤어요</h2><p className="mt-2 muted">2026-11-17 · 한강 노을 캠핑</p></div><strong className="text-6xl">18%</strong></div><div className="mt-8 h-3 rounded-full soft"><div className="h-3 w-[64%] rounded-full bg-ink dark:bg-white" /></div><div className="mt-8 grid grid-cols-3 gap-3"><Metric label="캠핑 시간" value="12h 34m" /><Metric label="시작 배터리" value="82%" /><Metric label="종료 배터리" value="64%" /></div><div className="mt-5 rounded-2xl soft p-6"><p className="font-black">예상보다 4% 적게 사용했어요</p></div><button onClick={onConfirm} className="mt-7 w-full rounded-2xl bg-ink py-4 font-black text-white dark:bg-white dark:text-ink">확인 완료</button></ModalFrame> }

function Checklist({ checks, setChecks, onLater, onComplete }: { checks: boolean[]; setChecks: (v: boolean[]) => void; onLater: () => void; onComplete: () => void }) { const labels = ['문·창문·트렁크가 모두 닫혀 있어요', '충전 케이블과 외부 장비를 정리했어요', '소지품과 캠핑 장소를 다시 확인했어요']; return <ModalFrame wide><h2 className="text-3xl font-black">출발 전 점검</h2><p className="mt-2 muted">출발하기 전에 차량과 주변을 확인해 주세요.</p><div className="mt-7 grid grid-cols-4 gap-3 rounded-2xl soft p-5 text-sm"><div><p className="muted">다음 목적지</p><strong>서울 성수동</strong></div><div><p className="muted">목적지까지</p><strong>84 km</strong></div><div><p className="muted">현재 배터리</p><strong>64%</strong></div><div><p className="muted">도착 예상</p><strong>약 50%</strong></div></div><h3 className="mt-7 text-lg font-black">차량에서 확인했어요</h3><div className="mt-3 rounded-2xl border border-[var(--app-line)] p-5"><p><Check className="mr-3 inline text-green-600" size={20} /> 차량 설정 복원 <span className="float-right text-sm">완료</span></p><p className="mt-4"><Check className="mr-3 inline text-green-600" size={20} /> 캠핑 모드 종료 <span className="float-right text-sm">완료</span></p></div><h3 className="mt-7 text-lg font-black">직접 확인해 주세요</h3><div className="mt-3 rounded-2xl border border-[var(--app-line)] p-5">{labels.map((label, index) => <label key={label} className="flex cursor-pointer items-center gap-3 py-3"><input type="checkbox" checked={checks[index]} onChange={() => { const next = [...checks]; next[index] = !next[index]; setChecks(next) }} className="size-5" /><span>{label}</span></label>)}</div><div className="mt-7 grid grid-cols-[.4fr_1fr] gap-3"><button onClick={onLater} className="rounded-2xl border border-[var(--app-line)] py-4 font-black">나중에</button><button onClick={onComplete} disabled={!checks.every(Boolean)} className="rounded-2xl bg-ink py-4 font-black text-white disabled:cursor-not-allowed disabled:opacity-25 dark:bg-white dark:text-ink">완료</button></div></ModalFrame> }

function Notice({ title, body, sub, primary, secondary, onPrimary, onSecondary }: { title: string; body?: string; sub?: string; primary: string; secondary: string; onPrimary: () => void; onSecondary: () => void }) { return <ModalFrame><h2 className="text-2xl font-black">{title}</h2>{body && <p className="mt-3 muted">{body}</p>}{sub && <p className="mt-2 text-sm muted">{sub}</p>}<div className="mt-7 grid grid-cols-2 gap-3"><button onClick={onSecondary} className="rounded-2xl border border-[var(--app-line)] py-4 font-black"><RotateCcw className="mr-2 inline" size={17} />{secondary}</button><button onClick={onPrimary} className="rounded-2xl bg-ink py-4 font-black text-white dark:bg-white dark:text-ink">{primary}</button></div></ModalFrame> }

export default App
