// src/app/__tests__/page.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../page';

// Mock the session module with correct path
jest.mock('@/lib/session', () => ({
  getSession: jest.fn().mockResolvedValue({ user: null }),
}));

// Mock the Sidebar component with correct path

jest.mock('@/app/components/Sidebar', () => {
  const SidebarMock = () => <div data-testid='sidebar'>Sidebar Mock</div>;
  return SidebarMock;
});

describe('Page Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', async () => {
    const jsx = await Page();
    render(jsx);

    // Verify main container exists
    const container = document.querySelector('div[data-testid="app-page"]');
    expect(container).toBeInTheDocument();

    // Verify Sidebar is rendered
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should apply correct styles', async () => {
    const jsx = await Page();
    render(jsx);

    const container = document.querySelector('div[data-testid="app-page"]');
    expect(container).toHaveStyle({
      height: 'calc(100vh - 40px)',
    });
  });
});
