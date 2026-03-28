import styled from "./Related.module.css";

export default function Related({ projects, paddingTop = "70px" }) {
  return (
    <>
      <section
        className={styled.TextBlock}
        style={{ paddingTop: paddingTop }}
      >
        <h1>Related Projects:</h1>
      </section>

      <div className={styled.BoxContainer}>
        {projects.map((item, index) => (
          <div
            key={index}
            className={styled.BoxContent}
            onClick={() => (window.location.href = item.link)}
          >
            <h3>{item.title}</h3>
            <h1>{item.project}</h1>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </>
  );
}