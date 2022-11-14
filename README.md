# E-COMMERCE (MVC, DAOs)

_The project consists of a REST API developed under the design patterns __MVC__ and __DAOs__; it develops routes to read, create, update and delete products and carts, additionally you can display, add and delete the products of a particular cart. \
There are four sources of information: _Mongodb_, _Firebase_, _Memory_ and _FileSystem_, the choice of some of them is done in the `.env` file as will be shown later._

### Routes :arrows_counterclockwise:
![Routes](https://user-images.githubusercontent.com/84557725/201752310-7f60df5b-3da4-41e1-b252-8b5d993f50e3.png)


## Starting 🚀
_These instructions will allow you to start the project._

### Pre-requirements 📋
_For run local you will need to:_
1. _Create a database in [MongoDB](https://tutorialesdeaplicaciones.com/creacion-de-una-base-de-datos-con-mongodb/)_
2. _Create a database in [Firebase](https://www.paradigmadigital.com/dev/crear-base-datos-firebase/#:~:text=Para%20ello%2C%20una%20vez%20dentro,configurar%20tus%20reglas%20de%20privacidad.&text=Con%20esto%20ya%20tenemos%20lista,en%20nuestro%20proyecto%20de%20Firebase.)_
3. _Inside of root file create an .env file with your credentials_

```
DB_PASSWORD=YOUR_PASSWORD
DATASOURCE="<mongo or firebase or mem or file>"
MONGO_DB_USER=YOUR_MONGO_DB_USER
FIREBASE_TYPE=YOUR_FIREBASE_TYPE
FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
FIREBASE_PRIVATE_KEY_ID=YOUR_FIREBASE_PRIVATE_KEY_ID
FIREBASE_PRIVATE_KEY=YOUR_FIREBASE_PRIVATE_KEY
FIREBASE_CLIENT_EMAIL=YOUR_FIREBASE_CLIENT_EMAIL
FIREBASE_CLIENT_ID=YOUR_FIREBASE_CLIENT_ID
FIREBASE_AUTH_URI=YOUR_FIREBASE_AUTH_URI
FIREBASE_TOKEN_URI=YOUR_FIREBASE_TOKEN_URI
FIREBASE_AUTH_PROVIDER=YOUR_FIREBASE_AUTH_PROVIDER
FIREBASE_CLIENT_CERT_URL=YOUR_FIREBASE_CLIENT_CERT_URL
```

### Installation 🔧
_Use the package manager npm to install. (Remember to use this command inside of root file)_
```
npm install 
```

