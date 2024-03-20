import "./App.css";
import Card from "./Components/Card";
import reviews from './data';

function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex justify-center items-center bg-gray-200 max-[500px]:h-[auto] max-[500px]:py-[1rem]">
      <div className="w-[600px] flex flex-col justify-center items-center gap-8 max-[500px]:w-[90%] max-[400px]:gap-[3rem]">

        <div className="w-[100%] flex flex-col justify-center items-center gap-1">
          <h1 className="text-3xl font-bold max-[500px]:text-2xl">Our Testimonials</h1>
          <div className="w-[30%] h-[4px] bg-violet-600 rounded-full"></div>
        </div>

        <Card reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
