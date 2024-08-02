import "./Article.css"

export function Article({ title, img, children }) {
  return (
    <div>
      <div id="article-parent">
        <div id="article-child-left">
          <h1>{ title }</h1>
          <br/>
          <img id="article-img" src={ img } alt={ title }/>
        </div>
        <div id="article-child-right">
          <h1> </h1> {/* intentionally empty, placeholder for spacing */}
          <br/>
          <p>{ children }</p>
        </div>
      </div>
      <hr/>
    </div>
  )
}