import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate()
  return (
    <div className="lg:h-[580px] max-w-screen-xl mx-auto p-4 flex justify-center">
      <div className="w-full md:w-4/5 ">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-6xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="py-6 w-full md:w-3/5 mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button
          onClick={()=> navigate('/Dashboard')}
           className="btn bg-white px-6 rounded-3xl text-highlight mt-6">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
