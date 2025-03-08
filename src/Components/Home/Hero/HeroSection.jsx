import "./HeroSection.css";
import laptopImage from "../../../Assets/hpomen.png";
import { Link } from "react-router-dom";


const HeroSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="heroMain">
        <div className="sectionleft">
        <h5>Laptops</h5>
        <h1>New Gaming Machines</h1>
        <p>There's Nothing like Omen</p>
          <div className="heroLink">
            <Link to="/shop" onClick={scrollToTop}>
              <h5>Shop Now <i class='bx bx-right-arrow-alt' ></i></h5>
            </Link>
          </div>
        </div>
        <div className="sectionright">
        <img src={laptopImage} style = {{backgroundColor: "transparent",maxHeight:"400px",paddingTop:"100px"}} alt="Laptop" className="canvasModel"/>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
