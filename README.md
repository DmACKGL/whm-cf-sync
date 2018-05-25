# GREP NodeJSSync [WHM-CF]

[![N|Solid](https://www.grep.cl/wp-content/uploads/2016/04/Grep-Logo-Header.png) ](https://nodesource.com/products/nsolid)

# Funciones actuales:

  - Exportar dominios desde WHM a una DB (Debe ser realizado bajo CRON [Every 1 minute])
  - dumpzone de dominios registrados en DB

### Tech

Este script utiliza las siguientes dependencias NPM:

* [Request](https://www.npmjs.com/package/request) - Cliente HTTP.
* [System-Sleep](https://www.npmjs.com/package/system-sleep) - Comando Sleep.
* [MySQL](https://www.npmjs.com/package/mysql) - Cliente MySQL
* [Node.JS] - Backend

### Instalacion

NodeJSSync requiere [Node.js](https://nodejs.org/) v8+ para ser ejectuado.

Clonacion de proyecto e instalacion de repos NPM

```sh
$ git clone https://github.com/DmACKGL/whm-cf-sync
$ cd whm-cf-sync
$ npm install --save
```

### Ejecucion
```sh
$ node sync_dns.js //Cada 1 minuto (se recomienda uso de CRON)
$ node dumpdns.js //Para dumpear DNS desde WHM con datos de DB
```

Licencia
----

Apache-2.0
