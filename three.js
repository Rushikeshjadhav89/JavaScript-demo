console.log(`TEST 1`);
const Dolphins= (96+108+89)/3;
const koalas= (88+91+110)/3;
console.log(Dolphins)
console.log(koalas) 

if (Dolphins>koalas){
    console.log(`Dolphin WIN's`);
} else if (Dolphins<koalas){
    console.log(`koalas WIN"s`);
} else if (Dolphins===koalas){
    console.log(`BoTH win's the trophy`);
}




console.log(`TEST 2`);
const DOlphin_1=(97+112+101)/3;
const KOalas_1= (105+95+123)/3;
console.log(DOlphin_1)
console.log(KOalas_1)

if ((DOlphin_1 >KOalas_1 ) && (DOlphin_1>=100)){
    console.log(`Dolphin WIN's 2nd TIME`);
} else if ((DOlphin_1 <KOalas_1 ) && (KOalas_1>=100)){
    console.log(`Koalas win's 2nd TIME`);
}else if ((DOlphin_1<=100) && (DOlphin_1>KOalas_1)){
        console.log(`Dolphin Need Equal to or more than 100 points to WIN....`);
}else{
        console.log(`koalas Need Equal to or more than 100 points to WIN....`);
}





console.log(`TEST 3`);
const DOlphin_2=(97+112+101)/3;
const KOalas_2= (109+95+106)/3;
console.log(DOlphin_2);
console.log(KOalas_2);

if ((DOlphin_2 >KOalas_2 ) && (DOlphin_2>=100)){
    console.log(`Dolphin WIN's 2nd TIME`);
}else if ((DOlphin_2 <KOalas_2 ) && (KOalas_2>=100)){
    console.log(`Koalas win's 2nd TIME`);
}else if ((DOlphin_2 === KOalas_2) && (DOlphin_2>=100 && KOalas_2>=100)){
    console.log(`MATCH DRAW both teams scored same points`);
}else{
    if ((DOlphin_2<=100) && (DOlphin_2>KOalas_2)){
        console.log(`Dolphin Need Equal to or more than 100 points to WIN....`);
    } else {
        console.log(`koalas Need Equal to or more than 100 points to WIN....`);
    }
}