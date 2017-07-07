var processos = [
    {
        nome: 'Separando os dados dos algoritmos para alcançar a reusabilidade',
        grupo: 'Strategy'
    },
    {
        nome: 'Definir uma família de algoritmos, encapsulá-las e torná-las intercambiáveis',
        grupo: 'Strategy'
    },
    {
        nome: 'Permite que o algoritmo varie independentemente dos clientes',
        grupo: 'Strategy'
    },
    {
        nome: 'Percorrendo um conjunto de dados independente da implementação',
        grupo: 'Iterator'
    },
    {
        nome: 'Fornecer um meio de acessar sequencialmente os elementos de um objeto agregado sem expor sua representação subjacente',
        grupo: 'Iterator'
    },
    {
        nome: 'Definindo algoritmos extensíveis',
        grupo: 'Template-Method'
    },
    {
        nome: 'Definir o esqueleto de um algoritmo em uma operação, postergando alguns passos para as subclasses',
        grupo: 'Template-Method'
    },
    {
        nome: 'Permite que subclasses redefinam certos passos de um algorimo sem mudar a estrutura do mesmo',
        grupo: 'Template-Method'
    },
    {
        nome: 'Compartilhando recursos de maneira inteligente',
        grupo: 'Observer'
    },
    {
        nome: 'Definir uma dependência um para muitos entre objetos, de maneira que quando um objeto muda, todos são notificados',
        grupo: 'Observer'
    },
    {
        nome: 'Simplificando relacionamentos complexos',
        grupo: 'Mediator'
    },
    {
        nome: 'Definir um objeto que encapsula a forma como um conjunto de objetos interage',
        grupo: 'Mediator'
    },
    {
        nome: 'Promove acoplamento fraco ao evitar que objetos se refiram uns aos outros explicitamente',
        grupo: 'Mediator'
    },
    {
        nome: 'Permite variar as interações entre objetos independentemente',
        grupo: 'Mediator'
    },
    {
        nome: 'Mediador entre relacionamentos',
        grupo: 'Mediator'
    },
    {
        nome: 'Centralização da lógica de controle de comunicação entre os objetos',
        grupo: 'Mediator'
    },
    {
        nome: 'Transformando requisições em objetos',
        grupo: 'Command'
    },
    {
        nome: 'Encapsular uma solicitação como objeto, desta forma permitindo parametrizar cliente com diferentes solicitações',
        grupo: 'Command'
    },
    {
        nome: 'Padrão parecido com template method, sem algorimo que será executado',
        grupo: 'Command'
    },
    {
        nome: 'Externalizando estados sem quebrar encapsulamento',
        grupo: 'Memento'
    },
    {
        nome: 'Desfazer ação sem quebrar estados anteriores',
        grupo: 'Memento'
    },
    {
        nome: 'Capturar e externalizar um estado interno de um objeto para que possar ser restaurado para esse estado mais tarde',
        grupo: 'Memento'
    },
    {
        nome: 'Repassando requisições para evitar decisões',
        grupo: 'Chain-of-Responsibility'
    },
    {
        nome: 'Evitar o acoplamento do remetente de uma solicitação ao seu receptor',
        grupo: 'Chain-of-Responsibility'
    },
    {
        nome: 'Dar a mais de um objeto a oportunidade de tratar a solicitação',
        grupo: 'Chain-of-Responsibility'
    },
    {
        nome: 'Encadear os objetos receptores, passando a solicitação ao longo da cadeia até que um objeto a trate',
        grupo: 'Chain-of-Responsibility'
    },
    {
        nome: 'cria uma cadeia de objeto e vai passando a responsabilidade até que alguém responda',
        grupo: 'Chain-of-Responsibility'
    },
    {
        nome: 'Defindo uma gramática',
        grupo: 'Interpreter'
    },
    {
        nome: 'Dado uma linguagem, definir uma representação para sua gramática',
        grupo: 'Interpreter'
    },
    {
        nome: 'Parecido com o composite',
        grupo: 'Interpreter'
    },
    {
        nome: 'Simplificando a troca de estados internos de um objeto',
        grupo: 'State'
    },
    {
        nome: 'Permite a um objeto alterar o seu comportamento quando seu estado interno muda',
        grupo: 'State'
    },
    {
        nome: 'Usado para isolar o comportamento de um objeto que depende do seu estado interno',
        grupo: 'State'
    },
    {
        nome: 'Separando operações de estruturas',
        grupo: 'Visitor'
    },
    {
        nome: 'Representar uma operação ao ser executada nos elementos de uma estrutura de objetos',
        grupo: 'Visitor'
    },
    {
        nome: 'Permite definir uma nova operação sem mudar as classes dos elementos sobre os quais opera',
        grupo: 'Visitor'
    },
    {
        nome: 'Separar as operações que serão executadas em determinada estrutura de sua representação',
        grupo: 'Visitor'
    }
];



var grupos = [
    {
        nome: 'Strategy',
    },
    {
        nome: 'Iterator',
    },
    {
        nome: 'Template-Method',
    },
    {
        nome: 'Observer',
    },
    {
        nome: 'Mediator',
    },
    {
        nome: 'Command',
    },
    {
        nome: 'Memento',
    },
    {
        nome: 'Chain-of-Responsibility',
    },
    {
        nome: 'Interpreter',
    },
    {
        nome: 'State',
    },
    {
        nome: 'Visitor',
    }
];

var itensAcima = 9;