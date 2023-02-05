import { Task } from '../task/Task';
import styles from './todolist.module.css';

type TasksArray = {
	id: string;
	task: string;
	isComplete: boolean;
}[];
type TodoList = {
	filteredTasks:TasksArray
	tasksArray: TasksArray;
	setTasksArray: (active: TasksArray) => void;
};
export const Todolist = ({filteredTasks, tasksArray, setTasksArray }: TodoList) => {
	
	return (
		<ul className={styles.todoList}>
			{filteredTasks.map((item) => {
				return (
					<Task
						key={item.id}
						itemToRemove={item}
						setTasksArray={setTasksArray}
						tasksArray={tasksArray}
						taskText={item.task}
					/>
				);
			})}
		</ul>
	);
};
