// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("applied-job", JSON.stringify(shoppingCart));
};

//get applied job from local storages
const getSavedApplication = () => {
  const getStoredApplication = localStorage.getItem("application-job");
  if (getStoredApplication) {
    return JSON.parse(getStoredApplication);
  }
  return [];
};

//save job Applications
const saveApplication = (id) => {
  const getAppliedJobs = getSavedApplication();
  const exist = getAppliedJobs.find((jobId) => jobId === id);
  if (!exist) {
    getAppliedJobs.push(id);
    localStorage.setItem("application-job", JSON.stringify(getAppliedJobs));
  }
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("applied-job", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("applied-job");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("applied-job");
};

export {
  getSavedApplication,
  saveApplication,
  addToDb,
  removeFromDb,
  getShoppingCart,
  deleteShoppingCart,
};
