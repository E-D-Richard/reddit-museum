// import MainBanner from "../../mainBanner/MainBanner";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (<Navigate to="/photography/film" />);
  // return (
  //   <div className="home">
  //     <main className="posts-section">
  //       <MainBanner />
  //     </main>
  //   </div>
  // );
};

export default Home;
