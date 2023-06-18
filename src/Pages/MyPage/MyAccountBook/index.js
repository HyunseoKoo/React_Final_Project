import { useEffect, useState } from 'react';

import AccountBookSelector from './Components/selector';
import AccountBookDetailInfo from './Components/detailInfo';
import DetailCard from './Components/detailCard';
import { useGetAccountBook } from 'Hooks/Queries/get-mypage-query';

import dayjs from 'dayjs';
import styled from 'styled-components';

const AccountBookPage = () => {
	const now = dayjs();

	const [category, setCategory] = useState('seller');
	const [date, setDate] = useState(now.format('YYYY-MM'));
	const [year, setYear] = useState(now.year());
	const [month, setMonth] = useState(now.format('MM'));

	const [day, setDay] = useState({
		year: now.year(),
		month: now.format('MM')
	})

	const firstDay = dayjs(`${day.year}-${day.month}-01`);
	const lastDay = firstDay.daysInMonth().toString();
	const start = `${day.year}-${day.month}-01`;
	const end = `${day.year}-${day.month}-${lastDay}`;

	const { data: getAccountBook } = useGetAccountBook({
		category,
		start,
		end,
		page: 1,
	});

	useEffect(() => {
		setDate(`${year}-${month}`);
	}, [year, month]);

	return (
		<S.Wrapper>
			{getAccountBook && <AccountBookDetailInfo
				date={date}
				setDate={setDate}
				data={getAccountBook.data}
				category={category}
				year={year}
				setYear={setYear}
				month={month}
				setMonth={setMonth}
				day={day}
				setDay={setDay}
			/>}
			<AccountBookSelector
				category={category}
				setCategory={setCategory}
				year={year}
				setYear={setYear}
				month={month}
				setMonth={setMonth}
			/>
			{getAccountBook && (
				<DetailCard
					data={getAccountBook.data}
					category={category}
					year={year}
					month={month}
				/>
			)}
		</S.Wrapper>
	);
};

export default AccountBookPage;

const Wrapper = styled.div`
	margin: 0 auto;
	width: 100%;
`;

const S = {
	Wrapper,
};
