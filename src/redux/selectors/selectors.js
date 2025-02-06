export const selectProducts = (state) => state.products.items;
export const selectProductStatus = (state) => state.products.status;
export const selectProductError = (state) => state.products.error;

export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;
