import Image from "next/image";
import React from "react";
// import ProfilePicture from "./ProfilePicture";
import { FaUmbrellaBeach, FaHome } from "react-icons/fa";

import Link from "next/link";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";
import ProjectCard from "@/components/tech/ProjectCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import BlogCard from "@/components/tech/BlogCard";
import { IoMdDownload } from "react-icons/io";
import { GrFormSchedule } from "react-icons/gr";
import Button from "@/components/base/Button";
import { INTERVIEW_CALL_SIXTY_MIN } from "@/utils/constant";
import ComingSoon from "@/components/base/CommingSoon";
import Head from "next/head";

function TechPage() {
  const technologies = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "ReactJs",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS",
      icon: "",
    },

    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Material UI",
      icon: "",
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux />,
    },
    {
      name: "RTK Query",
      icon: "",
    },
    {
      name: "NextJS",
      icon: "",
    },
    {
      name: "VueJS ",
      icon: <FaVuejs />,
    },

    {
      name: "Strapi",
      icon: "",
    },

    {
      name: "Payment Integration",
      icon: "",
    },
    {
      name: "Browser Extensions",
      icon: "",
    },
  ];

  return (
    <>
      <Head>
        <title>Developer : Ashutosh Anand Tiwari </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon_tech.ico" />
        <meta
          name="description"
          content="My name is Ashutosh Anand Tiwari.   With over 4+ years of experience
            as a software developer, I've specialized in creating web
            applications from scratch, mainly focusing on the front-end side.
            Throughout my career, I've collaborated with teams to deliver
            projects of varying scales, ranging from mid-sized to large-scale
            endeavors. I've had the opportunity to work with multiple startups,
            and currently, I'm employed at Codemonk."
        />
      </Head>

      <div className="md:mt-20 mt-2 w-full flex flex-col gap-6 relative">
        <div className="grid md:grid-cols-2  mx-auto grid-cols-1 m-auto justify-between  ">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold  "> Meet, </h1>
            <h1 className="text-5xl font-extrabold text-center text-orange-600 md:text-left font-serif mb-4 md:mb-0">
              Ashutosh the Developer
            </h1>
            {/* <div className="ml-auto  ">
            <span className="font-thin"> at Codemonk</span>
          </div> */}

            <p className="font-serif  text-justify text-lg mt-10 tracking-wider mb-4 hidden lg:grid">
              With over{" "}
              <HighLightedSpan>4+ years of experience</HighLightedSpan> as a
              software developer, I've specialized in creating web applications
              from scratch, mainly focusing on the front-end side. Throughout my
              career, I've collaborated with teams to deliver projects of
              varying scales, ranging from mid-sized to large-scale endeavors.
              I've had the opportunity to work with multiple startups, and
              currently, I'm employed at Codemonk.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center relative justify-center m-auto md:m-0">
            <Image
              src="/images/ashu_office.png"
              className="hover:shadow-lg  border-4 border-gray-600 rounded-lg ml-auto ease-in-out duration-100  cursor-pointer"
              width={"400"}
              height="400"
            />
            <Image
              className="absolute z-[-20] top-[-100px] left-[80px] opacity-30 hidden md:flex"
              src="/images/tech-illustration.png"
              width={"200"}
              height={"200"}
            />
          </div>

          <p className="font-serif text-justify text-lg mt-10 tracking-wider mb-4 lg:hidden grid">
            With over <HighLightedSpan>4+ years of experience</HighLightedSpan>{" "}
            as a software developer, I've specialized in creating web
            applications from scratch, mainly focusing on the front-end side.
            Throughout my career, I've collaborated with teams to deliver
            projects of varying scales, ranging from mid-sized to large-scale
            endeavors. I've had the opportunity to work with multiple startups,
            and currently, I'm employed at Codemonk. If you need assistance with
            writing or any web development work for your website, feel free to
            contact me.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap justify-center md:justify-start">
          <Link href="/tech/resume">
            <Button>
              <IoMdDownload /> View Resume
            </Button>
          </Link>
          <Button
            onClick={() => {
              window.open(INTERVIEW_CALL_SIXTY_MIN, "_blank");
            }}
          >
            <GrFormSchedule /> Schedule an Interview
          </Button>
        </div>

        {/* ------------------------------------------k */}
        <div className="text-left mt-10">
          <h2 className="text-2xl font-serif  font-extrabold ">
            <HighLightedSpan> </HighLightedSpan> &nbsp; I have worked with.
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-start  mt-1 w-full  ">
          {technologies?.map((item) => {
            return <TechChip text={item.name} icon={item.icon} />;
          })}
        </div>

        {/* ------------------------------------------ */}

        <div className="text-left mt-12 ">
          <div className="flex justify-between flex-wrap">
            <h2 className="text-2xl font-serif  font-extrabold ">
              <HighLightedSpan> </HighLightedSpan> &nbsp; Projects
            </h2>

            <div className="flex">
              {/* <Link href={"/tech/projects"} className="flex gap-2 items-center">
                {" "}
                view all projects{" "}
                <FaLongArrowAltRight className="text-xl hover:scale-105" />
              </Link> */}
            </div>
          </div>
          <p className="font-serif text-justify text-lg  tracking-wider  ">
            Here are some office and self built projects
          </p>
        </div>

        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {/* {[1, 2, 3].map((item) => {
          return <ProjectCard />;
        })} */}
          <ComingSoon />
        </div>

        {/* ------------------------------ */}

        <div className="text-left mt-12 ">
          <div className="flex justify-between flex-wrap">
            <h2 className="text-2xl font-serif  font-extrabold ">
              <HighLightedSpan> </HighLightedSpan> &nbsp; Recent tech blogs
            </h2>

            <div className="flex">
              {/* <Link href={"/tech/blogs"} className="flex gap-2 items-center">
                {" "}
                read all blogs{" "}
                <FaLongArrowAltRight className="text-xl hover:scale-105" />
              </Link> */}
            </div>
          </div>
          <p className="font-serif text-justify text-lg  tracking-wider  md:w-2/3 w-full">
            Before, I used to write blogs regularly, but recently, due to my
            involvement in major projects, I haven't had much time for writing.
            However, here are some blogs I've written recently. I hope you find
            them helpful, and if you learn something from them, don't forget to
            give them a like!
          </p>
        </div>

        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {/* {[1, 2, 3].map((item) => {
          return <BlogCard />;
        })} */}
          <ComingSoon />
        </div>

        <Image
          className="absolute z-[-20] top-[-10%] left-[-15%]"
          src="/images/tech-illustration.png"
          width={"200"}
          height={"200"}
        />
      </div>
    </>
  );
}

export default TechPage;

function HighLightedSpan({ children }) {
  return (
    <span className="text-white   italic text-2xl bg-gray-700 px-2">
      {children}
    </span>
  );
}

function TechChip({ icon, text }) {
  return (
    <div className="flex gap-2 border shadow-lg  cursor-pointer">
      <span className="bg-gray-300   flex items-center justify-center px-2 py-1">
        <div className="text-gray-600 hover:rotate-[360deg] hover:ease-in-out duration-100">
          {icon || <FaUmbrellaBeach />}
        </div>
      </span>
      <span className="px-2 py-1 font-mono">{text}</span>
    </div>
  );
}
