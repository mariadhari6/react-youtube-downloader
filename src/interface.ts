export interface Video {
  url: string;
  extension: string;
  sizeText: string;
  hasAudio: boolean;
  quality: string;
}

export interface Videos {
  items: Array<Video>;
}

export interface Audio {
  url: string;
  extension: string;
  sizeText: string;
}
export interface Audios {
  items: Array<Audio>;
}
export interface ItemContent {
  title?: string;
  description?: string;
  thumbnail?: string;
  videos?: Array<Video>;
  audios?: Array<Audio>;
}
