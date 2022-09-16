
# API TS Practice

API made for practice reasons with TypeScript. 
## Tech Stack

**Client:** HTML

**Backend:** NodeJS, ExpressJS



## Authors

- [@laindomJS](https://www.github.com/laindomJS)


## API Reference

#### Get all items

```http
  GET /api/diaries
```

#### Get item

```http
  GET /api/diaries/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post item

```http
  GET /api/diaries/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`    | `string` | **Required**. A string to represent the date |
| `weather` | `Weather` | **Required**. A string to represent the weather. Only accept = sunny, rainy, cloudy, windy, stormy |
| `visibility`| `visibility` | **Required**. A string to represent the visibility. Only accept = great, good, ok, poor |
| `comment` | `string` | **Required**. String to represent a commentary about the day |





