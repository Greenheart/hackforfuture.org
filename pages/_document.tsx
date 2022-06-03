import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-US" className="bg-gradient-fullpage">
                <Head />
                <body style={{ background: 'transparent' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
