import * as React from "react";
import * as Scrivito from "scrivito";
import getRoot from "../../utils/getRoot";

class LanguageSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLanguage = this.toggleLanguage.bind(this);
    
    this.state = {
      language: ["EN", "DE" ],
    };
  }

  toggleLanguage() {
   
    let arr = this.state.language;
    let lang = this.rotateLeft(arr);
    this.setState({
      language: lang,
    });
    
  }

  rotateLeft(arr){
    let first = arr.shift();
    arr.push(first);
    return arr;
}

  

  

  render() {
    const onAllSites = Scrivito.Obj.onAllSites();
    const homepages = onAllSites.where(
      "_objClass",
      "equals",
      "Homepage"
    ).toArray();
      
    return (
      
          <ul className="language-switcher">
            
              <li className="nav-item" >
                {console.log(homepages)}
                
                  <span className="nav-link">{this.state.language[0]}</span>
                <i className="fa fa-chevron-down" ></i>
              </li>
              
                
                <li className="nav-item" >
                <Scrivito.LinkTag
                
                  onClick={this.toggleLanguage}
                  to={this.state.language[0] === "EN" ? homepages[1] : homepages[0]}
                  className="nav-link"
                  
                >
                  {this.state.language[1]}
                </Scrivito.LinkTag>
              </li>
              
            
          </ul>
        
    );
  }
}

export default Scrivito.connect(LanguageSwitch);
