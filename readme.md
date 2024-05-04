# Desafio de Otimização de Performance para Desenvolvedores Backend

Este projeto é uma brincadeira lançada pela comunidade de desenvolvedores backend para testar e melhorar as habilidades de otimização de performance em uma aplicação web.

## Resultados

A seguir estão os resultados gerados pela aplicação:

### Busca válida:

- **Total count:** 4190
- **OK:** 4190
- **KO:** 0
- **Mean count/s:** 18.622

#### Response Time (ms):

- **Min:** 1
- **50th percentile:** 64
- **75th percentile:** 802
- **95th percentile:** 4028
- **99th percentile:** 15274
- **Max:** 32512
- **Mean:** 822
- **Standard Deviation:** 2253

### Busca inválida:

- **Total count:** 9590
- **OK:** 9590
- **KO:** 0
- **Mean count/s:** 42.622

#### Response Time (ms):

- **Min:** 2
- **50th percentile:** 107
- **75th percentile:** 929
- **95th percentile:** 4113
- **99th percentile:** 15607
- **Max:** 32538
- **Mean:** 978
- **Standard Deviation:** 2527

### Criação:

- **Total count:** 54628
- **OK:** 10468
- **KO:** 44160
- **Mean count/s:** 242.791 (Total), 46.524 (OK), 196.267 (KO)

#### Response Time (ms):

- **Min:** 1 (Total, OK, KO)
- **50th percentile:** 180 (Total), 161 (OK), 185 (KO)
- **75th percentile:** 973 (Total), 931 (OK), 981 (KO)
- **95th percentile:** 4271 (Total), 4202 (OK), 4283 (KO)
- **99th percentile:** 15607 (Total), 15545 (OK), 15591 (KO)
- **Max:** 32548 (Total), 32543 (OK), 32548 (KO)
- **Mean:** 1058 (Total), 979 (OK), 1077 (KO)
- **Standard Deviation:** 2496 (Total), 2464 (OK), 2503 (KO)

## Descrição

O desafio consiste em criar uma aplicação com alguns endpoints básicos e otimizar sua performance para lidar com um grande volume de requisições.

...
