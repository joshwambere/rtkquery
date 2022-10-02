import {Todo} from "../../types/todo.type";
import {IoIosClose} from 'react-icons/io'
import {useDeleteMutation, useUpdateMutation} from "../../services/endpoints/todosEndpoint";
import React, {useRef} from "react";
import {SmallSpinLoader} from "./loaders/loader";

interface TodoProps {
    todo:Todo
}
const TodoItem = ({todo}:TodoProps):JSX.Element => {
    const [update, {isLoading:todosLoading}] = useUpdateMutation();
    const [deleteTodo, {isLoading:deleted}] = useDeleteMutation();
    const titleRef = useRef<HTMLParagraphElement>(null);
    const checkBoxRef = useRef<HTMLInputElement>(null)
    const _handelUpdate =()=>{
        update(todo).unwrap().then((res:any)=>{
            titleRef.current?.classList.add('line-through')
            checkBoxRef.current?.setAttribute('checked','true')
        }).catch((err:any)=>{
            console.log(err)
        })
    }

    const _handelDelete =()=>{
        deleteTodo(todo).unwrap()
    }
    return(
        <div>
            {
                todosLoading || deleted ?
                    <div style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} className="w-screen h-screen items-center flex justify-center absolute top-0 right-0 bottom-0 left-0">
                        <SmallSpinLoader />
                    </div>
                    :null

            }
            <div className="bg-[#181820] py-3 px-6 rounded flex items-center justify-between my-1">
                <div className="flex items-center">
                    <input ref={checkBoxRef} checked={todo.completed} type='checkbox' onChange={_handelUpdate}/>
                    <p ref={titleRef} className={`ml-3 text-[#e3e3e4] title ${todo.completed?"line-through":null}`}>{todo.title}</p>
                </div>
                <div className="flex">
                    <IoIosClose color="#fc76a1" size={24} className="hover:cursor-pointer" onClick={_handelDelete} />
                </div>
            </div>

        </div>

    )
}

export default TodoItem
