import React from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/tutor/GuideExercise/Tutorial"),
  { ssr: false }
);

export default function TutorialPage() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
