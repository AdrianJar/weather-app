const colors = {
    white: "#FFFFFF",
    scienceBlue: "#0044CC",
    pattensBlue: "#D6E4FF",
    black: "#000000",
    desertStorm: "#F1F0EF",
    alto: "#D9D9D9",
    lightGradient: "linear-gradient(90deg, rgba(68,123,235,1) 0%, rgba(16,124,226,1) 23%, rgba(0,68,204,1) 79%, rgba(0,67,224,1) 100%);",
    darkGradient: "linear-gradient(90deg, rgba(44,54,80,1) 0%, rgba(28,45,61,1) 23%, rgba(26,35,56,1) 79%, rgba(5,16,45,1) 100%)",
}

const common = {
    breakpoints: {
        max: 1250,
        large: 992,
        mobileMax: 767,
        medium: 555,
        mobileMin: 470,
        small: 360,
    },
}

export const lightTheme = {
    ...common,
    color: {
        footerText: colors.black,
        background: colors.desertStorm,
        weather: {
            background: colors.lightGradient,
            text: colors.white,
        },
        wrapperBackground: colors.alto,
    }, 
}

export const darkTheme = {
    ...common,
    color: {
        footerText: colors.white,
        background: colors.desertStorm,
        weatherBackground: colors.darkGradient,
    }, 
}