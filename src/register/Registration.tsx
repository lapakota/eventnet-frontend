import React, { useState } from 'react';
import Logo from '../shared/Logo';
import './Registration.css';
import { Gapped } from '@skbkontur/react-ui';
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';
import GenderSelector from '../shared/GenderSelector';
import CustomSelectDate from '../shared/CustomSelectDate';

const Registration = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    const [mail, setMail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [acceptedPassword, setAcceptedPassword] = useState('');
    const [dateBirthday, setDateBirthday] = useState('');
    const [gender, setGender] = useState('Male');
    const registration = () => {
        console.log(1323);
    };

    return (
        <div className='registration'>
            <Logo className='logo_registration' width={200} height={200} />
            <Gapped gap={15} vertical className='form__registration' >
                <CustomInput label='Ваш адрес эл.почты' onChange={setMail} />
                <CustomInput label='Придумайте себе пароль' onChange={setPassword} />
                <CustomInput label='Подтвердите пароль' onChange={setAcceptedPassword} />
                <CustomInput label='Введите номер телефона' onChange={setPhoneNumber}/>
                <CustomInput label='Укажите  имя пользователя' onChange={setUserName}/>
                <CustomSelectDate label='Введите дату рождения' onChange={setDateBirthday}/>
                <GenderSelector label='Укажите свой пол' classNameDiv='gender_selector' onChange={setGender}/>
                <CustomButton onClick={registration} classNameDiv='label_button' className='registration_button'
                              label='Зарегистрироваться' />
            </Gapped>
        </div>
    );
};

export default Registration;