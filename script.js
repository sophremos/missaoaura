const perfis = [ 
    { 
        id: 1, 
        nome: "Curly", 
        categoria: "Administramento", 
        descricao: "Capitão da tripulação Tulpar.", 
        imagem: "" 
    }, 
    { 
        id: 2, 
        nome: "Anya", 
        categoria: "Medicina", 
        descricao: "Enfermeira da tripulação Tulpar.", 
        imagem: "perfil-1.jpg" 
    },
    { 
        id: 3, 
        nome: "Swansea", 
        categoria: "Mecânica", 
        descricao: "Transforma problemas em soluções.", 
        imagem: "perfil-1.jpg" 
    }, 
    { 
        id: 4, 
        nome: "Daisuke", 
        categoria: "Ajudante", 
        descricao: "Transforma soluções em problemas.", 
        imagem: "perfil-1.jpg" 
    }, 
    { 
        id: 5, 
        nome: "Jimmy", 
        categoria: "Administramento", 
        descricao: "...", 
        imagem: "perfil-1.jpg" 
    }, 
]; 

function isValidYYYYMMDD(input) {
  const regex = /^\d{8}$/;
  if (!regex.test(input)) return false;
 
  const year = parseInt(input.substr(0, 4), 10);
  const month = parseInt(input.substr(4, 2), 10) - 1;
  const day = parseInt(input.substr(6, 2), 10);
 
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0'); // Day with leading zero
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (0-based, so add 1)
  const yyyy = today.getFullYear();

  let idade;

    if (mm < month) {
        if (dd < day ) {
            idade = yyyy-year-1;
        }
    }
    else {
        idade = yyyy-year;
    }

}

