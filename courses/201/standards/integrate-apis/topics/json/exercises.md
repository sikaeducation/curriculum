Convert this JSON string to a JavaScript object by hand:

```json
{
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.dev/api/planets/1/",
	"films": [
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/6/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/7/"
	],
	"species": [
		"https://swapi.dev/api/species/1/"
	],
	"vehicles": [
		"https://swapi.dev/api/vehicles/14/",
		"https://swapi.dev/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.dev/api/starships/12/",
		"https://swapi.dev/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
}
```

---

Convert this JavaScript object to JSON by hand:

```js
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
};
```

---

Convert this JavaScript object to JSON by hand:

```js
{
  home: {
    teamName: 'Beboppers',
    colors: ['red, 'yellow'],
    players: [{
      playerName: 'Dizzy Gillespie',
      number: 0,
      shoeSize: 16,
      points: 22,
    },{
      playerName: 'Charlie Parker',
      number: 5,
      shoeSize: 12,
      points: 19,
    }]
  },
  away: {
    teamName: 'Modal Mayhem',
    colors: ['black', 'blue],
    players: [{
      playerName: 'Miles Davis',
      number: 25,
      shoeSize: 8,
      points: 17,
    },{
      playerName: 'John Coltrane',
      number: 16,
      shoeSize: 13,
      points: 30,
    }]
  },
}
```
