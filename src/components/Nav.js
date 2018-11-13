import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

const StyledLink = styled(Link)`
  color: #bac0c9;
  font-weight: bold;
  margin: ${rhythm(0.5)};
  transition: color 0.5s;

  &:hover {
    color: #FFFFFF;
  }
`;

export default () => (
  <nav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/about">About</StyledLink>
  </nav>
);
