import React from "react";
import Content from "./Content";
import { Heading } from "@chakra-ui/react";
export default function Favorite(props) {
  const { fav, setFav, handleExampleClick } = props;
  return (
    <aside className="block col-1">
      {/* <h2>Favorite</h2> */}
      <Heading
        size="lg"
        fontSize="50px"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
      >
        Favorite
      </Heading>
      <div>
        {fav.length === 0 ? (
          <div>Empty</div>
        ) : (
          <Content
            vocabularies={fav}
            //handleStarClick={handleStarClick}
            handleExampleClick={handleExampleClick}
            fav={fav}
            setFav={setFav}
            initialColor={true}

            //要把這個傳content
          />
        )}
      </div>
    </aside>
  );
}
