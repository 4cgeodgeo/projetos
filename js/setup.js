
const SUBTITLE_STATES = [
    {
        id: 1,
        name: 'Previsto',
        color: 'rgb(255,255,255)'
    },
    {
        id: 2,
        name: 'Digitalização',
        color: 'rgb(252,141,89)'
    },
    {
        id: 3,
        name: 'Disseminação',
        color: 'rgb(145,207,96)'
    },
    {
        id: 4,
        name: 'Reambulação',
        color: 'rgb(254,224,139)'
    },
    {
        id: 5,
        name: 'Validação',
        color: 'rgb(255,255,191)'
    },
    {
        id: 6,
        name: 'Edição',
        color: 'rgb(217,239,139)'
    },
    {
        id: 7,
        name: 'Vetorização',
        color: 'rgb(222,119,174)'
    },
    {
        id: 8,
        name: 'Avaliação',
        color: 'rgb(175,141,195)'
    },
    {
        id: 9,
        name: 'Generalização',
        color: 'rgb(224,243,248)'
    },
    {
        id: 10,
        name: 'Fototriangulação',
        color: 'rgb(44,127,184)'
    },
    {
        id: 11,
        name: 'Restituição',
        color: 'rgb(186,186,186)'
    },
    {
        id: 12,
        name: 'Processamento Digital de Imagens',
        color: 'rgb(215,48,39)'
    },
    {
        id: 13,
        name: 'Medição de pontos de controle',
        color: 'rgb(0,0,0)'
    },
    {
        id: 14,
        name: 'Geração de ortoimagem',
        color: 'rgb(128,205,193)'
    },
    {
        id: 15,
        name: 'Geração de MDE',
        color: 'rgb(191,129,45)'
    },
    {
        id: 16,
        name: 'Levantamento topográfico',
        color: 'rgb(37,52,148)'
    }
]

const INIT_ZOOM = {
    center: [-64, -4],
    zoom: 4.83
}

