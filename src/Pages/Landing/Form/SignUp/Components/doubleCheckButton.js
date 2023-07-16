import CustomButton from 'Components/Buttons/button';
import styled from 'styled-components';

const DoubleCheckButton = ({error, name, onClick, watch}) => {
    return (
        <S.CheckBtn
			disabled={{error} || !watch(name)}
			onClick={onClick}
			shape={'submitBtn'}
		    size={'submitBtn'}
		>중복확인</S.CheckBtn>
    )
}

export default DoubleCheckButton;

const CheckBtn = styled(CustomButton)`
	min-height: 45px;
	width: 120px;
	background: none;
	font-family: 'Nanum_regular';
	margin-left: 10px;
	border: 2px solid ${({ theme }) => theme.color.primary[400]};
	&:hover {
		color: ${({ theme }) => theme.color.fontColor[100]};
		background-color: ${({ theme }) => theme.color.primary[400]};
	}
`;

const S = {
    CheckBtn
}