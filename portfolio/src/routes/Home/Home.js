import "./Home.css";

export default function Home() {

  const images = {
    headshot: require("../../Assets/ProfileEK.png"),
  };

  return (
    <main>
      <div className="intro">
        <img src={images.headshot} alt="Emma Headshot" className="introImage" />
        <p className="introText">
          “For the last 25 years I've been sourcing and collating venues for
          corporate events. I was ready for a new challenge and was fascinated
          when I liaised with developers on projects. Now I'm sourcing and
          collating code myself!”
        </p>
      </div>
    </main>
  );
}
