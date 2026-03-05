'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(450, 450);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2.2, 4);
    const material = new THREE.PointsMaterial({
      color: 0x0C3C5C,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const sphere = new THREE.Points(geometry, material);
    scene.add(sphere);

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      sphere.rotation.y += 0.0015;

      const scale = 1 + Math.sin(time * 1.5) * 0.03;
      sphere.scale.setScalar(scale);

      const targetRotationX = mousePosition.current.y * 0.5;
      const targetRotationY = mousePosition.current.x * 0.5;

      sphere.rotation.x += (targetRotationX - sphere.rotation.x) * 0.05;
      sphere.rotation.z += (targetRotationY - sphere.rotation.z) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 cursor-pointer"
      title="Interactúa moviendo el mouse"
    />
  );
}