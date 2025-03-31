import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('<Login />', () => {

    it('should render login form correctly', () => {
        render(<Login />);
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { type: /submit/i })).toBeInTheDocument();
    });

    it('should update username input field when typed', () => {
        render(<Login />);
        const usernameInput = screen.getByLabelText(/username/i);
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        expect(usernameInput.value).toBe('testuser');
        const submitButton = screen.getByRole('button', { type: /submit/i });
        expect(submitButton).toBeDisabled();
    });

    it('should update password input field when typed', () => {
        render(<Login />);
        const passwordInput = screen.getByLabelText(/password/i);
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput.value).toBe('password123');
        const submitButton = screen.getByRole('button', { type: /submit/i });
        expect(submitButton).toBeDisabled();
    });

    it('should disable login button if form is invalid', () => {
        render(<Login />);
        const submitButton = screen.getByRole('button', { type: /submit/i });
        expect(submitButton).toBeDisabled();
    });
});
