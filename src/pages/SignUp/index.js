/** @jsxImportSource @emotion/react */

import { wrapper, formWrapper, inputWrapper, btnWrapper, errorWrapper } from "../../styles/FormStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();


  const handleSignIn = () => {
    navigate('/signin');
  }

  const handleSignup = async (data) => {
    if(data.password === data.passwordConfirm) {
      try {
        const response = await axios.post('https://vercel-express-pied-kappa.vercel.app/users/signup', data);
        console.log(response.data);
        alert('회원가입이 완료되었습니다.');
        navigate('/signin');
      } catch (error) {
        alert('Error');
        console.error(error.response.data);
      }
    } else {
      alert('비밀번호가 같지 않습니다. 다시 입력하세요.');
    }
  };

  return (
    <div css={wrapper}>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(handleSignup)} css={formWrapper}>
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
          <label htmlFor='name'>Name</label>
          <input 
            type="text" 
            placeholder="이름" 
            id="name"
            {...register("name", {
              required: "이름은 필수 항목입니다.",
            })}
          />
        </div>
        <div css={errorWrapper}>
          {errors.name && <span>{errors.name.message}</span>}
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
        <div css={inputWrapper}>
          <label htmlFor='passwordConfirm'>Confirm Password</label>
          <input 
            type="password" 
            placeholder="비밀번호확인" 
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "비밀번호 확인은 필수 항목입니다.",
            })}
          />
        </div>
        <div css={errorWrapper}>
          {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
        </div>
        <div css={btnWrapper}>
          <button>회원가입 완료</button>
          <button onClick={handleSignIn} type="button">로그인</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;