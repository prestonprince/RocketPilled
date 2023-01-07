import styles from './cssModules/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>DEVELOPED BY PRESTON PRINCE</span>
            </div>
            <div className={styles.links}>
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
                <a href='https://www.linkedin.com/in/preston-prince-24419124a/' target='_blank' className={styles.link}>
                    <div className={styles.gitBox}>
                        <div className={styles.iconContainer}>
                            <img
                                src="https://cdn.discordapp.com/attachments/1045904047124783215/1061087384114036856/icons8-linkedin-circled-30.png"
                                alt="github_icon"
                            />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Footer;
