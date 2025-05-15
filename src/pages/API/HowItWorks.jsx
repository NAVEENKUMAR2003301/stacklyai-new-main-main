import HowImage from "../../assets/api/how.png";

const HowItWorks = () => {
  return (
    <div style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
        <img src={HowImage} alt="How It Works" style={{ width: "150px" }} />
        <div>
          <p style={{ maxWidth: "500px", lineHeight: "1.5", color: "#333" }}>
            Bring AI-powered design into your app with just a few lines of code.
            The StacklyAI API makes it easy to process user-submitted images, apply
            custom styles, and deliver stunning visual results—all in real time.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
        <div style={{ textAlign: "center", width: "23%" }}>
          <div style={{
            border: "1px solid #eee",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            lineHeight: "50px",
            margin: "0 auto",
            fontWeight: "bold"
          }}>1</div>
          <p>Connect your API key to your backend or platform</p>
        </div>
        <div style={{ textAlign: "center", width: "23%" }}>
          <div style={{
            border: "1px solid #eee",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            lineHeight: "50px",
            margin: "0 auto",
            fontWeight: "bold"
          }}>2</div>
          <p>Send a user-uploaded image with a chosen style prompt</p>
        </div>
        <div style={{ textAlign: "center", width: "23%" }}>
          <div style={{
            border: "1px solid #eee",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            lineHeight: "50px",
            margin: "0 auto",
            fontWeight: "bold"
          }}>3</div>
          <p>Receive high-quality, styled images in seconds</p>
        </div>
        <div style={{ textAlign: "center", width: "23%" }}>
          <div style={{
            border: "1px solid #eee",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            lineHeight: "50px",
            margin: "0 auto",
            fontWeight: "bold"
          }}>4</div>
          <p>Display or store them seamlessly within your app</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
