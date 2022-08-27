import React from "react"
import { Link } from "react-router-dom"
import { config, Logo } from "./useStore"

export default function Layout ({children}: {children: any}) {
    return (
        <div className="root dark">
            <header>
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <menu>
                        <ul className="menu">
                            {config.menu.map((i:MenuItemObject, k:number) => (
                                <li key={k}>
                                    <Link to={i.url}>{i.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </menu>
                    <div className="agency">
                        <ul>
                            {config.agency.map((i:MenuItemObject, k:number) => (
                                <li key={k}>
                                    <Link to={i.url}>{i.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>
            { children }
            <footer>
                <div className="footer">
                    <div className="col-xl-4"></div>
                    <div className="col-xl-6">
                        <div className="col-md-3">
                            <h3>Explore</h3>
                            <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Explore</h3>
                            <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Explore</h3>
                            <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}