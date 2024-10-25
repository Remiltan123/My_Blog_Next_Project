import React from 'react'
import items from './data.js'
import { notFound } from 'next/navigation'
import styles from './page.module.css'
import Button from '@/component/Button/Button.jsx'
import Image from 'next/image.js'

const getData = (category) => {
   const data = items[category]

   if(data){
    return data
   }
   return notFound()
}

export const  Category = async({params}) => {

  const { category } = await params;
  const Data = getData(category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>

      {Data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );

}

export default Category 