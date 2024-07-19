import React, { useState, useEffect } from "react";
import "./otpTimer.css"; // CSS faylını import edirik

const OtpTimer = ({ deqiqe, saniye }) => {
  // Başlanğıc dəyərləri 'saniye' və 'deqiqe' props-larından alırıq
  const [second, setSecond] = useState(saniye); // Saniyə state-i
  const [minute, setMinute] = useState(deqiqe); // Dəqiqə state-i
  // Taymerin işlək olub-olmadığını yoxlamaq üçün vəziyyəti müəyyən edirik
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // useEffect hook-u taymeri qurmaq və yeniləmək üçün istifadə olunur
  useEffect(() => {
    // Taymer funksiyasını qururuq
    const interval = setInterval(() => {
      if (second === 0 && minute === 0) {
        // Saniyə və dəqiqə sıfır olduqda taymeri dayandırırıq
        clearInterval(interval);
        setIsTimerRunning(false);
      } else {
        // Saniyə və dəqiqə yenilənir
        setSecond((second) => (second === 0 ? 59 : second - 1)); // Saniyəni 1 azaldırıq və sıfır olduqda 59-a qaytarırıq
        setMinute((minute) =>
          second === 0 ? (minute > 0 ? minute - 1 : 0) : minute
        ); // Saniyə sıfır olduqda dəqiqəni 1 azaldırıq
      }
    }, 1000); // Taymer hər 1000 ms (1 saniyə) işləyir

    // Komponent unmount olunduqda taymeri təmizləyirik
    return () => clearInterval(interval);
  }, [second, minute]); // second və minute state-lərinə bağlı olaraq işləyir

  // Saniyə və dəqiqəni iki rəqəmli formatda göstəririk
  const formattedSecond = second < 10 ? `0${second}` : `${second}`;
  const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

  // Taymeri sıfırlamaq üçün funksiya
  const handleRestart = () => {
    setSecond(saniye); // Saniyəni başlanğıc dəyərinə qaytarırıq
    setMinute(deqiqe); // Dəqiqəni başlanğıc dəyərinə qaytarırıq
    setIsTimerRunning(true); // Taymeri yenidən işlək vəziyyətə gətiririk
  };

  return (
    <div className="timer-container">
      <h1 className="timer">
        Zaman: {formattedMinute} : {formattedSecond} {/* Taymeri göstəririk */}
      </h1>
      {/* Taymer dayandıqda 'Yeniden Başla' düyməsini göstəririk */}
      {!isTimerRunning && (
        <button className="button" onClick={handleRestart}>
          Yeniden Başla
        </button>
      )}
    </div>
  );
};

export default OtpTimer;
