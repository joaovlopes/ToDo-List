import { ClipboardText, Trash } from '@phosphor-icons/react'

import { useState } from 'react'

import styles from './Tasks.module.scss'

interface taskLayout {
    task: string,
    onChangeCompletedStatus: (status: boolean) => void;
    onDeleteTask: (task: string, status: boolean) => void;
}

export function Tasks({task, onChangeCompletedStatus, onDeleteTask}: taskLayout) {

    const [statusTask, setStatusTask] = useState(false)

    function completedStatus(event: any) {
        console.log(event.target.checked)
        setStatusTask(event.target.checked)
        onChangeCompletedStatus(event.target.checked)
    }

    function deleteTask() {
        onDeleteTask(task, statusTask)
    }

    return (
        <div className={styles.arrayTasks}>
            <div>
                <label htmlFor={task} className={styles.containerLabel}>
                    <input type="checkbox" id={task} onChange={completedStatus}/>
                    <span className={styles.checkmark}></span>
                </label>
                
                
                <p className={statusTask ? styles.taskTextRiscado : styles.taskText}>{task}</p>
            </div>
            <Trash className={styles.trashIcon} size={24} onClick={deleteTask} />
        </div>
    )
}   