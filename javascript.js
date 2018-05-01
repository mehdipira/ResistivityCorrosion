function ress(){

  var a = Number(document.getElementById('pins').value);
  var R = Number(document.getElementById('resistance').value);

  var p = 2 * Math.PI * a * R;
  document.getElementById('resistivity').value = p.toFixed(3);
  var resistivity = "";
  if (p >= 200){
      resistivity = "Mildly Corrosive";
    }
  if (100 < p && p < 200){
      resistivity = "Less Mildly Corrosive";
    }
  if (50 < p && p < 100){
      resistivity = "Moderately Corrosive";
    }
  if (10 < p && p < 50){
      resistivity = "Corrosive";
    }
  if (p < 10){
    resistivity = "Very Corrosive";
  }
  switch(resistivity){
            case 'Mildly Corrosive':
                document.getElementById('soilclass').value = "Mildly Corrosive";
                document.getElementById('soilclass').style.backgroundColor = "#8ee5c0";
                document.getElementById('cp').value = "CP not generally advised";
                break;
            case 'Less Mildly Corrosive':
                document.getElementById('soilclass').value = "Mildly Corrosive";
                document.getElementById('soilclass').style.backgroundColor = "#8ee5c0";
                document.getElementById('cp').value = "CP Recommended";
                break;
            case'Moderately Corrosive':
                document.getElementById('soilclass').value = "Moderately Corrosive";
                document.getElementById('soilclass').style.backgroundColor = "#33D7FF";
                document.getElementById('cp').value = "CP Recommended";
                break;
            case 'Corrosive':
                document.getElementById('soilclass').value = "Corrosive";
                document.getElementById('soilclass').style.backgroundColor = "#FFFF33";
                document.getElementById('cp').value = "CP Required";
                break;
            default:
                document.getElementById('soilclass').value = "Very Corrosive";
                document.getElementById('soilclass').style.backgroundColor = "#FF8333";
                document.getElementById('cp').value = "CP Required";
                break;
    }

}

// function areaOfCircle(){
//
//   var D = Number(document.getElementById('diameter').value);
//   var R = D/2;
//   document.getElementById('radius').value = R;
//   var A = (Math.PI * D * D)/4;
//   document.getElementById('area').value = A;
// }
