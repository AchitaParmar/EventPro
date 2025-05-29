from django.db import models

# Create your models here.
from django.db import models
from django.utils.crypto import get_random_string

# Util functions
def generate_user_id(user_name):
    prefix = user_name[:3].upper()
    suffix = get_random_string(length=5).upper()
    return f"{prefix}_{suffix}"

def generate_event_id():
    return f"EVT_{get_random_string(length=6).upper()}"

def generate_volunteer_id():
    return f"VOL_{get_random_string(length=6).upper()}"


class Registration(models.Model):
    user_id = models.CharField(primary_key=True, max_length=20, editable=False)
    user_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    password = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        if not self.user_id:
            self.user_id = generate_user_id(self.user_name)
        super().save(*args, **kwargs)

    def _str_(self):
        return self.user_name


class Events(models.Model):
    event_id = models.CharField(primary_key=True, max_length=20, editable=False)
    event_name = models.CharField(max_length=100)
    no_of_attendees = models.PositiveIntegerField()
    venue = models.CharField(max_length=100)
    time = models.TimeField()
    date = models.DateField()
    city = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        if not self.event_id:
            self.event_id = generate_event_id()
        super().save(*args, **kwargs)

    def _str_(self):
        return self.event_name


class Volunteers(models.Model):
    v_id = models.CharField(primary_key=True, max_length=20, editable=False)
    city = models.CharField(max_length=100)
    venue = models.CharField(max_length=100)
    service = models.CharField(max_length=100)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    time = models.TimeField()
    date = models.DateField()
    salary = models.DecimalField(max_digits=8, decimal_places=2)
    age = models.IntegerField()

    def save(self, *args, **kwargs):
        if not self.v_id:
            self.v_id = generate_volunteer_id()
        super().save(*args, **kwargs)

    def _str_(self):
        return self.v_id


class Feedback(models.Model):
    email = models.EmailField()
    user = models.ForeignKey(Registration, on_delete=models.CASCADE)
    experience = models.TextField()

    def _str_(self):
        return f"{self.user.user_name} - {self.email}"