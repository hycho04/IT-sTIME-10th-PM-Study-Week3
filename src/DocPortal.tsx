import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ExternalLink, Maximize2, Printer, ZoomIn, ZoomOut } from 'lucide-react'
import spec from './specData.json'
import ProvidedWireframe, { type FigmaFrameId } from './ProvidedWireframe'
import './portal.css'

type Screen = typeof spec.screens[number]
type Feature = typeof spec.features[number]
type Tab = 'flow' | 'docs' | 'demo'

const clean = (value: string | null | undefined) => (value ?? '').split(/<br\s*\/?\s*>|\n/).map(line => line.replace(/^•\s*/, '').trim()).filter(Boolean)
const screenId = (screen: Screen) => screen['화면 ID']
const screenTitle = (screen: Screen) => screen['화면명']
const screenPath = (id: string) => `/docs?screen=${encodeURIComponent(id)}`
const demoPath = (id: string) => `/demo?screen=${encodeURIComponent(id)}`
const originalSpecUrl = (screen: Screen) => screen.url
const FIGMA_FRAME_BY_SCREEN: Record<string, FigmaFrameId | undefined> = {
  'SCR-001': '01', 'SCR-002': '02', 'SCR-005': '03', 'SCR-003': '04', 'SCR-004': '05',
  'SCR-006': '06', 'SCR-008': '07', 'SCR-007': '08', 'SCR-009': '09', 'SCR-010': '10', 'SCR-011': '11',
}
const FIGMA_FRAME_SIZE: Record<FigmaFrameId, [number, number]> = {
  '01': [1700, 1184], '02': [1700, 1184], '03': [1700, 1184], '04': [810, 1100], '05': [810, 1100],
  '06': [1000, 920], '07': [1000, 820], '08': [1200, 790], '09': [610, 260], '10': [610, 260], '11': [610, 260],
}
const fitZoom = (id: FigmaFrameId) => {
  const [w] = FIGMA_FRAME_SIZE[id]
  const pageWidth = Math.min(1540, window.innerWidth) - (window.innerWidth <= 760 ? 32 : 84)
  // At narrower desktop widths the frame moves above the component list,
  // so it can use the full document column instead of shrinking beside it.
  const availableWidth = window.innerWidth > 1100 ? pageWidth - 288 : pageWidth
  return Math.min(0.98, Math.max(220, availableWidth) / w)
}

type Hotspot = [number, number, number, number]
const FIGMA_HOTSPOTS: Record<FigmaFrameId, Hotspot[]> = {
  '01': [[38,4,25,10],[90,3,7,8],[77,3,12,8],[4,19,47,34],[4,53,47,12],[4,66,47,24],[54,19,42,31],[54,53,42,41]],
  '02': [[4,5,46,17],[4,22,46,13],[4,37,46,13],[4,52,46,18],[4,70,46,12],[4,87,46,9],[53,18,43,31],[53,52,43,39],[89,3,8,9]],
  '03': [[4,7,92,38],[4,47,92,9],[4,57,92,10],[4,68,92,10],[4,79,92,11],[4,90,92,8]],
  '04': [[5,5,90,10],[5,19,90,11],[5,34,90,14],[5,51,90,10],[5,64,90,13],[5,82,90,11]],
  '05': [[5,5,90,10],[5,19,90,11],[5,32,90,10],[5,44,90,12],[5,58,90,10],[5,70,90,12],[5,85,90,10]],
  '06': [[4,4,92,10],[4,16,92,12],[4,30,92,11],[4,43,92,10],[4,55,92,25],[4,81,45,12],[51,81,45,12],[4,94,92,6]],
  '07': [[4,3,92,10],[4,16,92,12],[4,37,92,14],[5,61,88,6],[5,67,88,6],[5,73,88,6],[4,86,92,10]],
  '08': [[3,3,13,8],[3,13,94,15],[3,31,94,15],[3,49,94,15],[3,68,94,14],[3,83,94,8],[3,91,94,8]],
  '09': [[4,8,92,24],[4,37,92,29],[4,73,92,21]],
  '10': [[4,8,92,28],[4,39,92,18],[4,60,92,14],[4,78,92,16]],
  '11': [[4,8,92,25],[4,36,92,20],[4,59,92,14],[4,76,45,16],[51,76,45,16]],
}

