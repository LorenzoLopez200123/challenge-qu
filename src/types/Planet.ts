export interface Planet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<string>;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: Array<string>;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
  image?: string;
}

export interface ImageUnsplash {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  urls: Urls;
  links: ImageUnsplashLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: ImageUnsplashTopicSubmissions;
  user: User;
  tags: Tag[];
}

interface ImageUnsplashLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Tag {
  type: string;
  title: string;
  source: Source;
}

interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}

interface Ancestry {
  type: Category;
  category?: Category;
  subcategory?: Category;
}

interface Category {
  slug: string;
  pretty_slug: string;
}

interface CoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: ImageUnsplashLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: CoverPhotoTopicSubmissions;
  premium: boolean;
  user: User;
}

interface CoverPhotoTopicSubmissions {
  "architecture-interior"?: Nature;
  "color-of-water"?: Nature;
  wallpapers: Nature;
}

interface Nature {
  status: string;
  approved_on: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: null | string;
  portfolio_url: string;
  bio: string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Social {
  instagram_username: null | string;
  portfolio_url: string;
  twitter_username: null | string;
  paypal_email: null;
}

interface ImageUnsplashTopicSubmissions {
  wallpapers: Nature;
  nature: Nature;
}
