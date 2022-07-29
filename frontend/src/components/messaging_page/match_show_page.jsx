import React from "react";

class MatchShowPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const profile = this.props.matchProfile
    return (
      <section>
        <div className="match-general">
          <h1 className="matchsp-name">{profile.name + " " + profile.pronouns}</h1>
          <div className="matchsp-img-container">
            <img src={profile.imageUrl} />
          </div>
          <div className="match-info">
            <div className="matchsp-desc-container">
              <label className="ttle">Description:
                <p>{profile.description}</p>
              </label>
            </div>

            <div className="matchsp-power-levels">
              <div className="matchsp">
                <p>Age</p>
                <p>{profile.age}</p>
              </div>
              <div className="matchsp">
                <p>C.L.</p>
                <p>{profile.commitmentLevel}</p>
              </div>
              <div className="matchsp">
                <p>H.L.</p>
                <p>{profile.happinessLevel}</p>
              </div>
            </div>

            <div className="matchsp-interests">
              <label className="ttle">Hobbies or Interests:
                <div className="interests-m">
                  {profile.interests.map(el => {
                    return (<p>{el}</p>)
                  })}
                </div>
              </label>
            </div>

            <div className="matchsp-personality">
              <label className="ttle">Three Words to describe your personality:
                <div className="traits">
                  {profile.personality.map(el => {
                    return (<p>{el}</p>)
                  })}
                </div>
              </label>
            </div>

            <div className="matchsp-ll">
              <label className="ttle">Love Language:
                <p>{profile.loveLanguage}</p>
              </label>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default MatchShowPage