import Banner from "@/components/easy-drive/Banner";
import CustomerTestimonials from "@/components/easy-drive/CustomerTestimonials";
import FeaturedCars from "@/components/easy-drive/FeaturedCars";
import WhyChooseUs from "@/components/easy-drive/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto p-4">
        <FeaturedCars />
        <WhyChooseUs />
        <CustomerTestimonials />
      </div>
    </div>
  );
};

export default Home;
