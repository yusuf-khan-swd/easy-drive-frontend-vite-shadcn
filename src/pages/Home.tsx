import Banner from "@/components/easy-drive/Banner";
import CustomerTestimonials from "@/components/easy-drive/CustomerTestimonials";
import FeaturedCars from "@/components/easy-drive/FeaturedCars";
import WhyChooseUs from "@/components/easy-drive/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <div className="mx-[-16px] mt-[-16px]">
        <Banner />
      </div>
      <div className="">
        <FeaturedCars />
        <WhyChooseUs />
        <CustomerTestimonials />
      </div>
    </div>
  );
};

export default Home;
