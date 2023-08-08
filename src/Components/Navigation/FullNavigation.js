import * as React from "react";
import Collapse from "reactstrap/lib/Collapse";
import CollapseToggle from "./CollapseToggle";
import Logo from "./Logo";
import Nav from "./Nav";
import LanguageSwitch from './LanguageSwitch';

class FullNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.closeExpanded = this.closeExpanded.bind(this);
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }

  closeExpanded() {
    this.setState({ expanded: false });
  }

  render() {
    let collapse = "";
    this.state.expanded ? collapse = "collapsed" : ""
    
    const {
      bootstrapNavbarClassNames,
      toggleSearch,
      scrolled,
      navigationStyle,
      showSearch,
    } = this.props;

    const classNames = [
      "navbar",
      "fixed-top",
      "navbar-default",
      "navbar-expand-lg",
      
      ...bootstrapNavbarClassNames,
      
    ];

    classNames.push(collapse)
    
    return (
      <nav className={classNames.join(" ")}>
        <div className="container">

          <div className={`navbar-header ${this.state.expanded ? "collapsed" : ""}`}>

            <CollapseToggle
              expanded={this.state.expanded}
              toggleExpanded={this.toggleExpanded}
            />
            <Logo scrolled={scrolled} navigationStyle={navigationStyle} />
            

          </div>

          <Collapse isOpen={this.state.expanded} navbar>
            <div className="navbar-collapse">

              <Nav
                closeExpanded={this.closeExpanded}
                expanded={this.state.expanded}
              />
              <ul className="nav navbar-nav sec-navbar-right">
              <li className="nav-item">
                <div id="login-dropdown" class="nav-link header_login btn btn_secondary">
                  <div class="dropbtn">Login</div>
                    <div class="dropdown-content">
                      <a href="https://icx.efrontcloud.com/@2116/BIDEQUITY/login.aspx">BID Fund II</a>
                      <a href="https://auth.fundrbird.com/">BID Fund III</a>
                    </div>
                </div>
              </li>

              <li className="only-show-on-mobile nav-item">
                <a href="https://icx.efrontcloud.com/@2116/BIDEQUITY/login.aspx">BID Login Fund III</a>
              </li>
              <li className="only-show-on-mobile nav-item">
                <a href="https://auth.fundrbird.com/">BID Login Fund III</a>
              </li>
                
            </ul>
            </div>
            
            <LanguageSwitch />
          </Collapse>
        </div>
      </nav>
    );
  }
}

export default FullNavigation;
