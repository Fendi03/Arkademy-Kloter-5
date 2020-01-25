function ProfitTertinggi(arr) { 
  
    var profit_max = -1;
    var harga_beli = 0;
    var harga_jual = 0;

    var index_beli = true;
    
    for (var i = 0; i < arr.length-1; i++) {
      
      harga_jual = arr[i+1]; 
      
      if (index_beli) { harga_beli = arr[i]; }
      
      if (harga_jual < harga_beli) {
        index_beli = true; 
        continue;
      }

      else { 
        var temp_profit = harga_jual - harga_beli;
        if (temp_profit > profit_max) { profit_max = temp_profit; }
        index_beli = false;
        
      }
      
    } 
    
    return profit_max;
    
  }
  
  console.log(ProfitTertinggi([10, 2, 11, 20, 3, 5]));
  console.log(ProfitTertinggi([33, 29, 11, 3]));
  
