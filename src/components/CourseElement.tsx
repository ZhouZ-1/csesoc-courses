interface Props {
  course: string;
}

const CourseElement = ({ course }: Props) => {
  return (
    <a
      className="text-xl basis-1/3 sm:basis-1/4 mt-1 text-center font-mono cursor-pointer 2xl:text-2xl"
      onClick={() =>
        navigator.clipboard.writeText(`/role give role:@${course}`)
      }
    >
      {course}
    </a>
  );
};

export default CourseElement;
