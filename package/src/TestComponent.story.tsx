import React from 'react';
import { TestComponent } from './TestComponent';

export default { title: 'TestComponent' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TestComponent label="test" />
    </div>
  );
}
