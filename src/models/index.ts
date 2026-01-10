export interface Power {
  name: string;
  description: string;
}

export interface PokAIMon {
  id: number;
  name: string;
  type?: string;
  characteristics: string;
  image_url: string;
  doodle_source: string;
  like_count: number;
  powers: Power[];
  action_images: Record<string, string>;
}
