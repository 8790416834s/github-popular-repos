import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    avatarUrl,
    issuesCount,
    forksCount,
    starsCount,
  } = repositoryDetails

  return (
    <li className="item-container">
      <div className="avatar-image-container">
        <img src={avatarUrl} alt={name} className="avatar-img" />
      </div>
      <h1 className="name">{name}</h1>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p className="stars">{starsCount} stars</p>
      </div>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p className="forks">{forksCount} forks</p>
      </div>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p className="issues">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
