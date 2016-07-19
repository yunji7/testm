// import React from 'react' ;
import {combineReducers} from 'redux';
import AddTodo from './AddTodo'

/**
 * 打包一个reducers 、、
 * 变为一个集合  center  中央控制器  调度整个系统
 */
const reducers = () => combineReducers({
    AddTodo
});


export default reducers;