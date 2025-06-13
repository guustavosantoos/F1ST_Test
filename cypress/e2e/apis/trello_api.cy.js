describe('Teste API Trello - Actions', () => {
  
  it('Deve consultar action e exibir o campo name da estrutura list', () => {
    // Fazer requisição GET para a API do Trello
    cy.request({
      method: 'GET',
      url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
      failOnStatusCode: false
    }).then((response) => {
      
      // Validar o status code da resposta
      expect(response.status).to.eq(200);
      cy.log('Status Code:', response.status);
      
      // Exibir o conteúdo do campo "name" da estrutura "list"
      const listName = response.body.data.list.name;
      cy.log('Nome da lista:', listName);
      
      // Validações adicionais
      expect(response.body.data.list.name).to.eq('Professional');
      expect(response.body.data.list.id).to.eq('54a17e9db559f0356ce022e4');
    });
  });

  it('Deve validar estrutura completa da resposta da action', () => {
    cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
      .then((response) => {
        
        // Validar status code
        expect(response.status).to.eq(200);
        
        // Validar estrutura do JSON conforme a imagem
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('list');
        expect(response.body.data.list).to.have.property('name');
        
        // O campo "name" da estrutura "list" deve ser "Professional"
        expect(response.body.data.list.name).to.eq('Professional');
        
        // Log do resultado
        cy.log('Campo name da list:', response.body.data.list.name);
      });
  });
});
