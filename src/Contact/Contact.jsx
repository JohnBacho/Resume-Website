import JobHero from "../Components/JobHero";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

import { HeroInfo } from "./ContactInfo.js";

export default function Contact() {
  return (
    <>
      <JobHero HeroInfo={HeroInfo} />
      <Form />
      <Footer />
    </>
  );
}
