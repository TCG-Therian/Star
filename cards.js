// cards.js — Biblioteca mestre de todas as 40 cartas + utilitários globais

const TCG_CARDS = [
  {id:1, name:"Carta 1", atk:3, aura:2, img:"images/card1.png", pack:"odd", rarity:"common"},
  {id:2, name:"Carta 2", atk:4, aura:3, img:"images/card2.png", pack:"even", rarity:"common"},
  {id:3, name:"Carta 3", atk:2, aura:4, img:"images/card3.png", pack:"odd", rarity:"common"},
  {id:4, name:"Carta 4", atk:5, aura:2, img:"images/card4.png", pack:"even", rarity:"common"},
  {id:5, name:"Carta 5", atk:3, aura:5, img:"images/card5.png", pack:"odd", rarity:"common"},
  {id:6, name:"Carta 6", atk:6, aura:3, img:"images/card6.png", pack:"even", rarity:"rare"},
  {id:7, name:"Carta 7", atk:4, aura:4, img:"images/card7.png", pack:"odd", rarity:"rare"},
  {id:8, name:"Carta 8", atk:7, aura:5, img:"images/card8.png", pack:"even", rarity:"epic"},
  {id:9, name:"Carta 9", atk:5, aura:3, img:"images/card9.png", pack:"odd", rarity:"common"},
  {id:10,name:"Carta 10",atk:3,aura:4,img:"images/card10.png",pack:"even",rarity:"common"},
  {id:11,name:"Carta 11",atk:4,aura:2,img:"images/card11.png",pack:"odd", rarity:"common"},
  {id:12,name:"Carta 12",atk:5,aura:5,img:"images/card12.png",pack:"even",rarity:"rare"},
  {id:13,name:"Carta 13",atk:6,aura:4,img:"images/card13.png",pack:"odd", rarity:"rare"},
  {id:14,name:"Carta 14",atk:8,aura:6,img:"images/card14.png",pack:"even",rarity:"epic"},
  {id:15,name:"Carta 15",atk:3,aura:3,img:"images/card15.png",pack:"odd", rarity:"common"},
  {id:16,name:"Carta 16",atk:4,aura:6,img:"images/card16.png",pack:"even",rarity:"rare"},
  {id:17,name:"Carta 17",atk:7,aura:5,img:"images/card17.png",pack:"odd", rarity:"epic"},
  {id:18,name:"Carta 18",atk:5,aura:4,img:"images/card18.png",pack:"even",rarity:"common"},
  {id:19,name:"Carta 19",atk:6,aura:3,img:"images/card19.png",pack:"odd", rarity:"common"},
  {id:20,name:"Carta 20",atk:8,aura:7,img:"images/card20.png",pack:"even",rarity:"epic"},
  {id:21,name:"Carta 21",atk:3,aura:2,img:"images/card21.png",pack:"odd", rarity:"common"},
  {id:22,name:"Carta 22",atk:4,aura:5,img:"images/card22.png",pack:"even",rarity:"rare"},
  {id:23,name:"Carta 23",atk:5,aura:4,img:"images/card23.png",pack:"odd", rarity:"common"},
  {id:24,name:"Carta 24",atk:6,aura:6,img:"images/card24.png",pack:"even",rarity:"rare"},
  {id:25,name:"Carta 25",atk:7,aura:5,img:"images/card25.png",pack:"odd", rarity:"rare"},
  {id:26,name:"Carta 26",atk:9,aura:8,img:"images/card26.png",pack:"even",rarity:"epic"},
  {id:27,name:"Carta 27",atk:4,aura:3,img:"images/card27.png",pack:"odd", rarity:"common"},
  {id:28,name:"Carta 28",atk:5,aura:6,img:"images/card28.png",pack:"even",rarity:"rare"},
  {id:29,name:"Carta 29",atk:7,aura:7,img:"images/card29.png",pack:"odd", rarity:"epic"},
  {id:30,name:"Carta 30",atk:6,aura:5,img:"images/card30.png",pack:"even",rarity:"common"},
  {id:31,name:"Carta 31",atk:4,aura:4,img:"images/card31.png",pack:"odd", rarity:"common"},
  {id:32,name:"Carta 32",atk:5,aura:7,img:"images/card32.png",pack:"even",rarity:"rare"},
  {id:33,name:"Carta 33",atk:8,aura:6,img:"images/card33.png",pack:"odd", rarity:"epic"},
  {id:34,name:"Carta 34",atk:6,aura:4,img:"images/card34.png",pack:"even",rarity:"common"},
  {id:35,name:"Carta 35",atk:5,aura:3,img:"images/card35.png",pack:"odd", rarity:"common"},
  {id:36,name:"Carta 36",atk:7,aura:8,img:"images/card36.png",pack:"even",rarity:"epic"},
  {id:37,name:"Carta 37",atk:4,aura:5,img:"images/card37.png",pack:"odd", rarity:"common"},
  {id:38,name:"Carta 38",atk:6,aura:7,img:"images/card38.png",pack:"even",rarity:"rare"},
  {id:39,name:"Carta 39",atk:8,aura:6,img:"images/card39.png",pack:"odd", rarity:"epic"},
  {id:40,name:"Carta 40",atk:5,aura:5,img:"images/card40.png",pack:"even",rarity:"common"}
];

/** Busca carta pelo ID */
function getCardById(id) {
  return TCG_CARDS.find(c => c.id === id) || null;
}

/** Todas as cartas de um pack específico */
function getCardsByPack(pack) {
  return TCG_CARDS.filter(c => c.pack === pack);
}

/** Sorteia n cartas do pack com raridade ponderada */
function drawBoosterPack(pack, count=3) {
  const pool = [...getCardsByPack(pack)];
  const weights = pool.map(c => c.rarity==='common'?60: c.rarity==='rare'?30:10);
  const drawn=[];
  for(let i=0;i<count;i++){
    let total=weights.reduce((a,b)=>a+b,0);
    let r=Math.random()*total, idx=0;
    while(r>weights[idx]){ r-=weights[idx++]; }
    drawn.push(pool[idx]);
    pool.splice(idx,1); weights.splice(idx,1);
  }
  return drawn;
}

/** Embaralha array */
function shuffle(array){
  return array.sort(()=>Math.random()-0.5);
}
