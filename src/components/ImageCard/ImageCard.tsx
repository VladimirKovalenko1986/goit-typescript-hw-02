import css from "./ImageCard.module.css";
import { ImageCardProps } from "../../types";

const ImageCard: React.FC<ImageCardProps> = ({
  data,
  onImageClick,
}: ImageCardProps) => {
  const {
    user: { location, name, portfolio_url },
    urls: { small, regular },
    alt_description,
    likes,
  } = data;

  const handleImageClick = () => {
    onImageClick({ small, regular }, { location, name, portfolio_url }, likes);
  };
  return (
    <div className={css.conteiner}>
      <img
        src={small}
        alt={alt_description}
        className={css.img}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default ImageCard;
