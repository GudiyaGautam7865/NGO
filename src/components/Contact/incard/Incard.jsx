// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "./AirpodsAnimation.module.css";

// gsap.registerPlugin(ScrollTrigger);

// const AirpodsAnimation = () => {
//   const canvasRef = useRef(null);
//   const image = useRef(new Image());
//   const airpods = useRef({ frame: 0 });
//   const frameCount = 100; // Adjust for smoother animation

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     canvas.width = 1158;
//     canvas.height = 770;

//     image.current.src = "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg";

//     gsap.to(airpods.current, {
//       frame: frameCount - 1,
//       snap: "frame",
//       ease: "none",
//       scrollTrigger: {
//         scrub: 0.5,
//       },
//       onUpdate: render,
//     });

//     image.current.onload = render;

//     function render() {
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       const scale = 1 + airpods.current.frame * 0.005; // Simple zoom effect
//       const x = canvas.width / 2 - (canvas.width * scale) / 2;
//       const y = canvas.height / 2 - (canvas.height * scale) / 2;
//       context.drawImage(
//         image.current,
//         x,
//         y,
//         canvas.width * scale,
//         canvas.height * scale
//       );
//     }
//   }, []);

//   return <canvas ref={canvasRef} className={styles.canvas} />;
// };

// export default AirpodsAnimation;













import  { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from "./AirpodsAnimation.module.css";

const ThreeCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 }); // greenish blue

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function render(time) {
      time *= 0.001; // convert time to seconds

      cube.rotation.x = time;
      cube.rotation.y = time;

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default ThreeCanvas;
































































// import  { useState } from 'react';

// import styles from "./AirpodsAnimation.module.css";
// import Modal from "./Modal";

// const Header = ({ onOpenModal }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSwitched, setIsSwitched] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setIsSwitched(false);
//   };

//   const handleSwitchModal = () => {
//     setIsSwitched(!isSwitched);
//   };
//   return (
//     <>  
//     <div className={styles.header}>
//       <div className={styles.content}>
//         <div className={styles.logo}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="636" height="617" viewBox="0 0 636 617" fill="none">
//             {/* SVG Path */}
//           </svg>
//         </div>
//         <div className={styles.title}>
//           <h1>About me <span>modal</span></h1>
//           <p><span>Open</span> the modal to learn more about me</p>
//           <hr />
//           <div className={`${styles.btnArrow} ${styles.linearBg1}`} onClick={onOpenModal}>
//             About me
//             <svg width="24" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon}>
//               {/* SVG Path */}
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//       <div className={styles.app}>
//       <Header onOpenModal={handleOpenModal} />
//       {isModalOpen && <Modal onClose={handleCloseModal} isSwitched={isSwitched} onSwitch={handleSwitchModal} />}
//     </div>
//     </>
//   );
// };

// export default Header;