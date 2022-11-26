import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestComponent } from './TestComponent';

describe('TestComponent', () => {
  it('renders given children', () => {
    render(<TestComponent color="orange">test-component</TestComponent>);
    expect(screen.getByText('test-component')).toBeInTheDocument();
  });
});
