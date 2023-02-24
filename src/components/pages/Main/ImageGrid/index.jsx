import React, { useState } from "react";

import { H2, H4 } from "@/components/shared/Titles";
import ModalCustom from "@/components/shared/ModalCustom";
import Soundwave from "./Soundwave";
import Spinner from "@/components/shared/Spinner";
import {
  Wrapper,
  Grid,
  GoBack,
  SearchButton,
  ModalContent,
  GridWrapper
} from "./styles";

export default function ImageGrid() {
  const images = [
    { url: "https://i.kym-cdn.com/photos/images/newsfeed/002/425/585/837", basket: true },
    { url: "https://img.itdg.com.br/tdg/images/recipes/000/000/324/323149/323149_original.jpg", basket: false },
    { url: "https://www.sabornamesa.com.br/media/k2/items/cache/9189082f4804c1ab16e77d2cfe8d09d4_XL.jpg", basket: false },
    { url: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-0.jpg", basket: false },
    { url: "https://cdn.panelinha.com.br/receita/1443495600000-Pizza-de-mucarela-caseira.jpg", basket: false },
    { url: "https://claudia.abril.com.br/wp-content/uploads/2020/07/pizza-pepperoni.jpg", basket: false },
    { url: "https://i.kym-cdn.com/photos/images/original/002/424/472/6d4.jpeg", basket: true },
    { url: "https://res.cloudinary.com/mrancho/cardapio/2016/06/pizza-portuguesa_min.jpg", basket: false },
    { url: "https://res.cloudinary.com/mrancho/cardapio/2018/09/a-moda-enhanced-hires.jpg", basket: false },
    { url: "https://www.veridiana.com.br/imagens/slider/banner-home_005.jpg", basket: false },
    { url: "https://i.kym-cdn.com/photos/images/original/002/424/478/038.jpeg", basket: true },
    { url: "https://swiftbr.vteximg.com.br/arquivos/ids/174178-768-768/pizza-artesanal-pepperoni-swift-420g-618296-1.jpg", basket: false },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [filterImages, setFilterImages] = useState(false);
  const [fetching, setFetching] = useState(false);

  async function search() {
    setFetching(true);
    setTimeout(() => {
      setFilterImages(true);
      setFetching(false);
    }, 1000);
  }

  return (
    <div>
      <H2 style={{ marginBottom: "25px" }}>
        {filterImages && <GoBack onClick={() => setFilterImages(false)}><i class="fas fa-arrow-left"></i></GoBack>}
        {filterImages ? '"Basquete"' : "Galeria Acessível"}
      </H2>

      <GridWrapper>
        {!fetching
          ? <Grid>
            {images.map((image) =>
              filterImages
                ? image.basket && <img src={image.url} />
                : <img src={image.url} />
            )}
          </Grid>
          : <Spinner size={"30px"} color={"var(--primary-color)"} />
        }
      </GridWrapper>



      <SearchButton onClick={() => setShowSearch(true)}>
        <i class="fas fa-microphone"></i>
      </SearchButton>

      <ModalCustom
        show={showSearch}
        close={() => setShowSearch(false)}
        size={"large"}>
        <H4 style={{ marginBottom: "25px" }}>Ouvindo...</H4>

        <ModalContent onClick={() => {
          search();
          setShowSearch(false);
        }}>
          <Soundwave />
        </ModalContent>
      </ModalCustom>
    </div>
  );
}