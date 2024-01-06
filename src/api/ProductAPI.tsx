import instance from './Request';

const getProducts = async (): Promise<APIResponse<PagingDTO<ProductDTO>>> => {
  try {
    const response = await instance.get('/Products/getProducts');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const getProduct = async (productId: number): Promise<APIResponse<ProductDTO>> => {
    try {
      const response = await instance.get(`/Products/getProduct?id=${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      throw error;
    }
  };

export {
  getProduct, getProducts
};
