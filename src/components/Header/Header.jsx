import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar
} from 'carbon-components-react';

const TutorialHeader = () => (
  <HeaderContainer
    render={() => (
      <Header aria-label="Photo Library">
        <HeaderName href="/">
          Photo Library
        </HeaderName>
        <HeaderGlobalBar />
      </Header>
    )}
  />
);

export default TutorialHeader;