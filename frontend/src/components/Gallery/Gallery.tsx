import * as S from "./Gallery.styles";
interface GalleryProps {
  img: string;
  alt: string;
}

const Gallery = ({ img, alt }: GalleryProps) => {
  return (
    <div>
      <S.Image src={img} alt={alt} />
    </div>
  );
};

export default Gallery;
