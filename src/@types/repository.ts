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
}

export interface RepositoriesType {
  totalCount: number;
  edges: {
    node: RepositoryTypes;
    cursor: string;
  }[];
}
