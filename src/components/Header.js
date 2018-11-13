import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

import Nav from './Nav';

import profilePic from './joe-small.jpg';

const Header = styled.header`
  background: #3B4A66;
  color: #ffffff;
  padding: ${rhythm(0.5)};
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  flex-grow: 1;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  margin: 0 ${rhythm(1)} 0 0;
`;

export default ({ title }) => (
  <Header>
    <ProfilePic src={profilePic} />
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
    <Nav />
  </Header>
);
