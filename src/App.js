import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from "./components/SentimentAnalysis";
import WebsiteVisitors from "./components/WebsiteVisitors";


import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="dashboard">
          <Sidebar />
        </div>
        <div className="reviews">
          <Reviews />
        </div>
        <div className="average-rating">
          <AverageRating />
        </div>
        <div className="sentiment-analysis">
          <SentimentAnalysis />
        </div>
        <div className="website-visitors">
          <WebsiteVisitors />
        </div>
      </div>
    </>
  );
}
export default App;
