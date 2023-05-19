import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    background-color: ${({theme}) => theme.color.wrapperBackground};
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
    margin: 10px;
`;

export const Icon = styled.div`
    margin-left: 20px;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;;
    align-items: center;
    max-width: 300px;
    width: 100%;
`;

export const Temp = styled.p`
    font-size: 26px;
    margin: 0;;
`

export const City = styled.p`
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0;
`;

