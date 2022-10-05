
declare namespace FlatRentSdk  {


export type database = {
  id: string;
  title: string;
  details: string;
  photos: [string, string],
  coordinates: [number, number],
  bookedDates?: [Date, Date],
  price: number
}


export interface Window {
  window: object
}



export function cloneDate(date: Date): Date


export function addDays(date: Date, days: number): Date


export const backendPort: number


export const localStorageKey: string


export interface ISearch {
  city: string,
  checkInDate: Date,
  checkOutDate: Date,
  priceLimit: number,
}


export interface IBook {
  flatId: number,
  checkInDate: Date,
  checkOutDate: Date
}


class FlatRentSdk {
  
  get(id: string): Promise<string | object>

  search(parameters: ISearch) : Promise<object>

  book(params: IBook) : number

  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date) : number

  _resetTime(date: Date) : void

  _calculateDifferenceInDays(startDate: Date, endDate: Date) : number

  _generateDateRange(from: Date, to: Date) : [Date]

  _generateTransactionId() : number

  _areAllDatesAvailable(flat: number, dateRange: []) : boolean

  _formatFlatObject(flat: number, nightNumber: number) : object

  _readDatabase() : object

  _writeDatabase() : string

  _syncDatabase(database: database) : void

}


}