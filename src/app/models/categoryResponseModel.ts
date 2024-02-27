import { Category } from "./category";
import { ResposseModel } from "./responseModel";

export interface CategoryResponseModel extends ResposseModel{
  data:Category[]
}
