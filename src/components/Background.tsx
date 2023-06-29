import styles from "@/app/page.module.css";
import Image from "next/image";



export const BackgroundPage = ({image}: any) => {
    return (
        <div>
            <div className={styles.bgWrap}>
                <Image
                    alt="Mountains"
                    src={image}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        opacity: "50%"
                    }}
                />
            </div>
        </div>
    );
}
