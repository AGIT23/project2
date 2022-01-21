function validasi(){
    var username = document.forms["login"]["uname"].value;
    var password = document.forms["login"]["passwd"].value;

    if( username == "admin001" && password == "0110121246"){
        alert("Login Berhasil")
        return true;
    }
    else{
      alert("Login Gagal");
      return false;
    }
  }