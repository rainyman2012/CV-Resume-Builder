'''Use this for development'''

from .base import *

# You must adjust this line if you want a full secure App
ALLOWED_HOSTS += ['*']
DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# You must change this if you want a full secure App
CORS_ORIGIN_ALLOW_ALL = True
CROS_ALLOW_CREDENTIALS = True

# CORS_ORIGIN_WHITELIST = (
#     'http://localhost:3000',
# )
# DEFAULT_FILE_STORAGE = 'storages.backends.dropbox.DropBoxStorage'
# DROPBOX_OAUTH2_TOKEN = 'LB_di3ld3WEAAAAAAAAAIWQuexzKkgoHd1MGr3exjSD4fJrh-bMmTNwVN8heQGp7'
# DROPBOX_ROOT_PATH = '/Public'
