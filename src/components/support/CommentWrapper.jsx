const CommentWrapper = ({ children, position = "bottom" }) => {
  return (
    <div className="dropdown-content z-[1]  w-[300px]  rounded-[4px] left-[-75%] relative  hidden lg:block">
      {position == "bottom" && (
        <div
          style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px)" }}
          className={`w-0 h-0 border-b-[10px] border-r-[10px] border-l-[10px] border-r-transparent border-l-transparent border-b-white relative left-[43%]`}
        ></div>
      )}
      <div className="p-[2px] bg-white rounded-[4px]">{children}</div>
      {position == "top" && (
        <div
          style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px)" }}
          className={`w-0 h-0 border-t-[10px] border-r-[10px] border-l-[10px] border-r-transparent border-l-transparent  relative left-[43%] border-b-white`}
        ></div>
      )}
    </div>
  );
};
export default CommentWrapper;
