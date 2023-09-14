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
    <div className="item-container">
      <div className="avatar-image-container">
        <img src={avatarUrl} alt={name} className="avatar-img" />
      </div>
      <p className="name">{name}</p>
      <p className="stars">{starsCount} stars</p>
      <p className="forks">{forksCount} forks</p>
      <p className="issues">{issuesCount} open issues</p>
    </div>
  )
}
export default RepositoryItem
