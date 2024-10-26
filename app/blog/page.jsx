import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/post", {
            cache: "no-store"
        });

        if (!response.ok) { 
            const errorText = await response.text(); // Read the response as text
            throw new Error(`Network response was not ok: ${errorText}`); 
        }

        const data = await response.json(); 
        if (data.succues) {
            return data.Data; 
        }

    } catch (err) {
        console.error("Fetch error:", err); 
        throw err; 
    }
};

export const Blog = async () => {

    const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {data.map((item,index) => (
                <Link href={`/blog/${item._id}`} className={styles.container} key={index}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.img}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Blog