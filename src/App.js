import "./App.css";
import Header from "./components/Header";
import bigImg from "./assets/img/image.jpg";
import developIcon from "./assets/img/developIcon.png";
import manageIcon from "./assets/img/manageIcon.png";
import designIcon from "./assets/img/designIcon.png";
import { BsArrowUp } from "react-icons/bs";
import { useEffect, useRef } from "react";

function App() {
  const option = {
    threshold: 0.5,
  };
  useEffect(() => {
    let services = document.querySelectorAll("#services > div");
    console.log(services);
    const serviceObserver = new IntersectionObserver(function (
      entries,
      serviceObserver
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("slide");
        entry.target.classList.add("appear");
        serviceObserver.unobserve(entry.target);
      });
    },
    option);
    services.forEach((service) => {
      serviceObserver.observe(service);
    });
  }, []);
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="h-[50vh] lg:h-[90vh] relative px-2 w-full">
        <div className="absolute top-0 left-0 z-[-1000] bg-black h-full w-full overflow-hidden">
          <img
            src={bigImg}
            alt="background"
            className=" opacity-30 object-cover h-full w-full"
          />
        </div>
        <div className="cube">
          <div className="top"></div>
          <div>
            <span style={{ "--i": "0" }}></span>
            <span style={{ "--i": "1" }}></span>
            <span style={{ "--i": "2" }}></span>
            <span style={{ "--i": "3" }}></span>
          </div>
        </div>
        <Header />
        <div className="uppercase text-white text-center font-Bebas-Neue h-[65%] grid place-content-center tracking-wider pointer-events-none w-full overflow-hidden">
          <div>
            <h1 className="text-4xl md:text-6xl mb-6 tracking-widest">
              <span className="hidden md:inline">crossswirex</span>
              <span className="md:hidden">We</span>
            </h1>
            <h3 className="text-xl md:text-2xl">
              DESIGN DEVELOP MANAGE DIGITAL SOLUTION
            </h3>
          </div>
        </div>
      </div>
      <div className=" bg-slate-200 px-4">
        <div
          id="services"
          className="py-8 max-w-vw mx-auto flex flex-col gap-8"
        >
          <div className=" max-w-3xl shadow-xl p-2 bg-pale-azure rounded-lg pointer-events-none from-left">
            <div className="mb-4">
              <div className="flex items-center gap-6">
                <span className="w-12 inline-block rounded-full overflow-hidden shadow-lg">
                  <img src={designIcon} alt="design-icon" />
                </span>
                <span className="font-bold text-lg text-tropical-indigo uppercase tracking-widest inline-block text-center w-full md:text-left md:inline">
                  Design
                </span>
              </div>
            </div>
            <div className="">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className=" max-w-3xl shadow-xl p-2 bg-pale-azure rounded-lg self-end pointer-events-none from-right">
            <div className="mb-4">
              <div className="flex items-center gap-6 flex-row-reverse">
                <span className="w-12 inline-block rounded-full overflow-hidden shadow-lg">
                  <img src={developIcon} alt="develop-icon" />
                </span>
                <span className="font-bold text-lg text-tropical-indigo uppercase tracking-widest inline-block text-center w-full md:text-left md:inline">
                  Develop
                </span>
              </div>
            </div>
            <div className="">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className=" max-w-3xl shadow-xl p-2 bg-pale-azure rounded-lg pointer-events-none from-left">
            <div className="mb-4">
              <div className="flex items-center gap-6">
                <span className="w-12 inline-block rounded-full overflow-hidden shadow-lg">
                  <img src={manageIcon} alt="manage-icon" />
                </span>
                <span className="font-bold text-lg text-tropical-indigo uppercase tracking-widest inline-block text-center w-full md:text-left md:inline">
                  Manage
                </span>
              </div>
            </div>
            <div className="">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="project" className="py-6 max-w-vw mx-auto px-4">
        <h3 className="text-5xl text-center mb-16">
          Latest <span className="text-Indigo font-bold">Projects</span>
        </h3>
        <div className="flex sm:grid flex-col sm:grid-cols-2 gap-10 justify-center items-center w-full">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-md overflow-hidden relative group">
            <img
              src={require("./assets/img/fintech.jpg")}
              alt=""
              className="object-cover h-full w-full"
            />
            <div className="bg-Indigo bg-opacity-80 absolute bottom-0 left-0 h-0 w-full group-hover:h-full overflow-hidden transition-all duration-1000 grid place-content-center text-white">
              <div className="text-center p-4">
                <h4 className="text-xl font-bold mb-3">Rush Bank</h4>
                <p>
                  Online banking system that speeds up payment and transaction
                  process. It gives a new light to the world of banking
                </p>
              </div>
            </div>
          </div>
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-md overflow-hidden relative group">
            <img
              src={require("./assets/img/foodapp.jpg")}
              alt=""
              className="object-cover h-full w-full"
            />
            <div className="bg-Indigo bg-opacity-80 absolute bottom-0 left-0 h-0 w-full group-hover:h-full overflow-hidden transition-all duration-1000 grid place-content-center text-white">
              <div className="text-center p-4">
                <h4 className="text-xl font-bold mb-3">Foodie Friends</h4>
                <p>
                  With Foodie Friends, you can discover new restaurants and
                  cafes in your area based on your preferences, dietary
                  restrictions, and budget. Simply enter your location, select
                  your desired cuisine, and browse through a list of recommended
                  restaurants with ratings and reviews from fellow foodies.
                </p>
              </div>
            </div>
          </div>
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-md overflow-hidden relative group">
            <img
              src={require("./assets/img/logistic.png")}
              alt=""
              className="object-cover h-full w-full"
            />
            <div className="bg-Indigo bg-opacity-80 absolute bottom-0 left-0 h-0 w-full group-hover:h-full overflow-hidden transition-all duration-1000 grid place-content-center text-white">
              <div className="text-center p-4">
                <h4 className="text-xl font-bold mb-3">Crossrides</h4>
                <p>
                  With Crossrides, you can easily manage your inventory, track
                  your shipments, and optimize your routes in real-time. Our app
                  offers a range of features to help you stay on top of your
                  logistics game
                </p>
              </div>
            </div>
          </div>
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-md overflow-hidden relative group">
            <img
              src={require("./assets/img/online-store.jpg")}
              alt=""
              className="object-cover h-full w-full"
            />
            <div className="bg-Indigo bg-opacity-80 absolute bottom-0 left-0 h-0 w-full group-hover:h-full overflow-hidden transition-all duration-1000 grid place-content-center text-white">
              <div className="text-center p-4">
                <h4 className="text-xl font-bold mb-3">ShopEase</h4>
                <p>
                  With ShopEase, you can browse through thousands of products
                  from your favorite retailers, add items to your cart, and
                  checkout in just a few taps. Our app offers a range of
                  features to help you find what you need and make informed
                  purchase decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="team" className="max-w-vw mx-auto py-8 px-4">
        <h3 className="text-5xl text-center mb-8 flex-wrap">
          Our <span className=" text-russia-violet font-bold">Team</span>
        </h3>
        <div className="w-full flex flex-wrap gap-4 justify-evenly items-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full p-3 border-2 border-red-400 shrink-0 relative group -z-20">
            <div className="w-full h-full grid place-content-center absolute top-0 left-0 -z-10 group-hover:-translate-x-10 rounded-full bg-red-500">
              <span>Founders</span>
            </div>
            <img
              src={require("./assets/img/member1.jpg")}
              alt="ceo"
              className="w-full h-full object-cover object-top rounded-full border-2 border-red-400 group-hover:translate-x-10"
            ></img>
          </div>
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden p-3 border-2 border-Indigo shrink-0">
            <img
              src={require("./assets/img/member2.jpg")}
              alt="ceo"
              className="w-full h-full object-cover object-top rounded-full border-2 border-Indigo"
            ></img>
          </div>
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden p-3 border-2 border-green-400 shrink-0">
            <img
              src={require("./assets/img/member3.jpg")}
              alt="ceo"
              className="w-full h-full object-cover object-top rounded-full border-2 border-green-400"
            ></img>
          </div>
        </div>
      </div>
      <div id="contact" className="bg-slate-800 text-white py-8">
        <div className="max-w-vw mx-auto">
          <h3 className="text-3xl text-center font-bold">Contact Us</h3>
          <form className=" max-w-2xl p-4 mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Fullname"
                className="inline-block bg-slate-600 rounded-lg h-9 w-[50%] indent-2 outline-pale-azure"
              />
              <input
                type="email"
                placeholder="Email"
                className="inline-block bg-slate-600 rounded-lg h-9 w-[50%] indent-2 outline-pale-azure"
              />
            </div>

            <textarea
              className=" resize-none w-full block bg-slate-600 rounded-lg my-5 h-52 outline-pale-azure p-2"
              placeholder="Your message"
            />
            <input
              onClick={submitForm}
              type="submit"
              className="bg-indigo-500 cursor-pointer py-2 px-4 rounded-3xl block mx-auto hover:bg-indigo-600 shadow-[0px_5px_white] active:translate-y-[5px] active:shadow-none"
              value="Send message"
            />
          </form>
        </div>
      </div>
      <div id="footer" className="bg-slate-700 text-white p-4">
        <div className="max-w-vw mx-auto relative">
          <p>Copyright &copy; 2023 by rush</p>
          <button className="bg-indigo-500 p-2 rounded-md float-right absolute top-0 right-[10%] shadow-[0_0_1rem_rgb(99_102_241)]">
            <BsArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
