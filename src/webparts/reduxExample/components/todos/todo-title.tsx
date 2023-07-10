import * as React from 'react';
import {   ReactElement } from 'react';
import {  useSelector } from 'react-redux';
import styles from '../ReduxExample.module.scss';
import { RootState } from '../../redux/RootState';

export type TodoTitleProps = {
    title: string;
}


export const TodoTitle = ({title}: TodoTitleProps): ReactElement => {
    const count = useSelector((state: RootState) => state.todoValue.todos.length);


    return (
        <div  className={styles.header}>
            <h1>{title}</h1>
            <p>Total items nr: {count}</p>
        </div>
    )
};

