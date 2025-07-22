import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeAge, changeNum, nPlusNum, plusNum } from "../redux/store";
import { addCount, delCount, removeItem } from "../redux/cartSlice";

function Cart(){
  
  const cart=useSelector(state=>state.cart);
  // const num=useSelector(state=>state.num);
  // const obj=useSelector(state=>state.obj);

  const dispatch=useDispatch(); //변경함수를 사용할수있게

  return(

  <Table>
    {/* num:{num}       //dispatch 사용 테스트
    <button onClick={()=>{
      dispatch(changeNum());
    }}>변경</button>

    <button onClick={()=>{
      dispatch(plusNum());
    }}>1증가버튼</button>

    <button onClick={()=>{
      dispatch(nPlusNum(3));
    }}>n씩증가</button>

    <div>
      {obj.name}:{obj.age}
      <button onClick={()=>{
        dispatch(changeAge(30));
      }}>나이변경</button>
    </div> */}

    <thead>
    <tr>
      <th>번호</th>
      <th>상품명</th>
      <th>수량</th>
      <th>수정</th>
      <th>삭제</th>
    </tr>
    </thead>
    <tbody>
      {
        cart.map((item,i)=>{
          return(
            <tr kye={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.count}</td>
              <td><button onClick={()=>{
                dispatch(addCount(i))
              }}>+</button>
              <button onClick={()=>{
                dispatch(delCount(i))
              }}>-</button>
              </td>
              <td><button onClick={()=>{
                dispatch(removeItem(i))
              }}>X</button></td>
            </tr>
          )   
        })
      }
    </tbody>

  </Table>

)

}
export default Cart