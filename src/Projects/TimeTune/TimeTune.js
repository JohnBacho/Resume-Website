import CSS from "../../assets/images/TechStackIcons/CSSIcon.png";
import HTML from "../../assets/images/TechStackIcons/Html_Icon.png";
import JS from "../../assets/images/TechStackIcons/JS_Icon.png";
import React from "../../assets/images/TechStackIcons/React_Icon.png";

export const HeroInfo = [
  {
    title: "Time Tune",
    timeline: "2026-2026",
  },
];

export const TechStackIcons = [
  { img: React, text: "React" },
  { img: HTML, text: "HTML5" },
  { img: CSS, text: "CSS" },
  { img: JS, text: "JavaScript" },
];

export const IframeInfo = {
  src: "https://trivia-6i8.pages.dev",
  title: "Final Website",
};

export const Overview = [
  {
    title: "Overview",
    body: "Time Tune is a media trivia web application built entirely in React that challenges users to guess the release year of movies, television shows, and music albums. The application pulls real-time media data from TheAudioDB, TVDB, and TMDB APIs to create a dynamic and replayable trivia experience.",
  },
];

export const Development = [
  {
    title: "Development Focus",
    body: "The project focused heavily on asynchronous data handling, state management, API integration, and responsive UI design. Time Tune also allowed me to improve performance optimization by preloading and caching media data to create smoother gameplay and faster transitions between questions.",
  },
];
