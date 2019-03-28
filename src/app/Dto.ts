export interface Todo {
  uuid: string;
  name: string;
  description?: string;
  due?: string;
  assignedTo?: string;
}
