import { Transition } from "@headlessui/react";
import { useState } from "react";

interface Props {
  course: string;
}

const CourseElement = ({ course }: Props) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <button
        className="text-xl basis-1/3 sm:basis-1/4 mt-1 text-center font-mono cursor-pointer 2xl:text-2xl select-none"
        onClick={async () => {
          await navigator.clipboard?.writeText(`/role give role:@${course}`);
          setIsShowing(true);
          setTimeout(() => {
            setIsShowing(false);
          }, 5000);
        }}
      >
        {course}
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button className="fixed bottom-10 left-0 right-0 z-10">
          <a
            className="bg-[#36393f] rounded-md p-4 mx-auto text-center text-xs lg:text-lg w-fit select-none cursor-pointer font-discord"
            href="https://discord.com/channels/693779865916276746/860388285511630868"
            target="_blank"
            rel="noreferrer"
          >
            Copied to Clipboard! Click here to go to{" "}
            <span className="underline text-[#DEE0FC] bg-[#5865F2]/[0.3]">
              #course-chats
            </span>
          </a>
        </button>
      </Transition>
    </>
  );
};

export default CourseElement;
