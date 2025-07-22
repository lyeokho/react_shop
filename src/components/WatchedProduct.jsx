import './WatchedProduct.css'
import bg from '../bg.jpg'
import { useSelector } from 'react-redux'

//리액트는 state가 변경되면 재렌더링을 함, 지금 작업한 최근 본 상품은 단순히 추가만 하는거
//로컬스토리지가 변경된다고 해서 리엑트는 재 렌더링 하지 않음

function WatchedProduct({fruit}){             
  
const watched=useSelector(state=>state.watched);
 

  return(

    <div className="WatchedProduct">
      <div className="cards">

        <p>최근 본 상품</p>
        {
          watched.map((i)=>{
            return(
        <div className="card" key={i}>
          <img src={bg} alt="" />
          <p>{fruit[i].title}</p>
        </div>

           )
        })
        }

      </div>
    </div>



  )






}
export default WatchedProduct