import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mocking the components to avoid rendering the whole app
jest.mock('../screens/Home', () => ({ Home: () => <div>Home Page</div> }));
jest.mock('../screens/ListPage', () => ({ ListPage: () => <div>List Page</div> }));
jest.mock('../screens/DetailsPage', () => ({ DetailsPage: () => <div>Details Page</div> }));
jest.mock('../components/Nav', () => ({ Nav: () => <nav>Navigation Bar</nav> }));

describe('App Component', () => {

  it('should render Home page when navigated to "/"', () => {
    render(
          <App />
    );
    // Check if Home component is rendered
    expect(screen.getByText(/Home Page/i)).toBeDefined()
  });
  it('should render Navigation', () => {
    render(
          <App />
    );
    // Check if Navigation bar is rendered
    expect(screen.getByText(/Navigation Bar/i)).toBeDefined()
  });

});
