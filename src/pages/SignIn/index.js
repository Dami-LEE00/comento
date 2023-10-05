/** @jsxImportSource @emotion/react */

import { wrapper, formWrapper, inputWrapper, btnWrapper, errorWrapper } from "../../styles/FormStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm(); 

  const handleSignUp = () => {
    navigate('/signup');
  };
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://vercel-express-pied-kappa.vercel.app/users/signin', data); // API 호출
      console.log('로그인이 완료되었습니다.', response.data);
      alert('로그인이 완료되었습니다.');

      // 서버로부터 받은 토큰을 로컬 스토리지에 저장
      localStorage.setItem('token', response.data.token);

      // 로그인이 성공하면 메인 페이지로 리디렉션
      window.location.href = '/';
      navigate('/signup');
    } catch (error) {
      console.error('로그인에 실패하였습니다.', error);
      alert('로그인에 실패하였습니다.');
    }
  };

  return (
    <div css={wrapper}>
      <h1>SignIn</h1>
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
            {...register('email', { 
              required: '이메일은 필수 항목입니다.',
            })}
          />
        </div>
        <div css={errorWrapper}>
          
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
            {...register('pw', { 
              required: '비밀번호는 필수 항목입니다.',
            })}
          />
        </div>
        <div css={errorWrapper}>
          {errors.pw && <p>{errors.pw?.message}</p>}
        </div>
        <div css={btnWrapper}>
          <button onClick={handleSignUp} type="button">회원가입</button>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn;

