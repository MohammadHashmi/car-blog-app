import "./App.css";
import HomepageImage from "./assets/main-car.jpg";

function App() {
  return (
    <>
      <div
        className="bg-cover h-screen"
        style={{ backgroundImage: `url(${HomepageImage})` }}
      >
        <div className="flex">
          <div className="flex-col align-middle text-white">
            <h1 className="font-serif text-7xl">GET INSPIRED</h1>
            <h3 className="font-serif text-xl">
              Find solutions, inspiration, guides and more "about automobiles
              idk"
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
