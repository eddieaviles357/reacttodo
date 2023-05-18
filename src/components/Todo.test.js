import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo without crashing', () => {
  render(<Todo />);
});

it('matches snapshot', () => {
  const todo = render(<Todo />);
  expect(todo.asFragment()).toMatchSnapshot();
});

it('should display an X', () => {
    const todo = render(<Todo />);
    expect(todo.getByText('X')).toBeInTheDocument();
})