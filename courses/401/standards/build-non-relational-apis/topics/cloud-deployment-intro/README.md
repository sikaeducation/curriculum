# Intro to Cloud Deployment

Traditionally, hosting something on the public internet involved these steps:

1. Purchase a domain from a domain registrar
2. Create a DNS record that points your domain to the IP address of your office or data center
3. Configure a computer to run your app
4. Route traffic that comes into your office or data center to that computer
5. Maintain the computer running your app

This worked, but it wasn't ideal. Steps 3-5 involve a lot of (expensive) expertise that has little overlap with application development. There were also a lot of ways it could go badly- if the computer turns off (because of a power outage, hardware failure, or someone just tripped over the cable), your website is down. Upgrading a site often meant turning the server off for scheduled maintenance, updating the code, and restarting the server.

Luckily, this kind of work is now available as a commodity service from several providers now.

## Cloud Deployment

With cloud deployment, the process can be as simple as:

1. Fill out a form to create a new server on a cloud provider
2. Push your code repository to a Git URL they provide you

The burden of keeping your site up, upgrading hardware, and dealing with backups and disasters is outsourced to the cloud provider. Instead of maintaining IT staff and hardware, you pay a very low hourly rate to run the server. Need more capacity or speed? It can be as simple as moving a slider. Only need that capacity or speed for a short period of time? Move the slider back when you're done. Some cloud providers even allow you to automatically do this. The same providers also offer database hosting services, logging, domain name registration, and more.

Turning these essential parts of the web into commodity services drastically lowers the barriers to making web apps. Instead of requiring an IT staff to start a modest web app, all you need is a credit card.

## Cloud Providers

Here are some examples of cloud providers:

* **Amazon Web Services (AWS)** - The largest cloud provider. Offers the largest range of services, but is famously difficult to navigate.
* **Google Cloud Platform (GCP)** - Google's competitor to AWS. Popular with enterprises, GCP's pricing is often better than AWS.
* **Heroku** - A "platform as a service". Generally easier to use and manage than AWS and GCP, with the trade-off of being more expensive and less configurable. Heroku has a generous free tier.

## Deep Dive

Why is it called the "cloud"?

When you rent a server on a cloud provider, you may not be renting a physical device similar to the one discussed in the introduction. Often, one physical computer may be host to a dozen different sites, or the duties for hosting may be distributed across multiple computers. None of this is important to their users, who just work with the abstract concept of a server. The cloud is when the logical use of someone else's computer is abstracted away from the literal use of a physical computer.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Wikipedia: Cloud Computing](https://en.wikipedia.org/wiki/Cloud_computing) | Wikipedia's article on cloud computing |
| [Wikipedia: Cloud Storage](https://en.wikipedia.org/wiki/Cloud_storage) | Wikipedia's article on cloud storage |
| [AWS](https://aws.amazon.com/) | Amazon Web Services, a cloud provider |
| [GCP](https://cloud.google.com/) | Google Cloud Platform, a cloud provider |
| [Heroku](https://www.heroku.com/) | Heroku, a cloud provider |
