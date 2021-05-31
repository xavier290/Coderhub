from django.urls import path, include

urlpatterns = [
    path("", include("frontend.urls")),
    path("", include("api.urls")),
]
