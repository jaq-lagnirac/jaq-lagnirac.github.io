import "./HomeCard.css"

export function HomeCard({ title, img, side, children }) {

  let flexDirection;
  let animation;
  if (side === "right"){
    flexDirection = "row-reverse";
    animation = "slide-in-right";
  }
  else { // side === "left"; default
    flexDirection = "row";
    animation = "slide-in-left";
  }
  
  return (
    <>
      <div className={ "home-card-box " + animation }>
        <div style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: flexDirection,
        }}>
          <img
            src={ img }
            style={{
              height:"40vh", 
              flexBasis: "10%",
              objectFit: "cover"
            }}
          />
          <div style={{
            marginLeft: "25px",
            marginRight: "25px",
            marginBottom: "30px",
            textAlign: side,
            overflowWrap: "break-word"
            }}>
            <h1>{ title }</h1>
            <p><br/>{ children }</p>
          </div>
        </div>
      </div>
    </>
  )
}