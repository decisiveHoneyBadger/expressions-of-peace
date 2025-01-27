import "./App.css";
import Footer from "./Footer";
import Outro from "./Outro";
import Questions from "./Questions";
import Intro from "./Intro";
import HumanRight from "./HumanRight";
import CurrentTransactions from "./CurrentTransactions";
import Toolkit from "./Toolkit";
import HybridTheory from "./HybridTheory";
import ExtendIt from "./ExtendIt";

const App = () => {
  return (
    <div className="layout">
      <header className="navbar">
        <div className="container columns">
          <div className="logo">
            <a href="https://expressionsofpeace.org">Expressions of Peace</a>
          </div>
        </div>
      </header>

      <section className="expressions centeed">
        <Intro />
        <HumanRight />

        <ExtendIt />
        <hr></hr>
        <h2
          style={{
            fontSize: "2rem",
            marginTop: "60px",
            marginBottom: "60px",
            lineHeight: "2.4rem",
          }}
        >
          Peace-oriented Diplomacy, <br></br> through<br></br>Individual
          Sovereignty
        </h2>

        <p
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            color: "black",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "black",
              paddingLeft: "4px",
              paddingRight: "4px",
            }}
          >
            Peacemaking is an experience, that is priceless; <br></br> more
            about being, than having.
            <br></br>
            <br></br>
            Here, we'll be sharing rights, along with resources.
            <i>
              <br></br>
              It's even easier; let's get used to that, the sooner the better.
            </i>
          </span>{" "}
        </p>

        <hr></hr>
        <div className="centered">
          <h1
            style={{
              textAlign: "center",
              marginTop: "2rem",
              fontSize: "2rem",
              marginBottom: "2rem",
            }}
          >
            ? you may wonder;
          </h1>
        </div>

        <div className="questions">
          <Questions />
        </div>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="">
          <Toolkit />
          <br></br>

          <hr></hr>
          <br></br>
          <CurrentTransactions />
        </div>

        <br></br>
        <br></br>
        <hr></hr>

        <div className="centered"></div>
        <br></br>

        <p
          style={{
            fontSize: "1.6rem",
            marginTop: "40px",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <HybridTheory />
          {/* Tokenomics design of the incentivisation is still a work in progress
            however, to start with, following tokens/coins imagined to be viable
            on variety of main networks as NFT and Escrow contracts deployed to:{" "}
            <strong> $Peace, $Green, $Wisdom, $Honesty and $Respect</strong>
            <br></br>
            <br></br>
            Below is the initial incentive design{" "}
            <a
              href="https://miro.com/app/board/uXjVOX94E5k=/?share_link_id=677735435690"
              target={"_blank"}
              rel="noreferrer"
              style={{ backgroundColor: "black", color: "white" }}
            >
              {" "}
              imagined,{" "}
            </a>
            and{" "}
            <a
              href="https://github.com/demo-verse/expressions-metadata-standard"
              target={"_blank"}
              rel="noreferrer"
              style={{ backgroundColor: "red", color: "white" }}
            >
              {" "}
              here{" "}
            </a>
            is the metadata standard for NFTs generated by expressions, that
            would accumulate acknowledgements, attestations and recognitions by
            the respective participants, in space-time. */}
          {/* <h3 style={{ lineHeight: "2.4rem", fontSize: "2.2rem" }}>
              Not a matter of legitimacy, but time.
            </h3>
            <br></br>
          We truly believe that Peace should not be brought up as a resolution
            of voting or people given environment or processes, where they
            hesitate on generosity, exclude one another, by the separation,
            biases inherited, since ages. */}
          {/* <ProcessReasoning /> */}
          <br></br>
          <br></br>

          <hr></hr>
          <br></br>
          <Outro />
          <img alt="YinYang symbol" src="YinYang.png" width={"12%"}></img>
        </p>
        <hr></hr>

        <br></br>
        <br></br>
        <div className="express-yourself">
          {/* Our Dance - Wax Tailor ft. Charlotte Savary */}

          <iframe
              width="80%"
              height="640"
            src="https://www.youtube.com/embed/cLnkQAeMbIM"
            title="Gorillaz - Dirty Harry"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="80%"
            height="640"
            src="https://www.youtube.com/embed/-QtqhPR7d0I"
            title="Wax Tailor - Our Dance"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
};

export default App;
