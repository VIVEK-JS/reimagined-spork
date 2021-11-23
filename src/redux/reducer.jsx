const dataReducer = (state = { loadData: true }, { type, payload }) => {
  switch (type) {
    case "SAVE_DATA":
      var { name, login, avatar_url } = payload;
      return { name, login, avatar_url, loadData: false };
    case "CLEAR_DATA":
      return { loadData: true };
    default:
      return state;
  }
};

export default dataReducer;
