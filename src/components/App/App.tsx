import css from "./App.module.css";
import { useEffect, useState } from "react";
import { fetchArticles } from "../../api-articles";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { Article, ApiResponse } from "../../types";

const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isloading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<{
    small: string;
    regular: string;
  } | null>(null);
  const [currentLikes, setCurrentLikes] = useState<number>(0);
  const [currentUser, setCurrentUser] = useState<{
    location: string;
    name: string;
    portfolio_url: string;
  } | null>(null);

  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const handleSearch = async (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setArticles([]);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getArticles() {
      try {
        setError(false);
        setIsloading(true);
        const data: ApiResponse = await fetchArticles(query, page);
        setTotal(data.total);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsloading(false);
      }
    }
    getArticles();
  }, [page, query]);

  const openModal = (
    imageUrl: { small: string; regular: string },
    user: { location: string; name: string; portfolio_url: string },
    likes: number
  ) => {
    setCurrentImage(imageUrl);
    setCurrentLikes(likes);
    setCurrentUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className={css.conteiner}>
        <SearchBar onSearch={handleSearch} />
      </div>
      {error && <ErrorMessage />}
      {articles.length > 0 && (
        <ImageGallery items={articles} onImageClick={openModal} />
      )}
      {isloading && <Loader />}
      {articles.length > 0 && !isloading && articles.length < total && (
        <LoadMoreBtn
          onLoadMore={(): void => setPage(page + 1)}
          text="Load More"
        />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={currentImage}
        user={currentUser}
        likes={currentLikes}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
