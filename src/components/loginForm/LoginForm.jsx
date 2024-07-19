import React, { useState } from "react";

const LoginForm = () => {
  // 'username' və 'password' üçün state-i yaradıb ilkin dəyər olaraq boş string təyin edirik
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Formanın submit olunduğu zaman çağırılacaq funksiya
  const handleSubmit = (e) => {
    e.preventDefault(); // Formanın default submit davranışını dayandırır
    console.log("İstifadəçi adı:", username); // İstifadəçi adını konsola yazdırır
    console.log("Parol:", password); // Parolu konsola yazdırır
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>İstifadəçi adı:</label>
        <input
          type="text"
          value={username} // input sahəsinin dəyəri 'username' state-i ilə sinxronlaşdırılır
          onChange={(e) => setUsername(e.target.value)} // input sahəsinin dəyəri dəyişdikdə 'username' state-i yenilənir
        />
      </div>
      <div>
        <label>Parol:</label>
        <input
          type="password"
          value={password} // input sahəsinin dəyəri 'password' state-i ilə sinxronlaşdırılır
          onChange={(e) => setPassword(e.target.value)} // input sahəsinin dəyəri dəyişdikdə 'password' state-i yenilənir
        />
      </div>
      <button type="submit">Daxil ol</button>{" "}
      {/* Submit düyməsi, forma submit olunanda handleSubmit funksiyasını çağırır */}
    </form>
  );
};

export default LoginForm;
