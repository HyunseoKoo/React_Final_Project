import ItemCard from 'Components/Card/Desktop/Card';
import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const Preview = ({ categoryData, userLocation, userName }) => {
	let category = categoryData === 1 ? '중고 물품' : '무료나눔';
	let categoryText =
		categoryData === 1
			? `${userLocation} 인기 줍줍템!`
			: `${userName}님 주변의 무료나눔 물품들 이에요!`;

	const itemList = [1, 2, 3, 4, 5, 6, 7, 8];

	const [swiper, setSwiper] = useState(null);

	const handleNext = () => {
		swiper.slideNext();
	};

	const handlePrev = () => {
		swiper.slidePrev();
	};

	return (
		<S.Wrapper>
			<S.UpperSwiper>
				<S.CategoryBox>{category}</S.CategoryBox>
				<S.CategoryText>{categoryText}</S.CategoryText>
				<S.More> 더보기 &gt; </S.More>
			</S.UpperSwiper>
			<S.SwiperWrapper>
				<S.Btn onClick={handlePrev}> &lt;</S.Btn>
				<Swiper onSwiper={setSwiper} spaceBetween={0} slidesPerView={4}>
					{itemList.map(item => (
						<SwiperSlide>
							<ItemCard key={item} />
						</SwiperSlide>
					))}
				</Swiper>

				<S.Btn onClick={handleNext}> &gt;</S.Btn>
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default Preview;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1000px;
	min-width: 700px;
	margin: 0 auto;
	margin-top: 20px;
`;
const UpperSwiper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	margin-top: 50px;
	padding: 0 50px;
	position: relative;
`;
const CategoryBox = styled.div`
	width: 150px;
	text-align: center;
	padding: 10px;
	margin-left: 30px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	background-color: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	border-radius: 10px;
`;
const CategoryText = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	margin: 0 5%;
	width: 300px;
`;

const More = styled.div`
	width: 100px;
	font-size: ${({ theme }) => theme.fontSize.base};
	position: absolute;
	text-align: end;
	right: 10%;
	cursor: pointer;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
`;
const SwiperWrapper = styled.div`
	width: 100%;
	padding: 10px;
	border: 1px solid ${({ theme }) => theme.color.subBeigeGreen};
	margin-top: 30px;
	display: flex;
	align-items: center;
`;
const Btn = styled.button`
	border: none;
	font-size: ${({ theme }) => theme.fontSize.xl};
	background: none;
	width: 70px;
	:hover {
		color: ${({ theme }) => theme.color.primary};
	}
`;

const S = {
	Wrapper,
	UpperSwiper,
	CategoryBox,
	CategoryText,
	More,
	SwiperWrapper,
	Btn,
};
