import * as React from "react";
import * as Scrivito from "scrivito";

import currentPageNavigationOptions from "./Navigation/currentPageNavigationOptions";
import FullNavigation from "./Navigation/FullNavigation";
import LandingPageNavigation from "./Navigation/LandingPageNavigation";
import NavigationSection from "./Navigation/NavigationSection";
import isVideoObj from "../utils/isVideoObj";
import urlFromBinary from "../utils/urlFromBinary";

function ActualNavigation({
  isLandingPage,
  bootstrapNavbarClassNames,
  toggleSearch,
  scrolled,
  navigationStyle,
  showSearch,
}) {
  if (isLandingPage) {
    return <LandingPageNavigation navigationStyle={navigationStyle} />;
  }

  return (
    <FullNavigation
      bootstrapNavbarClassNames={bootstrapNavbarClassNames}
      toggleSearch={toggleSearch}
      showSearch={showSearch}
      scrolled={scrolled}
      navigationStyle={navigationStyle}
    />
  );
}

function BackgroundVideo({ videoUrl }) {
  if (!videoUrl) {
    return null;
  }

  return (
    <video
      className="video-full-screen"
      src={videoUrl}
      playsInline
      autoPlay
      muted
      loop
    />
  );
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      showSearch: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    // see https://stackoverflow.com/q/28633221/881759 for discussion about pageYOffset
    const scrollTop = event.currentTarget.pageYOffset;
    const scrolledToBe = scrollTop !== 0;

    if (this.state.scrolled !== scrolledToBe) {
      // only set state, if needed. Otherwise a render will be triggered on _every_ scroll.
      this.setState({ scrolled: scrolledToBe });
    }
  }

  toggleSearch() {
    this.setState({ showSearch: !this.state.showSearch });
  }

  render() {
    const {
      navigationStyle,
      backgroundImage,
      heightClassName,
      useGradient,
      isLandingPage,
    } = currentPageNavigationOptions();

    const topSectionClassNames = ["navbar-fixed"];
    if (this.state.scrolled) {
      topSectionClassNames.push("scrolled");
    }

    if (navigationStyle === "transparentDark") {
      topSectionClassNames.push("bg-dark-image");
    } else {
      topSectionClassNames.push("bg-white", "nav-only");
    }

    const bootstrapNavbarClassNames = [""];
    if (this.state.showSearch) {
      bootstrapNavbarClassNames.push("show-search");
    }
    if (navigationStyle === "transparentDark") {
      bootstrapNavbarClassNames.push("navbar-transparent");
    }

    let videoUrl = "";
    if (isVideoObj(backgroundImage)) {
      videoUrl = urlFromBinary(backgroundImage);
    }
    
    const topSectionStyle = {};
    if (navigationStyle === "transparentDark") {
      if (backgroundImage) {
        if (useGradient) {
          topSectionStyle.background = [
            
            {
              image: "linear-gradient(rgba(3, 3, 3, 1) 0%, rgba(58, 58, 58, 1) 30%, rgba(255, 255, 255, 1) 100%)",
            },
            
          ];
          if (!isVideoObj(backgroundImage)) {
            topSectionStyle.background.push({
              image: backgroundImage,
              position: "bottom",
            });
          }
        } else {
          topSectionStyle.background = [
            {
              image: "linear-gradient(rgba(255,255,255, 0) 0%, rgba(255,255,255, 0) 30%, rgba(255, 255, 255, 0) 100%)",
            },
          ];
          if (!isVideoObj(backgroundImage)) {
            topSectionStyle.background.push({ image: backgroundImage });
          }
        }
      }
    }

    if (heightClassName) {
      topSectionClassNames.push(heightClassName);
    }

    return (
      <React.Fragment>
        <div className={`${heightClassName} ${useGradient ? "top_section" : "top_article"}`}>
          <BackgroundVideo videoUrl={videoUrl} />
          <ActualNavigation
            isLandingPage={isLandingPage}
            bootstrapNavbarClassNames={bootstrapNavbarClassNames}
            toggleSearch={this.toggleSearch}
            showSearch={this.state.showSearch}
            scrolled={this.state.scrolled}
            navigationStyle={navigationStyle}
          />
          <NavigationSection heightClassName={heightClassName} >
          
            </NavigationSection>
            <div className="top_home">
          <img
        src={urlFromBinary(backgroundImage)} 
        className="top_bg"
        />
        </div></div>
        <div id="mainContent" />
      </React.Fragment>
    );
  }
}

export default Scrivito.connect(Navigation);
