import instance from './Request';

const getAllMenu = async (): Promise<APIResponse<MenuDTO[]>> => {
  try {
    const response = await instance.get('/Menu/getAllMenu');
    return response.data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
};

const getMenuToday = async (): Promise<APIResponse<MenuDTO[]>> => {
  try {
    const response = await instance.get(`/Menu/getMenuToday`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching menu today`, error);
    throw error;
  }
};

const addMenu = async (menu : MenuDTO[]): Promise<APIResponse<MenuDTO[]>> => {
    try {
      const response = await instance.post(`/Menu/addMenu`,
      menu,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error create menu`, error);
      throw error;
    }
  };

export { getMenuToday, getAllMenu, addMenu };
