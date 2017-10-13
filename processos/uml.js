var processos = [
    {
        nome: 'Classes',
        grupo: 'Estrutural'
    },
    {
        nome: 'Objetos / Instâncias',
        grupo: 'Estrutural'
    },
    {
        nome: 'Pacote',
        grupo: 'Estrutural'
    },
    {
        nome: 'Componente',
        grupo: 'Estrutural'
    },
    {
        nome: 'Implantação / Instalação / Distribuição',
        grupo: 'Estrutural'
    },
    {
        nome: 'Perfil',
        grupo: 'Estrutural'
    },
    {
        nome: 'Estrutura Composta',
        grupo: 'Estrutural'
    },
    {
        nome: 'Atividade',
        grupo: 'Comportamental'
    },
    {
        nome: 'Interação Geral',
        grupo: 'Comportamental'
    },
    {
        nome: 'Comunicação',
        grupo: 'Comportamental'
    },
    {
        nome: 'Caso de Uso',
        grupo: 'Comportamental'
    },
    {
        nome: 'Tempo',
        grupo: 'Comportamental'
    },
    {
        nome: 'Máquina de Estados',
        grupo: 'Comportamental'
    },
    {
        nome: 'Sequência',
        grupo: 'Comportamental'
    },
    {
        nome: 'trocam informações entre si',
        grupo: 'Classes'
    },
    {
        nome: 'associações refletem as necessidades de comunicação',
        grupo: 'Classes'
    },
    {
        nome: 'Cada instância com seu valores',
        grupo: 'Objetos'
    },
    {
        nome: 'diagrama de comunicação sem mensagens',
        grupo: 'Objetos'
    },
    {
        nome: 'linha que liga os objetos possui fluxo contínuo',
        grupo: 'Objetos'
    },
    {
        nome: 'compartilha as mesmas propriedades comuns a todos os outros diagramas',
        grupo: 'Objetos'
    },
    {
        nome: 'Um único conjunto de objetos',
        grupo: 'Objetos'
    },
    {
        nome: 'organização dos módulos',
        grupo: 'Componentes'
    },
    {
        nome: 'relações entre os componentes por meio de interfaces',
        grupo: 'Componentes'
    },
    {
        nome: 'arquitetura de sistemas orientados a serviço',
        grupo: 'Componentes'
    },
    {
        nome: 'agrupamento lógico em tempo de compilação',
        grupo: 'Pacotes'
    },
    {
        nome: 'pode conter classes, interfaces, diagramas, pacotes',
        grupo: 'Pacotes'
    },
    {
        nome: 'layout físico',
        grupo: 'Implantação'
    },
    {
        nome: 'representa estrutura do hardware',
        grupo: 'Implantação'
    },
    {
        nome: 'configuração de nós de processamento em tempo de execução',
        grupo: 'Implantação'
    },
    {
        nome: 'portas',
        grupo: 'Implantação'
    },
    {
        nome: 'conjunto de esteriótipos predefinidos, etiquetados e restrições',
        grupo: 'Perfil'
    },

    {
        nome: 'agrupamento em tempo de compilação',
        grupo: 'Perfil'
    },

    {
        nome: 'colaborações internas',
        grupo: 'Estrutura-Composta'
    },
    {
        nome: 'funcionalidades que cooperam entre si',
        grupo: 'Estrutura-Composta'
    },
    {
        nome: 'realizar uma função específica',
        grupo: 'Estrutura-Composta'
    },
    {
        nome: 'visão dinâmica da interface entre objetos e funcionalidade do sistema',
        grupo: 'Estrutura-Composta'
    },
    {
        nome: 'agrupamento em tempo de execução',
        grupo: 'Estrutura-Composta'
    },
    {
        nome: 'capta os requisitos funcionais',
        grupo: 'Caso-de-Uso'
    },
    {
        nome: 'documentação não possui formato específico',
        grupo: 'Caso-de-Uso'
    },
    {
        nome: 'não inclui todas as funções do sistema',
        grupo: 'Caso-de-Uso'
    },
    {
        nome: 'lógica de procedimentos, processo de negócio e fluxos de trabalho',
        grupo: 'Atividades'
    },
    {
        nome: 'sempre tem que ter início e fim',
        grupo: 'Atividades'
    },
    {
        nome: 'estados possíveis de um objeto',
        grupo: 'Maquina-de-Estados'
    },
    {
        nome: 'não mostra interação entre objetos',
        grupo: 'Maquina-de-Estados'
    },
    {
        nome: 'ciclo de vida de um objeto',
        grupo: 'Maquina-de-Estados'
    },
    {
        nome: 'comportamento interno de determinado objeto, subsistema ou sistema global',
        grupo: 'Maquina-de-Estados'
    },
    {
        nome: 'conjunto finito de transições de estado',
        grupo: 'Maquina-de-Estados'
    },
    {
        nome: 'comportamento de um único cenário',
        grupo: 'Sequencia'
    },
    {
        nome: 'ordem temporal das mensagens',
        grupo: 'Sequencia'
    },
    {
        nome: 'retângulo em cima da linha de vida representa o período de ativação',
        grupo: 'Sequencia'
    },
    {
        nome: 'normalmente iniciado por um evento externo',
        grupo: 'Sequencia'
    },
    {
        nome: 'parecido com o de sequencia',
        grupo: 'Comunicação'
    },
    {
        nome: 'foca na ordem estrutural das mensagens',
        grupo: 'Comunicação'
    },
    {
        nome: 'como os elementos estão vinculados',
        grupo: 'Comunicação'
    },
    {
        nome: 'quais mensagens trocam entre si',
        grupo: 'Comunicação'
    },
    {
        nome: 'antigo diagrama de colaboração',
        grupo: 'Comunicação'
    },
    {
        nome: 'eventos externos que causam mudanças nas condições de linhas de vida',
        grupo: 'Tempo'
    },
    {
        nome: 'mudança de estado em resposta a um evento externo',
        grupo: 'Tempo'
    },
    {
        nome: 'comportamento dos objetos no decorrer do tempo',
        grupo: 'Tempo'
    },
    {
        nome: 'duração que um objeto permanece em determinado estado - linhas de vida',
        grupo: 'Tempo'
    },
    {
        nome: 'diagrama de atividades no qual as atividades são substituídas por diagramas de sequência',
        grupo: 'Interacao-Geral'
    },

];



var grupos = [{
    nome: 'Estrutural'
},
{
    nome: 'Comportamental'
},
{
    nome: 'Classes'
},
{
    nome: 'Estrutura-Composta'
},
{
    nome: 'Caso-de-Uso'
},
{
    nome: 'Implantação'
},
{
    nome: 'Comunicação'
},
{
    nome: 'Objetos'
},
{
    nome: 'Atividades'
},
{
    nome: 'Pacotes'
},
{
    nome: 'Maquina-de-Estados'
},
{
    nome: 'Sequencia'
},
{
    nome: 'Perfil'
},
{
    nome: 'Interacao-Geral'
},
{
    nome: 'Componentes'
},
{
    nome: 'Tempo'
},
];

var itensAcima = 6;