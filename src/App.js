import "./App.css";
import Header from "./components/Header";
import bigImg from "./assets/img/image.jpg";
import developIcon from "./assets/img/developIcon.png";
import manageIcon from "./assets/img/manageIcon.png";
import designIcon from "./assets/img/designIcon.png";
import { BsArrowUp } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import { useEffect } from "react";

function App() {
  const option = {
    threshold: 0.5,
    rootMargin: "0px 0px 100px 0px",
  };
  useEffect(() => {
    let sliders = document.querySelectorAll(".slide-in");
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
        setTimeout(() => {
          entry.target.style.transitionDelay = "0ms";
        }, 1000);
      });
    },
    option);
    sliders.forEach((slider) => {
      serviceObserver.observe(slider);
    });
  }, []);
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="h-[50vh] min-h-fit lg:h-[90vh] relative px-2 w-full">
        <div className="absolute top-0 left-0 z-[-1000] bg-black h-full w-full overflow-hidden">
          <img
            src={bigImg}
            alt="background"
            className=" opacity-30 object-cover h-full w-full"
          />
        </div>
        <div className="cube left-[10%]">
          <div className="top"></div>
          <div>
            <span style={{ "--i": "0" }}>We</span>
            <span style={{ "--i": "1" }}>Design</span>
            <span style={{ "--i": "2" }}>Develop</span>
            <span style={{ "--i": "3" }}>Manage</span>
          </div>
        </div>
        <div className="cube right-[10%]">
          <div className="top"></div>
          <div>
            <span style={{ "--i": "0" }}>We</span>
            <span style={{ "--i": "1" }}>Design</span>
            <span style={{ "--i": "2" }}>Develop</span>
            <span style={{ "--i": "3" }}>Manage</span>
          </div>
        </div>
        <Header />
        <div className="uppercase text-white text-center font-Bebas-Neue h-[65%] grid place-content-center tracking-wider w-full overflow-hidden">
          <div>
            <h1 className="text-4xl md:text-6xl mb-6 tracking-widest pointer-events-none">
              <span className="hidden md:inline">crossswirex</span>
              <span className="md:hidden">We</span>
            </h1>
            <h3 className="text-xl md:text-2xl pointer-events-none">
              DESIGN DEVELOP MANAGE DIGITAL SOLUTION
            </h3>
            <button
              className="mt-8 rounded-lg border-2 border-white px-1"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              message us
            </button>
          </div>
        </div>
      </div>
      <div id="services" className="bg-slate-200 px-4">
        <div className="py-8 max-w-vw mx-auto flex flex-col gap-8">
          <div className="slide-in max-w-3xl shadow-xl flex overflow-clip bg-white rounded-lg pointer-events-none  from-left">
            <div className="">
              <div className="flex items-center gap-2 p-2">
                <span className="hidden md:inline-block w-12 rounded-full overflow-hidden shadow-lg">
                  <img src={designIcon} alt="design-icon" />
                </span>
                <span className="service-title text-base font-bold md:text-lg text-Indigo uppercase tracking-widest">
                  Design
                </span>
              </div>
            </div>
            <div className="text-sm p-2 border-l border-x-slate-200 flex flex-col justify-between">
              <p className="service-info">
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
              <button className="mt-2 text-pale-azure px-2 py-1 border border-pale-azure pointer-events-auto max-w-fit">
                Learn more
              </button>
            </div>
          </div>
          <div className="slide-in max-w-3xl shadow-xl flex md:flex-row-reverse overflow-clip bg-white rounded-lg pointer-events-none self-end from-right">
            <div className="">
              <div className="flex items-center gap-2 p-2">
                <span className="hidden md:inline-block w-12 rounded-full overflow-hidden shadow-lg">
                  <img src={developIcon} alt="design-icon" />
                </span>
                <span className="service-title text-base font-bold md:text-lg text-Indigo uppercase tracking-widest">
                  Develop
                </span>
              </div>
            </div>
            <div className="text-sm p-2 border-l md:border-l-0 md:border-r border-x-slate-200 flex flex-col justify-between">
              <p className="service-info">
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
              <button className="mt-2 text-pale-azure px-2 py-1 border border-pale-azure pointer-events-auto max-w-fit">
                Learn more
              </button>
            </div>
          </div>
          <div className="slide-in max-w-3xl shadow-xl flex overflow-clip bg-white rounded-lg pointer-events-none  from-left">
            <div className="">
              <div className="flex items-center gap-2 p-2">
                <span className="hidden md:inline-block w-12 rounded-full overflow-hidden shadow-lg">
                  <img src={manageIcon} alt="design-icon" />
                </span>
                <span className="service-title text-base font-bold md:text-lg text-Indigo uppercase tracking-widest">
                  Manage
                </span>
              </div>
            </div>
            <div className="text-sm p-2 border-l border-x-slate-200 flex flex-col justify-between">
              <p className="service-info">
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
              <button className="mt-2 text-pale-azure px-2 py-1 border border-pale-azure pointer-events-auto max-w-fit">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="project" className="py-6 max-w-vw mx-auto px-4">
        <h3 className="text-3xl sm:text-5xl text-center mb-16">
          Latest <span className="text-Indigo font-bold">Projects</span>
        </h3>
        <div className="flex sm:grid flex-col sm:grid-cols-2 gap-10 justify-center items-center w-full">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-md relative group">
            <img
              src={require("./assets/img/fintech.jpg")}
              alt=""
              className="object-cover h-full w-full slide-in project-img"
            />
            <div className="bg-Indigo bg-opacity-80 slide-in absolute bottom-0 left-0 w-full group-hover:h-full overflow-hidden grid place-content-center text-white project-info">
              <div className="text-center p-4">
                <h4 className="md:text-xl font-bold mb-3 =">Rush Bank</h4>
                <p className="text-sm">
                  Online banking system that speeds up payment and transaction
                  process. It gives a new light to the world of banking
                </p>
                <button className="mt-5 rounded-full p-2 bg-Iris text-russia-violet text-2xl">
                  <CiLink />
                </button>
              </div>
            </div>
          </div>
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-md relative group">
            <img
              src={require("./assets/img/foodapp.jpg")}
              alt=""
              className="object-cover h-full w-full slide-in project-img"
            />
            <div className="bg-Indigo bg-opacity-80 absolute bottom-0 left-0 w-full group-hover:h-full overflow-hidden grid place-content-center text-white slide-in project-info">
              <div className="text-center p-4">
                <h4 className="md:text-xl font-bold mb-3">Foodie Friends</h4>
                <p className="text-sm">
                  With Foodie Friends, you can discover new restaurants and
                  cafes in your area based on your preferences, dietary
                  restrictions, and budget. Simply enter your location, select
                  your desired cuisine, and browse through a list of recommended
                  restaurants with ratings and reviews from fellow foodies.
                </p>
                <button className="mt-5 rounded-full p-2 bg-Iris text-russia-violet text-2xl">
                  <CiLink />
                </button>
              </div>
            </div>
          </div>
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-md relative group">
            <img
              src={require("./assets/img/logistic.png")}
              alt=""
              className="object-cover h-full w-full slide-in project-img"
            />
            <div className="bg-Indigo bg-opacity-80 absolute bottom-0 left-0 w-full group-hover:h-full overflow-hidden grid place-content-center text-white slide-in project-info">
              <div className="text-center p-4">
                <h4 className="md:text-xl font-bold mb-3">Crossrides</h4>
                <p className="text-sm">
                  With Crossrides, you can easily manage your inventory, track
                  your shipments, and optimize your routes in real-time. Our app
                  offers a range of features to help you stay on top of your
                  logistics game
                </p>
                <button className="mt-5 rounded-full p-2 bg-Iris text-russia-violet text-2xl">
                  <CiLink />
                </button>
              </div>
            </div>
          </div>
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-md overflow-hidden relative group">
            <img
              src={require("./assets/img/online-store.jpg")}
              alt=""
              className="object-cover h-full w-full slide-in project-img"
            />
            <div className="bg-Indigo bg-opacity-80 absolute bottom-0 left-0 w-full group-hover:h-full overflow-hidden grid place-content-center text-white slide-in project-info">
              <div className="text-center p-4">
                <h4 className="md:text-xl font-bold mb-3">ShopEase</h4>
                <p className="text-sm">
                  With ShopEase, you can browse through thousands of products
                  from your favorite retailers, add items to your cart, and
                  checkout in just a few taps. Our app offers a range of
                  features to help you find what you need and make informed
                  purchase decisions
                </p>
                <button className="mt-5 rounded-full p-2 bg-Iris text-russia-violet text-2xl">
                  <CiLink />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="team" className="max-w-vw mx-auto py-8 px-4">
        <h3 className="text-3xl sm:text-5xl text-center mb-8 flex-wrap">
          Our <span className=" text-russia-violet font-bold">Team</span>
        </h3>
        <div className="w-full flex flex-wrap gap-4 justify-evenly items-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full shrink-0 relative group -z-20">
            <img
              src={require("./assets/img/member1.jpg")}
              alt="ceo"
              className="w-full h-full object-cover object-top rounded-full border-2 border-russia-violet group-hover:translate-x-10"
            ></img>
          </div>
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden  shrink-0">
            <img
              src={require("./assets/img/member2.jpg")}
              alt="ceo"
              className="w-full h-full object-cover object-top rounded-full border-2 border-Indigo"
            ></img>
          </div>
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shrink-0">
            <img
              src={require("./assets/img/member3.jpg")}
              alt="ceo"
              className="w-full h-full object-cover object-top rounded-full border-2 border-Iris"
            ></img>
          </div>
        </div>
      </div>
      <div id="contact" className=" bg-Indigo text-white py-8">
        <div className="max-w-vw mx-auto">
          <h3 className="text-xl sm:text-3xl text-center font-bold">
            Contact Us
          </h3>
          <form className=" max-w-2xl p-4 mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Fullname"
                className="inline-block bg-Iris border-2 border-indigo-600 rounded-lg h-9 w-[50%] indent-2 outline-pale-azure"
              />
              <input
                type="email"
                placeholder="Email"
                className="inline-block bg-Iris border-2 border-indigo-600 rounded-lg h-9 w-[50%] indent-2 outline-pale-azure"
              />
            </div>

            <textarea
              className=" resize-none w-full block bg-Iris border-2 border-indigo-600 rounded-lg my-5 h-52 outline-pale-azure p-2"
              placeholder="Your message"
            />
            <input
              onClick={submitForm}
              type="submit"
              className="bg-Iris cursor-pointer py-2 px-4 rounded-3xl block mx-auto hover:bg-[rgb(97_61_193_/0.8)] hover:scale-110 duration-200 active:scale-75 active:translate-y-[5px] active:shadow-none"
              value="Send message"
            />
          </form>
        </div>
      </div>
      <div id="footer" className="bg-russia-violet text-white p-4">
        <div className="max-w-vw mx-auto relative">
          <p>Copyright &copy; 2023 by rush</p>
          <button
            className="bg-Indigo p-2 rounded-md float-right absolute top-0 right-[10%] animate-bounce hover:animate-none"
            onClick={() => {
              console.log("clicked");
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          >
            <BsArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
