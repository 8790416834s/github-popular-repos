import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, languageChange, activeId, isActive} = props
  const {id, language} = languageDetails

  const activeClassName = isActive ? `active-btn` : ''

  const onLanguageChange = () => {
    languageChange(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        onClick={onLanguageChange}
        value={activeId}
        className={`language-btn ${activeClassName}`}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
