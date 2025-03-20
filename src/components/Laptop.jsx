import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import laptopScene from "../assets/3d/laptop.glb";
import CanvasLoader from "./Loader";

const Laptop = ({ scale, position, rotationX, rotationY }) => {
  const laptopRef = useRef();
  const { scene, animations } = useGLTF(laptopScene);
  const { actions } = useAnimations(animations, laptopRef);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      console.log("Available Animations:", Object.keys(actions)); // Debugging
      const firstAnimation = Object.keys(actions)[0]; // Play the first animation
      actions[firstAnimation].play();
    } else {
      console.warn("No animations found in laptop.glb");
    }
  }, [actions]);

  return (
    <primitive
      ref={laptopRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={[
        rotationX, // 🔥 Slight downward tilt
        rotationY, // 🔥 Slight leftward tilt for 3/4th view
        0,
      ]}
    />
  );
};

const LaptopCanvas = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0.4); // Slight downward tilt
  const [rotationY, setRotationY] = useState(-0.5); // Slight leftward tilt
  const [scale, setScale] = useState([1.5, 1.5, 1.5]);
  const [position, setPosition] = useState([3, 1.7, -3.2]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainer.current.scrollTop;
      setRotationX(0 + scrollTop * -0.0005);
      setRotationY(0 + scrollTop * -0.0007);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      let newScale, newPosition;

      if (width < 640) {
        newScale = [0.8, 0.8, 0.8];
        newPosition = [0, .5, -2,5]; 
      } else if (width < 1024) {
        newScale = [1.1, 1.1, 1.1];
        newPosition = [.65, .5, -2.5];
      } else if (width < 1280) {
        newScale = [1.3, 1.3, 1.3];
        newPosition = [1.65, 1, -2.5];
      } else {
        newScale = [1.3, 1.3, 1.3];
        newPosition = [3, 1, -2.5];
      }

      setScale(newScale);
      setPosition(newPosition);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas className="w-full h-screen bg-transparent z-10" camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Laptop rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default LaptopCanvas;
