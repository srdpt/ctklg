# ISTAT

## Dataflows

Dataflows are ISTAT queriable documents, they are identified
by a short id following the `XX+_YYY+` format.

### 22 - Demographic

| Dataflow | Description                        |
| -------- | ---------------------------------- |
| 22_289   | Resident population on 1st January |

#### 22_289 Resident population on 1st January

```bash
curl --location --request GET 'http://sdmx.istat.it/SDMXWS/rest/data/22_289/A..ITD35..../' \ 
--header 'Accept: application/json'
```

## Resources

- [OnData Guide]

[ondata guide]: https://ondata.github.io/guida-api-istat/index
