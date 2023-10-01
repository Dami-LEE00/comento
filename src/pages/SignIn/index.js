/** @jsxImportSource @emotion/react */

import { wrapper, formWrapper, inputWrapper, btnWrapper } from "../../styles/FormStyle";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  }

  return (
    <div css={wrapper}>
      <h1>SignIn</h1>
      <form css={formWrapper}>
        <div css={inputWrapper}>
          <label htmlFor='email'>Email</label>
          <input
            id="email"
            type="email"
          />
        </div>
        <div css={inputWrapper}>
          <label htmlFor='pw'>Password</label>
          <input
            id="pw"
            type="password"
          />
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

