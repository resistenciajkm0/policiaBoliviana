var prodId = getParameterByName('prodId');


const inventario = [
  /*{ nombre: 'Rodrigo Salazar', ci: 444888 },
  { nombre: 'Scarlett Johansson', ci: 111222 },
  { nombre: 'Jimmy Hendrix', ci: 222333 }, */
  { nombre: 'Brian Rodrigo Salazar Quispe', ci: 8468662 },
  { nombre: 'Jaime Fernando Carpio', ci: 4777364 },
  { nombre: 'Mijail Valda Rodriguez', ci: 12425317 },
  { nombre: 'Christian Jorge Antonio San Roman Andrade', ci: 6760605 },
  { nombre: 'Yazzel Yamil Duk Escobar', ci: 13608507 },
  { nombre: 'Airton Francisco Soto Pardo ', ci: 8469891 },
  { nombre: 'Victor Joel Huancollo Galindo', ci: 11107990 },
  { nombre: 'Magdiel Tamar Morales Choque', ci: 9162886 },
  { nombre: 'Imer Asaf Mita Miranda', ci: 6980535 },
  { nombre: 'JARED MIGUEL RODRIGUEZ RIVEROS', ci: 4899136 },
  { nombre: 'Misael Adhemar Poma Pereira ', ci: 6092626 },
  { nombre: 'Daniel Alberto Cuenca Moldez', ci: 2316748 },
  { nombre: 'Josue Viktor Morales Choque', ci: 6957485 },

  { nombre: 'Adrian Marcelo Rocha Bascope', ci: 6888784 },
  { nombre: 'Edgar Marcelo Rocha Toledo', ci: 2698394 },
  { nombre: 'Marco antonio Ayarde Romero', ci: 3680550 },

  { nombre: 'Emilia gorena Veizaga ', ci: 4911451 },
  { nombre: 'Ever Ronald flores jove ', ci: 4896528 },
  { nombre: 'Maritza villca ', ci: 6187976 },
  { nombre: 'Edwin Ivan Flores jove ', ci: 4892843 },
  { nombre: 'jonny Reynaldo Bustillos', ci: 2699792 },
  { nombre: 'Rafael Arcangel Quispe', ci: 3412812 },
  { nombre: 'Panfilo Montesinos Llanque', ci: 5975671 },

  { nombre: 'Mia Bernal', ci: 6125733 },
  { nombre: 'Alejandro Alvizuri', ci: 4789758 },
  { nombre: 'Mario Eduardo Cutipa Salazar', ci: 6944327 },
  { nombre: 'José Fernando Andrade Pedregal', ci: 4868028 },
  { nombre: 'Aldair Mauricio Amancio Molina', ci: 9587703 },
  { nombre: 'Manuel Rodríguez Paz', ci: 3499207 },
  { nombre: 'José Eduardo Rodríguez Pereira', ci: 6761460 },
];
var item = inventario.find(item => item.ci === parseInt(prodId, 10));

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//console.log(item.nombre);
function getMiembro() {
  document.getElementById("nombres").innerHTML = item.nombre;
  document.getElementById("ci").innerHTML = item.ci;
}