export function PortalChrome({ tab, selected = 'SCR-001' }: { tab: Tab; selected?: string }) {
  return <>
    <header className="portal-head">
      <Link to="/flow" className="portal-brand">
        <span className="portal-logo">W</span>
        <span><small>화면설계서와 기능명세서 <b>ver1.2</b></small><strong>WATT IF · 전기차 캠핑 도우미</strong></span>
      </Link>
      <button className="print-button" onClick={() => window.print()}><Printer size={17} /> 문서 인쇄</button>
    </header>
    <nav className="portal-tabs" aria-label="문서 메뉴">
      <Link className={tab === 'flow' ? 'active' : ''} to="/flow">전체 흐름 보기</Link>
      <Link className={tab === 'docs' ? 'active' : ''} to={screenPath(selected)}>문서 보기</Link>
      <Link className={tab === 'demo' ? 'active' : ''} to={demoPath(selected)}>시연하기</Link>
    </nav>
  </>
}

export default function DocPortal() {
  const location = useLocation()
  const navigate = useNavigate()
  const selected = new URLSearchParams(location.search).get('screen') ?? 'SCR-001'
  const current = spec.screens.find(screen => screenId(screen) === selected) ?? spec.screens[0]
  const figmaFrameId = FIGMA_FRAME_BY_SCREEN[screenId(current)]
  const componentRows = useMemo(() => clean(current['주요 구성·표시 정보']), [current])
  const related = useMemo(() => clean(current['관련 기능']).map(item => item.split(' · ')[0]).map(id => spec.features.find(feature => feature['기능 ID'] === id)).filter((item): item is Feature => Boolean(item)), [current])
  const [activeComponent, setActiveComponent] = useState(0)
  const tab: Tab = location.pathname.includes('/docs') ? 'docs' : 'flow'

  const goDoc = (id: string) => {
    setActiveComponent(0)
    navigate(screenPath(id))
  }
  const selectComponent = (index: number) => {
    setActiveComponent(index)
    document.getElementById(`component-${index + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
  return <div className="portal">
    <PortalChrome tab={tab} selected={selected} />
    {tab === 'flow' && <FlowView />}
    {tab === 'docs' && <main className="portal-card doc-page">
      <div className="doc-page-top">
        <button disabled={spec.screens[0] === current} onClick={() => goDoc(screenId(spec.screens[Math.max(0, spec.screens.indexOf(current) - 1)]))}>← 이전 화면</button>
        <div className="doc-title-line"><h1>{screenTitle(current)}</h1><code>{screenId(current)}</code><span className="screen-type">{current['유형']}</span></div>
        <button disabled={spec.screens.at(-1) === current} onClick={() => goDoc(screenId(spec.screens[Math.min(spec.screens.length - 1, spec.screens.indexOf(current) + 1)]))}>다음 화면 →</button>
      </div>
      <div className="doc-meta doc-meta-wide">
        <p><b>들어오는 곳</b><span>{current['진입 경로'] || '확인 필요'}</span></p>
        <p><b>나가는 곳</b><span>{current['종료 이동 경로'] || '확인 필요'}</span></p>
        <p><b>문서 원본</b><a href={originalSpecUrl(current)} target="_blank" rel="noreferrer">Notion 화면 명세서 열기 <ExternalLink size={13} /></a></p>
        <p><b>Figma 원본</b><span>{figmaFrameId ? `Dev Mode 추출 코드 · 프레임 ${figmaFrameId}` : '이 화면의 Figma 프레임은 제공 자료에 없음'}</span></p>
      </div>

      <section className="screen-description-section">
        <div className="section-heading"><span className="section-kicker">화면</span><h2>화면 설명 | 구성 요소와 동작</h2><code>{screenId(current)}</code></div>
        <p className="screen-explanation">{current['화면 목적']}</p>
        <SpecColumns screen={current} />
        {screenId(current) === 'SCR-010' && <div className="source-conflict"><strong>자료 간 정책 충돌 확인 필요</strong><p>Figma 프레임 10은 “성공한 항목은 유지하고 실패 항목만 다시 시도”로 설명합니다. Notion 화면 명세는 “하나라도 실패하면 전체 설정을 복원하고 프리셋 전체를 다시 적용”으로 정의합니다. 어느 정책을 따를지 결정이 필요합니다.</p></div>}
      </section>

      <section className="figma-components-section">
        <div className="section-heading"><span className="section-kicker">Figma</span><h2>Figma 구성 요소</h2><span className="feature-count">{componentRows.length}개 요소</span></div>
        <div className="figma-components-grid">
          <div className="doc-figure-column" aria-label="Figma 화면과 구성 요소 번호">
            <FigmaFrameViewer key={figmaFrameId ?? 'no-figma'} frameId={figmaFrameId} screen={current} activeComponent={activeComponent} onSelectComponent={selectComponent} />
            {figmaFrameId && <p className="wireframe-caption">프레임 번호를 누르면 오른쪽 설명이 강조됩니다.</p>}
          </div>
          <div className="figma-component-list">
            {componentRows.map((item, index) => <button className={`component-row ${activeComponent === index ? 'selected' : ''}`} id={`component-${index + 1}`} key={`${index}-${item}`} onClick={() => selectComponent(index)}>
              <span className="number-badge">{String(index + 1).padStart(2, '0')}</span><span><strong>{item}</strong><small>{figmaFrameId ? `Figma 프레임 ${figmaFrameId} · 화면 명세서 구성 순서` : '원본 프레임 없음 · 화면 명세서 구성 순서'}</small></span>
            </button>)}
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading feature-heading"><span className="section-kicker">기능명세</span><h2>기능명세</h2><span className="feature-count">{related.length}개 기능</span></div>
        {related.map(feature => <FeatureCard feature={feature} key={feature['기능 ID']} />)}
        {!related.length && <p className="source-note">연결된 기능 ID를 원문에서 확인할 수 없습니다.</p>}
      </section>

    </main>}
  </div>
}

function FlowView() {
  return <main className="portal-card flow-page">
    <div className="portal-title"><div><p className="eyebrow">WATT IF · IA / USER FLOW</p><h1>전체 흐름 보기</h1><p>화면별 문서와 독립된 시연을 각각 열 수 있어요.</p></div><div className="portal-count">화면 {spec.screens.length}개 · 기능 {spec.features.length}개</div></div>
    <div className="flow-note">각 카드는 Figma 화면의 작은 미리보기입니다. 원본 IA/User Flow의 전체 연결 자료는 제공되지 않아, 화면 간 순서는 임의로 선으로 잇지 않고 명세서의 진입·종료 경로를 함께 표시했습니다.</div>
    <div className="flow-grid">{spec.screens.map(screen => <article className="flow-item" key={screenId(screen)}>
      <div className="flow-card-heading"><b>{screenId(screen)} · {screen['유형']}</b><strong>{screenTitle(screen)}</strong></div>
      <ScreenThumbnail screen={screen} />
      <div className="flow-card-copy"><p>{screen['화면 목적']}</p><small>다음: {clean(screen['종료 이동 경로']).join(' · ') || '원문에 미기재'}</small>
        <span className="flow-actions"><Link to={screenPath(screenId(screen))}>문서 보기</Link><Link to={demoPath(screenId(screen))}>시연하기</Link></span>
      </div>
    </article>)}</div>
  </main>
}

function ScreenThumbnail({ screen }: { screen: Screen }) {
  const frameId = FIGMA_FRAME_BY_SCREEN[screenId(screen)]
  if (!frameId) return <div className="flow-thumbnail flow-thumbnail-missing">Figma 프레임 미제공</div>
  const [width, height] = FIGMA_FRAME_SIZE[frameId]
  const scale = Math.min(300 / width, 176 / height)
  return <div className="flow-thumbnail" aria-label={`${screenTitle(screen)} Figma 미리보기`}>
    <div className="flow-thumbnail-artboard" style={{ width: width * scale, height: height * scale }}>
      <div style={{ width, height, transform: `scale(${scale})`, transformOrigin: 'top left' }}><ProvidedWireframe frameId={frameId} /></div>
    </div>
  </div>
}

function FigmaFrameViewer({ frameId, screen, activeComponent, onSelectComponent }: { frameId: FigmaFrameId | undefined; screen: Screen; activeComponent: number; onSelectComponent: (index: number) => void }) {
  const fit = frameId ? fitZoom(frameId) : 0.4
  const [zoom, setZoom] = useState(fit)
  if (!frameId) return <div className="missing-frame"><span>FIGMA FRAME 미제공</span><strong>{screenId(screen)} · {screenTitle(screen)}</strong><p>제공된 Figma 내보내기 코드에는 이 화면 프레임이 없습니다. 화면 정의는 아래 명세를 기준으로 확인할 수 있습니다.</p></div>
  const [width, height] = FIGMA_FRAME_SIZE[frameId]
  const zoomedIn = zoom > fit + 0.005
  const setClampedZoom = (next: number) => setZoom(Math.min(1.6, Math.max(0.25, next)))
  return <div className="figma-viewer">
    <div className="figma-viewer-toolbar"><span><b>Figma 프레임 {frameId}</b><small>{screenId(screen)} · {screenTitle(screen)}</small></span><div className="figma-zoom-controls" aria-label="Figma 프레임 확대·축소"><button type="button" aria-label="축소" title="축소" onClick={() => setClampedZoom(zoom - 0.1)} disabled={zoom <= 0.25}><ZoomOut size={15} /></button><input aria-label="확대 배율" type="range" min="25" max="160" step="1" value={Math.round(zoom * 100)} onChange={event => setClampedZoom(Number(event.target.value) / 100)} /><output>{Math.round(zoom * 100)}%</output><button type="button" aria-label="확대" title="확대" onClick={() => setClampedZoom(zoom + 0.1)} disabled={zoom >= 1.6}><ZoomIn size={15} /></button><button type="button" aria-label="화면 맞춤" title="화면 맞춤" onClick={() => setZoom(fit)}><Maximize2 size={14} /></button></div></div>
    <div className="figma-viewport" style={{ maxHeight: zoomedIn ? '70vh' : 'none', overflow: zoomedIn ? 'auto' : 'hidden' }}><div className="figma-artboard-shell" style={{ width: width * zoom, height: height * zoom }}><div className="figma-artboard" style={{ width, height, transform: `scale(${zoom})` }}><ProvidedWireframe frameId={frameId} /></div>{FIGMA_HOTSPOTS[frameId].slice(0, clean(screen['주요 구성·표시 정보']).length).map(([x,y,w,h], index) => <button key={index} className={`figma-hotspot ${activeComponent === index ? 'selected' : ''}`} style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` }} aria-label={`${String(index + 1).padStart(2,'0')} ${clean(screen['주요 구성·표시 정보'])[index]}`} onClick={() => onSelectComponent(index)}><span>{String(index + 1).padStart(2,'0')}</span></button>)}</div></div>
  </div>
}

