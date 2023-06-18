import styled from 'styled-components';

const AccountBookSelector = props => {
	const { category, setCategory, year, setYear, month, setMonth, day, setDay } = props;

	return (
		<>
			<S.SelectorsZone>
				<S.LargeSelect
					name="action_type"
					id="action_type_select"
					value={category}
					onChange={({ target: { value } }) => setCategory(String(value))}
				>
					<option value="seller">판매</option>
					<option value="buyer">구매</option>
				</S.LargeSelect>
				<S.RightSideSelectors>
					<S.LargeSelect
						name="year"
						id="year_select"
						value={year}
						onChange={({ target: { value } }) => setYear(String(value))}
					>
						<option value="2023">2023 년</option>
						<option value="2024">2024 년</option>
						<option value="2025">2025 년</option>
					</S.LargeSelect>
					<S.LargeSelect
						name="month"
						id="month_select"
						value={month}
						onChange={({ target: { value } }) => setMonth(String(value))}
					>
						<option value="01">1 월</option>
						<option value="02">2 월</option>
						<option value="03">3 월</option>
						<option value="04">4 월</option>
						<option value="05">5 월</option>
						<option value="06">6 월</option>
						<option value="07">7 월</option>
						<option value="08">8 월</option>
						<option value="09">9 월</option>
						<option value="10">10 월</option>
						<option value="11">11 월</option>
						<option value="12">12 월</option>
					</S.LargeSelect>
				</S.RightSideSelectors>
			</S.SelectorsZone>
		</>
	);
};

export default AccountBookSelector;

const SelectorsZone = styled.div`
	width: 48%;
	display: flex;
	justify-content: space-between;
	margin: 50px auto 30px;

	@media screen and (max-width: 1000px) {
		width: 70%;
	}
	@media screen and (max-width: 600px) {
		width: 80%;
	}
`;

const RightSideSelectors = styled.div`
	display: flex;

	> select:nth-child(2) {
		margin-left: 10px;
	}
`;

const LargeSelect = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	width: 100px;
	height: 40px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	text-align: center;
	text-align-last: center;
	border: 2.5px solid #d9d9d9;
	border-radius: 0.5em;
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	cursor: pointer;

	:hover {
		border: solid 3px red;
	}

	@media ${({ theme }) => theme.device.laptop} {
		width: 15vw;
		font-size: ${({ theme }) => theme.fontSize.sm};
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 15vw;
		font-size: ${({ theme }) => theme.fontSize.sm};
	}
`;

const S = {
	SelectorsZone,
	RightSideSelectors,
	LargeSelect,
};
