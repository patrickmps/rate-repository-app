export interface RepositoryTypes {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
  url: string;
  reviews: {
    edges: ReviewRepositoryTypes[];
  };
}

export interface ReviewRepositoryTypes {
  node: {
    id: string;
    text: string;
    rating: number;
    createdAt: string;
    user: {
      id: string;
      username: string;
    };
  };
}

export interface RepositoriesType {
  totalCount: number;
  edges: {
    node: RepositoryTypes;
    cursor: string;
  }[];
}
