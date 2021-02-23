export type TElem = {
    id: number
    name: string
    composition: string
    image: string
    priceSizeSmall?: number
    priceSizeMiddle?: number
    price: number
    weightSmall?: number
    weightMiddle?: number
    weight: number
    indicatorPizza?: boolean
    amount: number
    weightPizza?: string
}

export type TPromo = {
    id : number
    image : string 
  }
  
export type TBasket = {
	selectedElem:  Array<TElem>
    amountElem: number
    sum: number
}
