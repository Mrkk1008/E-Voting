/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../style/main.css";

export function AdminNavBar() {
    return (
        <div>
            <ul className="nav">
                <li>
                    <img
                        src="https://i.ibb.co/9rTQj3m/Logo.jpgg"
                        height="60px"
                        alt="logo"
                    />
                </li>
                <li>
                    <a href="/admin">Home</a>
                </li>
                <li>
                    <a href="/result">Result</a>
                </li>
            </ul>
        </div>
    )
};
