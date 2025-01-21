import Banner from "./components/Banner/Banner"
import FeatureBox from "./components/FeatureBox/FeatureBox"
import NavBar from "./components/NavBar/NavBar"
import OurApp from "./components/OurApp/OurApp"
import UserReview from "./components/UserReview/UserReview"
import Article from './components/Article/Article';
import FindYourLove from "./components/FindYourLove/FindYourLove"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Match Maker
      </h1>
      <div className="dm-sans-regular">
        <NavBar></NavBar>
        <Banner></Banner>
        <FeatureBox></FeatureBox>
        <UserReview></UserReview>
        <OurApp></OurApp>
        <Article></Article>
        <FindYourLove></FindYourLove>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
