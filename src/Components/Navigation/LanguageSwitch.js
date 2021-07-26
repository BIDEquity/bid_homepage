import * as React from "react";
import * as Scrivito from "scrivito";
import getRoot from "../../utils/getRoot";

class LanguageSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.state = {
      language: false,
    };
  }

  toggleLanguage() {
    this.setState({
      language: !this.state.language,
    });
  }

  render() {
    const onAllSites = Scrivito.Obj.onAllSites();
    const homepages = onAllSites.where(
      "_objClass",
      "equals",
      "Homepage"
    ).toArray();
      
    return (
      <ul className="lang-switch">
        <li className={`nav-item ${this.state.language ? "open" : ""}`}>
          <a
            className="nav-link"
            onMouseEnter={this.toggleLanguage}
            onClick={this.toggleLanguage}
          >
            {getRoot() === "de" ? "DE" : "EN"}
            <i className="fa fa-chevron-down" />
          </a>

          <ul
            onMouseLeave={this.toggleLanguage}
            className={`dropdown-menu ${
              this.state.language
                ? "show-language menu-toggle"
                : "hide-language"
            }`}
          >
            {homepages.map((homepage) => (
              homepage.id() !== "c11fec265ccbf94d" &&
              <li className="nav-item" key={homepage.id()}>
                <Scrivito.LinkTag
                  onClick={this.toggleLanguage}
                  to={homepage}
                  className="nav-link"
                >
                  {homepage.id() === "73135f17d58607f8" ? "EN" : "DE"}
                </Scrivito.LinkTag>
              </li>
              
            ))}
          </ul>
        </li>
      </ul>
    );
  }
}

export default Scrivito.connect(LanguageSwitch);
