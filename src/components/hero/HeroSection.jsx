import imgSrc from "../../assets/hero.gif";
import Button from "react-bootstrap/Button";

const HeroSection = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const sectionId = "news";
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/new/slides/041.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="home"
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-between align-items-center container hero-content">
          <div className="text-white">
            <h6 className="mb-3">Welcome All In My Portfolio</h6>
            <h1 className="mb-3">
              <strong>
                Hi! I&apos;m John Doe, a passionate <br />
                <span className="typing-animation"></span>|
              </strong>
            </h1>
            <h6 className="mb-3 text-secondary">
              Hello Everyone, I have 8 years of Experience in Web Development.
            </h6>

            <Button
              className="btn-primary"
              variant="success"
              onClick={handleClick}
            >
              Let&apos;s Connect
            </Button>
          </div>
          <div className="img-container">
            <img className="jumping-image" src={imgSrc} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
