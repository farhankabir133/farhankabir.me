import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useMediaQuery } from "../hooks/useMediaQuery";
import "./styles/PublicationShowcase.css";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
  life: number;
  maxLife: number;
}

const PublicationShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Use proper media query hook for responsive detection
  // Tablet breakpoint: don't render 3D on tablets and smaller
  const isMobile = useMediaQuery("(max-width: 1023px)");
  
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const cubesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || isMobile) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 8;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    // Create a group for the floating cubes
    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

    // Create floating cubes with gradient colors
    const colors = [
      0x22d3ee, // cyan
      0x06b6d4, // light cyan
      0x0891b2, // darker cyan
      0x1e40af, // blue
      0x7c3aed, // purple
    ];

    for (let i = 0; i < 12; i++) {
      const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
      const material = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        metalness: 0.7,
        roughness: 0.2,
        emissive: colors[i % colors.length],
        emissiveIntensity: 0.3,
      });

      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = (Math.random() - 0.5) * 16;
      cube.position.y = (Math.random() - 0.5) * 16;
      cube.position.z = (Math.random() - 0.5) * 10;
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      cube.castShadow = true;
      cube.receiveShadow = true;

      group.add(cube);
      cubesRef.current.push(cube);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x22d3ee, 2, 100);
    pointLight.position.set(10, 10, 10);
    pointLight.castShadow = true;
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x7c3aed, 1.5, 80);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Mouse move tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    renderer.domElement.addEventListener("mousemove", handleMouseMove);
    renderer.domElement.addEventListener("mouseenter", handleMouseEnter);
    renderer.domElement.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Rotate and move cubes
      group.children.forEach((cube, index) => {
        const mesh = cube as THREE.Mesh;
        mesh.rotation.x += 0.005 + Math.sin(Date.now() * 0.0005) * 0.002;
        mesh.rotation.y += 0.008 + Math.cos(Date.now() * 0.0007) * 0.002;

        // Sway based on mouse position
        if (isHovering) {
          mesh.position.x += (mousePos.x * 2 - 1) * 0.02;
          mesh.position.y += (mousePos.y * 2 - 1) * 0.02;
        }

        // Slight floating motion
        mesh.position.z += Math.sin(Date.now() * 0.001 + index) * 0.005;
      });

      // Update particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        particle.position.add(particle.velocity);
        particle.life -= 1;

        if (particle.life <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const newWidth = containerRef.current?.clientWidth || width;
      const newHeight = containerRef.current?.clientHeight || height;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousemove", handleMouseMove);
      renderer.domElement.removeEventListener("mouseenter", handleMouseEnter);
      renderer.domElement.removeEventListener("mouseleave", handleMouseLeave);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      cubesRef.current.forEach((cube) => {
        (cube.geometry as THREE.BufferGeometry).dispose();
        if (Array.isArray(cube.material)) {
          cube.material.forEach((mat) => mat.dispose());
        } else {
          (cube.material as THREE.Material).dispose();
        }
      });

      renderer.dispose();
    };
  }, [isHovering, mousePos]);

  return (
    <section className="publication-showcase" id="the-ink-home">
      <div className="showcase-container">
        <div className="showcase-content">
          <div className="showcase-canvas-wrapper" ref={containerRef}>
            {!isMobile && <canvas ref={canvasRef} className="showcase-canvas" />}
            <div className="showcase-overlay">
              <div className="showcase-text">
                <h2 className="showcase-title">The Ink Home</h2>
                <p className="showcase-subtitle">
                  A curated Medium publication exploring thoughtful design,
                  technical insights, and digital storytelling
                </p>
                <a
                  href="https://medium.com/the-ink-home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-button"
                  data-cursor="disable"
                >
                  <span>Explore Publication</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="showcase-stats">
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Articles</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Readers</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">Design & Tech</span>
                  <span className="stat-label">Topics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationShowcase;
