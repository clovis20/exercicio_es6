const alunos = [
    {nome: 'João', nota: 7},
    {nome: 'Maria', nota: 5},
    {nome: 'Pedro', nota: 8},
    {nome: 'Ana', nota: 6},
    {nome: 'Lucas', nota: 4},
    {nome: 'Julia', nota: 9},
    {nome: 'Marcos', nota: 5}
];

function filtroNotasAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtroNotasAprovados(alunos);

console.log(alunosAprovados);