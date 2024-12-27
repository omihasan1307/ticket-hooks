const HeaderSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      className={`relative bg-[url(../../public/asset/bus.jpg)] bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 from-[#001524]/95 to-[#11001c]/25 bg-gradient-to-t md:bg-gradient-to-r"></div>

      <div className="relative mx-auto max-w-screen-xl text-center px-4 py-32 sm:px-6 lg:flex lg:px-8 text-white">
        <div className="w-full space-y-4">
          <h1 className="text-4xl font-extrabold ">{title}</h1>
          <p className="font-sans">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
