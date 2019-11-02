'''Use this for production'''

from .base import *

DEBUG = False

# You must adjust this line if you want a full secure App
ALLOWED_HOSTS += ['*']
WSGI_APPLICATION = 'home.wsgi.prod.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'dagk46qltud728',
        'USER': 'sdscjxrrlmcudi',
        'PASSWORD': 'd11490f6e310975d19c1b74c7746973b2ac40b7d9a43d3d31503c16ffd459dad',
        'HOST': 'ec2-174-129-253-125.compute-1.amazonaws.com',
        'PORT': '5432',
    }
}

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# You must change this if you want a full secure App
CORS_ORIGIN_ALLOW_ALL = True
CROS_ALLOW_CREDENTIALS = True
DEFAULT_FILE_STORAGE = 'storages.backends.dropbox.DropBoxStorage'
DROPBOX_OAUTH2_TOKEN = 'LB_di3ld3WEAAAAAAAAAIWQuexzKkgoHd1MGr3exjSD4fJrh-bMmTNwVN8heQGp7'
DROPBOX_ROOT_PATH = '/Public'
