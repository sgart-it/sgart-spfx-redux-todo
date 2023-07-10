import * as React from 'react';
import { ReactElement } from 'react';
import { Todo } from '../../models/todo';
import { useDispatch } from 'react-redux';
import { todoDelete, todoToggle } from '../../redux/todosReducers';
import styles from '../ReduxExample.module.scss';

export type TodoItemProps = {
    item: Todo;
}

export const TodoItem = ({ item }: TodoItemProps): ReactElement => {
    if (item === undefined)
        return (<li>???</li>)

    const dispatch = useDispatch();

    const handleDelete = (): void => {
        dispatch(todoDelete(item.id));
    };

    const handleToggle = (): void => {
        dispatch(todoToggle(item.id));
    };

    return (
        <li>
            <span className={styles.itemId}>{item.id}</span>
            <span className={styles.itemText + ' ' + (item.completed ? styles.completed : '' )}>{item.text}</span>
            <button className={styles.itemDel} type='button' onClick={handleToggle}>{item.completed  ? "Completed" : "In progress"}</button>
            <button className={styles.itemDel} type='button' onClick={handleDelete}>Delete</button>
        </li>
    )
};

