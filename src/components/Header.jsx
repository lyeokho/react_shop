import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

function Header(){
  //두번쨰 화면 이동
  const navigate=useNavigate();

  const userInfoQuery=useQuery({
    queryKey:['userInfo'],
    queryFn:async()=>{
      const response=await axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/useinfo.json')
      console.log(response)
      
      return response.data;
    } //,staleTime:5000 정보 재갱신되는 시간 설정
      //,retry:10 재갱신 횟수
  })

  return(
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* 두번째 화면 이동 */}
          <Navbar.Brand onClick={()=>navigate('/')}>Home</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate(-1)}>뒤로가기</Nav.Link> 

            <Nav.Link onClick={()=>navigate('/Cart')}>장바구니</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>

            {/* 새로고침 없이 자연스런 화면 이동 */}
            <Link to={'/테스트'}>test</Link>
          </Nav>
          <Nav style={{color:"white"}}>
          {userInfoQuery.isLoading && 'loding..😊'}
          {userInfoQuery.error && '회원정보 불러오기 실패😒'}
          {userInfoQuery.data && userInfoQuery.data[0].name}
          </Nav>

        </Container>
      </Navbar>

  )
}
export default Header;