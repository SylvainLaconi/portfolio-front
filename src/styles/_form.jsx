import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  height: 1rem;
  background-color: beige;
`;

export const StyledInputSmall = styled(StyledInput)`
  width: 23%;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  margin-bottom: 1rem;
  height: 3rem;
  background-color: beige;
`;
