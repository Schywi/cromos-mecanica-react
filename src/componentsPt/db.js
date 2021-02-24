 const db = [ 
    {  
        service: {
            id: 2,
            title: "Lâmina para Tesoura Hidráulica",
            paragraph: [],
            image: [
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina1.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina2.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina3.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina4.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina5.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina6.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina7.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina8.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina9.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/lamina10.jpg",
               
            ]
        }
    },
    {  
        service:  {
            id: 3||4,
            title: "Cilindro Hidráulico",
            paragraph: ["Criado para gerar articulação entre partes e peças, os cilindros hidráulicos recebem alta pressão de óleo para realizar seus movimentos de precisão. Sua manutenção pode ser da simples troca de reparos e vedações à necessitdade de nova cromagem da haste, brunimento da camisa e até confecção de tampa, cabeçote e olhais. Tais serviços requerem muita perfeição e precisão nas medidas para que não haja perda de tempo e retrabalho. ",],
            image: [
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/cilindro1.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/cilindro3.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/cilindro4.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/cilindro5.jpg",
            ]
            
        }
    },
    {  
        service: {
            id: 2,
            title: "Sapatas para Equipamentos de Esteira",
            paragraph: [
                `As sapatas de esteira, fabricadas principalmente a partir de aço e borracha, são um tipo de material rodante para britadores, escavadeiras, demolidoras remotas e tratores. As sapatas standard dos equipamentos são dimensionadas para distribuir ao solo uma pressão referente ao peso total do equipamento, o que os garantem maior capacidade de tração em terrenos pouco aderentes.
                `,
                `As sapatas de borracha, geralmente utilizadas em equipamentos menores e mais ágeis, são destinadas a condição em que o piso não possa sofrer danos e/ou o local possui alguma limitação física. Já as sapatas de aço são mais utilizadas em equipamentos robustos. `,
            ],
            image: [ 
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/sapata1.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/sapata2.jpg",
                " data:image/jpeg;base64,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",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/sapata4.jpg",
                "https://www.jamfhidraulica.com.br/projeto/jamf/arquivos/conteudo/thumbnail/sapata5.jpg",
            ]
        }
    }, 

    {  
        service: {
            id: 10,
            title: "Padronizados Conforme OMCR Componentes para Moldes e Elevação",
            paragraph: [
                ` A linha OMCR Die Components oferece uma extraordinária variedade de itens de acordo com as normas das principais empresas automotivas. Graças ao amplo uso de sistemas informatizados de gestão, aos sistemas flexíveis de produção e à ampla disponibilidade de itens em nosso estoque, esta linha de produtos enfrenta exaustivamente as necessidades dos clientes e garante qualidade, confiabilidade e entrega rápida.

                `,
                ` Segurança é a senha da linha Elementos de Elevação: certeza sobre a conformidade dos materiais usados, verificações executadas uma obra de arte e inspeção final cuidadosa. Portanto, esses itens são capazes de satisfazer todas as exigências sobre o manuseio de qualquer tamanho ou peso de molde, sob toda a segurança. 

                `,
                ` Fabricamos Pinos de Transporte, Bucha Espanhola, Chavestas, Centralizadores, Referimento, Munhão , Batentes, Localizadores dentre outros. `,
            ],
           
               image: [ 
                "https://i.ibb.co/sgTT4gN/omcR2.png",
                "https://i.ibb.co/BV9LxX0/ORMC.png",
           
            
            ]
        }
    }, 

 ]

 const db1 = [
     
     {      
         id: 2,
         title: "Para Demolidoras",
     },
     {      
        id: 3,
        title: "Para Siderúrgicas",
    },
    {      
        id: 4,
        title: "Para Terraplanagem",
    },
        {      
        id: 5,
        title: "Para Metalúrgicas",
    },
    {      
        id: 6,
        title: "Para Fundição",
    },
    {      
        id: 7,
        title: "Para Refratários",
    },      
    {      
        id: 8,
        title: "Para Automobilística ",
    },
    {      
        id: 9,
        title: "Para Mineradoras",
    },
    {      
        id: 10,
        title: "Ferramentaria",
    },
    {      
       id: 11,
       title: "Fabricação de Peças ",
   },
   {      
       id: 12,
       title: "Confeccção de Acessórios para Maquinas Pesadas",
   },
   {      
    id: 13,
    title: "Componentes Hidráulicos",
},      
{      
    id: 14,
    title: "Cilindros Hidráulicos",
},
{      
    id: 15,
    title: "Lâminas para Tesoura Hidráulica",
},
{      
    id: 16,
    title: "Reformas",
},
{      
   id: 17,
   title: "Manutenções ",
},
{      
   id: 18,
   title: "Recuperação",
},
{      
    id: 19,
    title: "Concertos",
},
{      
 id: 20,
 title: "Montagem e desmontagem de equipamentos",
},      
{      
 id: 21,
 title: "Retrofiting de conjuntos",
},
 ]


export {
    db,
    db1
};