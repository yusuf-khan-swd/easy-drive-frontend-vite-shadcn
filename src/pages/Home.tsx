import Banner from "@/components/easy-drive/Banner";
import CustomerTestimonials from "@/components/easy-drive/CustomerTestimonials";
import FeaturedCars from "@/components/easy-drive/FeaturedCars";
import WhyChooseUs from "@/components/easy-drive/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Banner />
      <FeaturedCars />
      <WhyChooseUs />
      <CustomerTestimonials />
    </div>
  );
};

export default Home;
