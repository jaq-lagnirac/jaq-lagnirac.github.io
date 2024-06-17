export function Landing({ icon, title }) {
  return (
    <div style={{
      position: "sticky",
      top: "4px",
      // height: "70vh",
      paddingLeft: "5em",
      display: "flex",
      alignItems: "center",
      backgroundColor:"var(--landing-color)",
      paddingBottom: "0.5em",
    }}>
      <div style={{fontSize: "4em", paddingTop: "0.4em"}}>{ icon }</div>
      <h1 style={{fontSize: "4.5em", color: "var(--nav-color)"}}>&nbsp;|&nbsp;</h1>
      <h1 style={{fontSize: "4em", paddingTop: "0.1em"}}>{ title }</h1>
    </div>
  )
}