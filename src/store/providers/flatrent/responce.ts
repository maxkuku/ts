


import { Id } from '../../../types.js'


export interface IRoomListResponse {
  errorMessage?: string
  items: IRoom[]
}



export interface IRoomResponse {
  errorMessage?: string
  item: IRoom
}



export interface IRoom {
  provider: string
  id: Id
  title: string
  details: string
  photos: string[]
  coordinates?: [number, number]
  bookedDates?: []
  priceLimit?: number
}



