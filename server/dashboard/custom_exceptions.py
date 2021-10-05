from rest_framework.exceptions import APIException


class NoFiles(APIException):
    status_code = 400
    default_detail = 'Please provide fotos'
    default_code = 'no_fotos'