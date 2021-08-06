import Link from 'next/link'

import { SignInButton } from "./SignInButton";

import Image from 'next/image'
import logo from '../../../public/images/logo.svg';
import styles from './styles.module.scss';



export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
            <Image src={logo} alt="Ignews" />    
                <nav>
                    <Link href='/'>
                    <a className={styles.active}>Home</a>
                    </Link>
                    <Link href='/posts' prefetch>
                    <a >Posts</a>
                    </Link>
                </nav>
                <SignInButton /> 
            </div>
        </header>
    );
}