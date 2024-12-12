Aplicativo de Marção de Consultas

Descrição

O ConsultaFácil é um aplicativo desenvolvido em React Native que permite aos usuários marcar consultas médicas de forma rápida e simples. Ele inclui funcionalidades como visualização de especialidades médicas, escolha de datas e horários disponíveis, e gerenciamento de consultas agendadas.

Funcionalidades

Cadastro e Login: Permite que os usuários criem uma conta ou façam login.

Busca por Especialidades: Lista de especialidades médicas disponíveis.

Agendamento de Consultas: Escolha de médicos, datas e horários.

Histórico de Consultas: Visualização de consultas já realizadas ou futuras.

Notificações: Alertas para lembrar os usuários de suas consultas.

Tecnologias Utilizadas

Frontend: React Native

Backend: Node.js com Express (ou Firebase, dependendo da implementação desejada)

Banco de Dados: MongoDB ou Firestore

Gerenciamento de Estado: Context API ou Redux

Requisitos do Sistema

Node.js (v14 ou superior)

NPM ou Yarn

Emulador Android/iOS ou dispositivo físico para testes

Como Executar o Projeto

Passos para Configuração:

Clone o repositório:

git clone https://github.com/seu-usuario/consulta-facil.git

Navegue para a pasta do projeto:

cd consulta-facil

Instale as dependências:

npm install

ou

yarn install

Configure o ambiente:

Crie um arquivo .env na raiz do projeto com as variáveis necessárias, como chaves de API e URLs do backend.

Executando o Aplicativo:

Inicie o servidor Metro:

npx react-native start

Execute no emulador ou dispositivo:

Para Android:

npx react-native run-android

Para iOS:

npx react-native run-ios

Estrutura do Projeto

consulta-facil/
├── assets/         # Imagens e recursos estáticos
├── components/     # Componentes reutilizáveis
├── screens/        # Telas do aplicativo
├── navigation/     # Configuração de navegação
├── services/       # Serviços e integrações com APIs
├── styles/         # Arquivos de estilo
├── App.tsx         # Arquivo principal do aplicativo
├── package.json    # Configuração do projeto

Contribuição

Faça um fork do projeto.

Crie uma branch para sua feature:

git checkout -b minha-feature

Commit suas mudanças:

git commit -m "Adiciona minha nova feature"

Envie para o repositório remoto:

git push origin minha-feature

Abra um Pull Request.

Licença

Este projeto é licenciado sob a MIT License.
