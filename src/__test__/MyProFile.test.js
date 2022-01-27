import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import MyProfile from '../components/MyProfile'
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

describe('MyProfile tests', () => {
  test('should render', () => {
    const myprofile = render(
        <Provider store={store}>
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>,
      </Provider>
    );

    expect(myprofile).toMatchSnapshot();
  });
});