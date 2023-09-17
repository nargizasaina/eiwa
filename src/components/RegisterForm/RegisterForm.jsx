import Select from '@mui/material/Select';
import styles from './RegisterForm.module.scss'
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const sections = [
  'Опубликовать мероприятие',
  'Стать партнером',
  'Реклама и акции',
  'Для блогеров'
];

const RegisterForm = ({closeForm}) => {
  const [section, setSection] = useState('');

  useEffect(() => {
    setForm({
      name: '',
      organization: '',
      email: '',
      description: '',
      eventName: '',
      organizer: '',
      eventInfo: '',
      activity: '',
      ad: '',
      links: ''
    });
  }, []);

  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    description: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    closeForm();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h5 className={styles.form__title}>Оставить заявку</h5>
      <Grid container>
        <Grid item xs={12}>
          <p className={styles.form__label}>Выберите раздел</p>
          <Select
            value={section}
            name='section'
            onChange={(e) => setSection(e.target.value)}
            fullWidth
            size='small'
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {sections.map((sec, i) => (
              <MenuItem key={i} value={sec}>{sec}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <p className={styles.form__label}>ФИО</p>
          <TextField  
            variant="outlined" 
            onChange={handleChange}
            name='name'
            value={form.name}
            fullWidth
            inputProps={{ 'aria-label': 'Without label' }}
            placeholder='ФИО'
            size='small'
          />
        </Grid>
        <Grid item xs={12}>
          <p className={styles.form__label}>Почта</p>
          <TextField  
            variant="outlined" 
            name='email'
            onChange={handleChange}
            value={form.email}
            type='email'
            fullWidth
            inputProps={{ 'aria-label': 'Without label' }}
            placeholder='Почта'
            size='small'
          />
        </Grid>
        {section === 'Стать партнером' && 
          <>
            <Grid item xs={12}>
              <p className={styles.form__label}>Организация</p>
              <TextField  
                variant="outlined" 
                name='organization'
                onChange={handleChange}
                value={form.organization}
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder='Организация'
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <p className={styles.form__label}>Описание</p>
              <TextField  
                variant="outlined" 
                name='description'
                onChange={handleChange}
                value={form.description}
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder='Описание'
                size='small'
              />
            </Grid>
          </>
        }
        {section === 'Опубликовать мероприятие' && 
          <>
            <Grid item xs={12}>
              <p className={styles.form__label}>Название мероприятия</p>
              <TextField  
                variant="outlined" 
                name='eventName'
                onChange={handleChange}
                value={form.eventName}
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder='Название мероприятия'
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <p className={styles.form__label}>Коротко об организаторе</p>
              <TextField  
                variant="outlined" 
                name='organizer'
                onChange={handleChange}
                value={form.organizer}
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder='Коротко об организаторе'
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <p className={styles.form__label}>Краткая информация о мероприятии</p>
              <TextField  
                variant="outlined" 
                name='eventInfo'
                onChange={handleChange}
                value={form.eventInfo}
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder='Краткая информация о мероприятии'
                size='small'
              />
            </Grid>
          </>
        }
        {section === 'Реклама и акции' && 
          <>
            <Grid item xs={12}>
              <p className={styles.form__label}>Организация</p>
              <TextField  
                variant="outlined" 
                name='organization'
                onChange={handleChange}
                value={form.organization}
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder='Организация'
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <p className={styles.form__label}>Коротко о вашей деятельности</p>
              <TextField  
                variant="outlined" 
                name='activity'
                onChange={handleChange}
                value={form.activity}
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder='Коротко о вашей деятельности'
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <p className={styles.form__label}>Текст рекламы</p>
              <TextField  
                variant="outlined" 
                name='ad'
                onChange={handleChange}
                value={form.ad}
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder='Текст рекламы'
                size='small'
              />
            </Grid>
          </>
        }
        {section === 'Для блоггеров' && 
          <>
            <Grid item xs={12}>
              <p className={styles.form__label}>Ссылки на ваши страницы</p>
              <TextField  
                variant="outlined" 
                name='links'
                onChange={handleChange}
                value={form.links}
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder='Ссылки на ваши страницы'
                size='small'
              />
            </Grid>
          </>
        }
        <Grid item xs={12} m={2}>
          <button 
            type='submit' 
            className={styles.form__btn}>Оставить заявку</button>
        </Grid>
      </Grid>
    </form>
  )
};

export default RegisterForm;