import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen flex flex-col gap-y-4">
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default Home;

const FeatureSection = () => {
  const data = [
    {
      title: "Cultivate Originality",
      description:
        "Your imagination, our technology. Generate distinctive art with pre-trained AI models or train your own.",
    },
    {
      title: "Simplified Mastery",
      description:
        "Easy to grasp, rewarding to perfect. Be proficient in producing exquisite content quickly and efficiently.",
    },
    {
      title: "Turbocharge Innovation",
      description:
        "Fast-forward your ideation process. Conceptualise, iterate, and experiment at light speed.",
    },
  ];

  return (
    <div>
      <div className="flex gap-x-2">
        {data.map((item) => (
          <div
            key={item.title}
            className="w-full flex flex-col gap-y-2 items-center text-center"
          >
            <h2 className="text-2xl font-semibold gradient-text">
              {item.title}
            </h2>
            <p className="text-md w-[60%]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-screen flex items-center overflow-hidden">
      <div className="h-[70vh] flex items-center px-8 w-full overflow-hidden">
        <div className="w-[50%] flex flex-col gap-y-4">
          <h1 className="text-4xl font-semibold">
            Unleash your <span className="gradient-text"> Creativity</span> with
            the power of <span className="gradient-text">Leonardo Ai</span>
          </h1>
          <p className="text-md text-zinc-200">
            Create production-quality visual assets for your projects with
            unprecedented quality, speed, and style-consistency.
          </p>
          <Button title="Create an account" />
        </div>
        <div className="absolute top-0 -right-[200px] w-[700px] h-[700px] -z-10">
          <Image
            src={"/hero.webp"}
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
