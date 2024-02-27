import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "react-bootstrap/Container";
import SectionHeader from "../SectionHeader";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  const skillPercentages = [
    {
      progress: 65,
      color: "teal",
      label: "HTML & CSS",
    },
    {
      progress: 72,
      color: "blue",
      label: "JavaScript",
    },
    { progress: 52, color: "red", label: "Python" },
    { progress: 52, color: "red", label: "React.js" },
    { progress: 52, color: "red", label: "C# | .NET" },
    { progress: 52, color: "red", label: "SQL" },
    { progress: 52, color: "red", label: "NoSQL" },
    { progress: 52, color: "red", label: "Jest / Enzyme" },
  ];

  return (
    <div className="skills pb-5" id="skills">
      <Container className="skills-container py-5">
        <SectionHeader
          title="Skills"
          subTitle="You Can See My Skills Here..."
        />
        <Swiper
          slidesPerView={1}
          breakpoints={{
            // When window width is >= 576px (sm screen)
            576: {
              slidesPerView: 1, // Show 1 slide per view
            },
            // When window width is >= 768px (md screen)
            768: {
              slidesPerView: 2, // Show 2 slides per view
            },
            // When window width is >= 992px (lg screen)
            992: {
              slidesPerView: 3, // Show 3 slides per view
            },
          }}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {skillPercentages.map((percentage, index) => (
            <SwiperSlide key={index}>
              <SkillsItem percentage={percentage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};
export default Skills;
