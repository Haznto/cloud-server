# Cloud-server

## Description

This is an express simple server, built on local machine and uploaded to AWS services, then using elasticbeans and with the intances of EC2, it was deployed successfully. the API has only two routes.

- Home Route (`/`) : showing a welcoming message as `Hello my friend, you are at home page`.
- About Route (`/about`): showing a brief description about the page.

## Steps to deploy

After preparing server files, using the elastictalkbeans service on AWS, we create a new application, choosing it's name  , then we proceed with creating environtment instance as Web service  and continue configuring our instance as needed such as choosing our platform which is Node.js, after that uploading our server files as a Zip file, and creating a single instance and choosing a label name for that version. lastly using the existing roles/EC2 key pair/ instance profile we had using our academy account.

---

Technologies used: Node.js, express.js, AWS cloud services.

## Link of the deployed version;

Home route

- http://class16-env.eba-qx5uhr2c.us-east-1.elasticbeanstalk.com/

About route
- http://class16-env.eba-qx5uhr2c.us-east-1.elasticbeanstalk.com/about

Screenshot of AWS dashboard control/console path.

![Dashboard](./assets/successful%20deployment.PNG)

---