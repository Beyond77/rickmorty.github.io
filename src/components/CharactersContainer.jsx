import Characters from "./Characters";

const CharactersContainer = ({ characters, handleClickCharacter }) => {
  return (
    <ul className="grid">
      {characters.length > 0 ? (
        characters.map((char) => (
          <Characters key={char.id} char={char} handleClickCharacter={handleClickCharacter} />
        ))
      ) : (
        <p>No characters found</p>
      )}
    </ul>
  );
};

export default CharactersContainer;
