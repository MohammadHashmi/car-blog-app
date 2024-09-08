import { Link } from "react-router-dom";
import HomepageImage from "../assets/main-car.jpg";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div
          className="bg-cover h-screen brightness-50"
          style={{ backgroundImage: `url(${HomepageImage})` }}
        ></div>
        <div className="flex items-center justify-center h-full absolute inset-0 p-5">
          <div className="flex-col align-middle text-white text-center">
            <h1 className="font-serif text-7xl">GET INSPIRED</h1>
            <h3 className="font-serif text-xl">
              Find solutions, inspiration, guides and more "about automobiles
              idk"
            </h3>
            <div className="flex justify-center mt-2 ">
              <Link to="/write">
                <button className=" font-bold bg-transparent border border-white ease-in duration-200 hover:bg-white hover:text-black py-2 px-4 rounded mr-2">
                  Write An Article
                </button>
              </Link>

              <button className="font-bold bg-transparent border border-white ease-in duration-200 hover:bg-white hover:text-black py-2 px-4 rounded mr-2">
                Explore Our Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
