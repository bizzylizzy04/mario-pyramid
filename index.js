function pyramid(n) {
    for(let i=1; i<= n; i++){
      let str = '.'.repeat(n-i); // have to use a period because Stackblitz doesn't recognize a space out front in the console
      let str2 = '#'.repeat(i);
      console.log(str + str2);
    };
  };
  pyramid(5);
