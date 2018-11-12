import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography';

const Header = styled.header`
  background: #3b4a66;
  color: #ffffff;
  padding: 1em;
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: ${rhythm(24)};
`;

const Title = styled.h1`
  margin: 0;
`;

export default ({ title }) => (
  <Header>
    <Wrapper>
      <Title>
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
          to={'/'}
        >
          {title}
        </Link>
      </Title>
    </Wrapper>
  </Header>
);
