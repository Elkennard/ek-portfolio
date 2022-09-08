import "./Home.css";

export default function Home() {
  const images = {
    headshot: require("../../Assets/ProfileEK.png"),
    largePaint: require("../../Assets/LargePaint.png"),
  };

  return (
    <main>
      <div className="intro">
        <img className="intro__image" src={images.headshot} alt="Emma Headshot" />
        <div className="intro__text">
          <h3 className="intro__text__header">Hi, I'm Emma ...</h3>
          <p className="intro__text__copy">
            For the last 25 years I've been sourcing and collating venues for
            corporate events. I was ready for a new challenge and was fascinated
            when I liaised with developers on projects. Now I'm sourcing and
            collating code myself!
          </p>
          <img
            className="largePaint"
            src={images.largePaint}
            alt="Paint Splash"
          />
        </div>
      </div>
    </main>
  );
}
