import React from 'react';

function LoginPage() {
  return (
    <div className="auth-container">
      <h1>Giriş Yap</h1>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Email adresinizi girin" />
        </div>
        <div className="form-group">
          <label>Şifre:</label>
          <input type="password" placeholder="Şifrenizi girin" />
        </div>
        <button type="submit" className="auth-button">Giriş Yap</button>
      </form>
    </div>
  );
}

export default LoginPage;
