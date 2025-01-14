import { Link } from "react-router-dom";
import AboutHero from "../../components/About/Hero";
import AboutPersuasive from "../../components/About/Persuasive";
import AboutWhatWeDo from "../../components/About/WhatWeDo";
import AboutInvite from "../../components/About/AboutInvite";
import AboutComments from "../../components/About/AboutComments";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutPersuasive />
      <AboutWhatWeDo />
      <AboutInvite />
        <AboutComments />
    </main>
  );
}
