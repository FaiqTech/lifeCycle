import "./App.css";
import Clock from "./components/Clock/Clock";
import Name from "./components/name/Name";
import ThemeSwitcher from "./components/theme/ThemeSwitcher";

function App() {
  return (
    <>
      {/* <ThemeSwitcher /> */}
      <Name />
      <Clock />
    </>
  );
}

export default App;
