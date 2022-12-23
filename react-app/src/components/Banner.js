import styles from "./cssModules/Banner.module.css"

const Banner = () => {
    return (
        <div className={styles.img_container}>
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frocketleague.media.zestyio.com%2Frl_screenshots_sept2017_78_1080.c6e1dc555a6eff57c623d9877706c9a5.jpg"
                alt='rlbanner'
            >
            </img>
        </div>
    )
}



export default Banner;
