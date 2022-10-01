import {MdAddBox} from 'react-icons/md'
import {useTodoMutation} from "../../services/endpoints/todosEndpoint";
import {useRef} from "react";
const AddTodo = ():JSX.Element => {
    const [todo, { isLoading }]: any= useTodoMutation()
    const todoRef = useRef<HTMLInputElement>(null)

    const _handelEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            createTodo()
        }
    }
    const createTodo = () => {
        if(todoRef.current?.value.length===0){
            console.log("enter any value")
        }else{
            todo({ title: todoRef.current?.value, completed: false, id: Math.random() })
                .unwrap()
                .then((res: any) => {
                    todoRef.current!.value = '';
                    todoRef.current?.focus()
                })
                .catch((err: any) => console.log(err))
        }

    }
    return (
        <div className="flex bg-[#181820] items-center my-2 px-2">
            <MdAddBox color="fc76a1" onClick={createTodo}/>
            <input ref={todoRef} type="text" onKeyDown={_handelEnter} className="bg-[#181820] text-[#e3e3e4] px-4 py-2 rounded-md w-3/4 todo-input outline-none w-full" placeholder="Add a new todo" />
        </div>
    )
}

export default AddTodo
