import { BsSend } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <section>
        <div className="bg-gray-100 w-[80%] mx-auto pt-20 pb-5">
          <h4 className="text-center font-bold text-2xl my-2.5">
            JOIN OUR MAILING LIST
          </h4>
          <p className="text-center w-[40%] mx-auto mb-10 text-gray-550">
            Assumenda cupiditate deleniti recusandae voluptatum, ipsam a ipsum
            dolorem magnam dicta optio.
          </p>

          <div className="flex flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white border-1 border-gray-350 px-8 py-2"
            />
            <button className="bg-black cursor-pointer py-[9px] px-2">
              <BsSend className="text-2xl text-white object-fill " />
            </button>
          </div>
        </div>
      </section>

      <div className=" bg-gray-100 mx-auto px-100 pt-10 pb-12 w-[80%]">
        <footer className="flex justify-between items-center w-[40%] mx-auto">
          <img
            src="src/assets/facebook.png"
            alt="facebook"
            className="h-5 w-5 cursor-pointer"
          />
          <img
            src="src/assets/twitter.png"
            alt="twitter"
            className="h-5 w-5 cursor-pointer"
          />
          <img
            src="src/assets/youtube.png"
            alt="youtube"
            className="h-5 w-5 cursor-pointer"
          />
          <img
            src="src/assets/instagram.png"
            alt="instagram"
            className="h-5 w-5 cursor-pointer"
          />
          <img
            src="src/assets/pinterest.png"
            alt="pinterest"
            className="h-5 w-5 cursor-pointer"
          />
        </footer>
        <p className="text-center pt-6 text-gray-400 ">
          Copyright &copy; Yummy Donut {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}
