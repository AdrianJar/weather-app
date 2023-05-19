import styled from "styled-components";

export const Wrapper = styled.div`
    margin: auto;
    max-width: 1360px;
    color: ${({theme})=>theme.color.footerText};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

