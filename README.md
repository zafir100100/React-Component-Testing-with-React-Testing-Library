# React-Component-Testing-with-React-Testing-Library

This repository contains a **React** application with a **Login** component. The `Login` component uses **React Hook Form** for handling form validation and **SweetAlert2** for displaying success or error messages upon login attempts. The component also utilizes **Bootstrap** for styling.

This repository is set up to run unit tests using **Jest** and **React Testing Library** to ensure the functionality and correctness of the Login form. The tests check the behavior of form fields, button interactions, and form validation.

---

## Video

https://github.com/user-attachments/assets/22f03d70-0a26-409f-b6c2-9ad30eec2dc8

## Test Scenario Step-by-Step

### Test 1: **Render Login Form Correctly**
- **Objective**: Ensure that the Login form is rendered correctly.
- **Steps**:
    1. Render the `Login` component using `render(<Login />)`.
    2. Assert that the username input field is in the document by searching for it with `screen.getByLabelText(/username/i)`.
    3. Assert that the password input field is in the document by searching for it with `screen.getByLabelText(/password/i)`.
    4. Assert that the submit button is in the document by searching for it with `screen.getByRole('button', { type: /submit/i })`.
- **Expected Outcome**: The username, password input fields, and submit button should be visible in the rendered Login form.

---

### Test 2: **Update Username Input Field When Typed**
- **Objective**: Verify that the username input field updates when typed into.
- **Steps**:
    1. Render the `Login` component.
    2. Find the username input field using `screen.getByLabelText(/username/i)`.
    3. Simulate typing the value `'testuser'` into the username input field using `fireEvent.change`.
    4. Assert that the value of the username input is `'testuser'`.
    5. Check that the submit button is disabled after entering the username by asserting `expect(submitButton).toBeDisabled()`.
- **Expected Outcome**: The username input field should update correctly, but the submit button should remain disabled (as password is still empty).

---

### Test 3: **Update Password Input Field When Typed**
- **Objective**: Verify that the password input field updates when typed into.
- **Steps**:
    1. Render the `Login` component.
    2. Find the password input field using `screen.getByLabelText(/password/i)`.
    3. Simulate typing the value `'password123'` into the password input field using `fireEvent.change`.
    4. Assert that the value of the password input is `'password123'`.
    5. Check that the submit button is still disabled after entering the password by asserting `expect(submitButton).toBeDisabled()`.
- **Expected Outcome**: The password input field should update correctly, but the submit button should still remain disabled (as username is still empty).

---

### Test 4: **Disable Login Button If Form is Invalid**
- **Objective**: Verify that the login button is disabled when the form is invalid (either username or password is empty).
- **Steps**:
    1. Render the `Login` component.
    2. Find the submit button using `screen.getByRole('button', { type: /submit/i })`.
    3. Assert that the submit button is disabled (`expect(submitButton).toBeDisabled()`).
- **Expected Outcome**: The submit button should be disabled when either the username or password input field is empty.

---

## Expected Test Results

- **Test 1**: The Login form is correctly rendered with visible input fields and a submit button.
- **Test 2**: The username input field correctly updates when typed into, and the submit button remains disabled.
- **Test 3**: The password input field correctly updates when typed into, and the submit button remains disabled.
- **Test 4**: The login button remains disabled if the form is invalid (with either username or password empty).

---

## Additional Notes

- **Test Coverage**: These tests ensure that the `Login` component behaves correctly in terms of rendering the form, interacting with inputs, and validating the form before enabling the submit button.
- **Libraries Used**: 
    - `React Hook Form` for form handling and validation.
    - `SweetAlert2` for displaying success or error alerts.
    - `Bootstrap` for styling the form components.
    - `Jest` for running the unit tests.
    - `React Testing Library` for rendering and interacting with the component during tests.

## Screenshot (Application)

![image](https://github.com/user-attachments/assets/46c0da3b-f972-423b-995c-bce69c0dda1a)

## Screenshot (Report)

![image](https://github.com/user-attachments/assets/11cda7b8-13a8-4e9e-9551-fdd8c960d2ca)

