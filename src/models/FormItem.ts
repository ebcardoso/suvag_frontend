export interface FormItem {
  name:string,
  label?:string,
  type:string, //text, boolean, date, password, select
  required?:boolean,
  canShow?:boolean,
  canCreate?:boolean,
  canEdit?:boolean
}
