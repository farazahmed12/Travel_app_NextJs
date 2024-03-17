"use client";
import ActionButton from "@/components/ActionButton";
import InputField from "@/components/InputField";
import { Field, FieldArray, FormikProvider, useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";

const validationSchemaForm = Yup.object().shape({
  // String - required
  name: Yup.string()
    .required("Name is required")
    .trim("No White space")
    .strict(),

  // Number - required, positive
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be positive")
    .min(18, "Minimum 18 years old"),

  // Boolean - required
  isStudent: Yup.boolean()
    .required("Please specify if you are a student")
    .oneOf([true], "Must agree"),

  // Array - required, must have at least one item
  hobbies: Yup.array()
    .required("Hobbies are required")
    .min(1, "Please select at least one hobby"),

  // Object - nested validation
  address: Yup.object().shape({
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  }),

  // Date - required
  birthDate: Yup.date()
    .required("Birthdate is required")
    .max(new Date(), "Birthdate cannot be in the future")
    .min(new Date("1990-01-01"), "Birthdate must be after 1900-01-01"),

  // Nested Array - array of objects with nested validation
  friends: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Friend name is required"),
      age: Yup.number()
        .required("Friend age is required")
        .positive("Age must be positive"),
    })
  ),

  // Nested Object - object with nested validation
  preferences: Yup.object().shape({
    theme: Yup.string().required("Theme is required"),
    language: Yup.string().required("Language is required"),
  }),
});

