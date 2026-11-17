import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import spec from './specData.json'
import './portal.css'

type Screen = typeof spec.screens[number]
type Feature = typeof spec.features[number]
const clean = (value: string | null | undefined) => (value ?? '').split('\n').map(line => line.replace(/^•\s*/, '').trim()).filter(Boolean)
const screenId = (screen: Screen) => screen['화면 ID']
const title = (screen: Screen) => screen['화면명']

export default function DocPortal() {
  const location = useLocation()
  const navigate = useNavigate()
  const [selected, setSelected] = useState(new URLSearchParams(location.search).get('screen') ?? 'SCR-001')
  const current = spec.screens.find(screen => screenId(screen) === selected) ?? spec.screens[0]
  const related = clean(current['관련 기능']).map(item => item.split(' · ')[0]).map(id => spec.features.find(feature => feature['기능 ID'] === id)).filter((item): item is Feature => Boolean(item))
  const counts = useMemo(() => ({ screens: spec.screens.length, features: spec.features.length }), [])
  const tab = location.pathname.includes('/docs') ? 'docs' : location.pathname.includes('/demo') ? 'demo' : 'flow'
  const toDemo = (id: string) => navigate(`/demo?screen=${id}`)
  const goDoc = (id: string) => { setSelected(id); navigate(`/docs?screen=${id}`) }

  return <div className="portal">
    <header className="portal-head"><Link to="/flow" className="portal-brand"><span className="portal-logo">W</span><span><small>화면설계서와 기능명세서 <b>ver1.0</b></small><strong>WATT IF · 전기차 캠핑 도우미</strong></span></Link><a className="print-button" href="#" onClick={event => { event.preventDefault(); window.print() }}>문서 인쇄</a></header>
    <nav className="portal-tabs"><Link className={tab === 'flow' ? 'active' : ''} to="/flow">전체 흐름 보기</Link><Link className={tab === 'docs' ? 'active' : ''} to={`/docs?screen=${selected}`}>문서 보기</Link><Link className={tab === 'demo' ? 'active' : ''} to="/demo">시연하기</Link></nav>
    {tab === 'flow' && <main className="portal-card"><div className="portal-title"><div><p className="eyebrow">WATT IF · IA / USER FLOW</p><h1>전체 화면 흐름</h1><p>화면을 선택하면 문서를 확인하고 실제 데모로 이동할 수 있어요.</p></div><div className="portal-count">화면 {counts.screens}개 · 기능 {counts.features}개</div></div><div className="flow-grid">{spec.screens.map((screen, index) => <button key={screenId(screen)} className="flow-item" onClick={() => goDoc(screenId(screen))}><span className="flow-index">{String(index + 1).padStart(2, '0')}</span><span><b>{screenId(screen)}</b><strong>{title(screen)}</strong><small>{screen['화면 목적']}</small></span><span className="flow-arrow">→</span></button>)}</div><aside className="source-note">화면 목록은 연결된 Notion 화면 명세서에서 가져왔어요. IA 연결선의 정확한 표현은 원본 IA 자료 확인이 필요합니다.</aside></main>}
    {tab === 'docs' && <main className="portal-card"><div className="doc-head"><div><div className="doc-title-line"><h1>{title(current)}</h1><code>{screenId(current)}</code></div><p className="doc-purpose">{current['화면 목적']}</p></div><button className="primary-button" onClick={() => toDemo(screenId(current))}>이 화면 시연하기 →</button></div><div className="doc-meta"><p><b>진입 경로</b>{current['진입 경로'] || '확인 필요'}</p><p><b>종료 이동 경로</b>{current['종료 이동 경로'] || '확인 필요'}</p><p><b>Route</b><code>/demo?screen={screenId(current)}</code></p><p><b>Figma 원본</b>프레임 링크 확인 필요</p></div><div className="doc-layout"><aside className="screen-list"><h2>화면 목록</h2>{spec.screens.map(screen => <button key={screenId(screen)} className={screenId(screen) === selected ? 'selected' : ''} onClick={() => goDoc(screenId(screen))}><code>{screenId(screen)}</code>{title(screen)}</button>)}</aside><section className="doc-content"><div className="doc-placeholder"><span>실제 동작 화면은 ‘시연하기’에서 확인하세요</span><b>{screenId(current)}</b><strong>{title(current)}</strong><button onClick={() => toDemo(screenId(current))}>실제 화면 열기</button></div><p className="note">문서 미리보기에는 클릭 가능한 이미지 대신 화면의 목적과 명세를 표시합니다. 실제 서비스 UI와 인터랙션은 React 데모입니다.</p><section className="spec-section"><h2>화면 정의서</h2><div className="spec-columns"><article><h3>주요 구성·표시 정보</h3><ul>{clean(current['주요 구성·표시 정보']).map(item => <li key={item}>{item}</li>)}</ul></article><article><h3>주요 동작</h3><ul>{clean(current['주요 동작']).map(item => <li key={item}>{item}</li>)}</ul></article><article><h3>상태·예외 처리</h3><ul>{clean(current['상태·예외 처리']).map(item => <li key={item}>{item}</li>)}</ul></article></div></section><section className="spec-section"><h2>연결된 기능명세서 <small>{related.length}개</small></h2>{related.length ? related.map(feature => <article className="feature-card" key={feature['기능 ID']}><div className="feature-title"><code>{feature['기능 ID']}</code><strong>{feature['기능명']}</strong><span>{feature['유형']} · 중요도 {feature['중요도']}</span></div><p>{feature['기능 설명']}</p><details><summary>데이터·로직과 예외 보기</summary><h4>데이터·로직</h4><ul>{clean(feature['데이터·로직']).map(item => <li key={item}>{item}</li>)}</ul><h4>예외·제한사항</h4><ul>{clean(feature['예외·제한사항']).map(item => <li key={item}>{item}</li>)}</ul><p><b>Actor / Trigger / QA 기준:</b> 상세 조건은 원본 Notion 기능명세에서 확인 필요</p></details></article>) : <p>연결 기능 확인 필요</p>}</section></section></div><div className="doc-footer"><button disabled={spec.screens[0] === current} onClick={() => goDoc(screenId(spec.screens[Math.max(0, spec.screens.indexOf(current) - 1)]))}>이전 화면</button><button disabled={spec.screens.at(-1) === current} onClick={() => goDoc(screenId(spec.screens[Math.min(spec.screens.length - 1, spec.screens.indexOf(current) + 1)]))}>다음 화면</button></div></main>}
    {tab === 'demo' && <main className="demo-wrap"><div className="demo-banner"><b>시연 화면 · 실제 React UI</b><span>차량·날씨·서버 데이터는 예시값이며 실제 기기와 연결되지 않습니다.</span></div><DemoBridge onExit={() => navigate('/flow')} /></main>}
  </div>
}

function DemoBridge({ onExit }: { onExit: () => void }) {
  const location = useLocation()
  const id = new URLSearchParams(location.search).get('screen') ?? 'SCR-001'
  return <div className="demo-launch"><p>선택한 화면 <b>{id}</b></p><p>시연 앱이 이 경로에서 실행됩니다.</p><button className="primary-button" onClick={onExit}>전체 흐름으로</button></div>
}
