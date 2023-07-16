import { ColorRing } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Characters = ({ char, handleClickCharacter  }) => {

  const { isLoading } = useSelector(state => state.rickmorty)

  return (
    <li onClick={() => handleClickCharacter(char)}>
      {isLoading ? (
        <ColorRing
          visible={true}
          height="300"
          width="300"
          colors={["#97ce4c", "#97ce4c", "#97ce4c", "#97ce4c", "#97ce4c"]}
        />
      ) : (
        <div className="grid-items">
          <img className="grid-images" src={char.image} alt={char.name} />
          <p className="text-card">{char.name}</p>
        </div>
      )}
    </li>
  );
};

export default Characters;
