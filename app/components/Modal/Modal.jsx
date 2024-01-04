import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';

const Modal = ({ modal, Work }) => {
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.modalSlider}>
        {Work?.work.map((project, index) => {
          const { src, color } = project;
          return (
            <div key={`modal_${index}`} style={{ backgroundColor: color }} className={styles.modal}>
              <Image
                src={`/images/${src}`}
                width={300}
                height={0}
                alt='image'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Modal