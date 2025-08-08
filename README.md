# Dashboard Contábil da Magalu

Este projeto, desenvolvido para a disciplina de Contabilidade de Custos e Gerencial, apresenta um dashboard contábil e financeiro interativo da Magazine Luiza (Magalu). A ferramenta reúne indicadores essenciais como liquidez, endividamento, prazos médios, ciclos operacionais e retorno sobre o patrimônio líquido (RSPL). O dashboard possibilita uma análise visual clara e comparativa do desempenho financeiro da empresa nos anos de 2022, 2023 e 2024, facilitando a compreensão e a tomada de decisões a partir dos dados apresentados.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construir sites rápidos e otimizados.  
- **TypeScript**: JavaScript com tipagem para evitar erros.  
- **Tailwind CSS**: Estilos prontos para criar layouts facilmente.  
- **Lucide React Icons**: Ícones leves para a interface.  
- **Recharts**: Biblioteca para criar gráficos interativos.  
- **Python**: Utilizado para extrair os dados contábeis dos relatórios da Magalu.

## 📊 Extração e cálculo dos indicadores

Os dados apresentados neste dashboard foram extraídos diretamente dos relatórios contábeis oficiais da Magazine Luiza dos períodos de **2022**, **2023** e **2024**.

### 🔍 Como foi feito

Desenvolvemos um script em **Python** que utilizou bibliotecas especializadas como `tabula` e `pandas` para automatizar todo o processo de leitura e extração das tabelas contidas nos arquivos PDF dos relatórios contábeis.  

Esse script foi responsável por:
- Ler os PDFs e identificar automaticamente as tabelas presentes.
- Extrair os dados brutos dessas tabelas em formato estruturado.
- Filtrar apenas os indicadores financeiros relevantes para a análise, como: liquidez, rentabilidade, endividamento, prazos médios, ciclos, entre outros.
- Calcular os indicadores compostos e margens, conforme as fórmulas ensinadas pelo professor na disciplina de **Contabilidade de Custos e Gerencial**.

Após a extração e tratamento, os dados foram organizados em planilhas e transformados em visualizações e análises comparativas no dashboard, facilitando a interpretação e a comunicação dos resultados obtidos.

> 📌 *Essa etapa foi fundamental para garantir que os dados usados estivessem completos, consistentes e prontos para gerar insights relevantes.*

## Funcionalidades

- Visualização clara e abrangente dos principais indicadores financeiros, como Liquidez Geral, Participação de Capitais de Terceiros, Retorno sobre Patrimônio Líquido (RSPL), ciclos operacionais, entre outros.
- Destaque dinâmico por meio de codificação de cores, facilitando a identificação rápida de resultados positivos e potenciais alertas.
- Layout moderno, com design limpo e intuitivo para melhor experiência do usuário.
- Explicações didáticas e acessíveis para cada indicador, acompanhadas de recomendações práticas para interpretação eficaz dos dados.
- Relatório consolidado que integra todas as informações do dashboard, promovendo uma análise completa e organizada.

## Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/WeldonPereira/dashboard-contabil-magalu.git
```
2. Acesse a pasta do projeto:
```bash
cd dashboard-contabil-magalu
```
3. Instale as dependências:
```bash
npm install
# ou
yarn install
```
4. Inicie o ambiente de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```
5. Acesse o dashboard pelo navegador em: http://localhost:3000

## Colaboradores

- Weldon Pereira  
- Eduardo Matos  
- João Antônio
- Ricardo Morato  
- Gabriel Mendonça  
- Lucas Angeli
