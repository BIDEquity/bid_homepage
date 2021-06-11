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

    return (
      <nav className={classNames.join(" ")}>
        <div className="container">

          <div className="navbar-header">

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
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <a className="nav-link header_login btn btn_secondary" href="#">Login</a>
              </li>
            </ul>
            <LanguageSwitch />
          </Collapse>
          
          
        </div>
      </nav>
    );
  }
}

export default FullNavigation;
