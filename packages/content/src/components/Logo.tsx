import * as React from 'react';
import Link from 'gatsby-link';
import { styled } from '../styles';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  text-transform: uppercase;
`;

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <LogoWrapper>
          <img src={require('../assets/icons/howtographql.svg')} alt="" />
          <span>How to GraphQL</span>
        </LogoWrapper>
      </Link>
    </div>
  );
}
