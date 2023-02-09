import styles from './task.module.css';
import { Icon } from '@iconify/react';
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
		<li className={styles.taskItem}>
			<p
				className={
					itemToRemove.isComplete
						? `${styles.completeTask} ${styles.task}`
						: `${styles.uncompleteTask} ${styles.task}`
				}
			>
				{taskText}
			</p>
			<div className={styles.buttonContainer}>
				<button
					className={styles.buttons}
					onClick={() => completeButton(itemToRemove)}
				>
					<Icon className={styles.buttonIcon} icon='fluent-mdl2:completed' />
				</button>
				<button
					className={styles.buttons}
					onClick={() => deleteButton(itemToRemove)}
				>
					<Icon className={styles.buttonIcon} icon='ic:round-delete-outline' />
				</button>
			</div>
		</li>
	);
};
