/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function QnaList() {
  const navigate = useNavigate();
  const [qnaData, setQnaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchQnaList = async (page) => {
      try {
        const response = await axios.get('https://vercel-express-pied-kappa.vercel.app/qna', {
          params: { page },
        });
        const { data } = response.data;
        setQnaData(data.contents);
        setTotalPages(Math.ceil(data.totalElements / 10));
      } catch (error) {
        console.error('Error fetching Q&A list:', error);
      }
    };

    fetchQnaList(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  

  return (
    <div css={wrapper}>
      <h1>Q&A List</h1>
      <table css={tableWrapper}>
        <tr>
          <th>NO</th>
          <th>제목</th>
          <th>생성일</th>
          <th>답변 완료 여부</th>
        </tr>
        {qnaData.map((qna) => (
          <tr
            key={qna.id}
            css={listWrapper}
            onClick={() => navigate(`/qna/${qna.id}`)}
          >
            <td>{qna.id}</td>
            <td>{qna.title}</td>
            <td>{qna.createdAt}</td>
            <td>{qna.isDone ? "답변 완료" : "미답변"}</td>
          </tr>
        ))}
      </table>
      <div css={btnWrapper}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default QnaList;

const wrapper = css`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
`;

const tableWrapper = css`
  width: 100%;
`;

const listWrapper = css`
  text-align: center;
  border: none;
  &:hover {
    color: #999;
    cursor: pointer;
  }
`;

const btnWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  button {
    padding: .3125rem .625rem;
    border: none;
    border-radius: .125rem;
    transition: all 0.15s;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
  }
  div {
    display: flex;
    gap: 0.625rem;
  }
`;
