/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { wrapper, formWrapper, inputWrapper, btnWrapper, errorWrapper } from "../../styles/FormStyle";
import { useForm } from "react-hook-form";
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm();

  const handleSignIn = () => {
    navigate('/signin');
  };
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://vercel-express-pied-kappa.vercel.app/users/signup', data); // API 호출
      console.log('회원가입이 완료되었습니다.', response.data);
      alert('회원가입이 완료되었습니다.');
      navigate('/signin');
    } catch (error) {
      console.error('회원가입에 실패하였습니다.', error);
    }
  };
  
  return (
    <div css={wrapper}>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)} css={formWrapper}>
        <div css={inputWrapper}>
          <label htmlFor='email'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={setEmail}
            {...register('email',{ 
              required: '이메일은 필수 항목입니다.' 
            })}
          />
        </div>
        <div css={errorWrapper}>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div css={inputWrapper}>
          <label htmlFor='name'>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름"
            value={name}
            onChange={setName}
            {...register('name',{ 
              required: '이메일은 필수 항목입니다.',
            })}
          />
        </div>
        <div css={inputWrapper}>
          <label htmlFor='pw'>Password</label>
          <input
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호"
            value={pw}
            onChange={setPw}
            {...register('pw',{ 
              required: '이메일은 필수 항목입니다.',
            })}
          />
        </div>
        <div css={inputWrapper}>
          <label htmlFor='confirmPw'>Confirm Password</label>
          <input
            type="password"
            id="confirmPw"
            name="confirmPw"
            placeholder="비밀번호 확인"
            value={confirmPw}
            onChange={setConfirmPw}
            {...register('confirmPw',{ 
              required: '이메일은 필수 항목입니다.',
            })}
          />
        </div>
        <div css={btnWrapper}>
          <button type="submit">회원가입 완료</button>
          <button onClick={handleSignIn} type="button">로그인</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;