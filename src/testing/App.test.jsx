import { vi, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cleansers from '/src/app/pages/Cleansers';
import Moisturizers from '/src/app/pages/Moisturizers';
import Serums from '/src/app/pages/Serums';
import Creams from '/src/app/pages/Creams';
import { RoutineContext } from '/src/app/App';
import Showcase from '/src/components/Showcase';

function pageTest() {
  expect(screen.getAllByRole('button', { name: 'Add to routine'})).toHaveLength(10);
  //prices should render
  expect(screen.getAllByText(/\$[\.0-9]*/i)).toHaveLength(10);
  //number of stars should render
  expect(screen.getAllByText(/[\.0-9]*\/5/i)).toHaveLength(10);
  //star icons should render
  expect(screen.getAllByAltText('star')).toHaveLength(10);
  //product image urls should produce an image
  expect(screen.getAllByAltText('product')).toHaveLength(10);
}

test('Cleanser Component', async () => {
  const mockContextValue = [
    {},         
    vi.fn(),     
    vi.fn()      
  ];

  render(
    <RoutineContext value={mockContextValue}>
      <Cleansers />
    </RoutineContext>
  );

  pageTest();
});

test('Moisturizer Component', async () => {
  const mockContextValue = [
    {},         
    vi.fn(),     
    vi.fn()      
  ];

  render(
    <RoutineContext value={mockContextValue}>
      <Moisturizers />
    </RoutineContext>
  );

  pageTest();
});

test('Serum Component', async () => {
  const mockContextValue = [
    {},         
    vi.fn(),     
    vi.fn()      
  ];

  render(
    <RoutineContext value={mockContextValue}>
      <Serums />
    </RoutineContext>
  );

  pageTest();
});

test('Cream Component', async () => {
  const mockContextValue = [
    {},         
    vi.fn(),     
    vi.fn()      
  ];

  render(
    <RoutineContext value={mockContextValue}>
      <Creams />
    </RoutineContext>
  );

  pageTest();
});