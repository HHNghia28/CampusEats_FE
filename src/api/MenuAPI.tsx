import instance from './Request';

const getTodayMenu = async (): Promise<APIResponse<PagingDTO<MenuDTO>>> => {
  try {
    const response = await instance.get('/Menu/getMenuToday');
    return response.data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
};
export { getTodayMenu };
