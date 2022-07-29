import React from "react";
import NavContainer from './../nav/nav_container'

class MatchShowPage extends React.Component {
  constructor(props) {
    super(props)

    
  }

  render() {
    const profile = this.props.matchProfile
    return (
      <section>

        <div >
          <NavContainer/>
        </div>

        <div>

          <h1 className="matchsp-name">{profile.name + " " + profile.pronouns}</h1>
          <div className="matchsp-img-container">
            <img src={profile.imageUrl} />
          </div>

          <div className="matchsp-desc-container">
            <label>Description
              <p>{profile.description}</p>
            </label>
          </div>

          <div className="matchsp-power-levels">
            <div className="matchsp-age">
              <p>Age</p>
              <p>{profile.age}</p>
            </div>
            <div className="matchsp-commit">
              <p>C.L.</p>
              <p>{profile.commitmentLevel}</p>
            </div>
            <div className="matchsp-happiness">
              <p>H.L.</p>
              <p>{profile.happinessLevel}</p>
            </div>
          </div>

          <div className="matchsp-interests">
            <label>Hobbies or Interests
              <div>
                {profile.interests.map(el => {
                  return (<p>{el}</p>)
                })}
              </div>
            </label>
          </div>

          <div className="matchsp-personality">
            <label>Three Words to describe your personality
              <div>
                {profile.personality.map(el => {
                  return (<p>{el}</p>)
                })}
              </div>
            </label>
          </div>

          <div className="matchsp-ll">
            <label>Love Language
              <p>{profile.loveLanguage}</p>
            </label>
          </div>
        </div>
      </section>
    )
  }

}

export default MatchShowPage