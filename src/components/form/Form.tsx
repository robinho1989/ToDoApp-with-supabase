import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './form.module.css';
type FormProps = {
	tasksArray: TasksArray;
	inputText: (active: string) => void;
	setTasksArray: (active: TasksArray) => void;
	inputValue: string;
	selectStatus: string;
	setSelectStatus: (active: string) => void;

};
type TasksArray = {
	id: string;
	task: string;
	isComplete: boolean;
}[];

export const Form = ({
	inputText,
	setTasksArray,
	tasksArray,
	inputValue,
	setSelectStatus,
}: FormProps) => {
	const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		inputText(e.target.value);
	};
	const addTask = () => {
		setTasksArray([
			...tasksArray,
			{ id: uuidv4(), task: inputValue, isComplete: false },
		]);
		inputText('');
	};
	const selectStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectStatus(e.target.value);
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<input
				placeholder='Enter your task'
				value={inputValue}
				onChange={inputTextHandler}
				type='text'
				className={styles.textInput}
			/>
			<button onClick={addTask} className={styles.todoButton}>
				+
			</button>
			<select
				onChange={selectStatusHandler}
				name='todolist'
				className={styles.select}
			>
				<option value='all'>All</option>
				<option value='completed'>Completed</option>
				<option value='uncompleted'>Uncompleted</option>
			</select>
		</form>
	);
};
