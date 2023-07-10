import * as React from 'react';
import { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../../redux/todosReducers';
import { isNullOrWhiteSpace } from '../../Helper';
import styles from '../ReduxExample.module.scss';

export const TodoAdd = (): ReactElement => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(todoAdd(text));
        setText('');
    };

    const textInvalid = isNullOrWhiteSpace(text);

    return (
        <form onSubmit={handleAdd} className={styles.formAdd}>
            <input type='text' value={text} onChange={e => setText(e.target.value)} />
            <button type='submit' disabled={textInvalid}>Add</button>
        </form>
    )
};

