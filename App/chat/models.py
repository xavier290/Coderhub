from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone


User = get_user_model()


class DirectChatMessage(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    sent_to = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now())
    content = models.TextField(max_length=350)


class GroupChatMessage(models.Model):
    content = models.CharField(max_length=350)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now())


class Group(models.Model):
    members = models.ManyToManyField(User)
    name = models.CharField(required=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    messages = models.ManyToManyField(GroupChatMessage)
