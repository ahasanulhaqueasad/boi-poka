// Read List এর ডাটা আনা
const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList() || [];
  if (storedList.includes(id)) {
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

// Wish List এর ডাটা আনা
const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

// Wish List এ ডাটা সেভ করা
const addToStoredWishList = (id) => {
  const storedList = getStoredWishList() || [];
  if (storedList.includes(id)) {
    // Already exists, so do nothing or show an alert
    alert("Already added to wishlist!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    alert("Added to wishlist successfully!");
  }
};

// সবগুলোকে একসাথে এক্সপোর্ট করা
export {
  getStoredReadList,
  addToStoredReadList,
  getStoredWishList,
  addToStoredWishList,
};
