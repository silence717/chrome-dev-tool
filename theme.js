import { themes } from 'mdx-deck'

export const theme =
    Object.assign(themes.future, {
        text: {
            caps: {
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
            },
            heading: {
                fontFamily: 'heading',
                fontWeight: 'heading',
                lineHeight: 'heading',
            },
        }
    })
