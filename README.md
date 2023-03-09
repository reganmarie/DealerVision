CarCar
Team:

* Person 1 - Jackie Liu service microservice
* Person 2 - Regan Tewksbury: Sales microservice

######
## To Run:
docker volume create beta-data
docker-compose build
docker-compose up

######
## URLs and Ports
## Inventory:
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

## Service:
    Port 8080 for Insomnia
    Port 3000 for React Front End

## Sales:
    Port 8090 for Insomnia
    Port 3000 for React Front End

    List salespeople (GET): http://localhost:8090/api/salesperson/
    Get a specific salesperson (GET): http://localhost:8090/api/salesperson/:id/
    Create a new salesperson (POST): http://localhost:8090/api/salesperson/
    Update a specific salesperson (PUT): http://localhost:8090/api/salesperson/:id/
    Delete a specific salesperson(DELETE): http://localhost:8090/api/salesperson/:id/

    List customers (GET): http://localhost:8090/api/customers/
    Get a specific customer (GET): http://localhost:8090/api/customers/:id/
    Create a new customer (POST): http://localhost:8090/api/customers/
    Update a specific customer (PUT): http://localhost:8090/api/customers/:id/
    Delete a specific customer (DELETE): http://localhost:8090/api/customers/:id/

    List sales records (GET): http://localhost:8090/api/salesrecords/
    Get a specific sales record (GET): http://localhost:8090/api/salesrecords/:id/
    Create a new sales record (POST): http://localhost:8090/api/salesrecords/
    Delete a specific sales record (DELETE): http://localhost:8090/api/salesrecords/5/

#####
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
In Insomnia, sending the reponses for the list views and detail views at port 8080 with urls tied to the urls.py
Sending JSON body with information (VIN, manufacturer, or model) for the create and update.
Response: getting an object with information that was sent as the JSON body.

## Sales Microservice CRUD Route Documentation
CRUD Information here

Getting a List of Salespersons:
    {
	"salesperson": [
		{
			"id": 1,
			"name": "Matty",
			"employee_number": "1"
		},
		{
			"id": 3,
			"name": "Ross",
			"employee_number": "2"
		},
		{
			"id": 5,
			"name": "George",
			"employee_number": "3"
		}
	]
}

Getting and Updating Specific Salesperson:
    {
        "id": 3,
        "name": "Ross",
        "employee_number": "2"
    }

Creating a Specific Salesperson:
    {
        "name": "Adam",
        "employee_number": 4
    }

Getting a List of Customers:
    {
        "customers": [
            {
                "id": 7,
                "name": "Francis Abernathy ",
                "address": "1445 Catamount St, Hampden VT",
                "phone_number": "3894502983"
            },
            {
                "id": 8,
                "name": "Judy Poovey",
                "address": "1355 Commons Ave, Hampden, VT",
                "phone_number": "4820348578"
            },
            {
                "id": 1,
                "name": "Henry Winter",
                "address": "125 Catamount Road, Hampden, VT",
                "phone_number": "4453267809"
            }
        ]
    }

Getting and Updating a Specific Customer:

    {
        "id": 1,
        "name": "Henry Winter",
        "address": "125 Catamount Road, Hampden, VT",
        "phone_number": "4453267809"
    }

Creating a Customer:
    {
    "name": "Bunny Corcoran",
    "address": "1355 Commons Dr, Hampden, VT",
        "phone_number": "4453267921"
    }

Getting a List of Sales Records:
    {
        "sales_records": [
            {
                "id": 1,
                "price": "9000",
                "salesperson": {
                    "id": 1,
                    "name": "Matty",
                    "employee_number": "1"
                },
                "customer": {
                    "id": 1,
                    "name": "Henry Winter",
                    "address": "125 Catamount Road, Hampden, VT",
                    "phone_number": "4453267809"
                },
                "automobile": {
                    "vin": "1C3CC5FB2AN120174",
                    "import_href": "/api/automobiles/1C3CC5FB2AN120174/"
                }
            },
            {
                "id": 3,
                "price": "9000",
                "salesperson": {
                    "id": 1,
                    "name": "Matty",
                    "employee_number": "1"
                },
                "customer": {
                    "id": 7,
                    "name": "Francis Abernathy ",
                    "address": "1445 Catamount St, Hampden VT",
                    "phone_number": "3894502983"
                },
                "automobile": {
                    "vin": "1C3CC5FB2AN112753",
                    "import_href": "/api/automobiles/1C3CC5FB2AN112753/"
                }
            },
            {
                "id": 4,
                "price": "10000",
                "salesperson": {
                    "id": 3,
                    "name": "Ross",
                    "employee_number": "2"
                },
                "customer": {
                    "id": 8,
                    "name": "Judy Poovey",
                    "address": "1355 Commons Ave, Hampden, VT",
                    "phone_number": "4820348578"
                },
                "automobile": {
                    "vin": "1C3CC5FB2AN119791",
                    "import_href": "/api/automobiles/1C3CC5FB2AN119791/"
                }
            }
        ]
    }

Getting a Specific Sales Record:
    {
        "id": 1,
        "price": "9000",
        "salesperson": {
            "id": 1,
            "name": "Matty",
            "employee_number": "1"
        },
        "customer": {
            "id": 1,
            "name": "Henry",
            "address": "125 Catamount Road, Hampden, VT",
            "phone_number": "4453267809"
        },
        "automobile": {
            "vin": "1C3CC5FB2AN120174",
            "import_href": "/api/automobiles/1C3CC5FB2AN120174/"
        }
    }

Creating a New Sales Record:
    {
        "price": "14000",
        "salesperson": "George",
        "customer": 7,
        "automobile": "/api/automobiles/1C3CC5FB2AN120177/"
    }

#####
## Design


Sales Value Objects:
    -Imported the VIN from the Automobile model in the Inventory microservice
    -The poller also imported the href of the instance of the automobile object it was creating or updating

#####
## Service microservice
Install Django app into Django project.
Make models, views, and urls
Use GET, POST, PUT, DELETE methods to test out in Insomnia
Git push/pull/merge with main
Use React for FrontEnd work


#####
## Sales microservice

The sales microservice has three models: SalesPerson, Customer, and SalesRecord. The SalesRecord model has foreign keys for the SalesPerson model, the Customer Model, and the AutomobileVO object. Therefore, when a sales record is created, it is associated with a salesperson, a customer, and a specific automobile that is identified by its VIN number.

To ensure that the sales microservice is always up-to-date with the inventory, a poller is used to periodically import the VIN numbers from the inventory microservice. A person cannot sell a car that is not listed in the inventory, nor can a person sell a car that has already been sold.

The sales microservice also provides a user interface for adding salespersons, customers, and sales records. There is a list of all sales records with the ability to search for records by salesperson. This allows users to easily track the sales made by each salesperson.

Overall, the sales microservice is an important component of a larger system for managing an automobile dealership. By integrating with the inventory microservice and providing a user-friendly interface for tracking sales, the sales microservice helps ensure that the sales process is efficient and accurate.
