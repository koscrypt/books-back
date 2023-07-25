export interface BooksModel {
  id: number
  name: string
  isFree: boolean
  URL: string
  author?: string
}

export interface Book extends BooksModel {

}
