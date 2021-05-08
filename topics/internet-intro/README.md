# Introduction to The Internet

While you probably use the internet every day, how much do you know about what the internet actually is and how it works?

## Networks

A network is a group of computers that can communicate with each other. They may be able to send each other files, messages, or commands. You can even log into one computer from another over a network. Each computer on a network has an address, called an IP Address, that allows other computers to indentify it. This works just like a mailing address.

```bash
scp 192.168.0.105/some-file.txt .
```

This command copies a file from a computer on the network (which is called the "remote" computer) to the computer that's running the command (the "local" computer").

Computers have been networked together for a long time. Originally, they were wired together in labs, then offices, then homes. Eventually, computers started networking together wireless. Any devices in your home or office that use the same internet connection are probably on the same network.

## The Internet

The internet is a network of networks. If a network is a group of computers that can communicate with each other, an internet is a group of networks that can communicate with each other. It works in much the same way an individual network does: Each network is given an IP address, and those networks can send each other files, messages, and commands.

Your IP address comes from your internet service provider ("ISP"). Whenever you request a web page or do anything on the internet, your network makes a request to another network through your ISP:

(example image)

## Watch Out!

* Your computer has an IP address on your network, and your network has an IP address on the internet. The two address are not related.
* Your computer can send a message to a network on the internet, but you can't send it to a specific computer on that network. It's that network's job to figure out which computers on the network should handle any request.

## History

The internet was originally a US military project called DARPAnet. It was later opened up to universities and researchers to help people share research. In the early 90's, it was opened for commercial use.
