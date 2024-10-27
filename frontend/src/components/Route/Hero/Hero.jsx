import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div className={`${styles.section}`}>
      <div
        className={`relative min-h-[17vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
        style={{
          backgroundImage: "url('hero.jpg')",
        }}
      >
        <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
            <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}>
            Discover Your Style <br /> Elevate Your Beauty
            </h1>
            <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            Step into a world of elegance and glamour with our exclusive
            collection. From timeless fashion essentials to the latest beauty
            must-haves, we bring you the ultimate in style. Find your perfect
            look and let your beauty shine with confidence every day.
            </p>
            <Link to="/products" className="inline-block">
                <div className={`${styles.button} mt-5`}>
                    <span className="text-[#fff] font-[Poppins] text-[18px]">
                        Shop Now
                    </span>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
