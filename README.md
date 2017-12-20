# News web

PRUEBA DESARROLLADOR UI WEB

## Consideraciones generales

Para cambiar el archivo json por la url de la api

1.  Ir a la carpeta /src/enviroments
2.  Abrir enviroment.prod.ts
3.  Agregar a baseUrl la url de la api

```
    export const environment = {
    production: true,
    baseUrl: '< url-api >',
    delayTime: 0
    };
```
4.  Guardar
5.  Recompilar ng build --prod

En caso de no tener Angular instalado se dejo la carpeta dist en el repo, donde encontrara la web complilada. Para hacer el cambio del json por la url de la api

1.  Ir a la carpeta /dist
2.  Abrir main.bce81170e2ef34dbeb53.bundle.js
3.  Buscar: "../../assets/news_mock.json"
4.  Remplazar por la url: "url"
5.  Guardar 


## Contruir la web en produccion

* En consola

```
    ng build --prod
```

* El proyecto sera compilado en la carpeta /dist

## Contruir la web en desarrollo

* En consola

```
    ng serve -o
```

## Prerequisites

Está web fue diseñara con el framework Angular.

* Angular CLI: 1.6.1
* Node: 6.11.1
* Angular: 5.1.1

## Testing

No se realizo pruebas de testing, la estructura de pruebas unitarias y end to end que se encuentra en el documento es dada por angular-cli y no fue removida dado que a futuro se desea hacer esta parte.

## Agradecimientos

Muchas gracias a Rappi por la oportunidad, me divertí mucho haciendo la prueba y en especial las animaciones.
