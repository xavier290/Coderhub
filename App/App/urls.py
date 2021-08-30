from django.urls import path, include

urlpatterns = [
    path('chat/', include('chat.urls')),
    path("", include("frontend.urls")),
    path("", include("api.urls")),
]
