# Building-an-Elasticsearch-Cluster-with-Amazon-Elasticsearch-Service-on-AWS




### Building an Roburst Search Application with help of aws-elasticsearch , Kibana , aws api gateway and aws lambda


![2020-04-25 (68)](https://user-images.githubusercontent.com/48589838/80279003-5a2bb480-8718-11ea-8d44-7a85d221b80e.png)


#### Elasticsearch is an open-source search and analytics engine.

![2020-04-25 (66)](https://user-images.githubusercontent.com/48589838/80279004-5ac44b00-8718-11ea-832e-6a24a0bde1c2.png)


#### Kibana is a data visualization tool for Elasticsearch.

#### lambda is a serverless compute service. ability to run code without provisioning or maintaining servers.

#### api gateway is ability to create, publish, monitor, maintain and secure api's .

### Steps

#### 1.Create an Elasticsearch Domain

![2020-04-25 (79)](https://user-images.githubusercontent.com/48589838/80279262-f99d7700-8719-11ea-9d08-da0e26d313bf.png)

Follow the steps to create a Elasticsearch Domain with t2.small instance as it is within aws free tier.

during the steps , creating a policy which includes granting permission to allow ip access to domain .

the example of policy is policy.json.

#### 2.Uploading data to your ES domain is done with help of curl command.

the queries of curl command are in curl commands.txt file in which placing of domainname with your name.

the bulk data includes product_bulk.json file which contains data. 

#### 3.The lambda function contains nodejs code for querying an Elasticsearch domain.

#### 4.with api gateway, create a method and get request

![2020-04-25 (81)](https://user-images.githubusercontent.com/48589838/80279511-cd82f580-871b-11ea-95c1-7340b14ec6c3.png)

deploy the api

#### 5.Execute the Application

apigateway must include the http address of your domain.

then execute the html code in your favourite browser.

![2020-04-25 (67)](https://user-images.githubusercontent.com/48589838/80279002-5861f100-8718-11ea-8d83-47a6db702e20.png)

Kibana can also be used to visualize and search data with help of a great UI .
