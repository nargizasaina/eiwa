import styles from './Phone.module.scss';

const Phone = () => {
  return (
    <div className={styles.phoneBlock}>
      <div className={styles.phoneBlock__textPart}>
        <h3 className={styles.phoneBlock__textPart__title}>
          Погрузитесь в Мир Заботы о Здоровье
        </h3>
        <p className={styles.phoneBlock__textPart__text}>
          Получите доступ к уникальному приложению которое поможет вам отслеживать 
          каждый этап вашей беременности и заботиться о здоровье вашего малыша.
        </p>
        <a href='#' className={styles.phoneBlock__textPart__link}>Скачать</a>
      </div>
    </div>
  )
};

export default Phone;