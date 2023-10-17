/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function QnaDetail() {
  const navigate= useNavigate();
  const { id } = useParams();
  const [qnaDetail, setQnaDetail] = useState({});
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchQnaDetail = async () => {
      try {
        const response = await axios.get(`https://vercel-express-pied-kappa.vercel.app/qna/${id}`);
        const { data } = response.data;
        setQnaDetail(data);
      } catch (error) {
        console.error('Error fetching Q&A detail:', error);
      }
    };

    fetchQnaDetail();
  }, [id]);

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleResponseSubmit = async () => {
    try {
      // Implement the update API call here to submit the response
      // You may use axios.post or a similar method
      // Don't forget to handle success and error cases
      // After a successful response, you can update the UI accordingly
    } catch (error) {
      console.error('Error submitting response:', error);
    }
  };

  return (
    <div css={wrapper}>
      <h1>Q&A Detail</h1>
      <div css={infoWrapper}>
        <div css={infoBox}>
          <span>번호</span>
          <p>정보</p>
        </div>
        <div css={infoBox}>
          <span>제목</span>
          <p>컴플레인 확인해주세요!</p>
        </div>
        <div css={infoBox}>
          <span>생성일</span>
          <p>2023.10.10.</p>
        </div>
      </div>
      <div css={detailWrapper}>
        <div css={detailContent}>
          <h4>상세 내용</h4>
          <div>
            현재 제품이 사용 불가능한 상태 ...
          </div>
        </div>
        <div css={detailAnswer}>
          <h4>답변 내용 작성</h4>
          <div>
            <textarea 
              value={response}
              onChange={handleResponseChange}
            />
          </div>
          <button onClick={handleResponseSubmit}>답변 작성 완료</button>
        </div>
      </div>
      <button 
        css={btnQnaList}
        onClick={() => navigate('/')}
      >
        목록으로 돌아가기
      </button>
    </div>
  )
}

export default QnaDetail;

const wrapper = css`
  width: 40%;
  position: relative;
`;

const infoWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .25rem;
  margin: 1.25rem 0;
`;

const infoBox = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    display: inline-block;
    width: 3.75rem;
  }
`;

const detailWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
`;

const detailContent = css`
  div {
    width: 100%;
    border: 1px solid #777;
    padding: .625rem;
    font-size: 0.875rem;
  }
`;

const detailAnswer = css`
  div {
    width: 100%;
    border: 1px solid #777;
    padding: .625rem;
    textarea {
      outline: none;
      border: none;
      min-width: 100%;
      max-width: 100%;
      font-size: .875rem;
    }
  }
  button {
    position: absolute;
    right: 0;
    bottom: -2.5rem;
    padding: .3125rem .625rem;
  }
`;

const btnQnaList = css`
    position: absolute;
    left: 0;
    bottom: -2.5rem;
    padding: .3125rem .625rem;
`;