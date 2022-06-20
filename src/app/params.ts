export type Status = 'inProgress' | 'fail' | 'success';

export interface IData {
  id: string,
  taskName: string,
  endData: string,
  status: Status,
}

export const testData: IData[] = [
  {
    id: '1',
    taskName: 'test',
    endData: '22.22.22',
    status: 'inProgress'
  },
  {
    id: '2',
    taskName: 'test2',
    endData: '12.12.22',
    status: 'success'
  },
  {
    id: '2',
    taskName: 'test2',
    endData: '12.12.22',
    status: 'fail'
  }
]
