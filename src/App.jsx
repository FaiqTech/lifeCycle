import "./App.css";
import Clock from "./components/Clock/Clock";
import Name from "./components/name/Name";
import OtpTimer from "./components/otpTimer/OtpTimer";
import ThemeSwitcher from "./components/theme/ThemeSwitcher";

function App() {
  return (
    <>
      {/* <ThemeSwitcher />
      <Name />
      <Clock /> */}
      <OtpTimer deqiqe={0} saniye={5} />
    </>
  );
}

export default App;
