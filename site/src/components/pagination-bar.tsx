import { Link } from "gatsby";
import React from "react";

interface PaginationBarProps {
  currentPage: number;
  numPages: number;
}

const createRightChevron = () => {
  return (
    <svg
      className="h-5 w-5 m-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const createLeftChevron = () => {
  return (
    <svg
      className="h-5 w-5 m-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const createPageButton = (pageTarget: number, chevron: JSX.Element) => {
  if (pageTarget === 0) {
    return <></>;
  } else {
    const linkTarget: string = pageTarget === 1 ? "/" : `/blog/${pageTarget}`;
    return (
      <Link to={linkTarget} className="ml-2">
        <div className="text-white bg-gray-700 hover:bg-gray-600 h-6 w-6 flex rounded-full">
          {chevron}
        </div>
      </Link>
    );
  }
};

const PaginationBar: React.FC<PaginationBarProps> = (props) => {
  const footerText = (
    <p className="text-sm font-medium text-gray-300">
      {"Page "}
      <span className="font-bold text-white">{props.currentPage}</span>
      {" of "}
      <span className="font-bold text-white">{props.numPages}</span>
    </p>
  );
  const prevButton = createPageButton(
    props.currentPage - 1,
    createLeftChevron()
  );
  const nextButton = createPageButton(
    props.currentPage < props.numPages ? props.currentPage + 1 : 0,
    createRightChevron()
  );

  const buttons = (
    <div className="flex">
      {prevButton}
      {nextButton}
    </div>
  );
  return (
    <div className="md:ml-auto md:mr-auto md:mt-3 p-4 pt-2 pb-2 mb-6 text-center bg-gray-800 text-white flex justify-between md:w-1/2 md:rounded-full">
      {footerText}
      {buttons}
    </div>
  );
};

export default PaginationBar;
