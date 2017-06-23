//Creating a customer Pipe
import{PipeTransform, Pipe} from '@angular/core';
import{IProduct}from'./product';

// pipe decorator is added to declare this as a pipe
@Pipe({
    // this is the name of the pipe
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
    //theres only one method PipeTransform called transform()
    //value is the value we'll be transforminf : - value is the array of products that'll be filtered into an array of products. IProduct[] is use to strongly type the array thats being passed in
    //filterBy is an arguement thats passed in by the user
    //IProduct is use to strongly type returning array of products 

    transform(value: IProduct[], filterBy: string): IProduct[]{
        //if filterBy is not set, filterby is = to null
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}