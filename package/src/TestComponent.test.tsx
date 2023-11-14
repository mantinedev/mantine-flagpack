import React from 'react';
import { render, screen } from '../../test-utils';
import { TestComponent } from './TestComponent';

it('renders without crashing', () => {
  render(<TestComponent label="test-label" />);
  expect(screen.getByText('test-label')).toBeInTheDocument();
});
