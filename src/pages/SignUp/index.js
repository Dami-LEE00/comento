/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { wrapper, formWrapper, inputWrapper, btnWrapper } from "../../styles/FormStyle";
import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // 여기서 데이터를 서버로 보내거나 다른 작업을 수행할 수 있습니다.
  };
  const handleSignIn = () => {
    navigate('/signin');
  }
  
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
            {...register('email', { required: 'Email is required' })}
          />
        </div>
        {errors.email && <p>{errors.email.message}</p>}
        <div css={inputWrapper}>
          <label htmlFor='name'>Name</label>
          <input
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div css={inputWrapper}>
          <label htmlFor='pw'>Password</label>
          <input
            type="password"
            id="pw"
          />
        </div>
        <div css={inputWrapper}>
          <label htmlFor='confirmPw'>Confirm Password</label>
          <input
            type="password"
            id="confirmPw"
          />
        </div>
        <div css={btnWrapper}>
          <button type="button">회원가입 완료</button>
          <button onClick={handleSignIn} type="submit">로그인</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;