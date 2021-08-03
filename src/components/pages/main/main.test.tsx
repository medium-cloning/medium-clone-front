import { render } from '@testing-library/react';
import React from 'react';
import Main from './index';

test('Main Rendering test', () => {
    const { getByText } = render(<Main />);

    const signInBtn = getByText('Sign in');
    const signUpBtn = getByText('Get Started');

    expect(signInBtn).toBeInTheDocument();
    expect(signUpBtn).toBeInTheDocument();
});