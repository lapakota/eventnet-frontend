import './ResetPassword.scss'
import React, { useState } from 'react';
import { CustomInput } from "../shared/CustomInput";
import CustomButton from '../shared/CustomButton';
import { Gapped } from '@skbkontur/react-ui';

export const ResetPassword: React.FC = () => {
    const [isMailEntered, setIsMailEntered] = useState(false);
    const [mail, setMail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [codeConfirm,setCodeConfirm] = useState('')

    const sendCodeToMail = () => {
        setIsMailEntered(!isMailEntered)
    }
    return (
        <Gapped vertical gap={7} className='resetPassword'>
            {!isMailEntered && <>
                <CustomInput label='Введите адорес эл. почты' onChange={setMail} />
                <CustomButton classNameDiv='button__resetPassword' label='Отправить код' onClick={sendCodeToMail}/>
            </>}
            {isMailEntered
            && <>
                <p className="mail-send-label first"> На почту <a className='mail-send'>{mail}</a></p>
                <p className="mail-send-label second">отправлен код подтверждения</p>
                <CustomInput label='Введите код подтверждения' onChange={setCodeConfirm}/>
                <CustomInput type='password' label='Введите новый пароль' onChange={setNewPassword} />
                <CustomInput label='Подтвердите пароль'
                             type='password' onChange={setConfirmNewPassword} />
                <CustomButton classNameDiv='button__resetPassword' label='Подтвердить'/>
            </>}

        </Gapped>
    );
};