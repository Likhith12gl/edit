import React, { useEffect, useState } from "react";
import Dev from "./Dev";
import { shuffleArray } from "../../utils";

const devsInfo = [
  {
    name: "Soorya U",
    description: "When I first started trading But with time and experience.",
    imageUrl: "assets/images/devs/soorya.png",
  },
  {
    name: "Saanvi M J",
    description: "When I first started trading But with time and experience.",
    imageUrl: "assets/images/devs/saanvi.jpg",
  },
  {
    name: "Likhith S V",
    description: "When I first started trading But with time and experience.",
    imageUrl: "assets/images/devs/likhith.jpg",
  },
  {
    name: "Hamsa C S",
    description: "When I first started trading But with time and experience.",
    imageUrl: "assets/images/devs/hamsa.jpg",
  },
];

const Team = () => {
  const [devs, setDevs] = useState(devsInfo);

  useEffect(() => {
    const ti = setInterval(() => {
      const shuffledDevs = shuffleArray([...devs]);
      setDevs(shuffledDevs);
    }, 1000 * 60 * 5); //5 min shuffle
    return () => clearInterval(ti);
  }, [devs]);

  return (
    <section className="team pb-120 pt-120 pt-xxl-0 a2-bg position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/vector.png"
          alt="vector"
          className="position-absolute jello d-none d-lg-flex top-0 pt-10 pt-xxl-0 "
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="heading__content text-center mb-10 mb-lg-15 ">
            <span className="heading p1-color fs-five mb-5">Team</span>
            <h3>Our Team</h3>
            <p className="mt-5 mt-xxl-6 mx-ch mx-auto">
            Innovative 'mad devs' pushing tech limits with creativity and camaraderie..
            </p>
          </div>
        </div>
        <div className="row gy-6">
          {devs.map((d, idx) => (
            <Dev
              name={d.name}
              description={d.description}
              imageUrl={d.imageUrl}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
