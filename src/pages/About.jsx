import { Outlet } from "react-router-dom"

function About(){

  return(
    <>
    <button>회사 소개</button>
    <button>연혁</button>
    <button>오시는 길</button>

    {/* Outlet를 넣어주면 선택한 차례가 뭔지 알수있게 된다  */}
    <Outlet /> 
    
    </>



  )

}
export default About