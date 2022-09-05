import type { NextPage } from "next";
import Head from "next/head";
import LargeCourseSection from "../components/LargeCourseSection";
import SmallCourseSection from "../components/SmallCourseSection";
import courses from "../courses.json";

const parseCourses = (prefix: string, codes: number[]) => {
  /**
   * This function takes a prefix and an array of course codes and returns an array of course objects.
   */

  // Remove duplicates and sort
  // Source: https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
  codes = [...new Set(codes)].sort();

  return codes.map((code) => `${prefix}${code}`);
};

const Home: NextPage = () => {
  const compCourses = parseCourses("COMP", courses.COMP);
  const mathCourses = parseCourses("MATH", courses.MATH);
  const sengCourses = parseCourses("SENG", courses.SENG);
  const enggCourses = parseCourses("ENGG", courses.ENGG);
  const binfCourses = parseCourses("BINF", courses.BINF);
  const desnCourses = parseCourses("DESN", courses.DESN);

  return (
    <>
      <Head>
        <title>CSESoc Discord Courses</title>
        <meta
          name="description"
          content="CSESoc Discord Courses. Credits to Waleed for the design."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-b from-[#175bc0] to-[#268ecc] min-h-screen text-[#e3e3e3]">
        <header>
          <img
            src="/csesocwhiteblue.9bc2ecf4.png"
            alt="CSESoc Logo"
            width={160}
            className="mx-auto pt-4"
          />
          <h1 className="text-5xl font-bold text-center mt-1">COURSE LIST</h1>
        </header>

        <main className="container mx-auto lg:flex lg:flex-row lg:justify-between p-4 text-white 2xl:mt-6">
          <LargeCourseSection courses={compCourses} prefix="COMP" />
          <div className="basis-[45%] xl:basis-[55%] flex flex-wrap flex-row content-start mt-6 lg:mt-0">
            <SmallCourseSection courses={mathCourses} prefix="MATH" />
            <SmallCourseSection courses={sengCourses} prefix="SENG" />
            <SmallCourseSection courses={enggCourses} prefix="ENGG" />
            <SmallCourseSection courses={binfCourses} prefix="BINF" />
            <SmallCourseSection courses={desnCourses} prefix="DESN" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
