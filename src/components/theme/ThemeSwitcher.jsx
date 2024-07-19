import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  // 'theme' state-i yaradılır və başlanğıc dəyəri 'day' olaraq təyin edilir
  const [theme, setTheme] = useState("day");

  // İlk useEffect hook-u, komponent DOM-a daxil olanda işə düşür
  useEffect(() => {
    // localStorage-dan 'theme' dəyəri alınır
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      // Əgər 'theme' dəyəri varsa, state yenilənir
      setTheme(savedTheme);
    }
  }, []); // Boş array, yalnız bir dəfə DOM-a daxil olanda işə düşəcəyini bildirir

  // İkinci useEffect hook-u, 'theme' state-i dəyişdikdə işə düşür
  useEffect(() => {
    // 'theme' dəyəri localStorage-ə yazılır
    localStorage.setItem("theme", theme);
  }, [theme]); // 'theme' dəyişdikdə işə düşür

  // Tema dəyişmə funksiyası, tema 'day' və 'night' arasında dəyişir
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "day" ? "night" : "day"));
  };

  const containerStyle = {
    textAlign: "center",
    color: theme === "day" ? "#000" : "#fff",
    backgroundColor: theme === "day" ? "#fff" : "#333",
    height: "100vh",
  };

  const buttonStyle = {
    padding: "10px 20px",
    marginTop: "20px",
    backgroundColor: theme === "day" ? "#000" : "#fff",
    color: theme === "day" ? "#fff" : "#000",
  };

  return (
    <div style={containerStyle}>
      <p>Seçilmiş tema: {theme}</p>
      <button style={buttonStyle} onClick={toggleTheme}>
        Temanı dəyiş
      </button>
    </div>
  );
};

export default ThemeSwitcher;
