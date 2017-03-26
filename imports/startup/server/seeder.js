import _ from 'lodash';
import  Codes  from '../../api/codes/codes';


const numberRecords = Codes.find({}).count();

if (!numberRecords) {
  //generate some data...
  _.times(20, () => {

    const amount = 10;
    const brand = "JackDaniel";
    const password = "123456abcdsef";

      Codes.insert({
          createdAt: new Date(),
          amount: amount,
          rebateCode: `${password}-${amount}-${brand}`,
          brand: brand,
      })


  })
 }
