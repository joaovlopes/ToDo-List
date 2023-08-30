import { PlusCircle, ClipboardText } from '@phosphor-icons/react'

import { useState, ChangeEvent } from 'react'

import { Tasks } from '../Tasks/Tasks'

import styles from './NewTask.module.scss'

export function NewTask() {

    const [numbersStatus, setNumbersStatus] = useState(0)

    const [task, setTask]:any = useState([])

    const [taskText, setTaskText] = useState('')

    function handleNewTask() {
        
        if(taskText !== '')
            setTask([...task, taskText])

        setTaskText('')
    }

    function handleNewTaskText(event: ChangeEvent <HTMLInputElement>) {
        setTaskText(event.target.value)
    }

    function changeCompletedStatus(status: boolean) {
        status ? setNumbersStatus(numbersStatus + 1) : setNumbersStatus(numbersStatus - 1)
    }

    function deleteTask(taskDeleted: string, statusTask: boolean) {
        debugger

        const tasksWithoutDeletedOne = task.filter((task: string) => {
            return task !== taskDeleted
        })

        setTask(tasksWithoutDeletedOne)
        statusTask ? changeCompletedStatus(false) : ''
    }

    return (
        <article>
            <section className={styles.containerTask}>
                <input 
                    type="text"
                    value={taskText}
                    onChange={handleNewTaskText}
                    className={styles.inputTask}
                    placeholder='Adicione uma nova tarefa'
                />
                <button 
                    className={styles.buttonTask}
                    onClick={handleNewTask}
                    >
                        Criar
                        <PlusCircle size={16} />
                </button>
            </section>

            <section className={styles.section}>
                <div className={styles.progress}>
                    <div>
                        <p className={styles.tasksCreated}>Tarefas Criadas</p>
                        <span className={styles.numbers}>{task.length}</span>
                    </div>

                    <div>
                        <p className={styles.completed}>Concluidas</p>
                        <span className={styles.numbers}>{numbersStatus} de {task.length}</span>
                    </div>
                </div>

                <div className={task.length > 0 ? styles.none : styles.empty}> 
                    <ClipboardText size={56} />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>

            </section>

            <div className={styles.tasks}>
                {task.map((task: string) => {
                    return (
                        <Tasks 
                            key={task}
                            task={task}
                            onChangeCompletedStatus={changeCompletedStatus}
                            onDeleteTask={deleteTask}
                        />
                    )
                })}
            </div>
            
        </article>
    );
}