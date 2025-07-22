import { useEffect, useState } from 'react'
import './TabContent.css'

function TabContent({tabNumber}){
  const[fade, setFade]=useState('');

  //state를 업데이트하는 작업은 비동기로 처리
  //state를 변경하는 함수를 호출하면 바로 반영되는게 아니라 내부적으로 일단 저장됨
  //그리고 한번에 모아둔 변경처리를 일괄적으로 함->렌더링을 한번만 하게됨.
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setFade('end');
    }, 10)

    return()=>{
      clearTimeout(timer);
      setFade('');
    }

  },[tabNumber])

  return(
    <div className={`start ${fade}`}>
      {
        [<div>상세정보</div>,<div>리뷰</div>,<div>교환 및 반품정보</div> ][tabNumber]
      }
    </div>
  )

}
export default TabContent