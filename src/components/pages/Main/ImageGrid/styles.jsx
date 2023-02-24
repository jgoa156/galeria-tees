import styled from "styled-components";

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;

  img {
    width: 100%;
    height: 110px;
  }
`;

export const SearchButton = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;

  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--black-3);
  border-radius: 50%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  i {
    color: var(--primary-color);
    font-size: 2.5rem;
  }
`;

export const GoBack = styled.button`
  margin-right: 10px;

  background: none;
  outline: none;
  border: none;

  i {
    color: var(--text-default) !important;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - (64px + 32px + 48px + 48px));
`;