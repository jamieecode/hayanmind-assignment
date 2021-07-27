import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border-radius: 20px;
  background-color: #f8f9fa;
  color: #212529;
  border: 0.5px solid #ced4da;
  margin: 14px auto;
  padding: 20px;
  &:first-child {
    margin-top: 33px;
  }
`;

export const Comment = styled.div`
  font-size: 18px;
  line-height: 21px;
  padding-bottom: 12px;
  & div {
    font-weight: 600;
  }
  & span {
    margin-left: 12px;
    font-weight: normal;
  }
`;

export const CommentBody = styled.div`
  font-size: 18px;
  line-height: 21px;
  & div {
    font-weight: 600;
  }
  & p {
    margin: 2px 0 0;
  }
`;
