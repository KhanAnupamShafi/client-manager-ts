const Loader = () => {
  return (
    <div className="w-full h-screen bg-white fixed inset-0 z-50 duration-700 flex items-center justify-center">
      <div className="w-60 text-center">
        <div className=" bg-[#3C65F5] w-5 h-5 rounded-full mx-1.5 inline-block animate-bouncy !animation-delay-[-320ms]"></div>
        <div className="bg-[#3C65F5] w-5 h-5 rounded-full mx-1.5 inline-block animate-bouncy !animation-delay-[-160ms]"></div>
        <div className="bg-[#3C65F5] w-5 h-5 rounded-full mx-1.5 inline-block animate-bouncy"></div>
      </div>
    </div>
  );
};

export default Loader;
