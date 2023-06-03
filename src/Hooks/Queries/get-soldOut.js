import { useMutation } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';

export const useSoldOutMutation = () => {
	return useMutation(data => ProductApi.soldOut(data.prod_idx, data.token));
};
