# phone-catalogue-api

API REST PHONE CATALOGUE

Autor: Alexis Cristian Estévez Fernández

email: cristian_tf@hotmail.com

Exercise Phone Catalogue

For more information of the exercise click on the [link](https://github.com/guidesmiths/interview-code-challenges/blob/master/react/phone-catalogue/instructions.md)

## To start the application in LOCAL

1. Install dependencies

``` 
npm install
```


3. Start Service

``` 
npm run start
```


## Test

The project tests are integration, to execute them

1. Start Service

``` 
npm run start
```

2. Launch Test

``` 
npm run test
```

## swagger editor

Open swagger editor

``` 
swagger project edit
```

For more information of the swagger api check the [link](https://swagger.io/tools/swagger-editor/)



## Docker

Generate the docker container image:

``` 
docker build -t phone-catalogue-api .
```

To run the container:


``` 
docker run -d -p 3010:3010 --name phone-catalogue-api phone-catalogue-api
```