var PROJECTS = {
    'plano-desenvolvimento': {
        title: 'Plano de Desenvolvimento da Doutrina Militar Terrestre 2022',
        executed: false,
        description: `O objetivo do presente projeto consiste na elaboração de produtos para atender as demandas constantes no Anexo E - Programa de Difusão de Produtos e Serviços de Geoinformação, do PDDMT.`,
        lotes: [
            {
                name: 'pit-cart-ort-50k',
                subtitle: 'Carta Ortoimagem 1:50.000 de RR',
                description: `Construção de 181 cartas ortoimagem na escala 1:50.000.`,
                zoom: [
                    [-67.23000000000000, -1.28000000000000], // southwestern corner of the bounds
                    [-60.28000000000000, 5.30000000000000] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pit-cart-ort-50k-fill',
                        'source': 'pit-cart-ort-50k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pit-cart-ort-50k-border',
                        'source': 'pit-cart-ort-50k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pit-cart-ort-50k-text',
                        'source': 'pit-cart-ort-50k',
                        "type": "symbol",
                        "maxzoom": 10,
						"minzoom": 7,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pit-cart-ort-100k',
                subtitle: 'Carta Ortoimagem 1:100.000 do AM',
                description: `Construção de 12 cartas ortoimagem na escala 1:100.000.`,
                zoom: [
                    [-70.37000000000000,0.55000000000000],
                    [-65.62000000000000,2.41000000000000]
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pit-cart-ort-100k-fill',
                        'source': 'pit-cart-ort-100k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pit-cart-ort-100k-border',
                        'source': 'pit-cart-ort-100k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pit-cart-ort-100k-text',
                        'source': 'pit-cart-ort-100k',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pit-cart-topo-25k',
                subtitle: 'Carta Topográfica 1:25.000 do RO',
                description: `Construção de 30 cartas topográficas na escala 1:25.000.`,
                zoom: [
                    [
                        -66,
                        -13
                    ],
                    [
                        -63,
                        -9
                    ]
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pit-cart-topo-25k-fill',
                        'source': 'pit-cart-topo-25k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pit-cart-topo-25k-border',
                        'source': 'pit-cart-topo-25k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pit-cart-topo-25k-text',
                        'source': 'pit-cart-topo-25k',
                        "type": "symbol",
                        "maxzoom": 10,
						"minzoom": 7.5,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pit-cart-topo-50k',
                subtitle: 'Carta Topográfica 1:50.000 do AC',
                description: `Construção de 40 cartas topográficas na escala 1:50.000.`,
                zoom: [
                    [-72.00110000000000, -10.0960000000000000], // southwestern corner of the bounds
                    [-69.83600600000000, -7.3580220000000000] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pit-cart-topo-50k-fill',
                        'source': 'pit-cart-topo-50k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pit-cart-topo-50k-border',
                        'source': 'pit-cart-topo-50k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pit-cart-topo-50k-text',
                        'source': 'pit-cart-topo-50k',
                        "type": "symbol",
                        "maxzoom": 10,
						"minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'mdt',
                subtitle: 'MDS',
				description: `Construção de 2 Modelos Digitais de Superficie.`,
                zoom: [
                    [-60.095, -3.314], // southwestern corner of the bounds
                    [-58.895, -2.340] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mdt-fill',
                        'source': 'mdt',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mdt-border',
                        'source': 'mdt',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mdt-text',
                        'source': 'mdt',
                        "type": "symbol",
                        "maxzoom": 10,
						"minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'ortoimagens-25k',
                subtitle: 'Ortoimagem',
                description: `Construção de 930 cartas Ortoimagem na escala 1:25.000 do AM e RR.`,
                zoom: [
                    [-69.5300, -3.7200], // southwestern corner of the bounds
                    [-57.0900, 6.8500] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'ortoimagens-25k-fill',
                        'source': 'ortoimagens-25k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'ortoimagens-25k-border',
                        'source': 'ortoimagens-25k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'ortoimagens-25k-text',
                        'source': 'ortoimagens-25k',
                        "type": "symbol",
                        "maxzoom": 10,
						"minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'mapa-tematico',
                subtitle: 'Mapa Temático',
                description: `Construção de 11 Mapas Temáticos de Áreas de Manaus-AM.`,
                zoom: [
                    [-60.1928, -3.1491], // southwestern corner of the bounds
                    [-59.8602, -2.8363] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapa-tematico-fill',
                        'source': 'mapa-tematico',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapa-tematico-border',
                        'source': 'mapa-tematico',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapa-tematico-text',
                        'source': 'mapa-tematico',
                        "type": "symbol",
                        "maxzoom": 10,
						"minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
		]
    },
               
    'suframa': {
        title: 'Projeto Superintendência da Zona Franca de Manaus',
        executed: false,
        description: `Termo de Execução Descentralizada (TED) entre essa Superintendência e a Diretoria de Serviço Geográfico (DSG).
		OBJETIVO: Georreferenciamento de glebas estaduais pertencentes a esse órgão, correspondentes à área do Distrito Agropecuário
		da SUFRAMA. Como intuito de Regularização fundiária, evitando invasões e ocupações irregulares; e assim, permitir o
		loteamento/distribuição de parcelas e a promoção de programas de incentivo e o zoneamento econômico e ecológico local.`,
        lotes: [
            {
                name: 'suframa',
                subtitle: 'Glebas (a)',
                description: `Elaboração de peças técnicas (Relatório Técnicos, Planilhas de Cálculos, Plantas,
				Memoriais Descritivos, Monografias dos Marcos implantados, etc); Carga de Dados no Sistema de  Gestão Fundiária INCRA (SIGEF).`,
                zoom: [
                    [-60.793, -3.124], // southwestern corner of the bounds
                    [-58.891, -1.707] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'suframa-fill',
                        'source': 'suframa',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'suframa-border',
                        'source': 'suframa',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'suframa-text',
                        'source': 'suframa',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
        ]
    },
	    'amapaiii': {
        title: 'Projeto Amapá III',
        executed: false,
        description: `Termo de Convênio Nº 01/2018 - SEPLAN/AP - 4º CGEO,  firmado com o Estado do Amapá.
		OBJETIVO: Execução do georreferenciamento de Glebas Federais e suas áreas de exclusão, para que sejam
		repassadas ao Estado e assim possibilite a regularização fundiária.`,
        lotes: [
            {
                name: 'amapa-previsto',
                subtitle: 'Glebas (a)',
                description: `Elaboração de peças técnicas (Relatório Técnicos, Planilhas de Cálculos, Plantas,
				Memoriais Descritivos, Monografias dos Marcos implantados, etc); Carga de Dados no Sistema de  Gestão Fundiária INCRA (SIGEF).`,
                zoom: [
                    [-52.049, 1.569], // southwestern corner of the bounds
                    [-50.480, 2.741] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'amapa-previsto-fill',
                        'source': 'amapa-previsto',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'amapa-previsto-border',
                        'source': 'amapa-previsto',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'amapa-previsto-text',
                        'source': 'amapa-previsto',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
        ]
    },
		'dnit': {
        title: 'Projeto Unidades de Conservação SEDAM-RO (Antigo Pjt DNIT)',
        executed: false,
        description: `OBJETIVO: Execução do Georreferenciamento de 05 Unidades De Conservação Estaduais (UC)
		gerenciadas pela Secretaria Estadual do Desenvolvimento Ambiental (SEDAM-RO) com o intuito de Regularização fundiária,
		evitando invasões e ocupações irregulares das áreas de conservação/proteção ambiental.`,
        lotes: [
            {
                name: 'dnit',
                subtitle: 'Unidades De Conservação Estaduais (UC) ',
                description: `Elaboração de peças técnicas (Relatório Técnicos, Planilhas de Cálculos, Plantas,
				Memoriais Descritivos, Monografias dos Marcos implantados, etc); Carga de Dados no Sistema de  Gestão Fundiária INCRA (SIGEF).`,
                zoom: [
                    [-65.352, -9.870], // southwestern corner of the bounds
                    [-61.184, -7.563] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'dnit-fill',
                        'source': 'dnit',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'dnit-border',
                        'source': 'dnit',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'dnit-text',
                        'source': 'dnit',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
        ]
    },
		'levpatr': {
        title: 'Levantamento de Áreas Patrimoniais',
        executed: false,
        description: `OBJETIVO: Execução do Levantamento Topográfico Planimétrico para atualização de PDOM e
		Controle Patrimonial de Imóveis da 12ª RM/CMA, possibilitando um maior controle dos imóveis e áreas pertencentes
		à união e sob a responsabilidade das Organizações Militares pertencentes ao CMA, evitando assim, invasões e ocupações
		irregulares e áreas militares.`,
        lotes: [
            {
                name: 'humaita',
                subtitle: 'Área do 54° BIS em Humaitá-AM',
                description: `Elaboração de peças técnicas (Relatório Técnicos, Planilhas de Cálculos, Plantas,
				Memoriais Descritivos, Monografias dos Marcos implantados, etc); Carga de Dados no Sistema de  Gestão Fundiária INCRA (SIGEF).`,
                zoom: [
                    [-63.4156, -7.6609], // southwestern corner of the bounds
                    [-62.8790, -7.2371] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'humaita-fill',
                        'source': 'humaita',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'humaita-border',
                        'source': 'humaita',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'humaita-text',
                        'source': 'humaita',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'surucucu',
                subtitle: 'Área do 4º PEF do C FRON RR / 7º BIS em Surucucu - RR',
                description: `Elaboração de peças técnicas (Relatório Técnicos, Planilhas de Cálculos, Plantas,
				Memoriais Descritivos, Monografias dos Marcos implantados, etc); Carga de Dados no Sistema de  Gestão Fundiária INCRA (SIGEF).`,
                zoom: [
                    [-63.66385, 2.82191], // southwestern corner of the bounds
                    [-63.6276, 2.8487] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'surucucu-fill',
                        'source': 'surucucu',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'surucucu-border',
                        'source': 'surucucu',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'surucucu-text',
                        'source': 'surucucu',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'auaris',
                subtitle: 'Área do 5º PEF do C FRON RR / 7º BIS em Auaris - RR',
                description: `Elaboração de peças técnicas (Relatório Técnicos, Planilhas de Cálculos, Plantas,
				Memoriais Descritivos, Monografias dos Marcos implantados, etc); Carga de Dados no Sistema de  Gestão Fundiária INCRA (SIGEF).`,
                zoom: [
                    [-64.50719, 3.99450], // southwestern corner of the bounds
                    [-64.47784, 4.01280] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'auaris-fill',
                        'source': 'auaris',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'auaris-border',
                        'source': 'auaris',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'auaris-text',
                        'source': 'auaris',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
		
        ]
    },

    'pbzpa-fin': {
        title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
        executed: true,
        description: `OBJETIVO: Execução do Levantamento Topográfico Planialtimétrico da pista e de obstáculos, assim como confecção de documentação
		técnica, referentes a homologação e aos Planos Básicos de Zonas de Proteção de Aeródromos (PBZPA) que possibilitem a regularização junto à Aeronáutica
		dos aeródromos localizados em áreas de responsabilidade do Comando Militar da Amazônia.`,
        lotes: [
            {
                name: '4pef-7bis',
                subtitle: 'SWUQ – Pista de pouso do 4º PEF do 7º BIS (Surucucu – RR)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA.`,
                zoom: [
                    [-63.66385, 2.82191], // southwestern corner of the bounds
                    [-63.6276, 2.8487] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': '4pef-7bis-fill',
                        'source': '4pef-7bis',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': '4pef-7bis-border',
                        'source': '4pef-7bis',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': '4pef-7bis-text',
                        'source': '4pef-7bis',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: '3pef-8bis',
                subtitle: 'SWJP – Pista de pouso do 3º PEF do 8º BIS (Vila Bittencourt – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA.`,
                zoom: [
                    [-69.4484, -1.4227], // southwestern corner of the bounds
                    [-69.4006, -1.3787] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': '3pef-8bis-fill',
                        'source': '3pef-8bis',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': '3pef-8bis-border',
                        'source': '3pef-8bis',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': '3pef-8bis-text',
                        'source': '3pef-8bis',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: '1pef-5bis',
                subtitle: 'SBYA – Pista de pouso do 1º PEF do 5º BIS (Iauaretê – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA.`,
                zoom: [
                    [-69.2250, 0.5720], // southwestern corner of the bounds
                    [-69.1482, 0.6401] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': '1pef-5bis-fill',
                        'source': '1pef-5bis',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': '1pef-5bis-border',
                        'source': '1pef-5bis',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': '1pef-5bis-text',
                        'source': '1pef-5bis',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-ipiranga',
                subtitle: 'SWII – Pista de pouso do 2º PEF do 8º BIS (Ipiranga – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-69.70867, -2.95269], // southwestern corner of the bounds
                    [-69.68255, -2.92871] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-ipiranga-fill',
                        'source': 'pbzpa-ipiranga',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-ipiranga-border',
                        'source': 'pbzpa-ipiranga',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-ipiranga-text',
                        'source': 'pbzpa-ipiranga',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: '5pef-7bis',
                subtitle: 'SWBV – Pista de pouso do 5º PEF do 7º BIS (Auaris – RR)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-64.50719, 3.99450], // southwestern corner of the bounds
                    [-64.47784, 4.01280] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': '5pef-7bis-fill',
                        'source': '5pef-7bis',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': '5pef-7bis-border',
                        'source': '5pef-7bis',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': '5pef-7bis-text',
                        'source': '5pef-7bis',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-maturaca',
                subtitle: 'SWMK – Pista de pouso do 5º PEF do 5º BIS (Maturacá – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-66.2275, 0.5291], // southwestern corner of the bounds
                    [-66.0037, 0.7276] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-maturaca-fill',
                        'source': 'pbzpa-maturaca',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-maturaca-border',
                        'source': 'pbzpa-maturaca',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-maturaca-text',
                        'source': 'pbzpa-maturaca',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-cucui',
                subtitle: 'SWKU – Pista de pouso do 4º PEF do 5º BIS (Cucuí – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-66.85471, 1.10832], // southwestern corner of the bounds
                    [-66.82605, 1.13383] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-cucui-fill',
                        'source': 'pbzpa-cucui',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-cucui-border',
                        'source': 'pbzpa-cucui',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-cucui-text',
                        'source': 'pbzpa-cucui',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-sao-joaquim',
                subtitle: 'SWSQ – Pista de pouso do 3º PEF do 5º BIS (São Joaquim – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-69.40922, 1.68582], // southwestern corner of the bounds
                    [-69.36270, 1.71742] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-sao-joaquim-fill',
                        'source': 'pbzpa-sao-joaquim',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-sao-joaquim-border',
                        'source': 'pbzpa-sao-joaquim',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-sao-joaquim-text',
                        'source': 'pbzpa-sao-joaquim',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-querari',
                subtitle: 'SWQE – Pista de pouso do 2º PEF do 5º BIS (Querari – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-69.85282, 1.07401], // southwestern corner of the bounds
                    [-69.81713, 1.10587] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-querari-fill',
                        'source': 'pbzpa-querari',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-querari-border',
                        'source': 'pbzpa-querari',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-querari-text',
                        'source': 'pbzpa-querari',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-pari-cachoeira',
                subtitle: 'SWPC – Pista de pouso do 6º PEF do 5º BIS (Pari Cachoeira – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-69.80850, 0.25445], // southwestern corner of the bounds
                    [-69.77955, 0.27738] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-pari-cachoeira-fill',
                        'source': 'pbzpa-pari-cachoeira',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-pari-cachoeira-border',
                        'source': 'pbzpa-pari-cachoeira',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-pari-cachoeira-text',
                        'source': 'pbzpa-pari-cachoeira',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-estirao-do-equador',
                subtitle: 'SWEE – Pista de pouso do 4º PEF do 8º BIS (Estirão do Equador – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-71.5853, -4.5486], // southwestern corner of the bounds
                    [-71.5385, -4.5030] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-estirao-do-equador-fill',
                        'source': 'pbzpa-estirao-do-equador',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-estirao-do-equador-border',
                        'source': 'pbzpa-estirao-do-equador',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-estirao-do-equador-text',
                        'source': 'pbzpa-estirao-do-equador',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-palmeiras-do-javari',
                subtitle: 'SWJV – Pista de pouso do 1º PEF do 8º BIS (Palmeiras do Javari – AM)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-72.82215, -5.13764], // southwestern corner of the bounds
                    [-72.79624, -5.11445] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-palmeiras-do-javari-fill',
                        'source': 'pbzpa-palmeiras-do-javari',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-palmeiras-do-javari-border',
                        'source': 'pbzpa-palmeiras-do-javari',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-palmeiras-do-javari-text',
                        'source': 'pbzpa-palmeiras-do-javari',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-marechal-thaumaturgo',
                subtitle: 'SSMH – Pista de pouso do DEF do 61º BIS (Marechal Thaumaturgo – AC)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-72.79752, -8.97440], // southwestern corner of the bounds
                    [-72.76199, -8.94334] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-marechal-thaumaturgo-fill',
                        'source': 'pbzpa-marechal-thaumaturgo',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-marechal-thaumaturgo-border',
                        'source': 'pbzpa-marechal-thaumaturgo',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-marechal-thaumaturgo-text',
                        'source': 'pbzpa-marechal-thaumaturgo',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-santa-rosa-do-purus',
                subtitle: 'SSRA – Pista de pouso do 4º PEF do 4º BIS (Santa Rosa do Purus – AC)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-70.5726, -9.5218], // southwestern corner of the bounds
                    [-70.3838, -9.3550] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-santa-rosa-do-purus-fill',
                        'source': 'pbzpa-santa-rosa-do-purus',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-santa-rosa-do-purus-border',
                        'source': 'pbzpa-santa-rosa-do-purus',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-santa-rosa-do-purus-text',
                        'source': 'pbzpa-santa-rosa-do-purus',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
			{
                name: 'pbzpa-pacaraima',
                subtitle: 'ZZZZ – Pista de pouso do 3º PEF do 7º BIS (Pacaraima – RR)',
                description: `Perfil Longitudinal do eixo da pista, Ortomosaico da pista, Confecção do Anexos e Elaboração de Plantas PBZPA`,
                zoom: [
                    [-61.17600, 4.48017], // southwestern corner of the bounds
                    [-61.14412, 4.50220] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'pbzpa-pacaraima-fill',
                        'source': 'pbzpa-pacaraima',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pbzpa-pacaraima-border',
                        'source': 'pbzpa-pacaraima',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pbzpa-pacaraima-text',
                        'source': 'pbzpa-pacaraima',
                        "type": "symbol",
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            
        ]
    },
    'amapaiii-fin': {
        title: 'Projeto Amapá III',
        executed: true,
        description: `Termo de Convênio Nº 01/2018 - SEPLAN/AP - 4º CGEO,  firmado com o Estado do Amapá. OBJETIVO: Execução do
		georreferenciamento de Glebas Federias e suas áreas de exclusão, para que sejam repassadas ao Estado e assim possibilite a regularização fundiária.`,
        lotes: [
            {
                name: 'amapa-pronto',
                subtitle: 'Glebas (a)',
				description: `Elaboração de peças técnicas (Relatório Técnicos, Planilhas de Cálculos, Plantas,
				Memoriais Descritivos, Monografias dos Marcos implantados, etc); Carga de Dados no Sistema de  Gestão Fundiária INCRA (SIGEF).`,
                zoom: [
                    [
                        -52.456, -0.679
                    ],
                    [
                        -49.331, 2.258
                    ]
                ],
                legend: [
                    1,
                    16,
                    13,
                    12,
                    15,
                    3
                ],
                styles: [
                    {
                        'id': 'amapa-pronto-fill',
                        'source': 'amapa-pronto',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'amapa-pronto-border',
                        'source': 'amapa-pronto',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'amapa-pronto-text',
                        'source': 'amapa-pronto',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 9.01,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
}