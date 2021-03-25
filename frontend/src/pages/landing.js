import React from "react";

import Hero from "../components/Sections/Hero";
import LandingLayout from "../components/Layouts/LandingLayout";
import logo from "../assets/images/connectio.png"

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="A complete all-in-one networking platform"
        subtitle="Connect.io allows students and professionals to seek career advice and guidance from one another, create genuine networking connections, and share resources for career development."
        image={logo}
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}