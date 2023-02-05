import styles from './task.module.css';
type taskObject = {
	id: string;
	task: string;
	isComplete: boolean;
};
type TasksArray = {
	id: string;
	task: string;
	isComplete: boolean;
}[];
type taskData = {
	itemToRemove: taskObject;
	taskText: string;
	tasksArray: TasksArray;
	setTasksArray: (active: TasksArray) => void;
};
export const Task = ({
	itemToRemove,
	taskText,
	tasksArray,
	setTasksArray,
}: taskData) => {
	const deleteButton = (taskId: taskObject) => {
		setTasksArray(tasksArray.filter((task) => task.id !== taskId.id));
	};
	const completeButton = (taskId: taskObject) => {
		const completeTasks = tasksArray.map((completeTask) => {
			if (completeTask.id === taskId.id) {
				return { ...completeTask, isComplete: !completeTask.isComplete };
			}
			return completeTask;
		});

		setTasksArray(completeTasks);
	};
	
	return (
		<li>
			<p
				className={
					itemToRemove.isComplete
						? `${styles.completeTask}`
						: `${styles.uncompleteTask}`
				}
			>
				{taskText}
			</p>
			<button onClick={() => completeButton(itemToRemove)}>Complete</button>{' '}
			<button onClick={() => deleteButton(itemToRemove)}>Delete</button>
		</li>
	);
};
