// UNIVAG - Arthur Di Loreto

// Exercício 1: Calcular IMC
function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

// Exercício 2: Formatar Nome Completo
function formatarNome(nome: string, sobrenome?: string): string {
  return sobrenome ? `${nome} ${sobrenome}` : nome;
}

// Exercício 3: Verificar Maioridade
function verificarMaioridade(idade: number): boolean {
  return idade >= 18;
}

// Exercício 4: Interface de Produto
interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
}

function formatarProduto(produto: Produto): string {
  return `Produto: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
}

// Exercício 5: Filtrar Números Pares
function filtrarPares(numeros: number[]): number[] {
  return numeros.filter(n => n % 2 === 0);
}

// Exercício 6: Converter Temperatura
type UnidadeTemperatura1 = "celsius" | "fahrenheit";

function converterTemperatura(valor: number, unidade: UnidadeTemperatura1): number {
  if (unidade === "celsius") {
    return (valor * 9 / 5) + 32;
  } else {
    return (valor - 32) * 5 / 9;
  }
}

// Exercício 7: Contar Ocorrências
function contarOcorrencias<T>(array: T[], elemento: T): number {
  return array.filter(item => item === elemento).length;
}

// Exercício 8: Interface de Aluno
interface Aluno {
  nome: string;
  notas: number[];
  matricula: string;
}

function calcularMedia(aluno: Aluno): number {
  const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  return soma / aluno.notas.length;
}

// Exercício 9: Tipo de Resposta de API
type ApiResponse1<T> = {
  sucesso: boolean;
  dados: T | null;
  erro: string | null;
};

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

function buscarUsuarios(): ApiResponse1<Usuario[]> {
  const usuariosMock: Usuario[] = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" }
  ];

  return {
    sucesso: true,
    dados: usuariosMock,
    erro: null
  };
}

// Exercício 10: Componente Tipado
interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

interface ListaTarefasProps {
  tarefas: Tarefa[];
  onToggle: (id: number) => void;
}

function ListaTarefas({ tarefas, onToggle }: ListaTarefasProps) {
  const [filtro, setFiltro] = ["todas", "pendentes", "concluidas"]; 

  return {
    tarefas,
    onToggle,
    filtro
  };
}