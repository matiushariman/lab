import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('should be initialized with 0 bear', () => {
    render(<App />);

    expect(screen.getByText(/0 bears around here/i)).toBeDefined();
  });

  it('should allow user to increase bear', async () => {
    render(<App />);

    await userEvent.click(screen.getByText(/increase bears/i));

    expect(screen.getByText(/1 bears around here/i)).toBeDefined();
  });
});
