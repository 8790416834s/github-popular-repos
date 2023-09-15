import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    languagesList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getLanguagesDetails()
  }

  getLanguagesDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activeId} = this.state
    const githubReposApiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(githubReposApiUrl)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const semiData = {
        popularRepos: fetchedData.popular_repos,
      }
      const updatedData = semiData.popularRepos.map(each => ({
        avatarUrl: each.avatar_url,
        starsCount: each.stars_count,
        forksCount: each.forks_count,
        issuesCount: each.issues_count,
        id: each.id,
        name: each.name,
      }))
      this.setState({
        languagesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  languageChange = activeId => {
    this.setState({activeId}, this.getLanguagesDetails)
  }

  renderOfLanguageChange = () => {
    const {activeId} = this.state
    return (
      <>
        <ul className="list-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              languageDetails={each}
              activeId={activeId}
              languageChange={this.languageChange}
              isActive={each.id === activeId}
            />
          ))}
        </ul>
      </>
    )
  }

  renderOfLanguagesList = () => {
    const {languagesList} = this.state

    return (
      <>
        <ul className="list-item-container">
          {languagesList.map(each => (
            <RepositoryItem repositoryDetails={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  renderOfLoading = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderOfFailureImage = () => (
    <div className="failure-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
    </div>
  )

  renderOfSwitchStatement = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderOfLoading()
      case apiStatusConstants.success:
        return this.renderOfLanguagesList()
      case apiStatusConstants.failure:
        return this.renderOfFailureImage()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="heading">Popular</h1>
        <div>{this.renderOfLanguageChange()}</div>
        <div>{this.renderOfSwitchStatement()}</div>
      </div>
    )
  }
}
export default GithubPopularRepos
