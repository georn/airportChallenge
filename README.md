# Airport Challenge [![Build Status](https://travis-ci.org/georn/airportChallenge.svg?branch=master)](https://travis-ci.org/georn/airportChallenge)

**Week 5 Challenge at Makers Academy**

This is a revisit of the [Airport Challenge](https://github.com/georn/airport-challenge)
done in Ruby, now done using Javascript ES5 syntax and Test-Driven Development
using [Jasmine](https://jasmine.github.io/).

## Main Task

We have a request from a client to write the software to control the flow of
planes at an airport. The planes can land and take off provided that the weather
is sunny. Occasionally it may be stormy, in which case no planes can land or
take off.  Here are the user stories that we worked out in collaboration with
the client:

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport and confirm that it has landed

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

## Main Tasks List

- [x] A Plane can land at an airport and confirm it has landed
- [x] A Plane can take off from an airport and confirm it has taken off
- [ ] A Plane does not take off when weather is stormy
- [ ] A Plane does not land when weather is stormy
- [x] The airport have a default capacity
- [x] A Plane does not land when the airport is full
- [x] The airport capacity can be overridden

## Quickstart

First, you will need to clone the repository, change the directory and install the dependencies in order to run it:

```
git clone git@github.com:georn/airportChallenge.git
cd airportChallenge
npm install
```

## Development

So, after leaving this code to gain some dust for a few months, I decided to start to refactor it for the sake of practice.

So I chosen to built it into a Node.js application, so the Jasmine standalone can be deleted and brought instead in the form of a package using `npm`. This also brings the possibility of building it with an CLI Interface.

## Collaborators

This amazing person collaborated to the code, but by that time I wasn't a good
git collaborator. Thus, here are some credits.

- [Kavita Kalaichelvan](https://github.com/kkavita92)

## Tech Stack

Here is a list of the technologies used:

- Javascript ES5
- Node.js
- [Jasmine](https://jasmine.github.io/)
- Travis CI
