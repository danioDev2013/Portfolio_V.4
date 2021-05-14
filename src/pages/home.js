import React from "react";
import HomeIntro from "../components/HomePage/Intro";
import RecentWork from "../components/HomePage/RecentWork";
import Footer from "../components/Footer";
import Button from "../components/Button";


function Home() {

  return (
    <div>
      <HomeIntro />
      <RecentWork title="Most Recent Projects" />
      <Button btnText="View More" link="/work" />
      <Footer />
    </div>
  );
}


export default Home;