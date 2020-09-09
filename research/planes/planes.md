## Aviation Stack method

- https://aviationstack.com

## Aereoporto.net method

```
POST https://www.flightstats.com/go/weblet?guid=49e3481552e7c4c9:-f32609:127e340f1b9:538d&weblet=status&action=AirportFlightStatus&airportCode=VCE&airportQueryType=0
```

### Query arguments

- `airportCode=${IATA}`

  | IATA | City    |
  | ---- | ------- |
  | TSF  | Treviso |
  | VCE  | Venezia |

### Form Arguments

- `airportQueryTimePeriod=${ID}`

  | ID  | Time Period        |
  | --- | ------------------ |
  | 1   | 12:00 AM - 3:00 AM |
  | 2   | 3:00 AM - 6:00 AM  |
  | 3   | 6:00 AM - 9:00 AM  |
  | 4   | 9:00 AM - 12:00 PM |
  | 5   | 12:00 PM - 3:00 PM |
  | 6   | 3:00 PM - 6:00 PM  |
  | 7   | 6:00 PM - 9:00 PM  |
  | 8   | 9:00 PM - 12:00 AM |
