import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className="skill-title name-span ">Contact Information</h1>
      <div className=" single-edication" id="contact-info">
        <div className="single-info">
          <div className="info-name">
            <p>
              <strong>Phone: </strong>{" "}
            </p>
          </div>

          <p className="info">+880-1521-541678</p>
        </div>
        <div className="single-info">
          <div className="info-name">
            <p>
              <strong>Email: </strong>
            </p>
          </div>
          <a href="mailto:kausar.ahmad.tasin01@gmail.com">
            <p target="_blank" className="info">
              {" "}
              kausar.ahmad.tasin01@gmail.com
            </p>
          </a>
        </div>
        <div className="single-info">
          {" "}
          <div className="info-name">
            <p>
              <strong>LinkedIn: </strong>{" "}
            </p>
          </div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kausar-ahmad-tasin/"
          >
            <p className="info"> kausar-ahmad-tasin</p>
          </a>
        </div>

        <div className="single-info">
          {" "}
          <div className="info-name">
            <p>
              <strong>GitHub: </strong>
            </p>
          </div>{" "}
          <a target="_blank" href="https://github.com/KausarAhmadTasin">
            <p className="info">KausarAhmadTasin</p>
          </a>
        </div>
        <div className="single-info">
          <div className="info-name">
            {" "}
            <p>
              <strong>Address: </strong>{" "}
            </p>
          </div>
          <p className="info">Bogura Sadar, Bogura-5800, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
