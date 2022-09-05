import CourseElement from "./CourseElement";

interface Props {
  prefix: string;
  courses: string[];
}

const LargeCourseSection = ({ prefix, courses }: Props) => {
  return (
    <section className="flex flex-col basis-1/2 xl:basis-2/5">
      <h2 className="text-4xl border-b-2 border-[#e3e3e3] w-min self-center mb-2 2xl:text-5xl select-none">
        {prefix}
      </h2>
      <div className="flex flex-wrap">
        {courses.map((course) => (
          <CourseElement course={course} key={course} />
        ))}
      </div>
    </section>
  );
};

export default LargeCourseSection;
