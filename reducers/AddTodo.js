/**
 * Created by Administrator on 2016/7/19 0019.
 */

let nodeNumber;

/**
 * 添加
 * @param state  之前的state
 * @param action 过来的参数。 action，内容以及值
 * @returns {*}  返回一个新的state 参数 自动刷新 components change 
 * @constructor es6
 */
const AddTodo = (state,action) =>{
    switch (action.type){
        
        case 'ADD_TODO' : return [...sate,{
            id:nodeNumber++,
            text:action.text,
            complete: action.complete
        }];
        default : return state
    }
};

export  default  AddTodo;