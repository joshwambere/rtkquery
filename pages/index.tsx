import type { NextPage } from 'next'
import {Todos} from "../components/Todos";
import {useSelector} from "react-redux";
import {useTodosQuery} from "../services/endpoints/todosEndpoint";


const Home: NextPage = () => {

    const { data: todos, isLoading: todosLoading, isFetching: todosFetching } = useTodosQuery()
    const store = useSelector((state: any) => state.todos)
  return (
    <div className="bg-[#181820] flex px-3 h-screen items-center justify-center">
      <Todos todos={todos!} />
    </div>
  )
}

export default Home
