import Head from "next/head";
import Image from "next/image";
import { Button, DatePicker } from 'antd';
import UserCard from "./cards/user-card";

export const siteTitle = 'todo app'

export default function Layout({ children, home }) {

    //will add contextApi

    const user = {
        name: "Kudret can",
        imgUrl: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=486"
    }

    return (
        <div className="layout">
            <Head>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="header">
                <div className="left">
                    <p>{user.name}'s Todo List</p>
                </div>
                <div className="right">
                    <UserCard userName={user.name} imgUrl={user.imgUrl} className={"navbar-color"}/>
                </div>
            </header>
            <main>{children}</main>

        </div>
    )
}