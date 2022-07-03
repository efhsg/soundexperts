#!/bin/bash
cp .env.example .env && \
docker run --rm --interactive --tty --volume $PWD:/app --volume ${COMPOSER_HOME:-$HOME/.composer}:/tmp composer install && \
vendor/bin/sail up -d && \
vendor/bin/sail artisan key:generate && \
vendor/bin/sail artisan migrate
