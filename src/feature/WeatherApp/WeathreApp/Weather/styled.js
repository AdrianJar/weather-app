import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
`;

export const WeatherWrapper = styled.div`
    padding: 30px;
    color: ${({theme})=>theme.color.weather.text};
    background: ${({ theme }) => theme.color.weather.background};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
`;

export const Temp = styled.h1`
    margin: 0;
`

export const City = styled.div`
`;

export const Icon = styled.div`
    margin-left: 20px;
`