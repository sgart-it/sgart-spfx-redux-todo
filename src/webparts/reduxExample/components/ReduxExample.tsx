import * as React from 'react';
import styles from './ReduxExample.module.scss';
import { IReduxExampleProps } from './IReduxExampleProps';
import { TodoList } from './todos/todo-list';
import { TodoAdd } from './todos/todo-add';
import { Constants } from '../Constants';
import { TodoTitle } from './todos/todo-title';

export default class ReduxExample extends React.Component<IReduxExampleProps, {}> {
  public render(): React.ReactElement<IReduxExampleProps> {
    const {
      description,
      hasTeamsContext,
    } = this.props;

    return (
      <section className={`${styles.reduxExample} ${hasTeamsContext ? styles.teams : ''}`}>
        <TodoTitle title={description} />
        <TodoList />
        <TodoAdd />
        <div className={styles.version}>v. {Constants.VERSION} - <a href='https://www.sgart.it' target='_blank'>sgart.it</a></div>
      </section>
    );
  }
}
