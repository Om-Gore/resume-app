import { useNavigate } from "react-router-dom";

export default ({ heading, image, navigatTo }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(navigatTo);
      }}
      className="m-20 cursor-pointer hover:bg-indigo-50 hover:opacity-80 relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl transition-shadow duration-200"
      style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
    >
      {/* Image */}
      <div className="relative m-0 overflow-hidden rounded-tl-xl rounded-tr-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <img src={image} alt={`image`} />
      </div>

      {/*Heading*/}
      <h1 className="my-6 text-xl text-center font-bold  text-gray-900 md:text-3xl">
        {heading}
      </h1>
    </div>
  );
};
