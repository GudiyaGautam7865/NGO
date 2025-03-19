
import Styles from "./Recommended.module.css";

function Recommended() {
    const recommended = [
        {
            img: "https://codewithsadee.github.io/blogy/assets/images/recommended-1.jpg",
            title: "The trick to getting more done is to have the freedom to roam around",
        },
        {
            img: "https://codewithsadee.github.io/blogy/assets/images/recommended-2.jpg",
            title: "Every day, in every city and town across the country",
        },
        {
            img: "https://codewithsadee.github.io/blogy/assets/images/recommended-3.jpg",
            title: "I work best when my space is filled with inspiration",
        },
        {
            img: "https://codewithsadee.github.io/blogy/assets/images/recommended-4.jpg",
            title: "I have my own definition of minimalism",
        },
        {
            img: "https://codewithsadee.github.io/blogy/assets/images/recommended-5.jpg",
            title: "Change your look and your attitude",
        },
        {
            img: "https://codewithsadee.github.io/blogy/assets/images/recommended-6.jpg",
            title: "The difference is quality",
        },
    ];

    return (
        <>
            <div className={Styles.Container}>
                <div className={Styles.title}>
                    <strong>Recommended</strong>
                </div>

                <div className={Styles.container}>
                    {recommended.map((recommend, index) => (
                        <div className={Styles.recommendCard} key={index}>
                            <img src={recommend.img} alt={`Recommend ${index + 1}`} />
                            <h3>{recommend.title}</h3>
                        </div>
                    ))}
                </div>
                <div className={Styles.input}>
                    <div className={Styles.h4}>
                    Subscribe to <strong> new posts </strong>
                    </div>
                    <div className={Styles.text}>
                        <input type="email" name="email" placeholder="Your email address" />
                    </div>
                    <button className={Styles.button}>Subscribe</button>

                </div>
                <hr />
            </div>
        </>
    );
}

export default Recommended;
