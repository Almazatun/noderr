# noderr

Noderr represent node.js implementation handle processing using `multiple instances` with `Cluster` (Round robin scheduling) and `worker threads`.   

## Cluster mode with `Round robin scheduling`
```flowchart LR

A[Client] -->|request| B{Master(Round robin scheduling)}
B --> C[Service instance]
B --> D[Service instance]
B --> E[Service instance]
B --> F[Service instance]
```
### Cluster benchmark
![cluster_benchmark](/assets/cluster_benchmark.png)

## Worker threads 
```flowchart LR

A[Client] -->|request| B{Master process}
B --> C[Worker]
B --> D[Worker]
B --> E[Worker]
B --> F[Worker]
```

### Workers benchmark
![cluster_benchmark](/assets/workers_benchmark.png)

