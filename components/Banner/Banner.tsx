import Link from "next/link";
import "./banner.css";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="bannerWrapper flex flex-col justify-center items-center h-full gap-5 text-center">
        <h1 className="bannerHeading font-bold text-3xl">
          AI- Powered Data Analysis Made Easy
        </h1>
        <p className="font-medium text-gray-300">
          Upload your CSV file and let AI uncover actionable insights in
          seconds.
        </p>
        <button className="bannerButton">
          <Link href="/dashboard"> Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
