import React from 'react';

function RegisterPage() {
  return (
    <div className="auth-container">
      <h1>Kayıt Ol</h1>
      <form>
        <div className="form-group">
          <label>İsim:</label>
          <input type="text" placeholder="Adınızı girin" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Email adresinizi girin" />
        </div>
        <div className="form-group">
          <label>Şifre:</label>
          <input type="password" placeholder="Şifrenizi oluşturun" />
        </div>
        <button type="submit" className="auth-button">Kayıt Ol</button>
      </form>
    </div>
  );
}

export default RegisterPage;
