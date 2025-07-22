
import style from './App.module.css'
import data from './mokData'  //불러올때 필수
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Detail from './pages/Detail'
import About from './pages/About'
import styled from 'styled-components'
import axios from 'axios'
import Cart from './pages/Cart'
import MainPage from './pages/MainPage'


// const 컴포넌트 이름 지정= styled.태그명 `css속성`
const Btn= styled.button `
background: ${props=> props.bg};
color:${props=> props.bg==='blue'?'white':'black'};
font-size: 30px;
border: 1px solid red;
`
const Btn2=styled(Btn)`
width:200px;
height:200px;
`

const Div=styled.div `
padding:20px;
background:skyblue; 
`

function App() {
  const[fruit, setFruit]=useState([]);
 

  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
          .then(response=>{
            console.log(response.data);
            setFruit([...response.data])
          })
          .catch(error=>{
            console.log(error)
          })
  },[])  
  
  return (

    <div className={style.container}>

      {/* <Div>    이건 스타일 줄때
      <Btn bg='pink'>버튼</Btn>
      <Btn bg='blue'>버튼</Btn>
      <Btn2 bg='green'>버튼2</Btn2>
      </Div> */}

      <Header />  
    
      <Routes>
        <Route path='/' element={<MainPage fruit={fruit}/>} />
        <Route path='/detail/:id' element={<Detail fruit={fruit}/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/test' element={<h1>테스트페이지</h1>} /> 
        {/* 없는 페이지를 접속할때 안내문구 */}
        <Route path='*' element={<h1>존재하지 않는 페이지입니다.🤷‍♀️</h1>} />  
        {/* Route의  Route들을 만들어 관리 */}
        <Route path='/about' element={<About />} >  
          <Route path='intro' element={<div>회사소개</div>}/>
          <Route path='history' element={<div>연혁</div>}/>
          <Route path='loc' element={<div>오시는길</div>}/>
        </Route>

      </Routes>

      <button onClick={()=>{
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/morefruit.json')
          .then(response=>{
            console.log(response.data)
            setFruit([...fruit, ...response.data])
          })
          .catch((error)=>{ 
            console.log(error)
          })
      }}>더 보기</button>


      <button onClick={()=>{
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
          .then((response)=>{
            console.log(response.data)
          })
          .catch((error)=>{
            console.log(error)
          })
      }}>과일정보 받아오기</button>



    </div>

  )
}

export default App
