import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm without crashing', () => {
  render(<NewTodoForm />);
});

it('matches snapshot', () => {
  const newTodoForm = render(<NewTodoForm />);
  expect(newTodoForm.asFragment()).toMatchSnapshot();
});

it('should display correct characters when changed', () => {
    const newTodoForm = render(<NewTodoForm />);
    const input = newTodoForm.getByLabelText('Task Name');

    fireEvent.change(input, {target: {value: 'task one' } } );
    expect(input.value).toEqual('task one');
});