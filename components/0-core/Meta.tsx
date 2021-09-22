import Head from 'next/head'

type Props = {
    title: string;
    description: string;
}

const Meta = ({ title = 'This is the default title', description = 'this is the default description' }: Props) => {
    return (
        <Head>
             <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={description}/>
            <link rel="icon" href="/logo.svg"/>
            <link rel="preload" href="/fonts/Poppins/Poppins-Light.ttf" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/Poppins/Poppins-Regular.ttf" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/Poppins/Poppins-Medium.ttf" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/Poppins/Poppins-SemiBold.ttf" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/Poppins/Poppins-Bold.ttf" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/Poppins/Poppins-ExtraBold.ttf" as="font" crossOrigin=""/>
        </Head>
    )
}

export default Meta
