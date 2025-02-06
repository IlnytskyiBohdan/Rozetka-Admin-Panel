const validationRules = {
  category: {
    required: "Category is required",
    pattern: {
      value: /^[a-zA-Zа-яА-ЯёЁ\s]+$/,
      message: "Only letters are allowed",
    },
  },
  name: {
    required: "Name is required",
    pattern: {
      value: /^[a-zA-Zа-яА-ЯёЁ0-9\s.,!?-]*$/,
      message: "Invalid characters in name",
    },
  },
  quantity: {
    required: "Quantity is required",
    pattern: {
      value: /^\d+$/,
      message: "Only numbers are allowed",
    },
  },
  price: {
    required: "Price is required",
    pattern: {
      value: /^\d+$/,
      message: "Only numbers are allowed",
    },
  },
  description: {
    pattern: {
      value: /^[a-zA-Zа-яА-ЯёЁ0-9\s.,!?-]*$/,
      message: "Invalid characters in description",
    },
  },
};

export default validationRules;
