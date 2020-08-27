import React from "react";

const Favorites = () => {
  const favoriteThings = [
    {
      type: "Movie",
      name: "The Dark Knight",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
    },
    {
      type: "Band",
      name: "A Day to Remember",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/A_Day_to_Remember%2C_Common_Courtesy_2013_album.png/220px-A_Day_to_Remember%2C_Common_Courtesy_2013_album.png",
    },
    {
      type: "Food",
      name: "American",
      image:
        "https://dinnerthendessert.com/wp-content/uploads/2017/12/Perfect-Easy-Ribeye-Steak-4.jpg",
    },
    {
      type: "Game",
      name: "Mass Effect 2",
      image:
        "https://steamcdn-a.akamaihd.net/steam/apps/24980/capsule_616x353.jpg?t=1591856004",
    },
  ];
  const mapFavorites = favoriteThings.map((item) => {
    return (
      <li>
        <h3>{item.type}</h3>
        <h5> {item.name}</h5>
        <img src={item.image} alt="image" height="100px" width="auto"></img>
      </li>
    );
  });
  return (
    <div className="favorites">
      <h2 id="favoritesH2">My Favorites</h2>
      <ul>{mapFavorites}</ul>
    </div>
  );
};

export default Favorites;
