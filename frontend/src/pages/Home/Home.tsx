import Gallery from "../../components/Gallery/Gallery";
import * as S from "./Home.styles";
import photo1 from "../../assets/photo1.webp";
import photo2 from "../../assets/photo2.webp";
import photo3 from "../../assets/photo3.webp";
import photo4 from "../../assets/photo4.webp";
import photo5 from "../../assets/photo5.webp";
import photo6 from "../../assets/photo6.webp";
import photo7 from "../../assets/photo7.webp";
import photo8 from "../../assets/photo8.webp";
import photo9 from "../../assets/photo9.webp";
import photo10 from "../../assets/photo10.webp";
import photo11 from "../../assets/photo11.webp";
import photo12 from "../../assets/photo12.webp";
import photo13 from "../../assets/photo13.webp";
import photo14 from "../../assets/photo14.webp";
import photo15 from "../../assets/photo15.webp";
import photo16 from "../../assets/photo16.webp";

const Home = () => {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
  ];

  const photosSorted = photos.sort(() => Math.random() - 0.5);

  return (
    <S.Container>
      <S.Content>
        <S.Title>Uma galeria de fotos da natureza</S.Title>
        <S.Subtitle>A natureza é bela</S.Subtitle>
        <S.Subtitle>encontre sua foto favorita em todo o mundo.</S.Subtitle>
      </S.Content>

      <S.Grid>
        {photosSorted.map((photo, index) => (
          <Gallery img={photo} alt={`Foto ${index + 1}`} key={index} />
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default Home;
