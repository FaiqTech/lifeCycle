//Komponent mount olduğu zaman real vaxtda saatı göstərmək üçün useEffect-dən
//istifadə etmək və hər saniyə saatı yeniləmək.

import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date()); // Saatı saxlamaq üçün state

  // useEffect hook-u komponent mount olunduqda işə düşür
  useEffect(() => {
    // Timer funksiyasını qururuqx
    const timer = setInterval(() => {
      setTime(new Date()); // Hər saniyə yeni tarixi alırıq
    }, 1000); // 1000 ms = 1 saniyə

    // Komponent unmount olunduqda timeri təmizləyirik
    return () => clearInterval(timer);
  }, []); // Boş array, yalnız komponent mount olunduqda işə düşəcək

  return (
    <div>
      <h1>Real Vaxt</h1>
      <p>{time.toLocaleTimeString()}</p> {/* Saatı ekranda göstəririk */}
    </div>
  );
};

export default Clock;
