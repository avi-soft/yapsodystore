export default function MainContainer({
  children,
  coverImage,
  storeBackground,
  isHome = true,
}) {
  let px = isHome ? "lg:px-[120px]" : "lg:px-[30px]";
  return (
    <main className="pt-24 pb-4 md:pb-[50px] ">
      <div
        style={{ backgroundColor: storeBackground }}
        className={`flex ${px}  min-h-screen flex-col items-center font-lato pb-[15px] m-auto w-[97.5%] md:w-[90%] max-w-[1300px]
          bg-300 bg-opacity-90 rounded-md opacity-[0.95]`}
      >
        {children}
      </div>
      <div
        className="w-full h-screen fixed top-0 left-0 -z-10"
        style={{
          background: coverImage ? `url(${coverImage})` : "#ffffff",
          backgroundPosition: "center",
        }}
      ></div>
    </main>
  );
}
