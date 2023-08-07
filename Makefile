build_common:
	@echo "Build common lib"
	npm run build:common
build_cluster:
	@echo "Build cluster"
	npm run build:cluster
build_workers:
	@echo "Build workers"
	npm run build:cluster
install:
	@echo "Install apps dependencies"
	npm run install:all
build:
	@echo "Build all"
	npm run build:all
look_spaces:
	@echo "Look workspaces"
	npm run --workspaces
compose_up_cluster:
	@echo "Run app cluster mode"
	docker-compose -f docker-compose-cluster.yaml up --build -d
compose_down_cluster:
	@echo "Stop run cluster"
	docker-compose -f docker-compose-cluster.yaml down
compose_up_workers:
	@echo "Run app workers mode"
	docker-compose -f docker-compose-workers.yaml up --build -d
compose_down_workers:
	@echo "Stop run workers"
	docker-compose -f docker-compose-workers.yaml down
load_test:
	@echo "Run load test"
	autocannon -c 1000 -d 20 http://localhost:3001/test
