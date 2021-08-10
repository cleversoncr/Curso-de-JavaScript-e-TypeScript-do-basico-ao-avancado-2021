function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
}

recursiva(0);

/*
Recursividade é uma função que se chama de volta.
A única preocupação que se deve ter, é quando ela deve parar.
*/