export default function Home() {
  const formikForm = useFormik({
    initialValues: {
      // String
      name: "",

      // Number
      age: 0,

      // Boolean
      isStudent: false,

      // Array
      hobbies: [],

      // Object
      address: {
        street: "",
        city: "",
        country: "",
      },

      // Date
      birthDate: new Date(),

      // Nested Array
      friends: [
        { name: "John", age: 30 },
        { name: "Alice", age: 28 },
      ],

      // Nested Object
      preferences: {
        theme: "light",
        language: "english",
      },
    },
    validationSchema: validationSchemaForm,
  });

  console.log("VAL ==>", formikForm.values);
  console.log("ERROR ==>", formikForm.errors);

  return (
    <>
      <div className=" w-full ">
        {/* hero section */}
        <div className="w-full flex flex-col justify-center items-center rounded-md h-4/6 relative">
          <Image
            quality={100}
            src={"/rectangle.png"}
            width={1000}
            height={1000}
            priority
            objectFit="contain"
            // fill
            className="w-full h-full object-contain rounded-lg "
          />{" "}
          <div className="flex flex-col justify-center items-center absolute w-full h-full">
            <h3 className="text-white font-montserrat text-xl">
              Enjoy Your Dream Vacation
            </h3>

            <p className="font-montserrat text-white text-md w-6/12  leading-relaxed text-center">
              Plan and book our perfect trip with expert advice, travel tips,
              destination information and inspiration from us
            </p>
          </div>
          <div className="w-10/12 shadow-lg flex flex-row absolute -bottom-5 justify-between items-center bg-white p-2 rounded-md">
            <InputField
              isImage={true}
              imageSrc={"/location.png"}
              customStyles={"w-2.5/12"}
              placeholder={"Where are you going?"}
            />
            <InputField
              isImage={true}
              imageSrc={"/calendar.png"}
              customStyles={"w-2.5/12"}
              placeholder={"Check in date"}
            />
            <InputField
              isImage={true}
              imageSrc={"/calendar.png"}
              customStyles={"w-2.5/12"}
              placeholder={"Check out date"}
            />
            <InputField
              isImage={true}
              imageSrc={"/user.png"}
              customStyles={"w-2.5/12"}
              placeholder={"Guests"}
            />
          </div>
        </div>

        {/* warning */}
        <div className="w-12/12 rounded-md my-10 py-3 px-5 bg-[#FCEFCA] flex flex-row justify-start items-center ">
          <Image
            src={"/danger.png"}
            width={50}
            height={50}
            className="w-7 h-7 mr-4 object-contain"
            quality={100}
          />
          <p className="font-montserrat text-black text-md ">
            Check the latest COVID-19 restrictions before you travel.{" "}
            <span className="text-[#2F80ED] underline cursor-pointer">
              Learn more
            </span>
          </p>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-black font-montserrat text-xl">
          Enjoy your dream vacation
        </h3>
        <p className="text-sm text-[#333333] font-montserrat">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>

      {/* silder */}
      <div className="  w-12/12 my-10 flex flex-row justify-between items-center">
        <div className="flex flex-col  items-start">
          <Image
            src={"/Rectangle7.png"}
            width={1000}
            height={1000}
            quality={100}
            className={`w-60 h-44 object-cover rounded-md`}
          />
          <h3 className="text-[#333333] font-montserrat my-1 text-xl">
            Australia
          </h3>
          <p className="text-sm text-[#333333] mt-0 font-montserrat">
            1278 properties
          </p>
        </div>
        <div className="flex flex-col  items-start">
          <Image
            src={"/Rectangle8.png"}
            width={1000}
            height={1000}
            quality={100}
            className={`w-60 h-44 object-cover rounded-md`}
          />
          <h3 className="text-[#333333] font-montserrat my-1 text-xl">Japan</h3>
          <p className="text-sm text-[#333333] mt-0 font-montserrat">
            1278 properties
          </p>
        </div>
        <div className="flex flex-col  items-start">
          <Image
            src={"/Rectangle7.png"}
            width={1000}
            height={1000}
            quality={100}
            className={`w-60 h-44 object-cover rounded-md`}
          />
          <h3 className="text-[#333333] font-montserrat my-1 text-xl">
            New Zealand
          </h3>
          <p className="text-sm text-[#333333] mt-0 font-montserrat">
            1278 properties
          </p>
        </div>
        <div className="flex flex-col  items-start">
          <Image
            src={"/Rectangle10.png"}
            width={1000}
            height={1000}
            quality={100}
            className={`w-60 h-44 object-cover rounded-md`}
          />
          <h3 className="text-[#333333] font-montserrat my-1 text-xl">
            Greece
          </h3>
          <p className="text-sm text-[#333333] mt-0 font-montserrat">
            1278 properties
          </p>
        </div>
      </div>

      {/* slider 2 */}
      <div className="mt-7 mb-8">
        <h3 className="text-black font-montserrat text-xl">
          Get inspiration for your next trip
        </h3>

        <div className="flex flex-row justify-between items-center">
          <div className="w-[30%] relative mix-blend-overlay h-56 overflow-hidden rounded-md">
            <Image
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
              quality={100}
              src={"/rectangle.png"}
            />
            <div className="w-full h-full bg-[rgba(0,0,0,0.4)]  absolute inset-0"></div>

            <div className="w-11/12 ml-4 absolute bottom-0 ">
              <h3 className="text-white font-montserrat text-xl">
                Sydeny’s 10 most fashionable 5 star hotels
              </h3>
              <p className="text-sm text-white font-montserrat">
                Browse the fastest growing tourism sector in the heart of
                Australia tourism capital ....
              </p>
            </div>
          </div>
          <div className="w-[30%] relative mix-blend-overlay h-56 overflow-hidden rounded-md">
            <Image
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
              quality={100}
              src={"/Rectangle12.png"}
            />
            <div className="w-full h-full bg-[rgba(0,0,0,0.4)]  absolute inset-0"></div>

            <div className="w-11/12 ml-4 absolute bottom-0 ">
              <h3 className="text-white font-montserrat text-xl">
                Sydeny’s 10 most fashionable 5 star hotels
              </h3>
              <p className="text-sm text-white font-montserrat">
                Browse the fastest growing tourism sector in the heart of
                Australia tourism capital ....
              </p>
            </div>
          </div>
          <div className="w-[30%] relative mix-blend-overlay h-56 overflow-hidden rounded-md">
            <Image
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
              quality={100}
              src={"/Rectangle11.png"}
            />
            <div className="w-full h-full bg-[rgba(0,0,0,0.4)]  absolute inset-0"></div>

            <div className="w-11/12 ml-4 absolute bottom-0 ">
              <h3 className="text-white font-montserrat text-xl">
                Sydeny’s 10 most fashionable 5 star hotels
              </h3>
              <p className="text-sm text-white font-montserrat">
                Browse the fastest growing tourism sector in the heart of
                Australia tourism capital ....
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-black font-montserrat text-xl">Popular Hotels</h3>
      {/* silder 3 */}
      <div className="  w-12/12 my-7 flex flex-row justify-between items-center">
        <div className="flex flex-col  items-start">
          <Image
            src={"/Rectangle14.png"}
            width={1000}
            height={1000}
            quality={100}
            className={`w-64 h-60 object-cover rounded-md`}
          />
          <h4 className="text-[#333333] font-montserrat my-1 text-xl">
            Recce Graham resort
          </h4>
          <p className="text-sm text-[#333333] mt-0 font-montserrat">
            1278 properties
          </p>
        </div>
        <div className="flex flex-col  items-start">
          <Image
            src={"/Rectangle17.png"}
            width={1000}
            height={1000}
            quality={100}
            className={`w-64 h-60  object-cover rounded-md`}
          />
          <h4 className="text-[#333333] font-montserrat my-1 text-xl">
            Lakeside Motel Warefront
          </h4>
          <p className="text-sm text-[#333333] mt-0 font-montserrat">
            1278 properties
          </p>
        </div>
        <div className="flex flex-col  items-start">
          <Image
            src={"/Rectangle15.png"}
            width={1000}
            height={1000}
            quality={100}
            className={`w-64 h-60  object-cover rounded-md`}
          />
          <h4 className="text-[#333333] font-montserrat my-1 text-xl">
            Fireside Dinners
          </h4>
          <p className="text-sm text-[#333333] mt-0 font-montserrat">
            1278 properties
          </p>
        </div>
        <div className="flex flex-col  items-start">
          <Image
            src={"/Rectangle10.png"}
            width={1000}
            height={1000}
            quality={100}
            className={`w-64 h-60  object-cover rounded-md`}
          />
          <h4 className="text-[#333333] font-montserrat my-1 text-xl">
            Oculous Inn Stay
          </h4>
          <p className="text-sm text-[#333333] mt-0 font-montserrat">
            1278 properties
          </p>
        </div>
      </div>

      <div className="relative w-full h-48">
        <Image
          height={500}
          width={1000}
          src={"/banner.png"}
          className="w-full h-full object-cover rounded-md"
        />
        <div className="flex flex-col top-0 m-10 absolute  justify-center items-start">
          <h3 className="text-white font-montserrat text-xl">
            Explore the world with My Dream place
          </h3>
          <ActionButton title={"Download Now"} />
        </div>
      </div>

      <div className="w-full flex flex-col my-10 justify-center items-center">
        <h3 className="text-black my-0 font-montserrat text-xl">
          Explore the world with My Dream place
        </h3>
        <p className="text-sm text-[#2F80ED] mt-2 font-montserrat">
          Discover new places and experiences
        </p>
      </div>

      {/* footer */}
      <footer className="w-full mb-4 flex flex-row justify-between items-start ">
        <div className="flex flex-col justify-center">
          <h3 className="text-black font-montserrat my-0 text-xl">
            My Dream Place
          </h3>
          <p className="text-black font-montserrat text-md mt-3">
            Your next go to companion for travel
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-black font-montserrat my-0 text-xl">Company</h3>
          <p className="text-black font-montserrat text-md mt-3">About</p>
          <p className="text-black font-montserrat text-md mt-1">Jobs</p>
          <p className="text-black font-montserrat text-md mt-1">Newsroom</p>
          <p className="text-black font-montserrat text-md mt-1">Advertising</p>
          <p className="text-black font-montserrat text-md mt-1">Contact Us</p>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-black font-montserrat my-0 text-xl">Explore</h3>
          <p className="text-black font-montserrat text-md mt-3">Australia</p>
          <p className="text-black font-montserrat text-md mt-1">Germany</p>
          <p className="text-black font-montserrat text-md mt-1">Sweden</p>
          <p className="text-black font-montserrat text-md mt-1">Maldives</p>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-black font-montserrat my-0 text-xl">
            Terms and Policies
          </h3>
          <p className="text-black font-montserrat text-md mt-3">
            Privacy Policy
          </p>
          <p className="text-black font-montserrat text-md mt-1">Term of use</p>
          <p className="text-black font-montserrat text-md mt-1">
            Acessibility
          </p>
          <p className="text-black font-montserrat text-md mt-1">
            Reward Policy
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-black font-montserrat my-0 text-xl">Help</h3>
          <p className="text-black font-montserrat text-md mt-3">Support</p>
          <p className="text-black font-montserrat text-md mt-1">
            Cancel our bookings
          </p>
          <p className="text-black font-montserrat text-md mt-1">Use Coupon</p>
          <p className="text-black font-montserrat text-md mt-1">
            Refund Policy
          </p>
        </div>
      </footer>
    </>
  );
}
