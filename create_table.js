function calculateHealth(health){
    if (health < 3000){
      return 1;
    }else if(health < 4000){
      return 2;
    }else if(health < 5000){
      return 3;
    }else{
      return 4;
    }
  };

class Hero{
  constructor(id, type, health, shield, burstD, sustainD, softCC, hardCC, sustain, heal, armorP, armorM, armorA, aoe, movement, displacement, avoid, stealth){
    this.id = id;
    this.type = type;

    this.health = calculateHealth(health); 
    this.shield = shield;
    this.burstD = burstD;
    this.sustainD = sustainD;
    this.softCC = softCC;
    this.hardCC = hardCC;
    this.sustain = sustain;
    this.heal = heal;

    this.armorP = armorP;
    this.armorM = armorM;
    this.armorA = armorA;
    this.aoe = aoe;
    this.movement = movement;

    this.displacement = displacement;
    this.avoid = avoid;
    this.stealth = stealth;
  }
}

var yes = 'yes';
var non = 'non';
var low = 'low';
var med = 'med';
var hgh = 'hgh';
var vgh = 'vgh';


var abathur = new Hero('abathur', "specialist", 1503, 2, low, 460, low, non, non, low, 0, 0, 0, med, hgh, non, non, non);
var alarak = new Hero('alarak', "assassin", 4167, 0, hgh, 600, hgh, non, low, non, 0, 0, 0, med, med, yes, non, non);
var anub = new Hero('anub', "warrior", 4393, 3, hgh, 600, low, hgh, med, non, 0, 3, 0, low, hgh, non, non, non);
var artanis = new Hero('artanis', 'warrior', 5417, 3, hgh, 620, low, non, non, non, 1, 0, 0, med, med, yes, non, non);
var arthas = new Hero('arthas', 'warrior', 5535, 0, low, 470, hgh, low, hgh, non, 2, 2, 1, med, low, non, non, non);
var auriel = new Hero('auriel', 'support', 4057, 1, non, 240, med, low, hgh, hgh, 0, 0, 1, med, low, yes, non, non, non);
var azmodan = new Hero('azmodan', 'specialist', 6004, 0, med, 620, non, non, low, non, 0, 0, 0, hgh, low, non, non, non);
var brightwing = new Hero('brightwing', 'support', 3224, 1, low, 410, low, med, hgh, hgh, 1, 2, 0, med, hgh, non, non, non);
var butcher = new Hero('butcher', 'assassin', 4724, 0, vgh, 1000, hgh, low, hgh, non, 1, 1, 1, hgh, low, non, non, non);
var cass = new Hero('cassia', 'assassin', 3640, 0, hgh, 620, hgh, non, low, non, 3, 0, 0, hgh, low, non, non, non);
var chen = new Hero('chen', 'warrior', 5592, 3, low, 350, hgh, 0, low, non, 0, 2, 2, med, hgh, yes, yes, non);
var chromie = new Hero('chromie', 'assassin', 2902, 0, vgh, 800, vgh, low, non, non, 0, 0, 0, med, non, yes, non, non);
var dehaka = new Hero('dehaka', 'warrior', 5338, 0, med, 560, med, med, hgh, non, 0, 2, 0, med, hgh, yes, non, yes);
var diablo = new Hero('diablo', 'warrior', 5629, 0, med, 400, low, hgh, low, non, 0, 2, 2, low, low, yes, non, non);
var dva = new Hero('dva', 'warrior', 6362, 1, med, 800, low, non, non, non, 0, 0, 0, hgh, med, yes, non, non);
var etc = new Hero('elite', 'warrior', 4781, 1, low, 280, low, hgh, med, low, 1, 0, 2, med, hgh, yes, non, non);
var falstad = new Hero('falstad', 'assassin', 2994, 2, hgh, 640, med, low, low, non, 0, 0, 0, med, vgh, yes, non, non);
var gazlowe = new Hero('gazlowe', 'specialist', 4004, 0, hgh, 1100, low, med, non, non, 0, 0, 3, vgh, low, yes, non, non);
var genji = new Hero('genji', 'assassin', 3509, 1, hgh, 450, non, non, non, non, 0, 1, 0, low, vgh, non, yes, non);
var greymane = new Hero('greymane', 'assassin', 4518, 0, vgh, 1100, non, non, non, non, 1, 0, 1, med, med, non, non, yes);
var guldan = new Hero('gul', 'assassin', 3728, 0, hgh, 410, low, med, hgh, non, 0, 2, 0, vgh, non, yes, non, non);
var illidan = new Hero('illidan', 'assassin', 3619, 0, hgh, 580, low, low, hgh, non, 2, 2, 1, low, vgh, non, yes, non);
var johanna = new Hero('johanna', 'warrior', 4779, 3, low, 300, vgh, low, low, non, 3, 0, 0, hgh, low, yes, non, non);
var kael = new Hero('kael', 'assassin', 3334, 0, vgh, 480, non, low, low, non, 0, 0, 0, vgh, low, non, non, non);
var kerrigan = new Hero('kerrigan', 'assassin', 3684, 2, hgh, 780, non, med, med, non, 1, 0, 0, hgh, med, yes, non, non);
var kharazim = new Hero('kharazim', 'support', 4274, 1, vgh, 740, non, non, hgh, med, 2, 1, 0, non, hgh, non, non, non);
var leoric = new Hero('leoric', 'warrior', 5412, 0, hgh, 850, hgh, non, hgh, non, 1, 1, 1, med, med, non, non, non);
var lili = new Hero('lili', 'support', 3404, 1, med, 310, med, non, hgh, hgh, 1, 0, 2, med, med, non, non, non);
var liming = new Hero('liming', 'assassin', 2297, 1, vgh, 750, non, non, low, non, 0, 2, 0, vgh, hgh, yes, non, non);
var morales = new Hero('morales', 'support', 3351, 3, non, 220, low, non, hgh, hgh, 1, 1, 2, med, med, yes, non, non);
var lucio = new Hero('lucio', 'support', 3027, 3, non, 220, med, non, hgh, hgh, 0, 0, 1, low, vgh, yes, non, non);
var lunara = new Hero('lunara', 'assassin', 3136, 0, hgh, 700, med, non, low, non, 0, 2, 0, hgh, hgh, non, non, non);
var malf = new Hero('malfurion', 'support', 3689, 1, med, 410, hgh, non, hgh, hgh, 0, 0, 0, hgh, non, non, non, non);
var medivh = new Hero('medivh', 'specialist', 3224, 2, low, 430, non, med, low, low, 2, 0, 0, med, vgh, non, non, non);
var muradin = new Hero('muradin', 'warrior', 5774, 0, med, 570, med, low, hgh, non, 1, 1, 2, med, med, yes, non, non);
var murky = new Hero('murky', 'specialist', 1661, 1, med, 700, med, 1, hgh, non, 2, 0, 0, hgh, med, non, yes, yes);
var nazeebo = new Hero('nazeebo', 'specialist', 3592, 0, vgh, 930, med, non, med, non, 0, 3, 1, hgh, non, non, non, non);
var nova = new Hero('nova', 'assassin', 2961, 0, vgh, 520, med, non, non, non, 0, 0, 0, low, low, non, non, yes);
var probius = new Hero('probius', 'specialist', 2763, 1, vgh, 900, med, non, non, non, 0, 2, 0, hgh, med, yes, non, non);
var ragnaros = new Hero('ragnaros', 'assassin', 4386, 1, vgh, 650, low, low, med, non, 0, 0, 1, med, low, non, non, non);
var raynor = new Hero('raynor', 'assassin', 2855, 0, hgh, 920, low, low, med, non, 0, 0, 1, med, low, yes, non, non);
var rehgar = new Hero('rehgar', 'support', 4493, 1, med, 610, med, non, hgh, hgh, 0, 0, 0, med, med, non, non, non);
var rexxar = new Hero('rexxar', 'warrior', 3783, 0, med, 600, med, med, med, non, 1, 0, 2, hgh, low, non, yes, non);
var samuro = new Hero('samuro', 'assassin', 3619, 0, hgh, 1000, non, non, non, non, 1, 1, 1, vgh, hgh, non, non, yes);
var hammer = new Hero('hammer', 'specialist', 3592, 1, vgh, 800, med, non, low, non, 0, 0, 1, vgh, med, yes, non, yes);
var sonya = new Hero('sonya', 'warrior', 5134, 1, hgh, 850, non, low, med, non, 1, 0, 1, hgh, hgh, non, non, non);
var stitches = new Hero('stitches', 'warrior', 6579, 1, med, 450, med, med, hgh, non, 0, 2, 1, med, med, yes, non, non);
var sylv = new Hero('sylvanas', 'specialist', 3193, 0, med, 550, low, low, low, non, 0, 1, 0, med, med, yes, non, non);
var tassadar = new Hero('tassadar', 'support', 3127, 3, non, 450, hgh, non, low, low, 0, 0, 1, med, med, non, non, yes);
var thrall = new Hero('thrall', 'assassin', 3919, 0, vgh, 840, low, low, hgh, non, 1, 1, 0, med, med, yes, non, non);
var tracer = new Hero('tracer', 'assassin', 2645, 0, hgh, 590, low, non, low, non, 0, 0, 0, med, vgh, yes, non, non);
var tychus = new Hero('tychus', 'assassin', 4222, 0, hgh, 1100, low, non, low, non, 0, 1, 2, hgh, med, yes, non, non);
var tyrael = new Hero('tyrael', 'warrior', 5035, 3, med, 460, low, low, low, non, 0, 3, 0, hgh, hgh, non, non, non);
var tyranda = new Hero('tyranda', 'support', 3489, 0, med, 780, low, low, hgh, med, 0, 2, 0, med, low, non, non, non);
var uther = new Hero('uther', 'support', 4728, 0, low, 290, non, 2, hgh, hgh, 0, 1, 2, low, low, non, non, non);
var valeera = new Hero('valeera', 'assassin', 4489, 0, hgh, 600, vgh, low, non, non, 1, 1, 1, low, hgh, non, non, yes);
var valla = new Hero('valla', 'assassin', 2792, 0, vgh, 960, low, low, low, non, 0, 2, 0, med, med, non, non, non);
var varTank = new Hero('varianTank', 'warrior', 5456, 0, low, 350, low, low, med, non, 0, 0, 1, low, low, non, yes, non);
var varDD = new Hero('varianDD', 'assassin', 4197, 0, hgh, 820, low, non, med, non, 0, 0, 1, low, low, non, yes, non);
var var2H = new Hero('varian2H', 'assassin', 3777, 0, vgh, 780, low, non, med, non, 0, 0, 1, low, low, non, yes, non);
var xul = new Hero('xul', 'specialist', 4167, 1, vgh, 650, med, non, med, non, 0, 0, 0, hgh, non, non, yes, non);
var zagara = new Hero('zagara', 'specialist', 3603, 0, vgh, 860, low, med, hgh, non, 0, 1, 1, vgh, hgh, non, non, non);
var zarya = new Hero('zarya', 'warrior', 4879, 3, non, 300, hgh, non, non, non, 1, 2, 1, med, non, yes, non, non);
var zera = new Hero('zeratul', 'assassin', 3557, 1, hgh, 650, med, med, low, non, 0, 1, 0, med, hgh, non, non, yes);
var zul = new Hero('zul', 'assassin', 4112, 0, vgh, 1450, low, non, med, non, 0, 0, 0, med, low, non, yes, non);

