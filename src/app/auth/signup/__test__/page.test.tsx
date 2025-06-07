import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpPage from '../page';

// Mock child components and modules
jest.mock('../SignUpForm', () => {
  const SignUpFormMock = () => (
    <div data-testid='signup-form'>SignUpForm Mock</div>
  );

  return SignUpFormMock;
});

jest.mock(
  'next/link',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children,
);

describe('SignUpPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays the sign-in link with correct attributes', async () => {
    render(await SignUpPage());

    const signInText = screen.getByText('Sign In');
    expect(signInText).toBeInTheDocument();
  });
});
