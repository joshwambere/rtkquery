import {Todo} from "../types/todo.type";
import TodoItem from '../components/layout/todo'
import AddTodo from "./layout/addTodo";
import React from "react";
import {BiCoffeeTogo} from 'react-icons/bi'

interface TodosProps {
    todos:Todo[]
}
export const Todos = ({todos}:TodosProps):JSX.Element => {
    return (
        <div className="bg-[#21212b] xl:w-1/4 sm:w-3/5 h-3/4 rounded py-6 px-4 justify-center ">
            <div>
                <AddTodo />
            </div>
            {
                todos && todos.map((todo:Todo,index:number) => {
                    return <TodoItem todo={todo} key={index}/>
                })
            }
            <div className=" absolute right-0 left-0 bottom-0 flex justify-center items-center">
                <BiCoffeeTogo />
                <a className=" px-2 text-small text-white decoration-none" href="https://johnson.rw">Johnson</a>
            </div>
        </div>
    )
}
