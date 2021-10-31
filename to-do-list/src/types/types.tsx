export interface ITodosData {
  data: ITodos[]
}

export interface ITodos {
  id: number,
  text: string,
  isConfirmed: boolean,
}
