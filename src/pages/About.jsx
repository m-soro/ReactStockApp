export default function About() {
  return (
    <div
      className="About"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <hgroup
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Made with</h2>
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
          alt=""
          style={{ width: "100px" }}
        />
      </hgroup>
    </div>
  );
}
