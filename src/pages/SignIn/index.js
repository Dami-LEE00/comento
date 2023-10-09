/** @jsxImportSource @emotion/react */

import { wrapper, formWrapper, inputWrapper, btnWrapper, errorWrapper } from "../../styles/FormStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function SignIn() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/signup');
  }

  const handleSignIn = async (data) => {
    try {
      const response = await axios.post('https://vercel-express-pied-kappa.vercel.app/users/signin', data);
      if (!response.data.isError) { 
        localStorage.setItem('token', response.data.token);
        console.log(response.data);
        alert('로그인이 완료되었습니다.');
        navigate('/');
      } else { 
        console.log(response.data);
        alert('다시 입력해주세요.');
      }
    } catch (error) { 
      alert('Error');
      console.error(error.response.data);
    }
  };

  return (
    <div css={wrapper}>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit(handleSignIn)} css={formWrapper}>
        <div css={inputWrapper}>
          <label htmlFor='email'>Email</label>
          <input 
            type="text" 
            placeholder="이메일" 
            id="email"
            {...register("email", {
              required: "이메일은 필수 항목입니다.",
            })}
          />
        </div>
        <div css={errorWrapper}>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div css={inputWrapper}>
          <label htmlFor='password'>Password</label>
          <input 
            type="password" 
            placeholder="비밀번호" 
            id="password"
            {...register("password", {
              required: "비밀번호는 필수 항목입니다.",
            })}
          />
        </div>
        <div css={errorWrapper}>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div css={btnWrapper}>
          <button>로그인</button>
          <button onClick={handleSignup}>회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;