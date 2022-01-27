import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import store from '../redux/configureStore';

describe('MyProfile tests', () => {
  test('should render', () => {
    const myprofile = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyProfile />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(myprofile).toMatchSnapshot();
  });
});
