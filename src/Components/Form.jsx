import Style from "./FormStyle.module.css";

export default function Form() {
  return (
    <div className={Style.container}>
      <form action="https://formspree.io/f/mzdkeqzl" method="POST" target="_blank">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          required={true}
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          required={true}
          name="lastname"
          placeholder="Your last name.."
        />

        <label htmlFor="email">Email</label>
        <input
          type="Email"
          required={true}
          id="email"
          name="email"
          placeholder="Your email.."
        />

        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          required={true}
          placeholder="Your message.."
          style={{ height: "200px" }}
        ></textarea>
        <div className={Style.submit}>
          {" "}
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
