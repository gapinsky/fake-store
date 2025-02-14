export const sortProducts = (sortValue, data) => {
    console.log(sortValue);
    if (sortValue === "ascending") {
      const sort = data.sort((a, b) => a.price - b.price);
      console.log(sort);
    }
    if (sortValue === "descending") {
      const sort = data.sort((a, b) => b.price - a.price);
      console.log(sort);
    }

    if (sortValue === "alphabet") {
      const sort = data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      console.log(sort);
    }
  };
