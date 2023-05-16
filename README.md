CarCar
Team:

* Person 1 - Jackie Liu service microservice
* Person 2 - Regan Tewksbury: Sales microservice

######
## Video Walkthrough of Application:

[DealerVision Vido Walkthrough](https://youtu.be/n8QWtzwAERY)

######
## To Run:
    docker volume create beta-data
    docker-compose build
    docker-compose up

######
## URLs and Ports

### Front End URLs
    Port 3000, takes about 2-3 minutes to load from typing 'Docker Compose Up'

    Main Page: http://localhost:3000/

 **Inventory**

    List manufacturers: http://localhost:3000/manufacturers
    Create a new manufacturer: http://localhost:3000/manufacturers/new
    List models: http://localhost:3000/models
    Create models: http://localhost:3000/models/new
    List automobiles: http://localhost:3000/automobiles
    Create a new automobile: http://localhost:3000/automobiles/new

**Services**

    List technicians: http://localhost:3000/technicians
    New technician: http://localhost:3000/technicians/new
    Service history: http://localhost:3000/services/history
    New service: http://localhost:3000/services/new

**Sales**

    New salesperson: http://localhost:3000/salesperson/new
    New customer: http://localhost:3000/customer/new
    New sales record: http://localhost:3000/salesrecords/new
    Searchable sales record history: http://localhost:3000/salesrecords


### Inventory:
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

<br>

### Service:
    Port 8080 for Insomnia
    Port 3000 for React Front End

    List technicians (GET): http://localhost:8080/api/technicians/
    Create a technician (POST): http://localhost:8080/api/technicians/

    List services (GET): http://localhost:8080/api/services/
    Get a specific service (GET):http://localhost:8080/api/service/:id/
    Create a service (POST): http://localhost:8080/api/services/
    Update a specific service (PUT): http://localhost:8080/api/services/:id/
    Delete a specific service (DELETE): http://localhost:8080/api/services/:id/

<br>

### Sales:
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
### Inventory Microservice CRUD Route Documentation

<br>

#### Create a manufacturer:
**URL**
    http://localhost:8100/api/manufacturers/
    Creating a manufacturer only requires a name. An id is automatically created.

    {
    "name": "Chrysler"
    }

#### Creating, Getting, and Updating a single manufacturer:
**URL**
    http://localhost:8100/api/manufacturers/:id/
    Updating a single manufacturer only requires a name.
    The id cannot be altered.

   {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Chrysler"
    }

#### Getting a list of manufacturers:
**URL**
    http://localhost:8100/api/manufacturers/
    The list of manufacturers is a dictionary with the key "manufacturers" set to a list of manufacturers.

    {
        "manufacturers": [
        {
            "href": "/api/manufacturers/1/",
            "id": 1,
            "name": "Daimler-Chrysler"
        }
        ]
    }

#### Creating a vehicle model:
**URL**
    http://localhost:8100/api/models/
    Creating a vehicle model requires the model name, a URL of an image, and the id of the manufacturer.

   {
        "name": "Sebring",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer_id": 1
    }

#### Updating the vehicle model:
**URL**
	http://localhost:8100/api/models/:id/
    Updating a vehicle model can take the name and/or the picture URL.

    {
        "name": "Sebring",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
    }

#### Getting the detail of, creating, or updating a vehicle model:
**URL**
    	http://localhost:8100/api/models/:id/
        Getting the detail of a vehicle model, or the return value from creating or updating a vehicle model, returns the model's information and the manufacturer's information.

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

#### Getting a list of vehicle models:
**URL**
    http://localhost:8100/api/models/
    Getting the detail of a vehicle model, or the return value from creating or updating a vehicle model, returns the model's information and the manufacturer's information.

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

#### Creating an automobile:
**URL**
    http://localhost:8100/api/automobiles/
    You can create an automobile with its color, year, VIN, and the id of the vehicle model.

    {
        "color": "red",
        "year": 2012,
        "vin": "1C3CC5FB2AN120174",
        "model_id": 1
    }

#### Getting the details of an automobile with its VIN:
**URL**
    http://localhost:8100/api/automobiles/:vin/
    The details for an automobile include its model and manufacturer.

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

#### Updating an automobile:
**URL**
    http://localhost:8100/api/automobiles/:vin/
    You can update the color and/or year of an automobile.

    {
        "color": "red",
        "year": 2012
    }

#### Getting a list of automobiles:
**URL**
    http://localhost:8100/api/automobiles/
        Getting a list of automobiles returns a dictionary with the key "autos" set to a list of automobile information.

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

<br>

## Service Microservice CRUD Route Documentation
In Insomnia, sending the reponses for the list views and detail views at port 8080 with urls tied to the urls.py
Sending JSON body with information (VIN, manufacturer, or model) for the create and update.
Response: getting an object with information that was sent as the JSON body.

<br>

## Sales Microservice CRUD Route Documentation

#### Getting a List of Salespersons:
**URL**
    http://localhost:8090/api/salesperson/
    The list of salespersons is a dictionary with the key "salesperson" set to a list of salespersons.

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

#### Getting, Updating, or Deleting Specific Salesperson:
**URL:**
    http://localhost:8090/api/salesperson/:id/
    To update a specific salesperson, you only need their name or employee number.
    You cannot update their id.
    To delete a specific salesperson, put the URL into insomnia with a delete method,
    and no information is required.

    {
        "id": 3,
        "name": "Ross",
        "employee_number": "2"
    }

#### Creating a Specific Salesperson:
**URL:**
    http://localhost:8090/api/salesperson/
    To create a specific salesperson, you need a name and employee number.
    The id is automatically assigned and cannot be altered.

    {
        "name": "Adam",
        "employee_number": 4
    }

#### Getting a List of Customers:
**URL**
    http://localhost:8090/api/customers/
    The list of customers is a dictionary with the key "customers" set to a list of customers.

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

#### Getting, Updating, or Deleting a Specific Customer:
**URL**
    http://localhost:8090/api/customers/:id/
    To update a specific customer, you only need name, address, or phone number.
    You cannot change the ID.
    To delete a specific customer, put the URL into insomnia with a delete method,
    and no information is required.

    {
        "id": 1,
        "name": "Henry Winter",
        "address": "125 Catamount Road, Hampden, VT",
        "phone_number": "4453267809"
    }

#### Creating a Customer:
**URL**
    http://localhost:8090/api/customers/
    To create a customer, you need a name, address, and phone number.
    The id is automatically assigned and cannot be altered.

    {
    "name": "Bunny Corcoran",
    "address": "1355 Commons Dr, Hampden, VT",
    "phone_number": "4453267921"
    }

#### Getting a List of Sales Records:
**URL**
    http://localhost:8090/api/salesrecords/
    The list of sales records is a dictionary with the key "sales_records" set to a list of sales records.

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

#### Getting a Specific Sales Record:
**URL**
    http://localhost:8090/api/salesrecords/:id/
    Getting the detail of a sales record, or the return value from creating a sales record, returns the customer's information and the sales persons's information.

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

#### Creating or Deleting a New Sales Record:
**URL**
http://localhost:8090/api/salesrecords/:id/
To create a new sales record, you need a price, salesperson's name, customer's ID,
and automobile href. The href is to correctly identify the automobile across microservices
since the automobile VIN is a VO objected imported by the poller from another microservice.
You can verify that the poller is working through creating a new entry here, or the form on
the React front-end.
An id is automatically assigned and cannot be altered.

To delete a sales record, put the URL into Insomnia using a 'DELETE' method, and no information
is required.

    {
        "price": "14000",
        "salesperson": "George",
        "customer": 7,
        "automobile": "/api/automobiles/1C3CC5FB2AN120177/"
    }

<br>

#####
## Design

![ProjectBetaDiagram](https://live.staticflickr.com/65535/52739099331_fc6f929802_k.jpg)

#### Service Value Objects
    Imported the VIN from the Automobile model in the Inventory microservice to associate a service appointment with a vehicle that was sold from the dealership so the conceierge can give the owner VIP treatment.
    The poller also imported the href of the instance of the automobile object it was creating or updating so specific automobiles could be identified accurately across the microservices.

#### Sales Value Objects:
    Imported the VIN from the Automobile model in the Inventory microservice so a sales record could be created once a vehicle from the dealership was sold.
    The poller also imported the href of the instance of the automobile object it was creating or updating so specific automobiles could be identified accurately across the microservices.

<br>

#####
## Service microservice
Install Django app into Django project.
Make models, views, and urls
Use GET, POST, PUT, DELETE methods to test out in Insomnia
Git push/pull/merge with main
Use React for FrontEnd work


<br>

#####
## Sales microservice

The sales microservice has three models: SalesPerson, Customer, and SalesRecord. The Customer model has name, address, and phone number fields to record the contact information for existing or potential customers. This is important so prospective leads can be followed up with and existing customers can be logged for potential further promotions. The SalesPerson model has name and employee number fields to record information about new or exisiting sales employees so each sales person's sales records can be tracked.

The SalesRecord model has foreign keys for the SalesPerson model, the Customer Model, and the AutomobileVO object. Therefore, when a sales record is created, it is associated with a salesperson, a customer, and a specific automobile that is identified by its VIN number. The SalesRecord model also includes price to record the price of the sale.

Additionally, each model has RESTful API endpoints to create, read, update, and delete data.

To ensure that the sales microservice is always up-to-date with the inventory, a poller is used to periodically import the VIN numbers from the inventory microservice. A person cannot sell a car that is not listed in the inventory, nor can a person sell a car that has already been sold.

The sales microservice also provides a user interface for adding salespersons, customers, and sales records. The sales record feature does not allow a user to record a car as being sold twice. This feature is implemented with a drop-down menu that only shows the VIN numbers of cars that have not been previously sold. There is a list of all sales records with the ability to search for records by salesperson. This allows users to easily track the sales made by each salesperson.

Overall, the sales microservice is an important component of a larger system for managing an automobile dealership. By integrating with the inventory microservice and providing a user-friendly interface for tracking sales, the sales microservice helps ensure that the sales process is efficient and accurate.
