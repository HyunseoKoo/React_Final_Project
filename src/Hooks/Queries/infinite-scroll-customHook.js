import { useInfiniteQuery } from "@tanstack/react-query";

export const InfiniteScrollCustomHook = (key, api, param, ) => {
    const res = useInfiniteQuery(
        [key],
        ({ pageParam = 1}) => api({page: pageParam, param}),
        {
            getNextPageParam: (lastPage, allPages) => {
                const { curPage, endPage } = lastPage.data.pagination;
				if (curPage < endPage) {
					return lastPage.data.pagination.curPage + 1;
				} else return undefined;
            }
        }
    )

};


export const useInfiniteMyItem = category => {
	const res = useInfiniteQuery(
		['MY_ITEMS'],
		({ pageParam = 1 }) => MyPageApi.productList({ page: pageParam, category }),
		{
			getNextPageParam: (lastPage, allPages) => {
				console.log(lastPage.data); // {products: Array(3), pagination: {…}}
				console.log(allPages); // 
				const { curPage, endPage } = allPages[0].data.pagination;
				if (curPage < endPage) {
					return lastPage.data.pagination.curPage + 1;
				} else return undefined;
			},
		},
	);
	return res;
};


export const useInfiniteMyInterest = () => {
	const res = useInfiniteQuery(
		['myInterest'],
		({ pageParam = 1 }) => MyPageApi.likeProductList({ page: pageParam }),
		{
			getNextPageParam: (lastPage, allPages) => {
				console.log(lastPage.data); // {products: Array(3), pagination: {…}}
				console.log(allPages); // 
				const { totalPage } = lastPage.data.pagination;
				const nextPage = allPages.length + 1;
				return nextPage > totalPage ? undefined : nextPage;
			},
		},
	);
	return res;
};