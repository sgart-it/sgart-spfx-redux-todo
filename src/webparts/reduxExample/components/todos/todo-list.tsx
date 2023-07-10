import * as React from 'react';
import { ReactElement } from 'react';
import { RootState} from '../../redux/RootState';
import { useSelector } from 'react-redux';
import { Todo } from '../../models/todo';
import { TodoItem } from './todo-item';

export const TodoList = (): ReactElement => {
    const todos = useSelector((state: RootState) => state.todoValue.todos);

    if (todos === undefined)
        return (<></>);

    const items = todos.map((item: Todo) => <TodoItem key={item.id} item={item} />);

    return (
        <ul>{items}</ul>
    )
};

