interface Theme {
    color: {
        background: string,
        primary: string,
        font: string,
        fontInverted: string,
        buttonBackgroundDefault: string,
        lightBackground: string
    },
    rebassBreakpoints: {
        main: number[]
    }
}


const theme : Theme = {
    color: {
        background: `hsla(0, 0%, 5%, 1)`,
        primary: `hsla(54, 100%, 55%, 1)`,
        font: `hsla(0, 0%, 5%, 1)`,
        fontInverted: `hsla(54, 100%, 55%, 1)`,
        buttonBackgroundDefault: `hsla(180, 9%, 32%, 1)`,
        lightBackground: `hsla(0, 0%, 95%, 1)`
    },
    rebassBreakpoints: {
        main: [1098]
    }
}

export default theme;