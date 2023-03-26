import "./styles.css";
import { Title } from "./components/Title";
import { GetWeather } from "./components/GetWeather";

export const App = () => {
  return (
    <div className="App">
      <Title />
      <GetWeather />
    </div>
  );
};
