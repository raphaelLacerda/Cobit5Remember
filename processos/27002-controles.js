//TODO: fazer a partir do 13.2

var processos = [{
        nome: 'Políticas para SI',
        grupo: '5.1-ORIENTACAO-DIRECAO-PARA-SI'
    },
    {
        nome: 'Análise Crítica das Políticas da SI',
        grupo: '5.1-ORIENTACAO-DIRECAO-PARA-SI'
    },
    {
        nome: 'Responsabilidade e Papéis da SI',
        grupo: '6.1-ORGANIZACAO-INTERNA'
    },
    {
        nome: 'Segregação de Funções',
        grupo: '6.1-ORGANIZACAO-INTERNA'
    },
    {
        nome: 'Contato com Autoridades',
        grupo: '6.1-ORGANIZACAO-INTERNA'
    },
    {
        nome: 'Contato com Grupos Especiais',
        grupo: '6.1-ORGANIZACAO-INTERNA'
    },
    {
        nome: 'Segurança da Informação no Gerenciamento de Projetos',
        grupo: '6.1-ORGANIZACAO-INTERNA'
    },
    {
        nome: 'Políticia para uso de dispositivo móvel',
        grupo: '6.2-DISPOSITIVOS-MOVEIS-TRABALHO-REMOTO'
    },
    {
        nome: 'Trabalho Remoto',
        grupo: '6.2-DISPOSITIVOS-MOVEIS-TRABALHO-REMOTO'
    },
    {
        nome: 'Seleção',
        grupo: '7.1-ANTES-CONTRATACAO'
    },
    {
        nome: 'Termos e condições da contratação',
        grupo: '7.1-ANTES-CONTRATACAO'
    },
    {
        nome: 'Responsabilidades da direção',
        grupo: '7.2-DURANTE-CONTRATACAO'
    },
    {
        nome: 'Conscientização, educação e treinamento',
        grupo: '7.2-DURANTE-CONTRATACAO'
    },
    {
        nome: 'Processo Disciplinar',
        grupo: '7.2-DURANTE-CONTRATACAO'
    },
    {
        nome: 'Responsabilidades pelo encerramento ou mudança da contratação',
        grupo: '7.3-ENCERRAMENTO-CONTRATACAO'
    },
    {
        nome: 'Inventário dos Ativos',
        grupo: '8.1-RESPONSABILIDADE-ATIVOS'
    },
    {
        nome: 'Proprietário dos Ativos',
        grupo: '8.1-RESPONSABILIDADE-ATIVOS'
    },
    {
        nome: 'Uso Aceitável dos Ativos',
        grupo: '8.1-RESPONSABILIDADE-ATIVOS'
    },
    {
        nome: 'Devolução dos Ativos',
        grupo: '8.1-RESPONSABILIDADE-ATIVOS'
    },
    {
        nome: 'Classificação da Informação',
        grupo: '8.2-CLASSIFICACAO-INFORMACAO'
    },
    {
        nome: 'Rótulos e tratamento da Informação',
        grupo: '8.2-CLASSIFICACAO-INFORMACAO'
    },
    {
        nome: 'Tratamento dos Ativos',
        grupo: '8.2-CLASSIFICACAO-INFORMACAO'
    },
    {
        nome: 'Gerencimaneto de Mídias Removíveis',
        grupo: '8.3-TRATAMENTO-MIDIAS'
    },
    {
        nome: 'Descarte de Mídias',
        grupo: '8.3-TRATAMENTO-MIDIAS'
    },
    {
        nome: 'Transferência Física de Mídias',
        grupo: '8.3-TRATAMENTO-MIDIAS'
    },
    {
        nome: 'Políticas de Controle de Acesso',
        grupo: '9.1-REQUISITOS-NEGOCIOS-CONTROLE-ACESSO'
    },
    {
        nome: 'Acesso às redes e aos serviços de redes',
        grupo: '9.1-REQUISITOS-NEGOCIOS-CONTROLE-ACESSO'
    },
    {
        nome: 'Registro e Cancelamento de Usuário',
        grupo: '9.2-GERENCIAMENTO-ACESSO-USUARIO'
    },
    {
        nome: 'Provisionamento para acesso de Usuário',
        grupo: '9.2-GERENCIAMENTO-ACESSO-USUARIO'
    },
    {
        nome: 'Gerenciamento dos direitos de acesso privilegiados',
        grupo: '9.2-GERENCIAMENTO-ACESSO-USUARIO'
    },
    {
        nome: 'Gerenciamento da informação de autenticação secreta de usuários',
        grupo: '9.2-GERENCIAMENTO-ACESSO-USUARIO'
    },
    {
        nome: 'Análise crítica dos direitos de acesso de usuário',
        grupo: '9.2-GERENCIAMENTO-ACESSO-USUARIO'
    },
    {
        nome: 'Retirada ou ajuste de diretos de acesso',
        grupo: '9.2-GERENCIAMENTO-ACESSO-USUARIO'
    },
    {
        nome: 'Uso da Informação de autenticação secreta',
        grupo: '9.3-RESPONSABILIDADE-USUARIOS'
    },
    {
        nome: 'Restrição de acesso à informação',
        grupo: '9.4-CONTROLE-ACESSO-SISTEMA-APLICACAO'
    },
    {
        nome: 'Procedimentos seguros de entrada no sistema - Log-on',
        grupo: '9.4-CONTROLE-ACESSO-SISTEMA-APLICACAO'
    },
    {
        nome: 'Sistema de gerenciamento de senha',
        grupo: '9.4-CONTROLE-ACESSO-SISTEMA-APLICACAO'
    },
    {
        nome: 'Uso de programas utilitários privilegiados',
        grupo: '9.4-CONTROLE-ACESSO-SISTEMA-APLICACAO'
    },
    {
        nome: 'Controle de acesso ao código-fonte de programas',
        grupo: '9.4-CONTROLE-ACESSO-SISTEMA-APLICACAO'
    },
    {
        nome: 'Política para o uso de controles criptográficos',
        grupo: '10.1-CONTROLES-CRIPTOGRAFICOS'
    },
    {
        nome: 'Gerencimaneto de Chaves',
        grupo: '10.1-CONTROLES-CRIPTOGRAFICOS'
    },
    {
        nome: 'Perímetros de Segurança',
        grupo: '11.1-AREAS-SEGURAS'
    },
    {
        nome: 'Controles de Entrada Física',
        grupo: '11.1-AREAS-SEGURAS'
    },
    {
        nome: 'Segurança em escritórios, salas e instalações',
        grupo: '11.1-AREAS-SEGURAS'
    },
    {
        nome: 'Proteção contra ameaças externas e do meio-ambiente',
        grupo: '11.1-AREAS-SEGURAS'
    },
    {
        nome: 'Trabalhando em áreas seguras',
        grupo: '11.1-AREAS-SEGURAS'
    },
    {
        nome: 'Áreas de entrega e carregamento',
        grupo: '11.1-AREAS-SEGURAS'
    },
    {
        nome: 'Escolha do Local e proteção do equipamento',
        grupo: '11.2-EQUIPAMENTOS'
    },
    {
        nome: 'Utilidades',
        grupo: '11.2-EQUIPAMENTOS'
    },
    {
        nome: 'Segurança do cabeamento',
        grupo: '11.2-EQUIPAMENTOS'
    },
    {
        nome: 'Manutenção dos equipamentos',
        grupo: '11.2-EQUIPAMENTOS'
    },
    {
        nome: 'Remoção dos ativos',
        grupo: '11.2-EQUIPAMENTOS'
    },
    {
        nome: 'Segurança de equipamentos e ativos fora das dependências da organização',
        grupo: '11.2-EQUIPAMENTOS'
    },
    {
        nome: 'Reutilização e alienação segura de equipamentos',
        grupo: '11.2-EQUIPAMENTOS'
    },
    {
        nome: 'Equipamento de usuário sem monitoração',
        grupo: '11.2-EQUIPAMENTOS'
    },
    {
        nome: 'Política de mesa limpa e tela limpa',
        grupo: '11.2-EQUIPAMENTOS'
    },
    {
        nome: 'Documentação dos procedimentos de operação',
        grupo: '12.1-RESPONSABILIDADES-PROCEDIMENTOS-OPERACIONAIS'
    },
    {
        nome: 'Gestão de mudanças',
        grupo: '12.1-RESPONSABILIDADES-PROCEDIMENTOS-OPERACIONAIS'
    },
    {
        nome: 'Gestão de capacidade',
        grupo: '12.1-RESPONSABILIDADES-PROCEDIMENTOS-OPERACIONAIS'
    },
    {
        nome: 'Separação dos ambientes de desenvolvimento, teste e produção',
        grupo: '12.1-RESPONSABILIDADES-PROCEDIMENTOS-OPERACIONAIS'
    },
    {
        nome: 'Controles contra códigos maliciosos',
        grupo: '12.2-PROTECAO-CONTRA-CODIGOS-MALICIOSOS'
    },
    {
        nome: 'Cópias de segurança das informações',
        grupo: '12.3-COPIAS-SEGURANCA'
    },
    {
        nome: 'Registros de Eventos',
        grupo: '12.4-REGISTROS-E-MONITORAMENTO'
    },
    {
        nome: 'Proteção das informações dos registros de eventos',
        grupo: '12.4-REGISTROS-E-MONITORAMENTO'
    },
    {
        nome: 'Registros de Eventos de administrador e operador',
        grupo: '12.4-REGISTROS-E-MONITORAMENTO'
    },
    {
        nome: 'Instalação de software nos sistemas operacionais',
        grupo: '12.5-CONTROLE-SOFTWARE-OPERACIONAL'
    },
    {
        nome: 'Gestão de Vulnerabilidades Técnicas',
        grupo: '12.6-GESTAO-VULNERABILIDADES-TECNICAS'
    },
    {
        nome: 'Restrições quanto à instalação de software',
        grupo: '12.6-GESTAO-VULNERABILIDADES-TECNICAS'
    },
    {
        nome: 'Controles de auditoria de SI',
        grupo: '12.7-CONSIDERACOES-AUDITORIA-SI'
    },
    {
        nome: 'Controle de Redes',
        grupo: '13.1-GERENCIAMENTO-SEGURANCA-REDES'
    },
    {
        nome: 'Segurança dos serviços de Rede',
        grupo: '13.1-GERENCIAMENTO-SEGURANCA-REDES'
    },
    {
        nome: 'Segregação de Redes',
        grupo: '13.1-GERENCIAMENTO-SEGURANCA-REDES'
    }
];


