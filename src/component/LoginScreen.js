import React from 'react';

const LoginScreen = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: ''
  });

  const isFormEmpty = formData.username === '' || formData.password === '';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login Form</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isFormEmpty}>Login</button>
        <p>
          Forgot your password? <a href="#">Click here</a>
        </p>
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
