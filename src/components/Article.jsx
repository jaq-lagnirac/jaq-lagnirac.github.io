import "./Article.css"

export function Article({ title, img, children }) {
  return (
  <>
    <div id="article-parent">
      <div id="article-header-div">
        <h1>{ title }</h1>
      </div>
      <div id="article-img-div">
        <img id="img" src={ img } alt={ title }/>
      </div>
      <div id="article-text-div">
        <p>{ children }</p>
      </div>
    </div>
    <hr/>
  </>
  )
}