var grupos = [{
        nome: '5.1-ORIENTACAO-DIRECAO-PARA-SI'
    },
    {
        nome: '6.1-ORGANIZACAO-INTERNA'
    },
    {
        nome: '6.2-DISPOSITIVOS-MOVEIS-TRABALHO-REMOTO'
    },
    {
        nome: '7.1-ANTES-CONTRATACAO'
    },
    {
        nome: '7.2-DURANTE-CONTRATACAO'
    },
    {
        nome: '7.3-ENCERRAMENTO-CONTRATACAO'
    },
    {
        nome: '8.1-RESPONSABILIDADE-ATIVOS'
    },
    {
        nome: '8.2-CLASSIFICACAO-INFORMACAO'
    },
    {
        nome: '8.3-TRATAMENTO-MIDIAS'
    },
    {
        nome: '9.1-REQUISITOS-NEGOCIOS-CONTROLE-ACESSO'
    },
    {
        nome: '9.2-GERENCIAMENTO-ACESSO-USUARIO'
    },
    {
        nome: '9.3-RESPONSABILIDADE-USUARIOS'
    },
    {
        nome: '9.4-CONTROLE-ACESSO-SISTEMA-APLICACAO'
    },
    {
        nome: '10.1-CONTROLES-CRIPTOGRAFICOS'
    },
    {
        nome: '11.1-AREAS-SEGURAS'
    },
    {
        nome: '11.2-EQUIPAMENTOS'
    },
    {
        nome: '12.1-RESPONSABILIDADES-PROCEDIMENTOS-OPERACIONAIS'
    },
    {
        nome: '12.2-PROTECAO-CONTRA-CODIGOS-MALICIOSOS'
    },
    {
        nome: '12.3-COPIAS-SEGURANCA'
    },
    {
        nome: '12.4-REGISTROS-E-MONITORAMENTO'
    },
    {
        nome: '12.5-CONTROLE-SOFTWARE-OPERACIONAL'
    },
    {
        nome: '12.6-GESTAO-VULNERABILIDADES-TECNICAS'
    },
    {
        nome: '12.7-CONSIDERACOES-AUDITORIA-SI'
    },
    {
        nome: '13.1-GERENCIAMENTO-SEGURANCA-REDES'
    }
];


var itensAcima = 12;