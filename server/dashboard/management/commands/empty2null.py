from django.core.management import BaseCommand
from dashboard.models import Pet, MyUser, Health
from django.db.models.fields.reverse_related import OneToOneRel, ManyToOneRel
from django.db.models.fields.related import ForeignKey, OneToOneRel as AnotherOne

class Command(BaseCommand):
    help = 'convert empty strings to null'

    def __convert_by_model(self, model):
        check_related = [OneToOneRel, ManyToOneRel, ForeignKey, AnotherOne]
        for instance in model.objects.all():
            fields = [i.name for i in model._meta.get_fields() if type(i) not in check_related and
                      not getattr(instance, i.name)]
            for field in fields:
                setattr(instance, field, None)
            instance.save()

    def handle(self, *args, **options):
        needed_models = [Pet, MyUser, Health]
        for needed_model in needed_models:
            self.__convert_by_model(needed_model)
