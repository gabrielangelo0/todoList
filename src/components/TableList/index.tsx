import { Trash } from "phosphor-react";
import { ITask } from "../../interfaces/ITask";
import { TableStyles } from "./style";

interface TaskProps {
    item: ITask,
    key: number,
    deleteTask(deleteTaskById: number): void;
}

export function TableList ( {item, key, deleteTask}:TaskProps ) {
    return (
        <TableStyles>

            <div className="ListTodo">
                    <div className="list">
                        <div className="checked">
                            <input 
                                type="checkbox"
                                checked={true}  
                            />
                        </div>
                        <div className="description">
                            <label htmlFor="item" key={key}>{item.nameTask}</label>
                        </div>
                        <div className="options">
                            <span onClick={() => deleteTask(item.id)}>
                                <Trash size={25} color="#f7f7f7" />                                
                            </span>
                        </div>
                    </div>
            </div>
        </TableStyles>
        
    )
}