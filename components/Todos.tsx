import {Todo} from "../types/todo.type";
import TodoItem from '../components/layout/todo'
import AddTodo from "./layout/addTodo";

interface TodosProps {
    todos:Todo[]
}
export const Todos = ({todos}:TodosProps):JSX.Element => {
    return (
        <div className="bg-[#21212b] xl:w-1/4 sm:w-3/5 h-3/4 rounded-2xl py-6 px-4 justify-center ">
            <div>
                <AddTodo />
            </div>
            {
                todos && todos.map((todo:Todo,index:number) => {
                    return <TodoItem todo={todo} key={index}/>
                })
            }
        </div>
    )
}
