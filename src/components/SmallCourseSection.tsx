import CourseElement from "./CourseElement";

interface Props {
  prefix: string;
  courses: string[];
}

const SmallCourseSection = ({ prefix, courses }: Props) => {
  return (
    <section className="flex flex-col basis-1/3 mb-6">
      <h2 className="text-4xl border-b-2 border-[#e3e3e3] w-min self-center mb-2 2xl:text-5xl">
        {prefix}
      </h2>
      <div className="flex flex-col w-min self-center">
        {courses.map((course) => (
          <CourseElement course={course} key={course} />
        ))}
      </div>
    </section>
  );
};

export default SmallCourseSection;
