import { createSlice } from "@reduxjs/toolkit";


const cart=createSlice({
  name:'cart',
  initialState:[
    {id:0, title:'apple', count:6},
    {id:2, title:'watermelon', count:5},
  ],
  reducers:{
    addCount(state,action){
      state[action.payload].count++;
    },
    delCount(state,action){
      state[action.payload].count--;
    },
    addItem(state,action){           //장바구니에 선택한 품목이 있는지 판단, 판단기준은 id로 하기 그걸 먼저 검사
     // state.push(action.payload);
      //findIndex함수: 조건식에 만족하는 인덱스를 리턴, 없으면 -1리턴
      let index=state.findIndex(data=>{
        return data.id==action.payload.id
      })
      if(index !==-1){
        state[index].count++;
      }else
        state.push(action.payload)
    },
    removeItem(state,action){
      state.splice(action.payload,1);
     
    }
    }
  
})



export default cart;
export const{addCount,delCount,addItem,removeItem}=cart.actions;