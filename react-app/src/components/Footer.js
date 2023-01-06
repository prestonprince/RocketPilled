import styles from './cssModules/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>DEVELOPED BY PRESTON PRINCE</span>
            </div>
                <a href='https://github.com/prestonprince' target='_blank' className={styles.link}>
                    <div className={styles.gitBox}>
                        <div className={styles.iconContainer}>
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
                                alt="github_icon"
                            />
                        </div>
                        {/* <span>GITHUB</span> */}
                    </div>
                </a>
        </div>
    )
};

export default Footer;
