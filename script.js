let tecnicos = [
    {
        "id": 1,
        "nome": "Castro Angelotti",
        "altura": "1.79m",
        "idade": 56,
        "sexo": "M",
        "ocupacao": "Técnico do Atlético Maneiro",
        "endereco": "Rua A, 58, Contagem-MG"
    },
    {
        "id": 2,
        "nome": "Abel nogueira",
        "altura": "1.85m",
        "idade": 48,
        "sexo": "M",
        "ocupacao": "Técnico do União da Vila",
        "endereco": "Avenida Central, 100, Belo Horizonte-MG"
    },
    {
        "id": 3,
        "nome": "Dorival neto",
        "altura": "1.70m",
        "idade": 52,
        "sexo": "M",
        "ocupacao": "Técnico do Estrela FC",
        "endereco": "Rua das Flores, 200, Betim-MG"
    }
];

const container = document.getElementById('tecnicos-container');

tecnicos.forEach(tecnico => {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <h2>${tecnico.nome}</h2>
        <p><strong>Altura:</strong> ${tecnico.altura}</p>
        <p><strong>Idade:</strong> ${tecnico.idade} anos</p>
        <p><strong>Sexo:</strong> ${tecnico.sexo}</p>
        <p><strong>Ocupação:</strong> ${tecnico.ocupacao}</p>
        <p><strong>Endereço:</strong> ${tecnico.endereco}</p>
    `;
    
    container.appendChild(card);
});
