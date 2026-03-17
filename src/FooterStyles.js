import styled from "styled-components";

export const Box = styled.div`
    padding: 5% 2.5%;
    // position: absolute;
    bottom: 0;
    width: 100%;

    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
    `;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
        @media (max-width: 768px) {
text-align: center;
    }
`;

export const Row = styled.div`
    display: flex;
    grid-gap: 20px;
    
    /* Responsive: Stack columns only on mobile */
    @media (max-width: 768px) {
        flex-direction: column;

    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
        margin-left: auto; 

  `;

export const FooterLink = styled.a`
    color: #4a304d;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #9d75a2;
        transition: 200ms ease-in-out;
    }
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #4a304d;
    margin-bottom: 40px;
    font-weight: bold;
  font-family: "Acorn-Bold", sans-serif;
`;