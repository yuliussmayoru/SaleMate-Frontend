import { axiosInstance } from '@/src/api/axiosClient';
import { AxiosError } from 'axios';

export async function userRequest() {
    try {
        const userRequest = axiosInstance.get(`/user`);

        const [userResponse] = await Promise.all([userRequest]);

        const user = userResponse.data.data;

        return {user};
    } catch (error) {
        console.error('Error in viewProductRequest:', error);
        if (error instanceof AxiosError) {
            const { response } = error;
            console.error('AxiosError response:', response);
            throw new Error(response?.data?.error || 'An error occurred while fetching data');
        }
        throw new Error('Unexpected Error');
    }
}