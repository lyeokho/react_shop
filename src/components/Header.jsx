import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

function Header(){
  //두번쨰 화면 이동
  const navigate=useNavigate();

  return(
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* 두번째 화면 이동 */}
          <Navbar.Brand onClick={()=>navigate('/')}>Home</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate(-1)}>-1뒤로가기 기능</Nav.Link> 

            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>

            {/* 새로고침 없이 자연스런 화면 이동 */}
            <Link to={'/테스트'}>ttt</Link> 
          </Nav>

        </Container>
      </Navbar>

  )
}
export default Header;