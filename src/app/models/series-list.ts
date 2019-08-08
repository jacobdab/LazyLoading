export class SeriesList {
  id: number;
  ageGroup: number;
  description: string;
  genres: [string];
  title: string;
  publicationDate: string;
  published: boolean;
  thumbnails: [];
  show: boolean;


  constructor(id: number, ageGroup: number, description: string, genres: [string],
              title: string, publicationDate: string,
              published: boolean, thumbnails: [], show: boolean) {
    this.id = id;
    this.ageGroup = ageGroup;
    this.description = description;
    this.genres = genres;
    this.title = title;
    this.publicationDate = publicationDate;
    this.published = published;
    this.thumbnails = thumbnails;
    this.show = show;
  }

}
