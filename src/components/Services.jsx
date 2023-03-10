import React from "react";

const Services = () => {
  return (
    <>
      <section className="options section-margin">
        <svg
          width="642"
          height="233"
          viewBox="0 0 642 233"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow option-arrow"
        >
          <path
            d="M230.5 98.5L228.279 95.1731L228.26 95.1862L228.24 95.1995L230.5 98.5ZM435.5 104L431.522 104.419L435.5 104ZM306 219.5L303.749 222.806L306 219.5ZM282.5 143L279.074 140.936L279.074 140.936L282.5 143ZM642 116L629.503 71.5346L597.244 104.59L642 116ZM0.283992 3.4803C8.3097 23.6273 16.7889 46.7695 27.366 68.2073C37.9485 89.6562 50.8316 109.842 67.9419 124.075C85.1841 138.418 106.594 146.605 133.778 144.172C160.791 141.754 193.211 128.88 232.76 101.8L228.24 95.1995C189.289 121.87 158.188 133.955 133.065 136.203C108.114 138.437 88.7742 130.999 73.0581 117.925C57.2101 104.742 44.9265 85.7188 34.5403 64.6677C24.1486 43.6055 15.857 20.956 7.71601 0.519701L0.283992 3.4803ZM232.721 101.827C264.37 80.7001 312.248 55.8433 353.299 49.3636C373.823 46.1238 392.029 47.5761 405.645 55.7105C419.051 63.7192 428.815 78.7025 431.522 104.419L439.478 103.581C436.585 76.0975 425.882 58.4808 409.748 48.8427C393.825 39.3302 373.418 38.0887 352.051 41.4614C309.318 48.2067 260.297 73.7999 228.279 95.1731L232.721 101.827ZM431.522 104.419C434.963 137.106 430.408 161.335 421.533 179.045C412.674 196.724 399.369 208.192 384.775 215.165C370.132 222.162 354.16 224.64 340.141 224.201C325.998 223.757 314.382 220.368 308.251 216.194L303.749 222.806C311.618 228.164 324.94 231.728 339.89 232.197C354.965 232.67 372.243 230.019 388.225 222.383C404.256 214.723 418.951 202.054 428.685 182.629C438.404 163.236 443.037 137.394 439.478 103.581L431.522 104.419ZM308.251 216.194C296.975 208.516 287.05 197.723 282.146 185.402C277.306 173.243 277.266 159.437 285.926 145.064L279.074 140.936C269.045 157.579 269.005 174.023 274.713 188.36C280.355 202.535 291.525 214.484 303.749 222.806L308.251 216.194ZM285.926 145.064C297.12 126.487 321.854 105.433 357.247 89.0031C392.535 72.6213 438.086 61 490.5 61V53C436.914 53 390.215 64.8787 353.878 81.7469C317.646 98.5667 291.38 120.513 279.074 140.936L285.926 145.064ZM490.5 61C541.888 61 587.413 77.779 614.135 94.2594L618.335 87.4502C590.459 70.2583 543.494 53 490.5 53V61Z"
            className="accent2"
          />
        </svg>
        <div className="container">
          <div className="options-header">
            <p className="text-small accent2">Options for everyone</p>
            <h2>Two Lesson Options</h2>
            <p>
              I live in Eden, Vermont. I love teaching piano to local students,
              but know that finding a good piano teacher where you live isn???t
              always possible. For several years now, I???ve taught students
              online???Zoom, Google Meet, Skype, Facetime, or whatever works best
              for you. I have students as far away as North Carolina and
              Georgia.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card options-card bkg2-bg">
            <span className="h4 accent2 bkg2-bg">In-Person</span>
            <p>
              I teach local students in my piano studio and am available for
              lessons Monday???Friday from 8AM to 5PM.
            </p>
          </div>
          <div className="card options-card bkg2-bg">
            <span className="h4 accent2 bkg2-bg">Online</span>
            <p>
              I???m happy to teach students online (ages 10+) and am available
              Monday???Friday from 8<small>AM</small> to 5<small>PM</small> EST.
            </p>
          </div>
        </div>
      </section>
      <section className="connect bkg2-bg" id="connect">
        <div className="connect-form bkg2 accent1-bg">
          <h3>Let???s Connect!</h3>
          <p>
            Interested in learning? Let???s connect! Send me your email, and I???ll
            reach out.
          </p>
          <form>
            <label for="email">
              <input type="email" id="email" autocomplete="email" />
            </label>
            <input type="submit" value="Contact Me" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Services;