function SpecColumns({ screen }: { screen: Screen }) {
  const fields = [
    ['주요 동작', screen['주요 동작']],
    ['상태·예외 처리', screen['상태·예외 처리']],
  ] as const
  return <div className="screen-spec-grid">{fields.map(([label, value]) => <article className="screen-spec-card" key={label}><h3>{label}</h3><ul>{clean(value).map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
}

function FeatureCard({ feature }: { feature: Feature }) {
  const items = [
    ['데이터·로직', feature['데이터·로직']],
    ['예외·제한사항', feature['예외·제한사항']],
  ] as const
  return <article className="feature-card">
    <div className="feature-title"><code>{feature['기능 ID']}</code><strong>{feature['기능명']}</strong><span>{feature['유형']} · 중요도 {feature['중요도']}</span></div>
    <p className="feature-description">{feature['기능 설명']}</p>
    <div className="feature-source-grid"><p><b>연결 화면</b><span>{clean(feature['관련 화면']).join(' · ') || '원문에 미기재'}</span></p><p><b>Actor / Trigger</b><span>원문 데이터베이스에 별도 필드 없음</span></p><p><b>기능 원본</b><a href={feature.url} target="_blank" rel="noreferrer">Notion 기능명세 열기 <ExternalLink size={12} /></a></p><p><b>확인 항목</b><span>선행 조건·QA 기준은 원문에 별도 필드 없음</span></p></div>
    <details><summary>처리 로직과 예외 조건 보기</summary><div className="feature-details-grid">{items.map(([label, value]) => <div key={label}><h4>{label}</h4><ul>{clean(value).map(item => <li key={item}>{item}</li>)}</ul></div>)}</div><p className="notion-field-note">저장·동기화, 취소 결과, QA 기준이 별도 필드로 정의되지 않은 항목은 위 원문 설명에서 확인 가능한 범위만 표시했습니다.</p></details>
  </article>
}
