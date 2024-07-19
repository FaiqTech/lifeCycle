import React, { useState, useEffect } from "react";

const Name = () => {
  // 'name' adlı state yaradılır və ilkin dəyər olaraq boş string təyin edilir
  const [name, setName] = useState("");

  // İlk useEffect, komponent DOM-a daxil olanda (mount) işləyir
  useEffect(() => {
    // localStorage-dan 'name' adlı məlumatı əldə edirik
    const savedName = localStorage.getItem("name");
    // Əgər localStorage-da 'name' adlı məlumat varsa, onu state-ə qoyuruq
    if (savedName) {
      setName(savedName);
    }
  }, []); // Boş array, bu useEffect-in yalnız bir dəfə, komponent mount olanda işləyəcəyini bildirir

  // İkinci useEffect, 'name' state-i dəyişdikdə işləyir
  useEffect(() => {
    // 'name' state-dəki dəyəri localStorage-a yazırıq
    localStorage.setItem("name", name);
  }, [name]); // 'name' array-da olduğu üçün, yalnız 'name' dəyişdikdə bu useEffect işləyəcək

  return (
    <div>
      <h1>Adınızı daxil edin:</h1>
      {/* Input sahəsinin dəyəri 'name' state-i ilə sinxronlaşdırılır */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Input sahəsində dəyişiklik olduqda 'name' state yenilənir
      />
      {/* Adınız state-dəki dəyəri göstərilir */}
      <p>Adınız: {name}</p>
    </div>
  );
};

export default Name;
