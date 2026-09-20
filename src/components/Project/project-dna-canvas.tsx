"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import type { ProjectDTO } from "@/interfaces";

const accentColors = {
  cyan: "#a874ff",
  lime: "#ff5ed7",
  amber: "#ffb84d",
};

export function ProjectDNACanvas({
  projects,
  selectedId,
  onSelect,
}: {
  projects: ProjectDTO[];
  selectedId?: string;
  onSelect: (project: ProjectDTO) => void;
}) {
  return (
    <div className="h-[220px] overflow-hidden border border-border bg-background/80" aria-hidden>
      <Canvas camera={{ position: [0, 1.4, 8], fov: 48 }} dpr={[1, 1.5]} frameloop="always">
        <color attach="background" args={["#09060e"]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 5, 6]} intensity={1.2} color="#b890ff" />
        <ProjectHelix projects={projects} selectedId={selectedId} onSelect={onSelect} />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}

function ProjectHelix({
  projects,
  selectedId,
  onSelect,
}: {
  projects: ProjectDTO[];
  selectedId?: string;
  onSelect: (project: ProjectDTO) => void;
}) {
  const group = useRef<Group>(null);
  const nodes = useMemo(() => {
    const step = 0.72;
    const start = -((projects.length - 1) * step) / 2;

    return projects.map((project, index) => {
      const angle = index * 0.92;
      const y = start + index * step;
      const radius = 1.35;
      const a = [Math.cos(angle) * radius, y, Math.sin(angle) * radius] as [number, number, number];
      const b = [Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius] as [number, number, number];

      return { project, a, b };
    });
  }, [projects]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={group}>
      {nodes.map(({ project, a, b }) => {
        const active = project.id === selectedId;
        const color = accentColors[project.accent] ?? "#a874ff";

        return (
          <group key={project.id}>
            <Line points={[a, b]} color={active ? "#ffffff" : "#614b86"} lineWidth={active ? 2.5 : 1.4} transparent opacity={active ? 0.95 : 0.55} />
            <mesh position={a} onClick={() => onSelect(project)} onPointerOver={(event) => event.stopPropagation()}>
              <sphereGeometry args={[project.featured ? 0.15 : 0.11, 24, 24]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={active ? 1.8 : 0.8} roughness={0.35} />
            </mesh>
            <mesh position={b} onClick={() => onSelect(project)}>
              <sphereGeometry args={[project.featured ? 0.15 : 0.11, 24, 24]} />
              <meshStandardMaterial color={active ? "#ffffff" : color} emissive={color} emissiveIntensity={active ? 1.5 : 0.55} roughness={0.4} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

