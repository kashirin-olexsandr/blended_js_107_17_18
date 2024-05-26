function getQuater(min) {
   
   if (min >= 0 && min < 15) {
      console.log("Перша чверть години")
   
   } else if (min >= 15 && min < 30) {
      console.log("Друга чверть години");

   } else if (min >= 30 && min < 45) {
      console.log("Третя чверть години");
   
   } else if (min >= 45 && min < 60) {
      console.log("Черверта чверть години");
   
   } else console.log("Невірне значення");
   return min;
}


console.log(getQuater(30));


//~ У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).