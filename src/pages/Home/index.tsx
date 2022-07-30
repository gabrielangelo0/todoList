import { TableList } from "../../components/TableList";
import { Check } from 'phosphor-react'
import { FormEvent, useState } from "react";
import { ITask } from "../../interfaces/ITask";
import { toast, ToastContainer } from "react-toastify";

import { ContainerHome } from "./styled";
import 'react-toastify/dist/ReactToastify.css';

export function Home () {
    const [task, setTask] = useState<string>('');
    const [todoList, setTodoList] = useState<ITask[]>([]);

    function handleClick (event: FormEvent) {
        event.preventDefault();
        if (task.length >= 3) {
            const idRandom = (num: number) => Math.floor(Math.random() * num)
            const newTask = { id: idRandom(1000000), nameTask: task }
            setTodoList([...todoList, newTask])
            setTask('')
            toast.success('Cadastrado com sucesso!')
        } else {
            toast.error('Verifique o campo')
            setTask('')
        }
    }
    function deleteTask (deleteTaskById: number):void {
        setTodoList(todoList.filter(taskName => taskName.id !== deleteTaskById))
        toast.warning('Deletado com sucesso!')
    }
    
    return (
        <ContainerHome>
            <>
            <ToastContainer 
                autoClose={3000}
            />
                <div className=  "titleContainer">
                        <h1>Bem vindo ao aplicativo <span>minhas tarefas</span></h1>
                </div>
                <div className="InputArea">
                        <input 
                            type="text" 
                            placeholder="Escreva uma tarefa" 
                            name="task"
                            value={ task }
                            onChange={ (event) => setTask(event.target.value)}
                            autoFocus={true}
                        />
                        <button 
                            type="submit"
                            onClick={ handleClick }
                        >
                            <Check size={25} color="#f7f7f7" />
                        </button>
                </div>
                {todoList.map((item, key) => {
                    return (
                    <TableList
                    key={ key }
                    item={ item }
                    deleteTask={ deleteTask }
                    />
                    )
                })}

            </>
        </ContainerHome>
    )
}