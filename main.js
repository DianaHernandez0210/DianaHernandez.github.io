let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75, 
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy Programadora Front-end, lo aprendí en Tecnolochicas PRO y Desarrollo sitios web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
