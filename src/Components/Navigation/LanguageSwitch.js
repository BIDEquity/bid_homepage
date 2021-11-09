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
      
          <ul
            
            
          >
            {homepages.map((item) => (
              
              <li className="nav-item" key={item.id()}>
                
                <Scrivito.LinkTag
                  
                  to={item}
                  className="nav-link"
                >
                  {item.id() === "c11fec265ccbf94d" ? "EN" : "DE"}
                </Scrivito.LinkTag>
              </li>
              
            ))}
          </ul>
        
    );
  }
}

export default Scrivito.connect(LanguageSwitch);
