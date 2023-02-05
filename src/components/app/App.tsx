import { useState, useEffect } from 'react';
import { Form } from '../form/Form';
import { Todolist } from '../todolist/Todolist';
import styles from './app.module.css';

type TasksArray = {
	id: string;
	task: string;
	isComplete: boolean;
}[];

export const App = () => {
	const [inputValue, setInputValue] = useState('');
	const [tasksArray, setTasksArray] = useState<TasksArray>([]);
	const [selectStatus, setSelectStatus] = useState('all');
	const [filteredTasks, setFilteredTasks] = useState<TasksArray>([]);
	useEffect(() => {
		if (selectStatus === 'all') {
			setFilteredTasks([...tasksArray]);
		}
		if (selectStatus === 'completed') {
			const completedTasks = tasksArray.filter((task) => task.isComplete);
			setFilteredTasks(completedTasks);
		}
		if (selectStatus === 'uncompleted') {
			const uncompletedTasks = tasksArray.filter((task) => !task.isComplete);
			setFilteredTasks(uncompletedTasks);
		}
	}, [selectStatus, tasksArray]);
	useEffect(() => {
		saveInLocalStorage();
	}, [filteredTasks]);
	useEffect(() => {
		const task = localStorage.getItem('task');
		console.log(task);
		if (task) {
			const tasksToRender: TasksArray = JSON.parse(task);
			setFilteredTasks(tasksToRender);
		}
	}, []);
	const saveInLocalStorage = () => {
		localStorage.setItem('task', JSON.stringify(filteredTasks));
	};
	return (
		<div className={styles.appContainer}>
			<Form
				inputText={setInputValue}
				setTasksArray={setTasksArray}
				tasksArray={tasksArray}
				inputValue={inputValue}
				selectStatus={selectStatus}
				setSelectStatus={setSelectStatus}
			/>
			<Todolist
				filteredTasks={filteredTasks}
				setTasksArray={setTasksArray}
				tasksArray={tasksArray}
			/>
		</div>
	);
};
