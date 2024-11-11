import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function SkillsParallax() {
  return (
    <div className="h-screen w-[100%] bg-white">
      <Parallax pages={8} style={{ display: "flex" }}>
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{
            justifySelf: "end",
            width: "100px",
            height: "90px",
            backgroundColor: "orange",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          style={{
            justifySelf: "start",
            width: "100px",
            height: "90px",
            backgroundColor: "cyan",
          }}
          sticky={{ start: 4, end: 5 }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default SkillsParallax;
