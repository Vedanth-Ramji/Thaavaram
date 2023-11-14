import "./registerPageStyles.css";

const RegisterPage = () => {
  return (
    <div>
      <div className="registerPage_about">
        <div className="introduction">
          <h1>
            Welcome to the First World Congress on Plant Antimicrobial
            Resistance (AMR)
            <p style={{ fontSize: "13px", padding: "10px 0px 0px 0px" }}>
              5th June, 2024 | 9am to 2pm | 43 Hawes St, Brookline, MA 02446,
              USA
            </p>
          </h1>
          <p>
            We at Thaavaram are delighted to invite you to the World Congress on
            Plant AMR, a pioneering event that brings together experts,
            researchers, and enthusiasts from around the globe to explore and
            address the critical challenges posed by antimicrobial resistance in
            the plant and environment sector.
          </p>
        </div>
        <div className="information">
          <h2>About the Congress</h2>
          <p>
            Antimicrobial resistance is a pressing issue affecting various
            aspects of agriculture, threatening food security, and challenging
            our ability to sustainably cultivate plants. The First World
            Congress on Plant AMR aims to provide a collaborative platform for
            scientists, policymakers, industry professionals, and academics to
            share knowledge, exchange ideas, and foster partnerships that will
            drive innovative solutions.
          </p>
        </div>
        <div className="organization">
          <h2>Date and Location</h2>
          <p>
            Thaavaram will be hosting the First World Congress on Plant AMR on{" "}
            <b>5th June 2024</b> at <b>43 Hawes St, Brookline, MA 02446, USA</b>
          </p>
          <div
            style={{
              position: "relative",
              width: "70%",
              margin: "auto",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1042.6069268830279!2d-71.10986953587903!3d42.34385133515683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379ed649036eb%3A0xe26d6ed14a8fbedd!2s43%20Hawes%20St%2C%20Brookline%2C%20MA%2002446%2C%20USA!5e0!3m2!1sen!2sin!4v1699880305339!5m2!1sen!2sin"
              style={{
                border: 0,
                height: "500px",
                width: "100%",
                left: 0,
                top: 0,
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        style={{marginTop: 10}}
        className="registerPage_registerSection"
      >
        <h2>Register</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfzbo9eJcLPsCID8f5h6EC9-N5VG-S7XN_GZg1zBxlq65Q9YA/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className="registerPage_form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default RegisterPage;
