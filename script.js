// Script para melhorar a experiência do menu
document.addEventListener('DOMContentLoaded', function() {
  // Elementos do menu
  const menuLinks = document.querySelectorAll('.header-menu a');
  
  // Adicionar classe ativa aos links do menu
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Adicionar classe ativa ao link clicado
      menuLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Scroll suave para a seção
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Adicionar um pequeno atraso para permitir que a classe seja adicionada antes do scroll
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Ajuste para compensar a altura do header
            behavior: 'smooth'
          });
        }, 100);
      }
    });
  });
  
  // Destacar o item do menu ativo durante o scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Verificar qual seção está visível
    document.querySelectorAll('section, header, main').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        menuLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  
  // Nenhuma ação adicional necessária para o menu horizontal
});
