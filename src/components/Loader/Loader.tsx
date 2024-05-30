import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.conteiner}>
      <Audio
        height={80}
        width={80}
        color="red"
        ariaLabel="loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        wrapperClass={css.loaderWrapper}
      />
    </div>
  );
};

export default Loader;
