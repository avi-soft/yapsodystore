export default function MainContainer({ children, boxColor }) {
  return (
    <main
      className="flex mt-[120px] mb-[120px] flex-col items-center justify-between pb-[15px] m-auto w-[95%] xl:w-[1300px] lg:px-[100px] px-[20px] rounded-md"
      style={{
        backgroundColor: boxColor ? boxColor : "#ffffff",
        backgroundPosition: "center",
        opacity: "0.9",
      }}
    >
      {children}
    </main>
  );
}
