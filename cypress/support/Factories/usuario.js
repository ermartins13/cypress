import { faker } from '@faker-js/faker';

export function criarUsuario(gender) {
  // Aceita 'male' ou 'female'
  const birthDate = faker.date.birthdate({ min: 1920, max: 2021, mode: 'year' });
  const nome = faker.person.firstName(gender);
  const sobrenome = faker.person.lastName(gender); // também aceita gênero
  const email = `${nome}.${sobrenome}@teste.com`.toLowerCase();
  const senha = '12.testeAUT';

  const telefone = faker.phone.number();
  const empresa = "Minsait";
  // Delimita países permitidos
  const paisesPermitidos = [
    'India',
    'United States',
    'Canada',
    'Australia',
    'New Zealand',
    'Singapore'
  ];
  const pais = faker.helpers.arrayElement(paisesPermitidos);
  // Gera estado, cidade, rua e cep genéricos
  const estado = faker.location.state();
  const cidade = faker.location.city();
  const rua = faker.location.streetAddress();
  const cep = faker.string.numeric(8);

  const endereco = {
    rua,
    pais,
    estado,
    cidade,
    cep
  };
  
  const dataNascimento = {
    dia: birthDate.getDate(),
    mes: birthDate.getMonth() + 1,
    ano: String(birthDate.getFullYear())
  };
  
    // Calcular idade
    const hoje = new Date();
    let idade = hoje.getFullYear() - birthDate.getFullYear();
    const m = hoje.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < birthDate.getDate())) {
      idade--;
    }
  
    // Definir categoria
    let categoria;
    if (idade < 18) {
      categoria = 'kid';
    } else if (gender === 'male') {
      categoria = 'men';
    } else {
      categoria = 'women';
    }

  return {
    nome,
    sobrenome,
    email,
    genero: gender,
    dataNascimento,
    telefone,
    empresa,
    endereco,
    pais,
    estado,
    cidade,
    cep,
    idade,
    categoria,
    senha
  };
};