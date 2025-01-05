describe('Folkatech Login Test', function() {

    this.timeout(10000);
  
    beforeEach(() => {
      cy.visit('https://lapor.folkatech.com/');
      cy.viewport(1280, 800); 
    });
  
    it('1. Login with Valid Credential', function() {
      cy.get('input[type="email"]').type('admin@example.com');
      cy.get('input[type="password"]').type('password');
      cy.get('button[type="submit"]').click();

      cy.contains('Dashboard').should('be.visible');
  
      // Ambil screenshot setelah login berhasil
      cy.screenshot('login-valid');
    });
  
    it('2. Login with Invalid Credential', function() {
      cy.get('input[type="email"]').type('admin123@example.com');
      cy.get('input[type="password"]').type('password123');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Login Gagal! Akun tidak ada.').should('be.visible');
  
      // Ambil screenshot gagal login 
      cy.screenshot('error-login-invalid');
    });
  
});