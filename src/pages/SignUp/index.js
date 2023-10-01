/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { wrapper, formWrapper, inputWrapper, btnWrapper } from "../../styles/FormStyle";

function SignUp() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  }
  return (
    <div css={wrapper}>
      <h1>SignUp</h1>
      <form css={formWrapper}>
        <div css={inputWrapper}>
          <label>Email</label>
          <input
            type="email"
          />
        </div>
        <div css={inputWrapper}>
          <label>Name</label>
          <input
            type="text"
          />
        </div>
        <div css={inputWrapper}>
          <label>Password</label>
          <input
            type="password"
          />
        </div>
        <div css={inputWrapper}>
          <label>Confirm Password</label>
          <input
            type="password"
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