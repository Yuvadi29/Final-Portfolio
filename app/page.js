import Image from 'next/image'
import React from 'react'
import styles from './page.module.css';

const page = () => {
  return (
    <main className='relative flex h-[100vh] mb-[100vh] overflow-hidden'>
      <Image
        fill={true}
        src="/images/background.png"
        alt='bg-image'
        className='object-cover'
      />
      <div className="absolute top-[calc(100vh_-_350px)]">
        <div className="relative whitespace-nowrap">
          <div className={styles.slider}>
            <p className='relative m-0 text-white text-[230px] font-medium pr-[50px]'>Content Creator - </p>
            <p className='relative m-0 text-white text-[230px] font-medium pr-[50px]'>Content Creator - </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page