import styled from 'styled-components';

// Colors
const text = {
  default: "var(--text-default)",
  unfocused: "var(--muted)",
  focused: "var(--primary-color)",
  valid: "var(--primary-color)",
  invalid: "var(--danger)"
};
const background = {
  unfocused: "var(--black-1)",
  focused: "var(--black-4)"
};

export const AlertLabel = styled.div`
	position: absolute;
	bottom: -20px;
	right: 0px;

	color: ${text.invalid};
	font-size: 0.75rem;
	font-weight: 400;

	transition: 0.2s;

	&:not(:empty) {
		animation: fade-in 0.1s forwards;

		@keyframes fade-in {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
`;

export const FloatingLabel = styled.div`
	position: absolute;
	left: 8px;

	font-weight: 400;
	transition: 0.15s;
	
`;

export const Input = styled.textarea`
	&:focus-visible {
		outline: none;
	}
	&:-webkit-autofill,
	&:-webkit-autofill:hover, 
	&:-webkit-autofill:focus, 
	&:-webkit-autofill:active {
		/* PAIN; AGONY EVEN; SUFFERING, IF YOU WILL */
		-webkit-box-shadow: 0 0 0px 1000px ${background.unfocused} inset;
		-webkit-text-fill-color: ${text.default};
	}

	width: 100%;
	height: 118px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;

	padding: 0 8px;
	border-radius: 4px;
	resize: none;
	border: none;
	border-top: ${props => props.focused ? `30px solid ${background.unfocused}` : "none"};
	border-bottom: ${props => props.focused ? `8px solid ${background.unfocused}` : "none"};

	color: ${text.default};
	background-color: transparent;

	transition: 0.2s, border-width 0s, border-color 0.3s;

	& + ${FloatingLabel} {
		color: ${props =>
    props.verified
      ? props.valid
        ? !props.empty
          ? text.valid
          : props.focused
            ? text.focused
            : text.unfocused
        : text.invalid
      : props.focused
        ? text.focused
        : text.unfocused};
		font-size: ${props => props.focused ? "0.75rem" : "1rem"};
		top: ${props => props.focused ? "4px" : "12px"};
		z-index: ${props => props.focused ? 3 : 1};
	}
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 120px;
	margin-bottom: 24px;
	z-index: 0;
	
	font-size: 1rem;
	border-radius: 4px;
	border: 1px solid var(--black-3);

	&::after {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;

		background-color: ${background.unfocused};
		border-radius: 4px;

		transition: 0.3s;
		content: '';
		opacity: 1;
		
	}
	&:hover {
		&::after {
			background-color: ${background.focused};
		}
		${Input} {
			border-color: ${background.focused};
		}
	}
`;
