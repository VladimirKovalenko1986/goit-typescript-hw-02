interface Article {
  id: number;
  urls: { small: string; regular: string };
  alt_description: string;
  likes: number;
  user: { location: string; name: string; portfolio_url: string };
}

interface ApiResponse {
  total: number;
  results: Article[];
}

interface ImageCardProps {
  data: Article;
  onImageClick: (
    url: { small: string; regular: string },
    user: { location: string; name: string; portfolio_url: string },
    likes: number
  ) => void;
}

interface ImageGalleryProps {
  items: Article[];
  onImageClick: (
    imageUrl: { small: string; regular: string },
    user: { location: string; name: string; portfolio_url: string },
    likes: number
  ) => void;
}

interface ModalOpenProps {
  isOpen: boolean;
  imageUrl: { small: string; regular: string } | null;
  onClose: () => void;
  user: { location: string; name: string; portfolio_url: string } | null;
  likes: number;
}

interface LodeMoreProps {
  text: string;
  onLoadMore: () => void;
}

interface SearchBareProps {
  onSearch: (query: string) => void;
}

export type {
  Article,
  ApiResponse,
  ImageCardProps,
  ImageGalleryProps,
  ModalOpenProps,
  LodeMoreProps,
  SearchBareProps,
};
