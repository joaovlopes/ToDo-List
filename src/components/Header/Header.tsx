import { Rocket } from '@phosphor-icons/react'

import styles from './Header.module.scss'

export function Header() {
    return (
        <header className={styles.header}>
            <p className={styles.logo}>
                <Rocket size={32} />
                to
                <span>do</span>
            </p>
        </header>
    );
}