import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList without crashing', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
  const todoList = render(<TodoList />);
  expect(todoList.asFragment()).toMatchSnapshot();
});

it('should add todo', () => {
    const todoList = render(<TodoList />);
    const input = todoList.getByLabelText('Task Name');
    const btn = todoList.queryByText('Add Todo');
    
    expect(todoList.queryByText('X')).not.toBeInTheDocument();

    // add a todo
    fireEvent.change(input, {target: {value: 'task one' } } );
    fireEvent.click(btn);
    
    expect(todoList.queryByText('X')).toBeInTheDocument();
});

it('should remove a todo', () => {
    const todoList = render(<TodoList />);
    const input = todoList.getByLabelText('Task Name');
    const btn = todoList.queryByText('Add Todo');
    
    // add a todo
    fireEvent.change(input, {target: {value: 'task one' } } );
    fireEvent.click(btn);
    
    const removeBtn = todoList.queryByText('X')
    expect(removeBtn).toBeInTheDocument();

    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
});