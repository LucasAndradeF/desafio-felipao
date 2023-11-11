let heroi = {
    nome: "Thor", xp: 11000
  };
  
let nivelHeroi;
  
  switch (true) {
    case heroi.xp < 1000:
      nivelHeroi = "Ferro";
      break;
    case heroi.xp >= 1001 && heroi.xp <= 2000:
      nivelHeroi = "Bronze";
      break;
    case heroi.xp >= 2001 && heroi.xp <= 5000:
      nivelHeroi = "Prata";
      break;
    case heroi.xp >= 6001 && heroi.xp <= 7000:
      nivelHeroi = "Ouro";
      break;
    case heroi.xp >= 7001 && heroi.xp <= 8000:
      nivelHeroi = "Platina";
      break;
    case heroi.xp >= 8001 && heroi.xp <= 9000:
      nivelHeroi = "Ascendente";
      break;
    case heroi.xp >= 9001 && heroi.xp <= 10000:
      nivelHeroi = "Imortal";
      break;
    default:
      nivelHeroi = "Radiante";
      break;
  }
  const mensagem = `O Herói de nome **${heroi.nome}** está no nível **${nivelHeroi}**`
  
  console.log(mensagem);
  
