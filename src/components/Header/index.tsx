import React from "react";
import Image from 'next/image'
import styles from '../Header/styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image 
                src="/images/logo.svg"
                width="336"
                height="521" 
                alt="ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
        </header>
    );
}