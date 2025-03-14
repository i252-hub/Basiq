import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import '@testing-library/jest-dom'; 
import { BrowserRouter } from 'react-router-dom';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, title: 'Product 1', image: 'image1.jpg', price: 10, description: 'Nice product' },
        { id: 2, title: 'Product 2', image: 'image2.jpg', price: 20, description: 'Awesome product' },
      ]),
  })
);

test('fetches and displays products', async () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );


  await waitFor(() => expect(screen.getByText(/Product 1/i)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText(/Product 2/i)).toBeInTheDocument());
});
