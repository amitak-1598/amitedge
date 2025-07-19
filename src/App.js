import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import MiddleSection from './Components/MiddleSection';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import Courses from './Components/Courses';
import Results from './Components/Results';
import About from './Components/About';
import HomeCardsSlider from './Components/HomeCardsSlider';
import WhyChooseUs from './Components/WhyChooseUs';


function Home(){
  document.title="Home | Amit";
  return (
    <>
     <Navbar />
     <MiddleSection />
     <HomeCardsSlider />
     <WhyChooseUs />
     <Footer />
    </>
  );
}


function ContactUs(){
  document.title="Contact Us"
  return(
    <>
    <Navbar/>
    <ContactForm />
    <Footer/>
    </>
  )
}

function ResultsComponent(){
  document.title="Results"
  return(
    <>
    <Navbar/>
    <Results />
    <Footer/>
    </>
  )
}

function CoursesComponent(){
  document.title="Courses"
  return(
    <>
    <Navbar/>
    <Courses/>
    <Footer/>
    </>
  )
}

function AboutComponent(){
  document.title="About Us"
  return(
    <>
    <Navbar/>
    <About />
    <Footer/>
    </>
  )
}


function App() {
  const basename= process.env.NODE_ENV=="production"?"/amitedge" :"/";

           

  return (
    
    <BrowserRouter basename = {basename}>
     <Routes> 
        <Route  path = "/" element={<Home/>} />
          <Route  path = "/contact" element={<ContactUs/>} />
           <Route  path = "/courses" element={<CoursesComponent/>} />
            <Route  path = "/results" element={<ResultsComponent/>} />
             <Route  path = "/about" element={<AboutComponent/>} />
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
