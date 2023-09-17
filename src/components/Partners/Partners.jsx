import styles from './Partners.module.scss';
import Modal from '../UI/Modal/Modal';
import { useState } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';

const Partners = () => {
  const [showModal, setShowModal] = useState(false);

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        closed={modalCloseHandler}
      >
        <RegisterForm
          closeForm={modalCloseHandler}
        />
      </Modal>
      <div className={styles.partnersBlock}>
        <div className={styles.partnersBlock__inner}>
          <h3 className={styles.partnersBlock__inner__title}>
            Для Партнеров: Вместе к <br/>Заботе о Будущем
          </h3>
          <div className={styles.partnersBlock__list}>
            <div className={styles.partnersBlock__list__item}>
              <h6 className={styles.partnersBlock__list__item__title}>
                Для партнеров
              </h6>
              <p className={styles.partnersBlock__list__item__text}>
                Мы приглашаем организации и бизнесы стать частью нашей 
                инициативы, поддерживая заботу о будущих мамах и 
                младенцах.
              </p>
            </div>
            <div className={styles.partnersBlock__list__item}>
              <h6 className={styles.partnersBlock__list__item__title}>
                Реклама и акции
              </h6>
              <p className={styles.partnersBlock__list__item__text}>
                Продвигайте свои услуги и продукты, связанные с здоровьем 
                матерей и новорожденных, через наши каналы.
              </p>
            </div>
            <div className={styles.partnersBlock__list__item}>
              <h6 className={styles.partnersBlock__list__item__title}>
                Для блоггеров
              </h6>
              <p className={styles.partnersBlock__list__item__text}>
                Присоединяйтесь к нашей сообществу и делитесь своим 
                опытом и знаниями с будущими мамами.
              </p>
            </div>
          </div>
          <button type='button' className={styles.partnersBlock__btn} onClick={() => setShowModal(true)}>
            Оставить заявку
          </button>
        </div>
      </div>
    </>
  )
};

export default Partners;