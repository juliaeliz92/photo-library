import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ImageList from './components/Image';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Photo library/i);
  expect(linkElement).toBeInTheDocument();
});

test('render image', () => {
  render(<ImageList photos={[{ id: 1, title: 'Image' }]} />);
  const imageElement = screen.getByAltText(/Image/);
  expect(imageElement).toBeInTheDocument();
});
