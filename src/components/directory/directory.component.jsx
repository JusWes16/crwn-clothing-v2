import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "pop",
    imageUrl:
      "https://i.pinimg.com/originals/67/84/e3/6784e30fb4efc4fcecc774c6d02880c8.jpg",
    route: "shop/pop",
  },
  {
    id: 2,
    title: "hip hop",
    imageUrl:
      "https://www.radioelvin.com/wp-content/uploads/2020/07/Hip-Hop.jpg",
    route: "shop/hip hop",
  },
  {
    id: 3,
    title: "classic rock",
    imageUrl: "https://wallpapercave.com/wp/JNA7Z4y.jpg",
    route: "shop/classic rock",
  },
  {
    id: 4,
    title: "jazz",
    imageUrl: "https://getwallpapers.com/wallpaper/full/a/0/b/203195.jpg",
    route: "shop/jazz",
  },
  {
    id: 5,
    title: "country",
    imageUrl:
      "https://rfdtv.images.worldnow.com/images/18756736_G.jpg?lastEditedDate=20190911185322",
    route: "shop/country",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
