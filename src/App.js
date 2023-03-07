import "./styles.css";
import Search from "./Search.js";
import City from "./City.js";
import Temp from "./Temp.js";
import Info from "./Info.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Search />
        <City />

        <div className="row">
          <Temp />
          <Info />
        </div>
      </div>
      <Footer />
    </div>
  );
}
