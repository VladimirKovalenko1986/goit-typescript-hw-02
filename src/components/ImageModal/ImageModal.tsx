import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { useEffect } from "react";
import { ModalOpenProps } from "../../types";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const ImageModal: React.FC<ModalOpenProps> = ({
  isOpen,
  imageUrl,
  onClose,
  user,
  likes,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      border: "none",
    },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(css.bodyOverflow);
    } else {
      document.body.classList.remove(css.bodyOverflow);
    }

    return () => {
      document.body.classList.remove(css.bodyOverflow);
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      style={customStyles}
    >
      <div className={css.wrapper}>
        <img
          src={imageUrl ? imageUrl.regular : defaultImg}
          alt="Large Image"
          className={css.img}
        />
        <div className={css.conteiner}>
          {user && (
            <ul className={css.list}>
              {user.location ? (
                <li className={css.item}>
                  <b className={css.text}>User Location:</b>
                  <p className={css.text}>{user.location}</p>
                </li>
              ) : (
                <p className={css.textPoint}>No point</p>
              )}
              {user.name ? (
                <li className={css.item}>
                  <b className={css.text}>Author Name:</b>
                  <p className={css.text}>{user.name}</p>
                </li>
              ) : (
                <p className={css.textPoint}>No point</p>
              )}
              {user.portfolio_url ? (
                <li className={css.item}>
                  <b className={css.text}>Author Portfolio:</b>
                  <div>
                    <a href={user.portfolio_url} className={css.link}>
                      Link
                    </a>
                  </div>
                </li>
              ) : (
                <p className={css.textPoint}>No point</p>
              )}
            </ul>
          )}
          <ul className={css.list}>
            <li className={css.item}>
              <b className={css.text}>Likes:</b>
              <p className={css.text}>{likes}</p>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
