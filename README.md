# CarCar

Team:

* Person 1 - Which microservice?
* Regan Tewksbury - Sales Microservice

## To Run:

docker volume create beta-data
docker-compose build
docker-compose up

## URLs and Ports
Inventory:
Port 8100 for Insomnia
Port 3000 for React Front End

List manufacturers (GET): http://localhost:8100/api/manufacturers/
Create a manufacturer (POST): http://localhost:8100/api/manufacturers/
Get a specific manufacturer (GET): http://localhost:8100/api/manufacturers/:id/
Update a specific manufacturer (PUT):	http://localhost:8100/api/manufacturers/:id/
Delete a specific manufacturer (DELETE): http://localhost:8100/api/manufacturers/:id/

List vehicle models (GET): http://localhost:8100/api/models/
Create a vehicle model (POST): http://localhost:8100/api/models/
Get a specific vehicle model (GET): http://localhost:8100/api/models/:id/
Update a specific vehicle model (PUT): http://localhost:8100/api/models/:id/
Delete a specific vehicle model (DELETE): http://localhost:8100/api/models/:id/

List automobiles (GET): http://localhost:8100/api/automobiles/
Create an automobile (POST): http://localhost:8100/api/automobiles/
Get a specific automobile (GET): http://localhost:8100/api/automobiles/:vin/
Update a specific automobile (PUT): http://localhost:8100/api/automobiles/:vin/
Delete a specific automobile (DELETE): http://localhost:8100/api/automobiles/:vin/

Service:

URLS and Ports here

Sales:

Port 8090 for Insomnia
Port 3000 for React Front End

URLS and Ports here

## CRUD Route Documentation
## Inventory Microservice CRUD Route Documentation
Create and Update a manufacturer:
    {
        "name": "Chrysler"
    }

Creating, Getting, and Updating a single manufacturer:
    {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Chrysler"
    }

Getting a list of manufacturers:
    {
        "manufacturers": [
            {
            "href": "/api/manufacturers/1/",
            "id": 1,
            "name": "Daimler-Chrysler"
            }
        ]
    }

Creating and updating a vehicle model:
    {
        "name": "Sebring",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer_id": 1
    }

Updating the vehicle model:
    {
        "name": "Sebring",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
    }

Getting the detail of, creating, or updating a vehicle model:
    {
        "href": "/api/models/1/",
        "id": 1,
        "name": "Sebring",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer": {
            "href": "/api/manufacturers/1/",
            "id": 1,
            "name": "Daimler-Chrysler"
        }
    }

Getting a list of vehicle models:
{
  "models": [
    {
      "href": "/api/models/1/",
      "id": 1,
      "name": "Sebring",
      "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
      "manufacturer": {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Daimler-Chrysler"
      }
    }
  ]
}

Creating an automobile:
{
  "color": "red",
  "year": 2012,
  "vin": "1C3CC5FB2AN120174",
  "model_id": 1
}

Getting the details of an automobile with its VIN:

{
  "href": "/api/automobiles/1C3CC5FB2AN120174/",
  "id": 1,
  "color": "yellow",
  "year": 2013,
  "vin": "1C3CC5FB2AN120174",
  "model": {
    "href": "/api/models/1/",
    "id": 1,
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer": {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  }
}

Updating an automobile:
{
  "color": "red",
  "year": 2012
}

Getting a list of automobiles:
{
  "autos": [
    {
      "href": "/api/automobiles/1C3CC5FB2AN120174/",
      "id": 1,
      "color": "yellow",
      "year": 2013,
      "vin": "1C3CC5FB2AN120174",
      "model": {
        "href": "/api/models/1/",
        "id": 1,
        "name": "Sebring",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer": {
          "href": "/api/manufacturers/1/",
          "id": 1,
          "name": "Daimler-Chrysler"
        }
      }
    }
  ]
}

## Service Microservice CRUD Route Documentation

CRUD information here

## Sales Microservice CRUD Route Documentation

CRUD Information here

## Design

Excalidraw here with Value Object identification

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
