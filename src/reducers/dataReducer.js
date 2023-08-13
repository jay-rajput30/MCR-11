export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_WATCHLIST":
      let updatedWatchList = [];
      const watchListItemFound = state.watchList.find(
        (watchListItem) => watchListItem.id === payload.id
      );
      if (watchListItemFound) {
        updatedWatchList = state.watchList.filter(
          (item) => item.id !== payload.id
        );
      } else {
        updatedWatchList = [...state.watchList, payload];
      }

      localStorage.setItem(
        "data",
        JSON.stringify({ ...state, watchList: updatedWatchList })
      );

      return { ...state, watchList: updatedWatchList };
    case "UPDATE_STARRED":
      let updatedStarred = [];
      const starredItemFound = state.starred.find(
        (starredItem) => starredItem.id === payload.id
      );
      if (starredItemFound) {
        console.log("watch list item not found");
        updatedStarred = state.starred.filter((item) => item.id !== payload.id);
      } else {
        console.log("watch list item  found");
        updatedStarred = [...state.starred, payload];
      }

      localStorage.setItem(
        "data",
        JSON.stringify({ ...state, starred: updatedStarred })
      );

      return { ...state, starred: updatedStarred };

    default:
      return state;
  }
};