var heroList = [abathur, alarak, anub, artanis, arthas, auriel, azmodan, brightwing, butcher, cass, chen, chromie, 
dehaka, diablo, dva, etc, falstad, gazlowe, genji, greymane, guldan, illidan, johanna, kael, kerrigan, kharazim, leoric, lili,
liming, morales, lucio, lunara, malf, medivh, muradin, murky, nazeebo, nova, probius, ragnaros, raynor, rehgar, rexxar,
samuro, hammer, sonya, stitches, sylv, tassadar, thrall, tracer, tychus, tyrael, tyranda, uther, valeera, valla, varTank,
varDD, var2H, xul, zagara, zarya, zera, zul];

var attriList = ["shield", "health"]


function main(heroList, attriList){
  const requiredPowerList = [];
  const lowOpacity = '0.25';
  const highOpacity = '1.00';

  function checkHeroes(heroList, attriList, type, power){ 
    for (let i = 0; i < heroList.length; i+=1){
      let currentHero = heroList[i];    
      let allReq = [];
      for (let j = 0; j < requiredPowerList.length; j+=1){
        let currentType = requiredPowerList[j].type;
        for (let k = 0; k < attriList.length; k+=1){
          if (attriList[k] == currentType){
            if (currentHero[`${currentType}`] < requiredPowerList[j].power){
              allReq.push(0);
            }
          }
        }
      }
      if (allReq.includes(0)){
        $(`#${currentHero.id}`).css('opacity', lowOpacity);
      }else{
        $(`#${currentHero.id}`).css('opacity', highOpacity);
      }
    }
  }

  function pushReqPower(type, power){
    requiredPowerList.push(
      {
        type: `${type}`,
        power: `${power}`
      });
  }

  function removeReqPower(type){
    for (let i = 0; i < requiredPowerList.length; i+=1){
      if (requiredPowerList[i].type == type){
        requiredPowerList.splice(i, 1);
      }
    }
  }

  function buttonSelect(item, power, type){
    $(item).click(function(){  
      $(`.${type}`).css('opacity', lowOpacity);
      $(`.${type}`).not($(item)).removeClass('selected');
      if (!($(item).hasClass('selected'))){
        $(item).addClass('selected');
      }else{
        $(item).removeClass('selected');
      }

      if ($(`.selected${item}`).css('opacity') < highOpacity){
        $(item).css({'opacity':highOpacity, 'border':'solid red 3px'});
        removeReqPower(type, power);
        pushReqPower(type, power);
      }else{
        $(item).css({'opacity':lowOpacity, 'border':'none'});
        removeReqPower(type, power);
      }
      checkHeroes(heroList, attriList, type, power)
    });
  }

//start
  $(document).ready(function(){
    buttonSelect('#lightShield', 1, "shield");
    buttonSelect('#mediumShield', 2, "shield");
    buttonSelect('#heavyShield', 3, "shield");

    buttonSelect('#lowHealth', 1, "health");
    buttonSelect('#averageHealth', 2, "health");
    buttonSelect('#highHealth', 3, "health");
    buttonSelect('#veryHighHealth', 4, "health");
  })
}

main(heroList, attriList);
