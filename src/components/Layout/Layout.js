import React from 'react'
import styles from './layout.module.css'

const Layout = (props) => {
    return (
        <>
            <div className={styles.red}>Toolbar, sidedrawer, backdrop</div>
            <div className={styles.container}>
                {props.children}
            </div>
        </>
    );
}

export default Layout;