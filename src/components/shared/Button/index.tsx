import styled from "styled-components";

const Button = styled.button`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 12px 20px;

	color: var(--background);
	background-color: white;
	font-size: 1rem;
	font-weight: bold;
  text-transform: uppercase;

	line-height: 20px;
	
	border-radius: 5px;
	border: none;
	outline: none;

	transition: 0.3s;

  i {
    margin-right: 10px;

    font-size: 1.125rem;
  }

	&:hover {
		background-color: #CCC;
	}
`;

export const ButtonAlt = styled(Button)`
  background: none;
  color: var(--text-default);
  border: 1px solid var(--text-default);

  &:hover {
		background-color: var(--black-4);
	}
`;

export default Button;