import LaptopCanvas from "./Laptop";
import Position from "./Position";

const Home = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      
      <div className='parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto 
lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row 
items-center lg:items-start justify-end text-right z-10'>

  {/* NAME */}
  <div className="flex-1 lg:mb-0 text-center lg:text-right">
    <h1 className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] 
    md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]'>
      ANANYA SINGH
    </h1>
    <Position/>
  </div>

  {/* TAGLINE */}
  <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 
  lg:mt-10 2xl:mt-0 sm:self-end ml-auto">
    <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] 
    sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg 
    text-white text-left lg:text-right'>
      I love crafting <br/> captivating experiences for the digital world to savor.
    </div>
  </div>
</div>



      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      {/* <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" /> */}
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />

      <LaptopCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Home;
