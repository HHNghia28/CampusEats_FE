import instance from './Request';

const addOrder = async (order: OrderDTO): Promise<APIResponse<PaymentLinkDTO>> => {
  console.dir(order);
  try {
    const response = await instance.post(`/Orders/addOrder`, order, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error order`, error);
    throw error;
  }
};

const getOrderByOrderId = async (id: string): Promise<APIResponse<OrderDTO>> => {
  try {
    const response = await instance.get(`/Orders/getOrderByOrderID?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order with ID ${id}:`, error);
    throw error;
  }
};

const getOrderByCustomerId = async (id: string): Promise<APIResponse<OrderDTO[]>> => {
  try {
    const response = await instance.get(`/Orders/getOrders?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order with ID ${id}:`, error);
    throw error;
  }
};

export { addOrder, getOrderByOrderId, getOrderByCustomerId };
