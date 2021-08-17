import * as React from "react";
import * as Scrivito from "scrivito";
import getRoot from "../../utils/getRoot";

class LanguageSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.showLanguage = this.showLanguage.bind(this);
    this.state = {
      language: false,
    };
  }

  toggleLanguage() {
    this.setState({
      language: !this.state.language,
    });
  }

  showLanguage() {
    this.setState({
      language: true,
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
      <ul className="lang-switch" onMouseLeave={this.toggleLanguage}>
        <li onMouseEnter={this.showLanguage} className={`nav-item ${this.state.language ? "open" : ""}`}>
          <a
            className="nav-link"
            
            onClick={this.toggleLanguage}
          >
            {getRoot() === "de" ? "DE" : "EN"}
            <i className="fa fa-chevron-down" />
          </a>

          <ul
            
            className={`dropdown-menu ${
              this.state.language
                ? "show-language menu-toggle"
                : "hide-language"
            }`}
          >
            {homepages.map((homepage) => (
              
              <li className="nav-item" key={homepage.id()}>
                <Scrivito.LinkTag
                  onClick={this.toggleLanguage}
                  to={homepage}
                  className="nav-link"
                >
                  {homepage.id() === "c11fec265ccbf94d" ? "EN" : "DE"}
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
