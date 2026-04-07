import "./about.css";
const About = () => {
  return (
    <div className="flex flex-col justify-center gap-4 aboutContainer">
      {/* Header */}
      <div className="aboutHeader aboutBorder">
        <h1 className="text-3xl font-bold flex justify-center text-center">
          <span className="text-4xl">🧠</span> About DataVision
        </h1>
        <p>
          At <span className="font-bold text-(--color-dark)">DataVision</span>,
          we believe data should speak clearly and intelligently. Our platform
          transforms raw CSV files into meaningful insights using advanced AI
          models — empowering analysts, startups, and decision‑makers to uncover
          trends, visualize performance, and make smarter choices in seconds.
        </p>
      </div>

      {/* Mission */}
      <div className="aboutMission aboutBorder">
        <h3 className="font-bold text-cyan-400 text-2xl">🚀 Our Mission</h3>
        <p>
          To simplify data analysis through automation and design — bridging the
          gap between complex datasets and actionable intelligence.
        </p>
      </div>

      {/* What We Do */}
      <div className="whatWeDo aboutBorder">
        <h3 className="font-bold text-cyan-400 text-2xl">💡 What We Do</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <p>
              <span className="text-2xl" style={{ marginRight: "5px" }}>
                🤖
              </span>
              <span className="font-bold">AI‑Driven Insights:</span> Upload your
              data and let our algorithms reveal patterns and predictions.
            </p>
          </li>
          <li>
            <p>
              <span className="text-2xl" style={{ marginRight: "5px" }}>
                📊
              </span>
              <span className="font-bold">Interactive Dashboards:</span>{" "}
              Visualize metrics with dynamic charts and graphs.
            </p>
          </li>
          <li>
            <p>
              <span className="text-2xl" style={{ marginRight: "5px" }}>
                ⚙️
              </span>
              <span className="font-bold">Seamless Workflow:</span> Designed for
              speed, clarity, and collaboration.
            </p>
          </li>
        </ul>
      </div>

      {/* Vision */}
      <div className="ourVision">
        <h3 className="font-bold text-cyan-400 text-2xl">🌍 Our Vision</h3>
        <p>
          To make data analysis accessible, intuitive, and visually engaging for
          everyone — from individual creators to enterprise‑level teams.
        </p>
      </div>
    </div>
  );
};

export default About;
