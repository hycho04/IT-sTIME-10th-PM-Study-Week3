export type FigmaFrameId = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11'

// Original Figma-exported artboards provided by the project owner, split by frame number.
export default function ProvidedWireframe({ frameId }: { frameId: FigmaFrameId }) {
  switch (frameId) {
      case '01': return (
        <div className="w-[1700px] h-[1184px] relative bg-neutral-100 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-zinc-200 overflow-hidden">
              <div className="left-[948px] top-[1020px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">온도</div>
              <div className="size-3.5 left-[955px] top-[825px] absolute bg-zinc-300 rounded-full" />
              <div className="left-[1148px] top-[1020px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">조명</div>
              <div className="size-3.5 left-[1155px] top-[748px] absolute bg-zinc-300 rounded-full" />
              <div className="left-[1348px] top-[1020px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">시트</div>
              <div className="size-3.5 left-[1355px] top-[799px] absolute bg-zinc-300 rounded-full" />
              <div className="left-[1527px] top-[1020px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">디스플레이</div>
              <div className="size-3.5 left-[1555px] top-[630px] absolute bg-zinc-300 rounded-full" />
              <div className="left-[943px] top-[797px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">22°C</div>
              <div className="left-[1144px] top-[717px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">20%</div>
              <div className="left-[1358px] top-[763px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">3</div>
              <div className="left-[1543px] top-[592px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">60%</div>
              <div className="size- left-[908px] top-[230px] absolute inline-flex justify-start items-center gap-5">
                <div className="w-56 h-60 relative bg-neutral-950 rounded-3xl overflow-hidden">
                  <div className="left-[18px] top-[20px] absolute justify-start text-white text-xl font-bold font-['Wanted_Sans']">휴식 모드</div>
                  <div className="left-[18px] top-[60px] absolute justify-start text-white text-base font-normal font-['Wanted_Sans']">적당한 공조·은은한 조명</div>
                </div>
                <div className="w-56 h-60 relative bg-gray-200 rounded-3xl overflow-hidden">
                  <div className="left-[18px] top-[20px] absolute justify-start text-neutral-950 text-xl font-bold font-['Wanted_Sans']">미디어 모드</div>
                  <div className="left-[18px] top-[60px] absolute justify-start text-gray-600 text-base font-normal font-['Wanted_Sans']">화면·음향 중심, 조명 낮춤</div>
                </div>
                <div className="w-56 h-60 relative bg-gray-200 rounded-3xl overflow-hidden">
                  <div className="left-[18px] top-[20px] absolute justify-start text-neutral-950 text-xl font-bold font-['Wanted_Sans']">취침 모드</div>
                  <div className="left-[18px] top-[60px] absolute justify-start text-gray-600 text-base font-normal font-['Wanted_Sans']">조명·화면 밝기 최소화</div>
                </div>
              </div>
              <div className="w-[593px] h-48 left-[962px] top-[638px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
              <div className="size- left-[640px] top-[50px] absolute inline-flex justify-start items-center gap-5">
                <div className="w-48 h-14 relative bg-neutral-950 rounded-[30px] overflow-hidden">
                  <div className="left-[80px] top-[13px] absolute text-center justify-start text-white text-2xl font-medium font-['Wanted_Sans'] leading-8">캠핑</div>
                </div>
                <div className="w-48 h-14 relative bg-gray-200 rounded-[30px] overflow-hidden">
                  <div className="left-[80px] top-[13px] absolute text-center justify-start text-black text-2xl font-medium font-['Wanted_Sans'] leading-8">기록</div>
                </div>
              </div>
              <div className="size-14 left-[1542px] top-[50px] absolute bg-gray-200 rounded-[999px] overflow-hidden">
                <div className="size-6 left-[18px] top-[18px] absolute overflow-hidden">
                  <div className="size-4 left-[3.04px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                </div>
              </div>
              <div className="left-[1339px] top-[71px] absolute text-right justify-start text-zinc-500 text-base font-normal font-['Wanted_Sans']">차량 연결됨 · 방금 업데이트</div>
              <div className="w-[786px] px-7 py-10 left-[80px] top-[230px] absolute bg-gradient-to-b from-white to-zinc-300 rounded-[32px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start gap-10">
                  <div className="justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">캠핑 계획</div>
                  <div className="justify-start text-stone-950 text-4xl font-bold font-['Wanted_Sans']">캠핑 준비를 시작해볼까요?</div>
                  <div className="w-56 h-14 relative bg-zinc-950 rounded-3xl overflow-hidden">
                    <div className="left-[71px] top-[18px] absolute text-center justify-start text-white text-base font-bold font-['Wanted_Sans']">캠핑 계획 설정</div>
                  </div>
                  <div className="self-stretch h-24 relative rounded-3xl overflow-hidden">
                    <div className="w-60 h-24 left-0 top-0 absolute bg-white/80 rounded-2xl overflow-hidden">
                      <div className="left-[18px] top-[15px] absolute opacity-60 justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">현재 배터리</div>
                      <div className="left-[18px] top-[43px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">82%</div>
                    </div>
                    <div className="w-60 h-24 left-[248px] top-0 absolute bg-white/80 rounded-2xl overflow-hidden">
                      <div className="left-[18px] top-[15px] absolute opacity-60 justify-start text-stone-950 text-xs font-bold font-['Wanted_Sans']">주행 가능 거리</div>
                      <div className="left-[18px] top-[43px] absolute justify-start text-zinc-500 text-2xl font-bold font-['Wanted_Sans']">304 km</div>
                    </div>
                    <div className="w-60 h-24 left-[496px] top-0 absolute bg-white/80 rounded-2xl overflow-hidden">
                      <div className="left-[18px] top-[15px] absolute opacity-60 justify-start text-gray-600 text-xs font-medium font-['Wanted_Sans']">실내 온도</div>
                      <div className="left-[18px] top-[43px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">24°C</div>
                    </div>
                  </div>
                  <div className="justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">현재 날씨 · 서울 성수동</div>
                  <div className="justify-start text-stone-950 text-6xl font-bold font-['Wanted_Sans']">맑음  8°</div>
                  <div className="justify-start text-stone-950 text-xl font-bold font-['Wanted_Sans']">오늘 최저 3°C</div>
                  <div className="justify-start text-zinc-500 text-lg font-normal font-['Wanted_Sans']">강수 20% · 바람 2m/s</div>
                </div>
              </div>
            </div>
      )
      case '02': return (
        <div className="w-[1700px] h-[1184px] relative bg-neutral-100 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-zinc-200 overflow-hidden">
              <div className="size- px-7 py-10 left-[80px] top-[206px] absolute bg-gradient-to-b from-white to-zinc-300 rounded-[32px] inline-flex justify-start items-center gap-2.5 overflow-hidden">
                <div className="w-[730px] inline-flex flex-col justify-start items-center gap-10">
                  <div className="justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">한강 노을 캠핑</div>
                  <div className="justify-start text-stone-950 text-6xl font-bold font-['Wanted_Sans']">2시간 18분</div>
                  <div className="w-52 h-14 relative bg-gray-200 rounded-3xl overflow-hidden">
                    <div className="left-[65px] top-[19px] absolute text-center justify-start text-zinc-500 text-sm font-medium font-['Wanted_Sans']">캠핑 정보 수정</div>
                  </div>
                  <div className="opacity-70 justify-start text-zinc-500 text-sm font-medium font-['Wanted_Sans']">캠핑에 사용할 배터리</div>
                  <div className="text-right justify-start text-stone-950 text-xl font-bold font-['Wanted_Sans']">40%</div>
                  <div className="w-[690px] h-3.5 bg-zinc-200 rounded-md" />
                  <div className="w-72 h-3.5 bg-neutral-400 rounded-md" />
                  <div className="self-stretch h-24 relative rounded-3xl overflow-hidden">
                    <div className="w-60 h-24 left-0 top-0 absolute bg-white/80 rounded-2xl overflow-hidden">
                      <div className="left-[18px] top-[15px] absolute opacity-60 justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">현재 배터리</div>
                      <div className="left-[18px] top-[43px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">64%</div>
                    </div>
                    <div className="w-60 h-24 left-[248px] top-0 absolute bg-white/80 rounded-2xl overflow-hidden">
                      <div className="left-[18px] top-[15px] absolute opacity-60 justify-start text-stone-950 text-xs font-bold font-['Wanted_Sans']">주행 가능 거리</div>
                      <div className="left-[18px] top-[43px] absolute justify-start text-zinc-500 text-2xl font-bold font-['Wanted_Sans']">248 km</div>
                    </div>
                    <div className="w-60 h-24 left-[496px] top-0 absolute bg-white/80 rounded-2xl overflow-hidden">
                      <div className="left-[18px] top-[15px] absolute opacity-60 justify-start text-gray-600 text-xs font-medium font-['Wanted_Sans']">실내 온도</div>
                      <div className="left-[18px] top-[43px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">24°C</div>
                    </div>
                  </div>
                  <div className="self-stretch h-24 relative bg-white/80 rounded-[20px] overflow-hidden">
                    <div className="left-[20px] top-[15px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">다음 목적지</div>
                    <div className="left-[20px] top-[51px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">남양주</div>
                    <div className="left-[572px] top-[55px] absolute opacity-60 text-right justify-start text-zinc-500 text-sm font-medium font-['Wanted_Sans']">248 km · 42% 확보</div>
                  </div>
                  <div className="justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">현재 날씨 · 서울 성수동</div>
                  <div className="justify-start text-stone-950 text-6xl font-bold font-['Wanted_Sans']">맑음  8°</div>
                  <div className="justify-start text-stone-950 text-xl font-bold font-['Wanted_Sans']">오늘 최저 3°C</div>
                  <div className="justify-start text-zinc-500 text-lg font-normal font-['Wanted_Sans']">강수 20% · 바람 2m/s</div>
                  <div className="w-[730px] h-16 relative bg-zinc-950 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-200">
                    <div className="left-[324px] top-[22px] absolute text-center justify-start text-white text-xl font-bold font-['Wanted_Sans']">캠핑 종료</div>
                  </div>
                </div>
              </div>
              <div className="left-[948px] top-[996px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">온도</div>
              <div className="size-3.5 left-[955px] top-[801px] absolute bg-zinc-300 rounded-full" />
              <div className="left-[1148px] top-[996px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">조명</div>
              <div className="size-3.5 left-[1155px] top-[724px] absolute bg-zinc-300 rounded-full" />
              <div className="left-[1348px] top-[996px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">시트</div>
              <div className="size-3.5 left-[1355px] top-[775px] absolute bg-zinc-300 rounded-full" />
              <div className="left-[1527px] top-[996px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">디스플레이</div>
              <div className="size-3.5 left-[1555px] top-[606px] absolute bg-zinc-300 rounded-full" />
              <div className="left-[943px] top-[773px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">22°C</div>
              <div className="left-[1144px] top-[693px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">20%</div>
              <div className="left-[1358px] top-[739px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">3</div>
              <div className="left-[1543px] top-[568px] absolute text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">60%</div>
              <div className="size- left-[908px] top-[206px] absolute inline-flex justify-start items-center gap-5">
                <div className="w-56 h-60 relative bg-neutral-950 rounded-3xl overflow-hidden">
                  <div className="left-[18px] top-[20px] absolute justify-start text-white text-xl font-bold font-['Wanted_Sans']">휴식 모드</div>
                  <div className="left-[18px] top-[60px] absolute justify-start text-white text-base font-normal font-['Wanted_Sans']">적당한 공조·은은한 조명</div>
                </div>
                <div className="w-56 h-60 relative bg-gray-200 rounded-3xl overflow-hidden">
                  <div className="left-[18px] top-[20px] absolute justify-start text-neutral-950 text-xl font-bold font-['Wanted_Sans']">미디어 모드</div>
                  <div className="left-[18px] top-[60px] absolute justify-start text-gray-600 text-base font-normal font-['Wanted_Sans']">화면·음향 중심, 조명 낮춤</div>
                </div>
                <div className="w-56 h-60 relative bg-gray-200 rounded-3xl overflow-hidden">
                  <div className="left-[18px] top-[20px] absolute justify-start text-neutral-950 text-xl font-bold font-['Wanted_Sans']">취침 모드</div>
                  <div className="left-[18px] top-[60px] absolute justify-start text-gray-600 text-base font-normal font-['Wanted_Sans']">조명·화면 밝기 최소화</div>
                </div>
              </div>
              <div className="w-[593px] h-48 left-[962px] top-[614px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
              <div className="size- left-[640px] top-[50px] absolute inline-flex justify-start items-center gap-5">
                <div className="w-48 h-14 relative bg-neutral-950 rounded-[30px] overflow-hidden">
                  <div className="left-[80px] top-[13px] absolute text-center justify-start text-white text-2xl font-medium font-['Wanted_Sans'] leading-8">캠핑</div>
                </div>
                <div className="w-48 h-14 relative bg-gray-200 rounded-[30px] overflow-hidden">
                  <div className="left-[80px] top-[13px] absolute text-center justify-start text-black text-2xl font-medium font-['Wanted_Sans'] leading-8">기록</div>
                </div>
              </div>
              <div className="size-14 left-[1542px] top-[50px] absolute bg-gray-200 rounded-[999px] overflow-hidden">
                <div className="size-6 left-[18px] top-[18px] absolute overflow-hidden">
                  <div className="size-4 left-[3.04px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                </div>
              </div>
              <div className="left-[1339px] top-[71px] absolute text-right justify-start text-zinc-500 text-base font-normal font-['Wanted_Sans']">차량 연결됨 · 방금 업데이트</div>
            </div>
      )
      case '03': return (
        <div className="w-[1700px] h-[1184px] relative bg-neutral-100 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-zinc-200 overflow-hidden">
              <div className="w-[1020px] h-[818px] left-[52px] top-[210px] absolute bg-white rounded-[30px] overflow-hidden">
                <div className="left-[28px] top-[26px] absolute justify-start text-stone-950 text-3xl font-bold font-['Noto_Sans_KR']">기록</div>
                <div className="w-[972px] h-36 left-[24px] top-[92px] absolute bg-gray-200 rounded-3xl overflow-hidden">
                  <div className="left-[22px] top-[20px] absolute justify-start text-zinc-500 text-base font-bold font-['Wanted_Sans']">11.12</div>
                  <div className="left-[128px] top-[18px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">한강 노을 캠핑</div>
                  <div className="left-[687px] top-[18px] absolute text-right justify-start text-zinc-900 text-xl font-medium font-['Wanted_Sans']">12h 34m</div>
                  <div className="left-[892px] top-[18px] absolute text-right justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">18%</div>
                  <div className="left-[128px] top-[68px] absolute justify-start text-zinc-500 text-base font-normal font-['Wanted_Sans']">휴식 모드 중심 · 설정 변경 3회</div>
                </div>
                <div className="w-[972px] h-36 left-[24px] top-[260px] absolute bg-white rounded-3xl overflow-hidden">
                  <div className="left-[22px] top-[20px] absolute justify-start text-zinc-500 text-base font-bold font-['Wanted_Sans']">11.03</div>
                  <div className="left-[128px] top-[18px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">가평 숲속 캠핑</div>
                  <div className="left-[686px] top-[18px] absolute text-right justify-start text-zinc-900 text-xl font-medium font-['Wanted_Sans']">09h 10m</div>
                  <div className="left-[893px] top-[18px] absolute text-right justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">14%</div>
                  <div className="left-[128px] top-[68px] absolute justify-start text-zinc-500 text-base font-normal font-['Wanted_Sans']">휴식 모드 중심 · 설정 변경 3회</div>
                </div>
                <div className="w-[972px] h-36 left-[24px] top-[428px] absolute bg-white rounded-3xl overflow-hidden">
                  <div className="left-[22px] top-[20px] absolute justify-start text-zinc-500 text-base font-bold font-['Wanted_Sans']">10.21</div>
                  <div className="left-[128px] top-[18px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">을왕리 차박</div>
                  <div className="left-[690px] top-[18px] absolute text-right justify-start text-zinc-900 text-xl font-medium font-['Wanted_Sans']">11h 42m</div>
                  <div className="left-[893px] top-[18px] absolute text-right justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">21%</div>
                  <div className="left-[128px] top-[68px] absolute justify-start text-zinc-500 text-base font-normal font-['Wanted_Sans']">휴식 모드 중심 · 설정 변경 3회</div>
                </div>
                <div className="w-[972px] h-36 left-[24px] top-[596px] absolute bg-white rounded-3xl overflow-hidden">
                  <div className="left-[22px] top-[20px] absolute justify-start text-zinc-500 text-base font-bold font-['Wanted_Sans']">10.09</div>
                  <div className="left-[128px] top-[18px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">남양주 새벽 캠핑</div>
                  <div className="left-[683px] top-[18px] absolute text-right justify-start text-zinc-900 text-xl font-medium font-['Wanted_Sans']">08h 55m</div>
                  <div className="left-[893px] top-[18px] absolute text-right justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">12%</div>
                  <div className="left-[128px] top-[68px] absolute justify-start text-zinc-500 text-base font-normal font-['Wanted_Sans']">휴식 모드 중심 · 설정 변경 3회</div>
                </div>
              </div>
              <div className="w-[548px] h-96 left-[1100px] top-[210px] absolute bg-gradient-to-b from-zinc-900 to-zinc-700 rounded-[30px] overflow-hidden">
                <div className="left-[28px] top-[28px] absolute justify-start text-zinc-400 text-lg font-medium font-['Wanted_Sans']">이번 달 휴식</div>
                <div className="left-[28px] top-[72px] absolute justify-start text-white text-7xl font-bold font-['Wanted_Sans']">42h</div>
                <div className="left-[28px] top-[158px] absolute justify-start text-zinc-400 text-xl font-normal font-['Wanted_Sans']">4번의 캠핑</div>
                <div className="left-[28px] top-[218px] absolute text-right justify-start text-zinc-400 text-lg font-medium font-['Noto_Sans_KR']">평균 10h 48m</div>
              </div>
              <div className="w-[548px] h-96 left-[1100px] top-[634px] absolute bg-white rounded-[30px] overflow-hidden">
                <div className="left-[28px] top-[28px] absolute justify-start text-zinc-500 text-lg font-medium font-['Wanted_Sans']">가장 오래 사용한 모드</div>
                <div className="left-[28px] top-[74px] absolute justify-start text-stone-950 text-4xl font-bold font-['Wanted_Sans']">휴식 모드</div>
                <div className="left-[28px] top-[128px] absolute justify-start text-zinc-500 text-lg font-normal font-['Wanted_Sans']">총 26시간</div>
              </div>
              <div className="size- left-[640px] top-[50px] absolute inline-flex justify-start items-center gap-5">
                <div className="w-48 h-14 relative bg-gray-200 rounded-[30px] overflow-hidden">
                  <div className="left-[80px] top-[13px] absolute text-center justify-start text-black text-2xl font-medium font-['Wanted_Sans'] leading-8">캠핑</div>
                </div>
                <div className="w-48 h-14 relative bg-neutral-950 rounded-[30px] overflow-hidden">
                  <div className="left-[80px] top-[13px] absolute text-center justify-start text-white text-2xl font-medium font-['Wanted_Sans'] leading-8">기록</div>
                </div>
              </div>
              <div className="size-14 left-[1542px] top-[50px] absolute bg-gray-200 rounded-[999px] overflow-hidden">
                <div className="size-6 left-[18px] top-[18px] absolute overflow-hidden">
                  <div className="size-4 left-[3.04px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                </div>
              </div>
              <div className="left-[1339px] top-[71px] absolute text-right justify-start text-zinc-500 text-base font-normal font-['Wanted_Sans']">차량 연결됨 · 방금 업데이트</div>
            </div>
      )
      case '04': return (
        <div className="w-[810px] h-[1100px] relative bg-white rounded-[38px] overflow-hidden">
            <div className="left-[36px] top-[28px] absolute justify-start text-zinc-500 text-base font-bold font-['Wanted_Sans']">CAMPING PLAN</div>
            <div className="left-[36px] top-[62px] absolute justify-start text-stone-950 text-4xl font-bold font-['Wanted_Sans']">캠핑 계획 설정</div>
            <div className="left-[36px] top-[112px] absolute justify-start text-zinc-500 text-lg font-normal font-['Wanted_Sans']">남길 배터리만 정하고, 필요할 때 다음 목적지를 추가할 수 있어요.</div>
            <div className="w-[738px] h-16 left-[36px] top-[956px] absolute bg-stone-950 rounded-3xl">
              <div className="left-[326px] top-[20px] absolute justify-start text-white text-xl font-bold font-['Wanted_Sans']">캠핑 시작</div>
            </div>
            <div className="w-[738px] h-[507px] left-[36px] top-[166px] absolute inline-flex flex-col justify-start items-start gap-4">
              <div className="w-[738px] h-20 relative bg-gray-100 rounded-[20px] overflow-hidden">
                <div className="left-[22px] top-[13px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">캠핑 이름 · 선택</div>
                <div className="left-[22px] top-[43px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">한강 노을 캠핑</div>
              </div>
              <div className="w-[738px] h-16 relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
                <div className="left-[29px] top-[23px] absolute text-center justify-start text-zinc-950 text-xl font-medium font-['Wanted_Sans']">＋</div>
                <div className="left-[76px] top-[26px] absolute justify-start text-zinc-950 text-lg font-bold font-['Wanted_Sans']">다음 목적지 추가</div>
                <div className="left-[675px] top-[28px] absolute text-right justify-start text-zinc-500 text-sm font-medium font-['Wanted_Sans']">선택</div>
              </div>
              <div className="w-[738px] h-32 relative bg-gray-100 rounded-[20px] overflow-hidden">
                <div className="left-[22px] top-[14px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">남길 배터리</div>
                <div className="left-[657px] top-[12px] absolute text-right justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">20%</div>
                <div className="w-[682px] h-2.5 left-[22px] top-[60px] absolute bg-zinc-300 rounded-[5px]" />
                <div className="w-44 h-2.5 left-[22px] top-[60px] absolute bg-zinc-950 rounded-[5px]" />
                <div className="size-9 left-[174.50px] top-[47px] absolute bg-stone-300 rounded-full" />
                <div className="left-[22px] top-[82px] absolute justify-start text-zinc-500 text-xs font-normal font-['Wanted_Sans']">10%</div>
                <div className="left-[677px] top-[82px] absolute text-right justify-start text-zinc-500 text-xs font-normal font-['Wanted_Sans']">50%</div>
              </div>
              <div className="w-[738px] h-44 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
                <div className="left-[22px] top-[48px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">캠핑에 사용 가능한 배터리</div>
                <div className="left-[22px] top-[76px] absolute justify-start text-zinc-950 text-3xl font-bold font-['Wanted_Sans']">62%</div>
                <div className="left-[425px] top-[52px] absolute text-center justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">현재 배터리</div>
                <div className="left-[430px] top-[80px] absolute text-center justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">82%</div>
                <div className="left-[611px] top-[52px] absolute text-center justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">캠핑 종료</div>
                <div className="left-[610px] top-[80px] absolute text-center justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">20%</div>
              </div>
            </div>
          </div>
      )
      case '05': return (
        <div className="w-[810px] h-[1100px] relative bg-white rounded-[38px] overflow-hidden">
            <div className="left-[36px] top-[28px] absolute justify-start text-zinc-500 text-base font-bold font-['Wanted_Sans']">CAMPING PLAN</div>
            <div className="left-[36px] top-[62px] absolute justify-start text-stone-950 text-4xl font-bold font-['Wanted_Sans']">캠핑 계획 설정</div>
            <div className="left-[36px] top-[112px] absolute justify-start text-zinc-500 text-lg font-normal font-['Wanted_Sans']">목적지를 추가하면 이동 소모량을 반영해 사용할 수 있는 배터리를 다시 계산해요.</div>
            <div className="w-[738px] h-16 left-[36px] top-[956px] absolute bg-stone-950 rounded-3xl">
              <div className="left-[326px] top-[20px] absolute justify-start text-white text-xl font-bold font-['Wanted_Sans']">캠핑 시작</div>
            </div>
            <div className="w-[738px] left-[36px] top-[166px] absolute inline-flex flex-col justify-start items-start gap-4">
              <div className="w-[738px] h-20 relative bg-gray-100 rounded-[20px] overflow-hidden">
                <div className="left-[22px] top-[13px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">캠핑 이름 · 선택</div>
                <div className="left-[22px] top-[43px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">한강 노을 캠핑</div>
              </div>
              <div className="w-[738px] h-24 relative bg-gray-100 rounded-[20px] overflow-hidden">
                <div className="left-[22px] top-[14px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">다음 목적지</div>
                <div className="left-[22px] top-[45px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">서울 성수동</div>
                <div className="left-[641px] top-[39px] absolute text-center justify-start text-zinc-950 text-base font-medium font-['Wanted_Sans']">삭제</div>
              </div>
              <div className="w-[738px] h-24 relative bg-zinc-950 rounded-[20px] overflow-hidden">
                <div className="left-[22px] top-[15px] absolute justify-start text-gray-400 text-xs font-medium font-['Wanted_Sans']">목적지까지</div>
                <div className="left-[22px] top-[43px] absolute justify-start text-white text-2xl font-bold font-['Wanted_Sans']">84 km</div>
                <div className="left-[270px] top-[15px] absolute justify-start text-gray-400 text-xs font-medium font-['Wanted_Sans']">이동 예상 소모</div>
                <div className="left-[270px] top-[43px] absolute justify-start text-white text-2xl font-bold font-['Wanted_Sans']">약 14%</div>
              </div>
              <div className="w-[738px] h-32 relative bg-gray-100 rounded-[20px] overflow-hidden">
                <div className="left-[22px] top-[14px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">남길 배터리</div>
                <div className="left-[657px] top-[12px] absolute text-right justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">20%</div>
                <div className="w-[682px] h-2.5 left-[22px] top-[60px] absolute bg-zinc-300 rounded-[5px]" />
                <div className="w-44 h-2.5 left-[22px] top-[60px] absolute bg-zinc-950 rounded-[5px]" />
                <div className="size-9 left-[174.50px] top-[47px] absolute bg-stone-300 rounded-full" />
                <div className="left-[22px] top-[82px] absolute justify-start text-zinc-500 text-xs font-normal font-['Wanted_Sans']">10%</div>
                <div className="left-[677px] top-[82px] absolute text-right justify-start text-zinc-500 text-xs font-normal font-['Wanted_Sans']">50%</div>
              </div>
              <div className="w-[738px] h-40 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
                <div className="left-[22px] top-[48px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">캠핑에 사용 가능한 배터리</div>
                <div className="left-[22px] top-[76px] absolute justify-start text-zinc-950 text-3xl font-bold font-['Wanted_Sans']">48%</div>
                <div className="left-[345px] top-[52px] absolute text-center justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">현재</div>
                <div className="left-[330px] top-[80px] absolute text-center justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">82%</div>
                <div className="left-[488px] top-[52px] absolute text-center justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">캠핑 종료</div>
                <div className="left-[485px] top-[80px] absolute text-center justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">34%</div>
                <div className="left-[638px] top-[52px] absolute text-center justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">목적지 도착</div>
                <div className="left-[640px] top-[80px] absolute text-center justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">20%</div>
              </div>
            </div>
          </div>
      )
      case '06': return (
        <div className="w-[1000px] h-[920px] relative bg-white rounded-[32px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.18)] overflow-hidden">
              <div className="left-[40px] top-[34px] absolute justify-start text-zinc-950 text-3xl font-bold font-['Wanted_Sans']">한강 노을 캠핑</div>
              <div className="left-[40px] top-[84px] absolute justify-start text-zinc-500 text-lg font-normal font-['Wanted_Sans']">11.04 23:20–11.05 07:20</div>
              <div className="w-[920px] left-[40px] top-[140px] absolute inline-flex flex-col justify-start items-start gap-7">
                <div className="self-stretch h-32 relative bg-gray-100 rounded-3xl overflow-hidden">
                  <div className="left-[24px] top-[22px] absolute justify-start text-zinc-500 text-sm font-medium font-['Wanted_Sans']">캠핑 시간</div>
                  <div className="left-[24px] top-[55px] absolute justify-start text-zinc-950 text-2xl font-bold font-['Wanted_Sans']">8시간</div>
                  <div className="left-[326px] top-[22px] absolute justify-start text-zinc-500 text-sm font-medium font-['Wanted_Sans']">총 배터리 사용</div>
                  <div className="left-[326px] top-[55px] absolute justify-start text-zinc-950 text-2xl font-bold font-['Wanted_Sans']">18%</div>
                  <div className="left-[628px] top-[22px] absolute justify-start text-zinc-500 text-sm font-medium font-['Wanted_Sans']">배터리 변화</div>
                  <div className="left-[628px] top-[55px] absolute justify-start text-zinc-950 text-2xl font-bold font-['Wanted_Sans']">82% → 64%</div>
                </div>
                <div className="self-stretch h-16 relative bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
                  <div className="left-[20px] top-[22px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">다음 목적지</div>
                  <div className="left-[174px] top-[21px] absolute justify-start text-zinc-950 text-lg font-bold font-['Wanted_Sans']">서울 성수동</div>
                  <div className="left-[841px] top-[21px] absolute text-right justify-start text-zinc-950 text-base font-medium font-['Wanted_Sans']">84 km</div>
                </div>
                <div className="justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">사용한 모드</div>
                <div className="w-[920px] h-60 relative bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
                  <div className="left-[592px] top-[23px] absolute justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">가장 오래 사용</div>
                  <div className="left-[744px] top-[21px] absolute text-right justify-start text-zinc-950 text-base font-bold font-['Wanted_Sans']">취침 모드 · 4시간 15분</div>
                  <div className="size-2.5 left-[20px] top-[68px] absolute bg-zinc-950 rounded-full" />
                  <div className="w-0.5 h-8 left-[24px] top-[81px] absolute bg-zinc-300" />
                  <div className="left-[44px] top-[61px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">23:20–00:40</div>
                  <div className="left-[248px] top-[61px] absolute justify-start text-zinc-950 text-base font-bold font-['Wanted_Sans']">휴식 모드</div>
                  <div className="left-[822px] top-[61px] absolute text-right justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">1시간 20분</div>
                  <div className="size-2.5 left-[20px] top-[110px] absolute bg-zinc-950 rounded-full" />
                  <div className="w-0.5 h-8 left-[24px] top-[123px] absolute bg-zinc-300" />
                  <div className="left-[44px] top-[103px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">00:40–02:10</div>
                  <div className="left-[248px] top-[103px] absolute justify-start text-zinc-950 text-base font-bold font-['Wanted_Sans']">미디어 모드</div>
                  <div className="left-[821px] top-[103px] absolute text-right justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">1시간 30분</div>
                  <div className="size-2.5 left-[20px] top-[152px] absolute bg-zinc-400 rounded-full" />
                  <div className="w-0.5 h-8 left-[24px] top-[165px] absolute bg-zinc-300" />
                  <div className="left-[44px] top-[145px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">02:10–03:05</div>
                  <div className="left-[248px] top-[145px] absolute justify-start text-zinc-950 text-base font-bold font-['Wanted_Sans']">연결 끊김</div>
                  <div className="left-[834px] top-[145px] absolute text-right justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">확인 불가</div>
                  <div className="size-2.5 left-[20px] top-[194px] absolute bg-zinc-950 rounded-full" />
                  <div className="left-[44px] top-[187px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">03:05–07:20</div>
                  <div className="left-[248px] top-[187px] absolute justify-start text-zinc-950 text-base font-bold font-['Wanted_Sans']">취침 모드</div>
                  <div className="left-[821px] top-[187px] absolute text-right justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">4시간 15분</div>
                </div>
                <div className="self-stretch h-28 relative rounded-2xl overflow-hidden">
                  <div className="w-96 h-28 left-0 top-0 absolute bg-gray-100 rounded-[20px] overflow-hidden">
                    <div className="w-10 left-[18px] top-[34px] absolute text-center justify-start text-zinc-950 text-2xl font-bold font-['Noto_Sans_KR']">✓</div>
                    <div className="left-[72px] top-[22px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">차량 설정 복원</div>
                    <div className="left-[72px] top-[53px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">완료</div>
                  </div>
                  <div className="w-[500px] h-28 left-[420px] top-0 absolute bg-gray-100 rounded-[20px] overflow-hidden">
                    <div className="left-[20px] top-[20px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">출발 전 점검</div>
                    <div className="left-[20px] top-[53px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">미완료</div>
                    <div className="w-56 h-12 left-[250px] top-[31px] absolute bg-zinc-950 rounded-3xl overflow-hidden">
                      <div className="left-[72px] top-[15px] absolute text-center justify-start text-white text-base font-medium font-['Wanted_Sans']">점검하러 가기</div>
                    </div>
                  </div>
                </div>
                <div className="w-[920px] h-14 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
                  <div className="left-[444px] top-[17px] absolute text-center justify-start text-zinc-950 text-lg font-medium font-['Wanted_Sans']">닫기</div>
                </div>
              </div>
            </div>
      )
      case '07': return (
        <div className="w-[1000px] h-[820px] relative bg-white rounded-[32px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.18)] overflow-hidden">
              <div className="left-[40px] top-[32px] absolute justify-start text-zinc-950 text-3xl font-bold font-['Wanted_Sans']">출발 전 점검</div>
              <div className="left-[40px] top-[82px] absolute justify-start text-zinc-500 text-base font-normal font-['Wanted_Sans']">출발하기 전에 차량 상태와 주변을 확인해 주세요.</div>
              <div className="w-[920px] h-24 left-[40px] top-[132px] absolute bg-gray-100 rounded-[20px] overflow-hidden">
                <div className="left-[22px] top-[21px] absolute justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">다음 목적지</div>
                <div className="left-[22px] top-[52px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">서울 성수동</div>
                <div className="left-[340px] top-[21px] absolute justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">목적지까지</div>
                <div className="left-[340px] top-[52px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">84 km</div>
                <div className="left-[594px] top-[21px] absolute justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">현재 배터리</div>
                <div className="left-[594px] top-[52px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">64%</div>
                <div className="left-[760px] top-[21px] absolute justify-start text-zinc-500 text-xs font-medium font-['Wanted_Sans']">도착 예상</div>
                <div className="left-[760px] top-[52px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">약 50%</div>
              </div>
              <div className="left-[40px] top-[258px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">차량에서 확인했어요</div>
              <div className="w-[920px] h-28 left-[40px] top-[302px] absolute bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
                <div className="w-8 left-[20px] top-[18px] absolute text-center justify-start text-zinc-950 text-lg font-bold font-['Noto_Sans_KR']">✓</div>
                <div className="left-[70px] top-[20px] absolute justify-start text-zinc-950 text-base font-medium font-['Wanted_Sans']">차량 설정 복원</div>
                <div className="left-[864px] top-[21px] absolute text-right justify-start text-zinc-950 text-base font-bold font-['Wanted_Sans']">완료</div>
                <div className="w-8 left-[20px] top-[67px] absolute text-center justify-start text-zinc-950 text-lg font-bold font-['Noto_Sans_KR']">✓</div>
                <div className="left-[70px] top-[69px] absolute justify-start text-zinc-950 text-base font-medium font-['Wanted_Sans']">캠핑 모드 종료</div>
                <div className="left-[864px] top-[70px] absolute text-right justify-start text-zinc-950 text-base font-bold font-['Wanted_Sans']">완료</div>
              </div>
              <div className="left-[40px] top-[456px] absolute justify-start text-zinc-950 text-xl font-bold font-['Wanted_Sans']">직접 확인해 주세요</div>
              <div className="w-[920px] h-40 left-[40px] top-[500px] absolute bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
                <div className="size-7 left-[20px] top-[18px] absolute bg-white rounded-lg border-2 border-zinc-400" />
                <div className="left-[66px] top-[23px] absolute justify-start text-zinc-950 text-base font-medium font-['Wanted_Sans']">창문·도어·트렁크가 모두 닫혀 있어요</div>
                <div className="size-7 left-[20px] top-[66px] absolute bg-white rounded-lg border-2 border-zinc-400" />
                <div className="left-[66px] top-[71px] absolute justify-start text-zinc-950 text-base font-medium font-['Wanted_Sans']">충전 케이블과 외부 장비를 정리했어요</div>
                <div className="size-7 left-[20px] top-[114px] absolute bg-white rounded-lg border-2 border-zinc-400" />
                <div className="left-[66px] top-[119px] absolute justify-start text-zinc-950 text-base font-medium font-['Wanted_Sans']">소지품과 캠핑 장소를 다시 확인했어요</div>
              </div>
              <div className="w-64 h-14 left-[40px] top-[706px] absolute bg-white rounded-[29px] outline outline-1 outline-offset-[-1px] outline-zinc-300 overflow-hidden">
                <div className="left-[107px] top-[19px] absolute text-center justify-start text-zinc-950 text-lg font-medium font-['Wanted_Sans']">나중에</div>
              </div>
              <div className="w-[640px] h-14 left-[320px] top-[706px] absolute bg-stone-300 rounded-[29px] overflow-hidden">
                <div className="left-[304px] top-[18px] absolute text-center justify-start text-white text-lg font-medium font-['Wanted_Sans']">완료</div>
              </div>
            </div>
      )
      case '08': return (
        <div className="w-[1200px] h-[790px] relative bg-gradient-to-b from-white to-gray-300 rounded-[40px] overflow-hidden">
              <div className="w-32 h-12 left-[38px] top-[34px] absolute bg-stone-950 rounded-3xl overflow-hidden">
                <div className="left-[35px] top-[13px] absolute text-center justify-start text-white text-lg font-medium font-['Wanted_Sans']">SAVED</div>
              </div>
              <div className="w-[1124px] left-[38px] top-[114px] absolute inline-flex flex-col justify-start items-start gap-9">
                <div className="justify-start text-stone-950 text-5xl font-bold font-['Wanted_Sans']">오늘의 캠핑을 마쳤어요</div>
                <div className="justify-start text-zinc-500 text-xl font-normal font-['Wanted_Sans']">2026-11-13(금) 한강 노을 캠핑</div>
                <div className="text-right justify-start text-stone-950 text-7xl font-bold font-['Wanted_Sans']">18%</div>
                <div className="w-[1124px] h-3 bg-gray-200 rounded-md" />
                <div className="w-[719.36px] h-3 bg-stone-950 rounded-md" />
                <div className="size- inline-flex justify-start items-center gap-6">
                  <div className="w-80 h-40 relative bg-white rounded-3xl overflow-hidden">
                    <div className="left-[22px] top-[20px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">캠핑 시간</div>
                    <div className="left-[22px] top-[58px] absolute justify-start text-stone-950 text-4xl font-bold font-['Wanted_Sans']">12h 34m</div>
                  </div>
                  <div className="w-80 h-40 relative bg-white rounded-3xl overflow-hidden">
                    <div className="left-[22px] top-[20px] absolute justify-start text-zinc-500 text-base font-medium font-['Wanted_Sans']">시작 잔량</div>
                    <div className="left-[22px] top-[58px] absolute justify-start text-stone-950 text-4xl font-bold font-['Wanted_Sans']">82%</div>
                  </div>
                  <div className="w-80 h-40 relative bg-stone-950 rounded-3xl overflow-hidden">
                    <div className="left-[22px] top-[20px] absolute justify-start text-zinc-400 text-base font-medium font-['Wanted_Sans']">종료 잔량</div>
                    <div className="left-[22px] top-[58px] absolute justify-start text-white text-4xl font-bold font-['Wanted_Sans']">64%</div>
                  </div>
                </div>
                <div className="self-stretch h-36 relative bg-white rounded-3xl overflow-hidden">
                  <div className="left-[24px] top-[22px] absolute justify-start text-stone-950 text-2xl font-bold font-['Wanted_Sans']">예상보다 4% 적게 사용했어요</div>
                </div>
                <div className="w-[554px] h-16 relative bg-stone-950 rounded-3xl">
                  <div className="left-[236px] top-[23px] absolute text-center justify-start text-white text-xl font-bold font-['Wanted_Sans']">확인 완료</div>
                </div>
              </div>
            </div>
      )
      case '09': return (
        <div className="size- p-10 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
              <div className="self-stretch justify-start text-neutral-950 text-2xl font-bold font-['Wanted_Sans']">출발용 배터리를 남겨둘 시간이에요</div>
              <div className="self-stretch justify-start text-gray-600 text-base font-normal font-['Wanted_Sans']">현재 42% · 설정한 기준에 도달했어요.</div>
              <div className="self-stretch justify-start text-neutral-950 text-base font-medium font-['Wanted_Sans']">캠핑 제어를 유지하거나 종료할 수 있어요.</div>
              <div className="self-stretch bg-white inline-flex justify-start items-start gap-3 overflow-hidden">
                <div className="w-72 h-14 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center overflow-hidden">
                  <div className="w-64 h-6 text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">계속 사용</div>
                </div>
                <div className="w-72 h-14 bg-neutral-950 rounded-2xl flex justify-center items-center overflow-hidden">
                  <div className="w-64 h-6 text-center justify-start text-white text-base font-bold font-['Wanted_Sans']">캠핑 종료</div>
                </div>
              </div>
            </div>
      )
      case '10': return (
        <div className="size- p-10 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
              <div className="self-stretch justify-start text-neutral-950 text-2xl font-bold font-['Wanted_Sans']">조명 설정을 적용하지 못했어요</div>
              <div className="self-stretch bg-white inline-flex justify-start items-start gap-3 overflow-hidden">
                <div className="w-72 h-14 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center overflow-hidden">
                  <div className="w-64 h-6 text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">다시 시도</div>
                </div>
                <div className="w-72 h-14 bg-neutral-950 rounded-2xl flex justify-center items-center overflow-hidden">
                  <div className="w-64 h-6 text-center justify-start text-white text-base font-bold font-['Wanted_Sans']">취소</div>
                </div>
              </div>
            </div>
      )
      case '11': return (
        <div className="size- p-10 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
              <div className="self-stretch justify-start text-neutral-950 text-2xl font-bold font-['Wanted_Sans']">차량 정보를 불러오지 못했어요</div>
              <div className="self-stretch justify-start text-gray-600 text-base font-normal font-['Wanted_Sans']">배터리와 주행가능거리를 확인할 수 없습니다.</div>
              <div className="self-stretch justify-start text-neutral-950 text-base font-medium font-['Wanted_Sans']">마지막 업데이트 · 10분 전</div>
              <div className="self-stretch bg-white inline-flex justify-start items-start gap-3 overflow-hidden">
                <div className="w-72 h-14 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center overflow-hidden">
                  <div className="w-64 h-6 text-center justify-start text-neutral-950 text-base font-bold font-['Wanted_Sans']">다시 시도</div>
                </div>
                <div className="w-72 h-14 bg-neutral-950 rounded-2xl flex justify-center items-center overflow-hidden">
                  <div className="w-64 h-6 text-center justify-start text-white text-base font-bold font-['Wanted_Sans']">취소</div>
                </div>
              </div>
            </div>
      )
    default: return null
  }
}

