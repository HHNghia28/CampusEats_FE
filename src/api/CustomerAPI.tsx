import instance from './Request';

const addCustomer = async (customer: CustomerRequest): Promise<APIResponse<CustomerDTO>> => {
  try {
    const response = await instance.post(`/Customers/addCustomer`, customer, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error customer`, error);
    throw error;
  }
};

export { addCustomer };
