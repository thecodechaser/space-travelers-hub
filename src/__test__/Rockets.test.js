import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Rockets from '../components/Rockets'
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

describe('Rockets tests', () => {
  test('should render', () => {
    const rockets = render(
        <Provider store={store}>
      <BrowserRouter>
        <Rockets />
      </BrowserRouter>,
      </Provider>
    );

    expect(rockets).toMatchSnapshot();
  });
});