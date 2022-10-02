import type { NextPage } from 'next'
import {Todos} from "../components/Todos";
import {useTodosQuery} from "../services/endpoints/todosEndpoint";
import {SmallSpinLoader} from "../components/layout/loaders/loader";
import React from "react";


const Home: NextPage = () => {

    const { data: todos, isLoading: todosLoading } = useTodosQuery()
  return (
    <div className="bg-[#181820] flex px-3 h-screen items-center justify-center">
        {
            todosLoading ?
                <div style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} className="w-screen h-screen items-center flex justify-center absolute top-0 right-0 bottom-0 left-0">
                    <SmallSpinLoader />
                </div>
                :
                <Todos todos={todos!} />

        }


    </div>
  )
}

export default Home
