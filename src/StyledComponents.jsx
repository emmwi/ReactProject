import styled from "styled-components";

export const ListItemLink = styled.li`
  font-size: 2rem;
  list-style: none;
  text-align: start;
  cursor: pointer;
  background: linear-gradient(
    97deg,
    rgba(224, 194, 52, 1) 6%,
    rgba(205, 137, 8, 1) 50%,
    rgba(240, 209, 113, 1) 94%
  );
  color: black;
  border: solid black 4px;
  border-radius: 1rem;
  padding: 0.5rem;

  @media only screen and (min-width: 501px) and (max-width: 900px) {
    font-size: 1rem;
    margin: auto;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const FormDiv = styled.div`
  width: 80vw !important;
  margin: 2rem auto auto;
  border: 2px solid black;
  padding: 2rem;
  border-radius: 1rem;

  @media (min-width: 500px) {
    width: 50vw !important;
  }
  @media (min-width: 700px) {
    width: 50vw !important;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputForm = styled.input`
  padding: 1rem;
  border-radius: 1rem;
  margin: 0.5rem;

  background: linear-gradient(
    97deg,
    rgba(224, 194, 52, 1) 6%,
    rgba(205, 137, 8, 1) 50%,
    rgba(240, 209, 113, 1) 94%
  );
  border-color: #666;
`;

export const InputButton = styled.input`
  padding: 1rem;
  border-radius: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  background: linear-gradient(
    97deg,
    rgba(224, 194, 52, 1) 6%,
    rgba(205, 137, 8, 1) 50%,
    rgba(240, 209, 113, 1) 94%
  );
  border-color: #666;

  @media (max-width: 500px) {
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0rem;
  }
`;

export const FooterDriv = styled.div`
  min-height: 5rem;
  display: flex;
  flex-direction: column-reverse;
`;

export const FooterPragraph = styled.p`
  margin: 2rem;
`;

export const ThemeBtn = styled.input`
  cursor: pointer;
  background: linear-gradient(
    97deg,
    rgba(224, 194, 52, 1) 6%,
    rgba(205, 137, 8, 1) 50%,
    rgba(240, 209, 113, 1) 94%
  );
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border-color: #666;
`;
