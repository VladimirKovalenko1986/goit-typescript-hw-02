import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import { BsSearchHeart } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { SearchBareProps } from "../../types";

const SearchBar: React.FC<SearchBareProps> = ({ onSearch }) => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (!values.query.trim()) {
            toast.error("Please enter a search query");
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <div className={css.conteiner}>
          <Form>
            <div className={css.wrapper}>
              <button className={css.button} type="submit">
                <BsSearchHeart className={css.icon} />
              </button>
              <Field
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                className={css.input}
                name="query"
              />
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default SearchBar;
