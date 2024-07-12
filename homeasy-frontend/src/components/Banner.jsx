import banner from "../assets/images/BannerImages/plumbing-service.webp";
const Banner = () => {
  return (
    <>
      <div className="max-w-[1280px] h-1/5 md:h-[28rem] rounded-md mx-auto p-2 lg:mt-10">
        <img
          src={banner}
          alt="banner image"
          className="object-cover rounded-md aspect-auto h-full w-full"
        />
      </div>
    </>
  );
};

export default Banner;
