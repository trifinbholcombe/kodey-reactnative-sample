import React from 'react';

const SignupScreen = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: ''
  });

  const isFormEmpty = formData.username === '' || formData.email === '' || formData.password === '';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Signup Form</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isFormEmpty}>Signup</button>
      </form>
    </div>
  );
};

export default SignupScreen;
