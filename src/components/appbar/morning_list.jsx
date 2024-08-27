import React from 'react'

function MorningList() {
  const list = [
    {en: "", ar: "صباح الفل"},
    {en: "", ar: "44 درجة الحرارة طقس حار اليوم"},
    {en: "", ar: "أرامكو ووورلد وايد: شراكة ذكاء اصطناعي مثيرة"},
    {en: "", ar: "احصل على AHW Intel Extreme PC الآن!"},
    {en: "", ar: "فريق T1 يتوج بطلًا في League of Legends!"},
  ]
  return (
    <div className="block text-sm text-left leading-tight">
        <span className="inline-flex flex-col h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] overflow-hidden">
            {/* <ul className="block animate-morning-slide text-left leading-tight [&_li]:block">
              {list.map((_, i)=>{
                return <li key={i}>{_.ar}</li>
              })}
              <li aria-hidden={true}>{list[list.length-1].ar}</li>
            </ul> */}
            صباح الفل
        </span>
    </div>
  )
}

export default MorningList