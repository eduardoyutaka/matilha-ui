// import { render, screen } from '@testing-library/react';
import App from './App';
// setup file
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// test file

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('Button renders on screen', () => {
  const wrapper = shallow(<Foo />);




  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

 
});

test('Calls action when clicked', () => {
  // setup
  // execise SUT (system under test)
  // evaluate
});
