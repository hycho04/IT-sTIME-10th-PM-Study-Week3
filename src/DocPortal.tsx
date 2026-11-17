import { useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowDown, ArrowRight, ExternalLink, Printer } from 'lucide-react'
import spec from './specData.json'
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
const interactivePattern = /선택|버튼|입력|조절|추가|저장|설정|기록|점검|완료|삭제|확인|종료|변경|수정|다시 시도|계속 사용|취침|프리셋/

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
  const componentRows = useMemo(() => clean(current['주요 구성·표시 정보']), [current])
  const related = useMemo(() => clean(current['관련 기능']).map(item => item.split(' · ')[0]).map(id => spec.features.find(feature => feature['기능 ID'] === id)).filter((item): item is Feature => Boolean(item)), [current])
  const tab: Tab = location.pathname.includes('/docs') ? 'docs' : 'flow'

  const goDoc = (id: string) => {
    navigate(screenPath(id))
  }
  const scrollToComponent = (index: number) => document.getElementById(`component-${index + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return <div className="portal">
    <PortalChrome tab={tab} selected={selected} />
    {tab === 'flow' && <FlowView onSelect={goDoc} />}
    {tab === 'docs' && <main className="portal-card doc-page">
      <div className="doc-head">
        <div>
          <div className="doc-title-line"><h1>{screenTitle(current)}</h1><code>{screenId(current)}</code><span className="screen-type">{current['유형']}</span></div>
          <p className="doc-purpose">{current['화면 목적']}</p>
        </div>
        <Link className="primary-button" to={demoPath(screenId(current))}>이 화면 시연하기 <ArrowRight size={16} /></Link>
      </div>

      <div className="doc-meta">
        <p><b>들어오는 곳</b><span>{current['진입 경로'] || '확인 필요'}</span></p>
        <p><b>나가는 곳</b><span>{current['종료 이동 경로'] || '확인 필요'}</span></p>
        <p><b>문서 원본</b><a href={originalSpecUrl(current)} target="_blank" rel="noreferrer">Notion 화면 명세서 열기 <ExternalLink size={13} /></a></p>
        <p><b>Figma 원본</b><span className="needs-check">제공된 자료에서 프레임 링크 확인 필요</span></p>
      </div>

      <section className="wireframe-section" aria-label="문서용 화면 와이어프레임">
        <div className="wireframe-legend"><span><i className="legend-number">01</i> 번호를 누르면 아래 설명으로 이동</span><span><i className="legend-dash" /> 초록 점선은 시연에서 조작 가능한 영역</span></div>
        <ScreenWireframe screen={current} components={componentRows} onSelect={scrollToComponent} onDemo={() => navigate(demoPath(screenId(current)))} />
        <p className="wireframe-caption">이 화면 미리보기는 화면 명세의 구성·표시 정보를 바탕으로 만든 문서용 와이어프레임입니다. 보라색 번호는 이 문서 안에서 구성 요소를 찾기 위한 번호이며, 원본 Figma 번호가 아닙니다.</p>
      </section>

      <section className="component-section">
        <div className="section-heading"><span className="section-kicker">{screenTitle(current)} · 화면 정의</span><h2>화면 구성과 동작</h2><code>{screenId(current)}</code></div>
        <div className="component-grid">
          {componentRows.map((item, index) => <button className="component-row" id={`component-${index + 1}`} key={`${index}-${item}`} onClick={() => navigate(demoPath(screenId(current)))}>
            <span className="number-badge">{String(index + 1).padStart(2, '0')}</span><span><strong>{item}</strong><small>시연 화면에서 확인하기 <ArrowRight size={13} /></small></span><span className={interactivePattern.test(item) ? 'interactive-chip' : 'static-chip'}>{interactivePattern.test(item) ? '조작 가능' : '표시 정보'}</span>
          </button>)}
        </div>
        <SpecColumns screen={current} />
      </section>

      <section className="feature-section">
        <div className="section-heading feature-heading"><span className="section-kicker">화면과 연결된 기능</span><h2>기능 명세</h2><span className="feature-count">{related.length}개 기능</span></div>
        {related.map(feature => <FeatureCard feature={feature} key={feature['기능 ID']} onDemo={() => navigate(demoPath(screenId(current)))} />)}
        {!related.length && <p className="source-note">연결된 기능 ID를 원문에서 확인할 수 없습니다.</p>}
      </section>

      <nav className="doc-footer" aria-label="화면 문서 이동">
        <button disabled={spec.screens[0] === current} onClick={() => goDoc(screenId(spec.screens[Math.max(0, spec.screens.indexOf(current) - 1)]))}>← 이전 화면</button>
        <div>{spec.screens.map(screen => <button aria-label={`${screenId(screen)} ${screenTitle(screen)}`} title={`${screenId(screen)} · ${screenTitle(screen)}`} className={`doc-dot ${screen === current ? 'current' : ''}`} key={screenId(screen)} onClick={() => goDoc(screenId(screen))} />)}</div>
        <button disabled={spec.screens.at(-1) === current} onClick={() => goDoc(screenId(spec.screens[Math.min(spec.screens.length - 1, spec.screens.indexOf(current) + 1)]))}>다음 화면 →</button>
      </nav>
    </main>}
  </div>
}

function FlowView({ onSelect }: { onSelect: (id: string) => void }) {
  return <main className="portal-card flow-page">
    <div className="portal-title"><div><p className="eyebrow">WATT IF · IA / USER FLOW</p><h1>전체 흐름 보기</h1><p>화면을 선택하면 화면·기능 명세와 연결된 시연 화면을 확인할 수 있어요.</p></div><div className="portal-count">화면 {spec.screens.length}개 · 기능 {spec.features.length}개</div></div>
    <div className="flow-note">표시 순서는 Notion 화면 명세서의 화면 ID 순서입니다. 세부 분기와 이동 조건은 각 화면 문서에서 확인하세요.</div>
    <div className="flow-grid">{spec.screens.map((screen, index) => <div className="flow-node-wrap" key={screenId(screen)}>
      <button className="flow-item" onClick={() => onSelect(screenId(screen))}><span className="flow-index">{String(index + 1).padStart(2, '0')}</span><span><b>{screenId(screen)} · {screen['유형']}</b><strong>{screenTitle(screen)}</strong><small>{screen['화면 목적']}</small></span><span className="flow-arrow">→</span></button>
      {index < spec.screens.length - 1 && <ArrowDown className="flow-down" size={17} />}
    </div>)}</div>
    <aside className="source-note">원본 IA/User Flow 링크는 전달된 화면·기능 명세 페이지에서 확인되지 않았습니다. 화면 연결은 각 화면 정의서의 진입·종료 경로를 기준으로 읽어주세요.</aside>
  </main>
}

function ScreenWireframe({ screen, components, onSelect, onDemo }: { screen: Screen; components: string[]; onSelect: (index: number) => void; onDemo: () => void }) {
  const id = screenId(screen)
  const title = screenTitle(screen)
  const showControls = components.length > 0
  return <div className="wireframe-device">
    <div className="device-notch" />
    <div className="wireframe-screen">
      <div className="wf-topline"><span className="wf-logo">W</span><b>WATT IF</b><span className="wf-menu">•••</span></div>
      <div className="wf-screen-heading"><span>{id}</span><strong>{title}</strong><small>{screen['화면 목적']}</small></div>
      {components.slice(0, 7).map((component, index) => {
        const interactive = interactivePattern.test(component)
        return <button key={`${index}-${component}`} className={`wf-block ${interactive ? 'wf-interactive' : ''} wf-block-${index % 4}`} onClick={() => interactive ? onDemo() : onSelect(index)}>
          <span className="wf-number" onClick={event => { event.stopPropagation(); onSelect(index) }}>{String(index + 1).padStart(2, '0')}</span>
          <span className="wf-content"><i className="wf-line short" /><strong>{component}</strong>{index < 2 && <i className="wf-line" />}</span>
          {interactive && <span className="wf-control">시연 ↗</span>}
        </button>
      })}
      {components.length > 7 && <button className="wf-more" onClick={() => onSelect(7)}>+ {components.length - 7}개 구성 요소 더 보기</button>}
      {showControls && <button className="wf-primary" onClick={onDemo}>이 화면 시연하기 <ArrowRight size={14} /></button>}
    </div>
  </div>
}

function SpecColumns({ screen }: { screen: Screen }) {
  const fields = [
    ['주요 구성·표시 정보', screen['주요 구성·표시 정보']],
    ['주요 동작', screen['주요 동작']],
    ['상태·예외 처리', screen['상태·예외 처리']],
  ] as const
  return <div className="screen-spec-grid">{fields.map(([label, value]) => <article className="screen-spec-card" key={label}><h3>{label}</h3><ul>{clean(value).map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
}

function FeatureCard({ feature, onDemo }: { feature: Feature; onDemo: () => void }) {
  const items = [
    ['데이터·로직', feature['데이터·로직']],
    ['예외·제한사항', feature['예외·제한사항']],
  ] as const
  return <article className="feature-card">
    <div className="feature-title"><code>{feature['기능 ID']}</code><strong>{feature['기능명']}</strong><span>{feature['유형']} · 중요도 {feature['중요도']}</span></div>
    <p className="feature-description">{feature['기능 설명']}</p>
    <div className="feature-source-grid"><p><b>연결 화면</b><span>{clean(feature['관련 화면']).join(' · ') || '원문에 미기재'}</span></p><p><b>Actor / Trigger</b><span>원문 데이터베이스에 별도 필드 없음</span></p><p><b>기능 원본</b><a href={feature.url} target="_blank" rel="noreferrer">Notion 기능명세 열기 <ExternalLink size={12} /></a></p><p><b>확인 항목</b><span>선행 조건·QA 기준은 원문에 별도 필드 없음</span></p></div>
    <details><summary>처리 로직과 예외 조건 보기</summary><div className="feature-details-grid">{items.map(([label, value]) => <div key={label}><h4>{label}</h4><ul>{clean(value).map(item => <li key={item}>{item}</li>)}</ul></div>)}</div><p className="notion-field-note">저장·동기화, 취소 결과, QA 기준이 별도 필드로 정의되지 않은 항목은 위 원문 설명에서 확인 가능한 범위만 표시했습니다.</p></details>
    <button className="feature-demo-link" onClick={onDemo}>연결된 화면 시연하기 <ArrowRight size={14} /></button>
  </article>
}
