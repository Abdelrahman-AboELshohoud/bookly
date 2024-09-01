import { FaLocationDot } from "react-icons/fa6";
import BgIcons from "../Components/BgIcons";

export default function Contact() {
  const inputs = [
    { title: "Name", ph: "Enter your name" },
    { title: "Phone Number", ph: "Enter your phone number" },
    { title: "Email", ph: "Enter your email" },
    { title: "Subject", ph: "Enter your subject" },
  ];
  const af = "after";
  const bf = "before";

  return (
    <section className="flex flex-col gap-6 items-center md:pb-8 md:pt-6 py-10 justify-center px-8 md:px-14 sm:px-12">
      <h2 className="text-3xl font-semibold text-primary">Contact Us</h2>
      <div className="flex md:flex-col gap-5 w-fit items-center flex-col">
        <div
          className="h-fit bg-whitew flex my-14 flex-wrap justify-center items-center gap-8 pt-10 pb-8 px-5 w-[480px] 
         after:bg-blackw after:w-40 after:h-64 after:absolute after:-right-10 after:-top-8 after:-z-10
         before:bg-blackw before:w-40 before:h-64 before:absolute before:-left-10 before:-bottom-8 before:-z-10 relative"
        >
          {inputs.map((e, i) => (
            <div
              key={i}
              className="border-b-slate-300 border-b-2 flex flex-col gap-2 p-1"
            >
              <h4 className="text-lg font-semibold text-blackw">{e.title}</h4>
              <input placeholder={e.ph} className="text-sm bg-transparent" />
            </div>
          ))}
          <div className="flex flex-col gap-2 p-1 w-full">
            <h4 className="text-lg font-semibold text-blackw">Message</h4>

            <textarea
              placeholder="Enter your message"
              className="text-sm border-2 border-blackw border-opacity-50 bg-transparent h-32 pt-2 pl-2 rounded-lg resize-none"
            />
            <button className="w-full h-14 text-whitew bg-primary rounded-lg hover:text-primary mt-4 hover:bg-whitew transition border-2 border-primary">
              SUBMIT
            </button>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-primary">Our Contacts</h3>
        <div className=" flex flex-row items-center justfy-center gap-16 md:gap-16 md:h-auto h-96 md:pt-0 md:pb-5 py-8 w-full">
          <div className="relative text-blackw w-64 p-4 h-56 rounded-md bg-whitew border-blackw border-opacity-55 border-2">
            <BgIcons Icon={"p"} />
            <div>Phone number</div> +012345678910
          </div>
          <div className="relative text-whitew w-64 p-4 h-56 mt-10 rounded-md bg-blackw">
            <BgIcons Icon={""} />
            <div className="text-center">Email</div>
            test123@gmail.com
          </div>
          <div className="text-blackw w-64 p-4 h-56 rounded-md text-sm bg-whitew border-blackw border-opacity-55 border-2 relative">
            <BgIcons Icon={"f"} />
            <div className="text-[16px] text-center">Adresses</div>{" "}
            <div className="h-4 w-1" /> Egypt: city - street - in front of{" "}
            <div className="h-2 w-1" /> Jordan: city - street - in front of
            <div className="h-2 w-1" /> UAE: city - street - in front of
            <div className="h-2 w-1" />
            Saudi Arabia: city - street - in front of
          </div>
        </div>
      </div>
    </section>
  );
}
