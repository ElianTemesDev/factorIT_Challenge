# factorIT-Challenge
Desafio tecnico de Factor IT

### `npm start`

Para correr el front de la aplicacion.\
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

Para el Back hacer run de la aplicacion desde el main de la clase FactorItChallengeApplication

Info-extra: Me olvide de aclarar que la base de datos que utilizo es la base H2, me parecio una buena solucion para este desafio ya que es una base de datos en memoria que no requiere una instalacion externa, al ser en memoria esta misma es volatil y facil de testear ya que la informacion solo se perpetua durante el uso de la aplicacion, por eso tambien los inserts de los productos se corren automaticamente cada vez que se levanta la aplicacion.

TODO: Detecte que existe un bug al agregar al carro productos que se agregaron anteriormente por un tema de ID's resolver. * Bug resuelto, problema de relacion, habia dejado la relacion entre carrito y productos como una one to many cuando realmente es una many to many (en un carrito pueden haber muchos productos y esos productos a su vez pueden estar en muchos carritos)
