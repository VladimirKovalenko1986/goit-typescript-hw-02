import css from "./LoadMoreBtn.module.css";
import { LodeMoreProps } from "../../types";

const LoadMoreBtn: React.FC<LodeMoreProps> = ({ text, onLoadMore }) => {
  const handleLoadMore = () => {
    onLoadMore();
  };

  return (
    <div className={css.container}>
      <button onClick={handleLoadMore} className={css.button}>
        {text}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
