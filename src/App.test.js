import { render, fireEvent } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';


test('renders without crashing', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);

  expect(asFragment()).toMatchSnapshot();
})

test("if renders home", () => {
  const {queryByText, debug} = render(<MemoryRouter><App /></MemoryRouter>);

  expect(queryByText("Welcome to the Color Factory.")).toBeInTheDocument();
  expect(queryByText("Please select a color.")).toBeInTheDocument();
})

test("if add a color link works", () => {
  const {queryByText, debug} = render(<MemoryRouter><App /></MemoryRouter>);
  const link = queryByText("Add a color");

  fireEvent.click(link);

  expect(queryByText("Welcome to the Color Factory.")).not.toBeInTheDocument();
  expect(queryByText("Please select a color.")).not.toBeInTheDocument();

  expect(queryByText("Color Name")).toBeInTheDocument();
  expect(queryByText("Color Value")).toBeInTheDocument();

})

test("if blue link works", () => {
  const {queryByText, debug} = render(<MemoryRouter><App /></MemoryRouter>);
  const link = queryByText("blue");

  fireEvent.click(link);

  expect(queryByText("Welcome to the Color Factory.")).not.toBeInTheDocument();
  expect(queryByText("Please select a color.")).not.toBeInTheDocument();

  expect(queryByText("This is blue")).toBeInTheDocument();

})

test("if add a color works", () => {
  const {queryByLabelText,queryByText, debug} = render(<MemoryRouter initialEntries={['/colors/new']}><App /></MemoryRouter>);

  const nameInput = queryByLabelText("Color Name");
  const hexInput = queryByLabelText("Color Value");
  const link = queryByText("Add this color");

    expect(queryByText("yellow")).not.toBeInTheDocument();

  fireEvent.change(nameInput, {target: {value: "yellow"}});
  fireEvent.change(hexInput, {target: {value: "#FFFF00"}});

  fireEvent.click(link);
  expect(queryByText("yellow")).toBeInTheDocument();

})


