import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lampPhoto, logo } from "../Data/Data";

const Cart = ({ open, setOpen }) => {
  return (
    <>
      <aside
        className={`fixed right-0 top-0 w-[100vw] h-screen z-30  duration-1000 ${
          open ? " visible translate-x-0" : " invisible translate-x-full"
        }`}
      >
        <div
          className={`fixed right-0 top-0 w-1/2 h-screen bg-bg-cart-color z-40 md:w-full flex flex-col items-center duration-1000`}
        >
          <div className="w-full items-center duration-100 flex justify-center relative basis-1/4">
            <img src={lampPhoto} className="absolute w-1/2" alt="cart/png" />
            <FontAwesomeIcon
              icon={faXmark}
              className="absolute right-0 top-0 m-5 icon-style cursor-pointer active:rotate-180 text-2xl"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <nav className=" flex flex-col basis-1/2 justify-center items-center gap-16">
            <a
              className=" text-sm font-light z-50"
              href="#home"
              onClick={() => {
                setOpen(!open);
              }}
            >
              home
            </a>
            <a
              className=" text-sm font-light"
              href="#about"
              onClick={() => {
                setOpen(!open);
              }}
            >
              about
            </a>
            <a
              className=" text-sm font-light"
              href="#skills"
              onClick={() => {
                setOpen(!open);
              }}
            >
              skills
            </a>
            <a
              className=" text-sm font-light"
              href="#my-work"
              onClick={() => {
                setOpen(!open);
              }}
            >
              my work
            </a>
            <a
              className=" text-sm font-light"
              href="#contact"
              onClick={() => {
                setOpen(!open);
              }}
            >
              contact
            </a>
          </nav>
          <div className="basis-1/4 flex items-center justify-center">
            <img className="h-16 md:h-12" src={logo} alt="logo/png" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Cart;
