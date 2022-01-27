import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header tests', () => {
  test('should render', () => {
    const header = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(header).toMatchSnapshot();
  });
});
