import {BsFillStarFill} from 'react-icons/bs'
import {PiGitForkDuotone} from 'react-icons/pi'
import {AiOutlineIssuesClose} from 'react-icons/ai'

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
        <BsFillStarFill className="icon" />
        <p className="stars">{starsCount} stars</p>
      </div>
      <div className="image-container">
        <PiGitForkDuotone className="icon" />
        <p className="forks">{forksCount} forks</p>
      </div>
      <div className="image-container">
        <AiOutlineIssuesClose className="icon" />
        <p className="issues">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
