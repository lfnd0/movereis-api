include .env

.PHONY: up

up:
	docker-compose up -d

.PHONY: stop

stop:
	docker-compose stop

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f

.PHONY: ps

ps:
	docker ps

.PHONY: run

run:
	yarn dev
