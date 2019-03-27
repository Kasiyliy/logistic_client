import { Category } from './category';
import { SubCategory } from './subcategory';

export class Products{
productId: number;
productCategoryId:	number;
productDescription:	string;
productNameEn:	string;
productNameKk:	string;
productNameRu:	string;
sellerCompanyId:	number;
specialCharacteristicsId:	number;
productSubCategoryId:	number;
manufacturer: string;
price: number;
size: number;
weight: number;
uniqueIdNumber: string;
serialNumber: number;

category: Category;
subcategory: SubCategory;


}
