import { Icon } from "./../Icons";

const Collection = () => {
  return (
    <nav className="collection mt-6">
      <ul>
        <li className="collection-item">
          <span className="bg-white h-6 w-6 flex group-hover:text-black justify-center items-center">
            <Icon name={"plus"} size={12} />
          </span>
          Create Playlist
        </li>
        <li className="collection-item">
          <span className="bg-gradient-to-br to-indigo-200 from-indigo-700 h-6 w-6 flex justify-center items-center">
            <Icon name={"heart"} size={12} />
          </span>
          Liked Songs
        </li>
        <li className="collection-item">
          <span className="bg-[#006450] h-6 w-6 flex justify-center items-center rounded-md">
            <Icon name={"podcast"} size={12} />
          </span>
          Your Episodes
        </li>
      </ul>
    </nav>
  );
};

export default Collection;
