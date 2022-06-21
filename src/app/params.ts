export type Status = 'inProgress' | 'fail' | 'success' | 'new';

export interface IData {
  id: string,
  taskName: string,
  endData: Date,
  startData: Date,
  status: Status,
}
