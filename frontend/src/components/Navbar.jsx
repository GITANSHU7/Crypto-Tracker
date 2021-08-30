import React from 'react';
import styled from 'styled-components'

const NAV = styled.nav`
display: flex;
  height: 80px;
  width: 100%;
  background: #1b1b1b;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 50px;
  flex-wrap: wrap;
`;

const Logo = styled.div`
color: #fff;
  font-size: 30px;
  font-weight: 500;
`;

export default function Navbar() {
    return (
        <>
             <NAV>
         <Logo>
            Crypto Tracker
         </Logo>
         
         
         
       
         </NAV>
        </>
        
    )
}
