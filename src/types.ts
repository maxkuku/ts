export type Review = [string, number, string]

export type Id = number | string
export type WeekDay = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс' 
export type WeekDayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type MonthNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 
export type Direction = 'back' | 'forward'
export type YesNo = boolean | 0 | 1


export enum Genre {
  'Fantasy' = 1,
  'Adventure' ,
  'Horror',
  'Fun',
  'No detect'
}


export interface ISearchFormData {
  city?: string,
  checkin?: string,
  checkout?: string,
  price?: number | string,
}


export type TFavorite = {
  id: Id,
  name: string,
  image: string,
}

export type TFavorites = {
  [key: string]: TFavorite;
}


export type TBook = {
  placeId: Id,
  checkInDate: Date,
  checkOutDate: Date,
}