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
              flexBasis: "25%",
              objectFit: "cover"
            }}
          />
          <div style={{
            marginBottom: "25px",
            textAlign: side
            }}>
            <h1>{ title }</h1>
            <p>{ children }</p>
          </div>
        </div>
      </div>
    </>
  )
}