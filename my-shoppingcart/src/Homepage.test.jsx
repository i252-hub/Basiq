import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import '@testing-library/jest-dom'; 
import { BrowserRouter } from 'react-router-dom';

vi.mock("./Nav", () => ({
  default: () => <div data-testid="mocked-nav">Mocked Nav</div>,
}));


describe('HomePage Component', () => {
  it('renders HomePage correctly', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    screen.debug();

    expect(screen.getByTestId('mocked-nav')).toBeInTheDocument();

    const image = screen.getByAltText('jewelry');
    expect(image).toBeInTheDocument();
    

    expect(image).toHaveAttribute('src', '/src/assets/jewelry.jpg');
    expect(image).toHaveClass('jewelry');
  });
});
