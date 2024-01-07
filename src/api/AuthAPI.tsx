import instance from './Request';

const loginAPI = async (login : LoginDTO): Promise<APIResponse<CustomerDTO>> => {
    try {
      const response = await instance.post(`/Auth/login`,
      login,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error login`, error);
      throw error;
    }
  };

export { loginAPI };
